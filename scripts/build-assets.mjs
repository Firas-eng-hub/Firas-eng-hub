import path from "node:path";

import {
  assetsDir,
  compactList,
  dataDir,
  ensureDir,
  escapeXml,
  readJson,
  shortDate,
  writeText
} from "./lib.mjs";

const configPath = path.join(dataDir, "profile.config.json");
const reposPath = path.join(dataDir, "repos.json");

function truncate(value, max = 64) {
  if (!value) {
    return "";
  }

  if (value.length <= max) {
    return value;
  }

  return `${value.slice(0, max - 1)}...`;
}

function renderHeroSvg(config, repoCount, lastRefresh) {
  const { profile, focusNow } = config;
  const focusLine = compactList(focusNow, 3);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1280" height="360" viewBox="0 0 1280 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="heroTitle heroDesc">
  <title id="heroTitle">${escapeXml(profile.displayName)} profile banner</title>
  <desc id="heroDesc">Tactical futurist profile header with animated scanning effects.</desc>
  <defs>
    <linearGradient id="bgGradient" x1="80" y1="24" x2="1200" y2="336" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#090B10"/>
      <stop offset="1" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="panelGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#172554" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#0B1220" stop-opacity="0.65"/>
    </linearGradient>
    <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#22D3EE" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#22D3EE" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M 42 0 L 0 0 0 42" stroke="#1F2937" stroke-width="1"/>
    </pattern>
    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1280" height="360" rx="22" fill="url(#bgGradient)"/>
  <rect width="1280" height="360" rx="22" fill="url(#grid)" opacity="0.32"/>
  <rect x="32" y="34" width="1216" height="292" rx="18" fill="url(#panelGradient)" stroke="#1F2937" stroke-width="1.2"/>

  <rect x="0" y="-50" width="1280" height="58" fill="url(#scan)" opacity="0.7">
    <animate attributeName="y" values="-60;360;-60" dur="8s" repeatCount="indefinite"/>
  </rect>

  <circle cx="1080" cy="86" r="8" fill="#22D3EE" filter="url(#softGlow)">
    <animate attributeName="r" values="6;12;6" dur="2.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="1120" cy="86" r="8" fill="#3B82F6" filter="url(#softGlow)">
    <animate attributeName="r" values="8;14;8" dur="3.1s" repeatCount="indefinite"/>
  </circle>
  <circle cx="1160" cy="86" r="8" fill="#22D3EE" filter="url(#softGlow)">
    <animate attributeName="r" values="7;13;7" dur="2.6s" repeatCount="indefinite"/>
  </circle>

  <text x="78" y="94" fill="#22D3EE" font-size="16" font-family="'Segoe UI', Arial, sans-serif" letter-spacing="2.4">MISSION CONTROL</text>
  <text x="78" y="146" fill="#E5E7EB" font-size="44" font-weight="700" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(profile.displayName)}</text>
  <text x="78" y="184" fill="#9CA3AF" font-size="22" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(profile.headline)}</text>
  <text x="78" y="226" fill="#22D3EE" font-size="16" font-family="'Segoe UI', Arial, sans-serif">Location:</text>
  <text x="154" y="226" fill="#E5E7EB" font-size="16" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(profile.location)}</text>
  <text x="78" y="254" fill="#22D3EE" font-size="16" font-family="'Segoe UI', Arial, sans-serif">Target:</text>
  <text x="134" y="254" fill="#E5E7EB" font-size="16" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(truncate(profile.targetRole, 98))}</text>
  <text x="78" y="292" fill="#9CA3AF" font-size="14" font-family="'Consolas', 'Courier New', monospace">${escapeXml(truncate(focusLine, 132))}</text>

  <rect x="864" y="180" width="332" height="116" rx="14" fill="#0C1528" stroke="#1F2937"/>
  <text x="888" y="214" fill="#22D3EE" font-size="14" font-family="'Consolas', 'Courier New', monospace">featured_repos</text>
  <text x="1082" y="214" fill="#E5E7EB" font-size="14" font-family="'Consolas', 'Courier New', monospace">${repoCount}</text>
  <text x="888" y="244" fill="#22D3EE" font-size="14" font-family="'Consolas', 'Courier New', monospace">last_refresh</text>
  <text x="1012" y="244" fill="#E5E7EB" font-size="14" font-family="'Consolas', 'Courier New', monospace">${escapeXml(lastRefresh)}</text>
  <text x="888" y="274" fill="#22D3EE" font-size="14" font-family="'Consolas', 'Courier New', monospace">status</text>
  <text x="944" y="274" fill="#E5E7EB" font-size="14" font-family="'Consolas', 'Courier New', monospace">SEEKING INTERNSHIP AND ENTRY ROLE</text>
</svg>
`;
}

function renderHeroStaticSvg(config, repoCount, lastRefresh) {
  const { profile, focusNow } = config;
  const focusLine = compactList(focusNow, 3);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1280" height="360" viewBox="0 0 1280 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="heroStaticTitle heroStaticDesc">
  <title id="heroStaticTitle">${escapeXml(profile.displayName)} profile banner static</title>
  <desc id="heroStaticDesc">Static tactical futurist profile header for reduced-motion preference.</desc>
  <defs>
    <linearGradient id="bgGradientStatic" x1="80" y1="24" x2="1200" y2="336" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#090B10"/>
      <stop offset="1" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="panelGradientStatic" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#172554" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#0B1220" stop-opacity="0.65"/>
    </linearGradient>
    <pattern id="gridStatic" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M 42 0 L 0 0 0 42" stroke="#1F2937" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1280" height="360" rx="22" fill="url(#bgGradientStatic)"/>
  <rect width="1280" height="360" rx="22" fill="url(#gridStatic)" opacity="0.32"/>
  <rect x="32" y="34" width="1216" height="292" rx="18" fill="url(#panelGradientStatic)" stroke="#1F2937" stroke-width="1.2"/>

  <circle cx="1080" cy="86" r="8" fill="#22D3EE"/>
  <circle cx="1120" cy="86" r="8" fill="#3B82F6"/>
  <circle cx="1160" cy="86" r="8" fill="#22D3EE"/>

  <text x="78" y="94" fill="#22D3EE" font-size="16" font-family="'Segoe UI', Arial, sans-serif" letter-spacing="2.4">MISSION CONTROL</text>
  <text x="78" y="146" fill="#E5E7EB" font-size="44" font-weight="700" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(profile.displayName)}</text>
  <text x="78" y="184" fill="#9CA3AF" font-size="22" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(profile.headline)}</text>
  <text x="78" y="226" fill="#22D3EE" font-size="16" font-family="'Segoe UI', Arial, sans-serif">Location:</text>
  <text x="154" y="226" fill="#E5E7EB" font-size="16" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(profile.location)}</text>
  <text x="78" y="254" fill="#22D3EE" font-size="16" font-family="'Segoe UI', Arial, sans-serif">Target:</text>
  <text x="134" y="254" fill="#E5E7EB" font-size="16" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(truncate(profile.targetRole, 98))}</text>
  <text x="78" y="292" fill="#9CA3AF" font-size="14" font-family="'Consolas', 'Courier New', monospace">${escapeXml(truncate(focusLine, 132))}</text>

  <rect x="864" y="180" width="332" height="116" rx="14" fill="#0C1528" stroke="#1F2937"/>
  <text x="888" y="214" fill="#22D3EE" font-size="14" font-family="'Consolas', 'Courier New', monospace">featured_repos</text>
  <text x="1082" y="214" fill="#E5E7EB" font-size="14" font-family="'Consolas', 'Courier New', monospace">${repoCount}</text>
  <text x="888" y="244" fill="#22D3EE" font-size="14" font-family="'Consolas', 'Courier New', monospace">last_refresh</text>
  <text x="1012" y="244" fill="#E5E7EB" font-size="14" font-family="'Consolas', 'Courier New', monospace">${escapeXml(lastRefresh)}</text>
  <text x="888" y="274" fill="#22D3EE" font-size="14" font-family="'Consolas', 'Courier New', monospace">status</text>
  <text x="944" y="274" fill="#E5E7EB" font-size="14" font-family="'Consolas', 'Courier New', monospace">SEEKING INTERNSHIP AND ENTRY ROLE</text>
</svg>
`;
}

function renderSkillsMatrixSvg(config) {
  const cards = config.capabilities.slice(0, 4).map((capability, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = 54 + col * 596;
    const y = 72 + row * 184;
    const tools = truncate(compactList(capability.stack, 6), 74);

    return `
  <g>
    <rect x="${x}" y="${y}" width="560" height="154" rx="14" fill="#0B1220" stroke="#1F2937"/>
    <rect x="${x + 18}" y="${y + 20}" width="6" height="114" rx="3" fill="#22D3EE"/>
    <text x="${x + 36}" y="${y + 42}" fill="#E5E7EB" font-size="22" font-weight="700" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(truncate(capability.domain, 42))}</text>
    <text x="${x + 36}" y="${y + 74}" fill="#9CA3AF" font-size="14" font-family="'Consolas', 'Courier New', monospace">${escapeXml(tools)}</text>
    <text x="${x + 36}" y="${y + 108}" fill="#22D3EE" font-size="14" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(truncate(capability.evidenceEN, 90))}</text>
  </g>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1280" height="440" viewBox="0 0 1280 440" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="skillsTitle skillsDesc">
  <title id="skillsTitle">Capability Matrix</title>
  <desc id="skillsDesc">Visual matrix summarizing core capabilities and evidence.</desc>
  <defs>
    <linearGradient id="skillsBg" x1="80" y1="30" x2="1180" y2="408" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#090B10"/>
      <stop offset="1" stop-color="#10192B"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="440" rx="22" fill="url(#skillsBg)"/>
  <text x="54" y="44" fill="#22D3EE" font-size="16" letter-spacing="2.2" font-family="'Segoe UI', Arial, sans-serif">CORE CAPABILITY MATRIX</text>
  ${cards}
</svg>
`;
}

function renderTimelineSvg(config) {
  const events = config.timeline ?? [];
  const height = Math.max(290, 120 + events.length * 88);

  const marks = events.map((event, index) => {
    const y = 84 + index * 88;
    return `
  <g>
    <circle cx="168" cy="${y}" r="10" fill="#22D3EE">
      <animate attributeName="r" values="8;11;8" dur="3s" repeatCount="indefinite"/>
    </circle>
    <text x="66" y="${y + 5}" fill="#9CA3AF" font-size="13" text-anchor="end" font-family="'Consolas', 'Courier New', monospace">${escapeXml(event.period)}</text>
    <text x="198" y="${y - 8}" fill="#E5E7EB" font-size="18" font-weight="700" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(truncate(event.titleEN, 58))}</text>
    <text x="198" y="${y + 18}" fill="#9CA3AF" font-size="14" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(truncate(event.organization, 64))}</text>
  </g>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1280" height="${height}" viewBox="0 0 1280 ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="timelineTitle timelineDesc">
  <title id="timelineTitle">Engineering Timeline</title>
  <desc id="timelineDesc">Chronological milestones from education and projects.</desc>
  <defs>
    <linearGradient id="timelineBg" x1="40" y1="20" x2="1210" y2="${height - 30}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0A0F1D"/>
      <stop offset="1" stop-color="#0E1728"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="${height}" rx="22" fill="url(#timelineBg)"/>
  <text x="54" y="44" fill="#22D3EE" font-size="16" letter-spacing="2.2" font-family="'Segoe UI', Arial, sans-serif">ENGINEERING TIMELINE</text>
  <line x1="168" y1="62" x2="168" y2="${height - 44}" stroke="#1F2937" stroke-width="3"/>
  ${marks}
</svg>
`;
}

function renderStatusStripSvg(config, repos) {
  const { profile, languages } = config;
  const lastUpdate = repos.generatedAt ? shortDate(repos.generatedAt) : "N/A";
  const featured = repos.repos ? repos.repos.filter((repo) => !repo.missing).length : 0;
  const languageSummary = compactList((languages ?? []).map((language) => `${language.name} ${language.level}`), 3);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1280" height="140" viewBox="0 0 1280 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="statusTitle statusDesc">
  <title id="statusTitle">Profile status strip</title>
  <desc id="statusDesc">Live status snapshot for profile data.</desc>
  <defs>
    <linearGradient id="statusBg" x1="0" y1="0" x2="1280" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0B1220"/>
      <stop offset="1" stop-color="#111827"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="140" rx="20" fill="url(#statusBg)"/>
  <rect x="28" y="24" width="390" height="92" rx="14" fill="#0E1A31" stroke="#1F2937"/>
  <rect x="444" y="24" width="390" height="92" rx="14" fill="#0E1A31" stroke="#1F2937"/>
  <rect x="860" y="24" width="390" height="92" rx="14" fill="#0E1A31" stroke="#1F2937"/>

  <text x="52" y="54" fill="#22D3EE" font-size="13" font-family="'Consolas', 'Courier New', monospace">ACTIVE_MISSION</text>
  <text x="52" y="80" fill="#E5E7EB" font-size="15" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(truncate(profile.targetRole, 44))}</text>
  <text x="52" y="101" fill="#9CA3AF" font-size="13" font-family="'Segoe UI', Arial, sans-serif">LinkedIn + academic email enabled</text>

  <text x="468" y="54" fill="#22D3EE" font-size="13" font-family="'Consolas', 'Courier New', monospace">REPO_SIGNAL</text>
  <text x="468" y="80" fill="#E5E7EB" font-size="15" font-family="'Segoe UI', Arial, sans-serif">${featured} featured repositories mapped</text>
  <text x="468" y="101" fill="#9CA3AF" font-size="13" font-family="'Segoe UI', Arial, sans-serif">Last refresh ${escapeXml(lastUpdate)}</text>

  <text x="884" y="54" fill="#22D3EE" font-size="13" font-family="'Consolas', 'Courier New', monospace">LANGUAGE_BAND</text>
  <text x="884" y="80" fill="#E5E7EB" font-size="15" font-family="'Segoe UI', Arial, sans-serif">${escapeXml(languageSummary)}</text>
  <text x="884" y="101" fill="#9CA3AF" font-size="13" font-family="'Segoe UI', Arial, sans-serif">Audience: global + francophone recruiters</text>
</svg>
`;
}

async function main() {
  const config = await readJson(configPath);
  const repos = await readJson(reposPath);
  const safeRepos = repos.repos ?? [];
  const repoCount = safeRepos.filter((repo) => !repo.missing).length;
  const lastRefresh = shortDate(repos.generatedAt);

  await ensureDir(assetsDir);
  await writeText(path.join(assetsDir, "hero.svg"), renderHeroSvg(config, repoCount, lastRefresh));
  await writeText(path.join(assetsDir, "hero-static.svg"), renderHeroStaticSvg(config, repoCount, lastRefresh));
  await writeText(path.join(assetsDir, "skills-matrix.svg"), renderSkillsMatrixSvg(config));
  await writeText(path.join(assetsDir, "timeline.svg"), renderTimelineSvg(config));
  await writeText(path.join(assetsDir, "status-strip.svg"), renderStatusStripSvg(config, repos));

  console.log("[build-assets] Generated profile/assets/*.svg");
}

main().catch((error) => {
  console.error(`[build-assets] ${error.stack || error.message}`);
  process.exit(1);
});
