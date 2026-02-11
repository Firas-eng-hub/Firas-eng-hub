import { access } from "node:fs/promises";
import path from "node:path";

import { dataDir, readJson, shortDate, writeJson } from "./lib.mjs";

const configPath = path.join(dataDir, "profile.config.json");
const reposPath = path.join(dataDir, "repos.json");

function mapRepo(repo, overlay = {}) {
  return {
    name: repo.name,
    url: repo.html_url,
    description: repo.description ?? "",
    language: repo.language ?? "",
    stars: repo.stargazers_count ?? 0,
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
    topics: repo.topics ?? [],
    homepage: repo.homepage ?? "",
    archived: Boolean(repo.archived),
    fork: Boolean(repo.fork),
    roleTag: overlay.roleTag ?? "Engineering project",
    impactNoteEN: overlay.impactNoteEN ?? "",
    impactNoteFR: overlay.impactNoteFR ?? "",
    updatedDate: shortDate(repo.updated_at)
  };
}

async function fetchAllRepos(username, token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "profile-readme-builder"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const all = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&page=${page}&sort=updated`;
    const response = await fetch(url, { headers });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(`GitHub API request failed (${response.status}): ${details.slice(0, 240)}`);
    }

    const batch = await response.json();
    all.push(...batch);

    if (batch.length < 100) {
      break;
    }

    page += 1;
  }

  return all;
}

function withMissingRepo(name, overlay = {}) {
  return {
    name,
    url: "",
    description: "Repository metadata could not be fetched. Keep this entry or replace it with a verified repo.",
    language: "",
    stars: 0,
    updatedAt: "",
    pushedAt: "",
    topics: [],
    homepage: "",
    archived: false,
    fork: false,
    roleTag: overlay.roleTag ?? "Repository pending confirmation",
    impactNoteEN: overlay.impactNoteEN ?? "Add a verified impact statement for this repository.",
    impactNoteFR: overlay.impactNoteFR ?? "Ajouter un impact verifie pour ce depot.",
    updatedDate: "N/A",
    missing: true
  };
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const config = await readJson(configPath);
  const username = config.profile.username;
  const selectedRepos = config.selectedRepos ?? [];
  const overlays = config.repoOverlays ?? {};
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || "";

  let fetchedRepos;

  try {
    fetchedRepos = await fetchAllRepos(username, token);
  } catch (error) {
    if (await fileExists(reposPath)) {
      console.warn(`[collect-repos] ${error.message}`);
      console.warn("[collect-repos] Using cached profile/data/repos.json.");
      return;
    }

    throw error;
  }

  const byName = new Map(fetchedRepos.map((repo) => [repo.name.toLowerCase(), repo]));

  const repos = selectedRepos.map((repoName) => {
    const found = byName.get(repoName.toLowerCase());
    const overlay = overlays[repoName] ?? {};
    return found ? mapRepo(found, overlay) : withMissingRepo(repoName, overlay);
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    username,
    totalFetched: fetchedRepos.length,
    selectedCount: repos.length,
    repos
  };

  await writeJson(reposPath, payload);
  console.log(`[collect-repos] Wrote ${repos.length} repos to profile/data/repos.json`);
}

main().catch((error) => {
  console.error(`[collect-repos] ${error.stack || error.message}`);
  process.exit(1);
});
