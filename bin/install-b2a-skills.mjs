#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillsSource = resolve(__dirname, "..", "skills");
const skillNames = readdirSync(skillsSource, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(skillsSource, d.name, "SKILL.md")))
  .map((d) => d.name)
  .sort();

const args = process.argv.slice(2);
if (args.includes("--list")) {
  process.stdout.write(JSON.stringify({ package: "@antica-labs/b2a-skills", skills: skillNames }, null, 2) + "\n");
  process.exit(0);
}

let targetDir = join(homedir(), ".agents", "skills");
for (let i = 0; i < args.length; i += 1) {
  if (args[i] === "--target" && args[i + 1]) {
    targetDir = resolve(args[i + 1]);
    i += 1;
  } else if (args[i].startsWith("--target=")) {
    targetDir = resolve(args[i].slice("--target=".length));
  }
}

mkdirSync(targetDir, { recursive: true });
for (const name of skillNames) {
  const dest = join(targetDir, name);
  mkdirSync(dest, { recursive: true });
  cpSync(join(skillsSource, name), dest, { recursive: true, force: true });
}
process.stdout.write(`Installed ${skillNames.length} B2A methodological skills into ${targetDir}: ${skillNames.join(", ")}\n`);
