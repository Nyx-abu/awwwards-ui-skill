#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

console.log("🚀 Installing Awwwards UI/UX Agent Skill...");

const skillSourcePath = path.join(__dirname, '../skills/awwwards_ui_design/SKILL.md');
const homeDir = os.homedir();

const targetDirs = [
  path.join(homeDir, '.gemini/config/plugins/awwwards_ui_design'),
  path.join(homeDir, '.claude/skills'),
  path.join(homeDir, '.codex/skills')
];

let installed = false;

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const targetPath = path.join(dir, 'SKILL.md');
  try {
    fs.copyFileSync(skillSourcePath, targetPath);
    console.log(`✅ Successfully installed skill to ${targetPath}`);
    installed = true;
  } catch (e) {
    console.error(`❌ Failed to install to ${dir}: ${e.message}`);
  }
}

if (installed) {
  console.log("🎉 You're all set! Tell your AI agent to build a 'cool ui' and watch the magic happen.");
} else {
  console.log("⚠️ Could not automatically detect agent directories. You may need to copy the SKILL.md manually.");
}
