import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));

export const profileRoot = path.resolve(scriptDir, "..");
export const dataDir = path.join(profileRoot, "data");
export const assetsDir = path.join(profileRoot, "assets");

export async function readJson(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

export async function writeJson(filePath, payload) {
  await ensureDir(path.dirname(filePath));
  await writeFile(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

export async function writeText(filePath, content) {
  await ensureDir(path.dirname(filePath));
  await writeFile(filePath, content, "utf8");
}

export async function ensureDir(dirPath) {
  await mkdir(dirPath, { recursive: true });
}

export function shortDate(isoDate) {
  if (!isoDate) {
    return "N/A";
  }

  const date = new Date(isoDate);
  return date.toISOString().slice(0, 10);
}

export function escapeXml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function compactList(values, max = 4) {
  return (values ?? []).slice(0, max).join(" | ");
}
