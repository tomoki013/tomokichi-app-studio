import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appsRoot = join(workspaceRoot, "apps");
const failures = [];

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const targetExists = (distRoot, pathname) => {
  const target = join(distRoot, decodeURIComponent(pathname).replace(/^\/+/, ""));
  return (
    existsSync(target) && (statSync(target).isFile() || existsSync(join(target, "index.html")))
  );
};

for (const entry of readdirSync(appsRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const distRoot = join(appsRoot, entry.name, "dist");
  if (!existsSync(distRoot)) continue;

  for (const file of walk(distRoot).filter((path) => [".html", ".css"].includes(extname(path)))) {
    const source = readFileSync(file, "utf8");
    const references = [
      ...source.matchAll(/(?:href|src)=["']([^"']+)["']/g),
      ...source.matchAll(/url\(["']?([^"')]+)["']?\)/g),
    ].map((match) => match[1]);

    for (const reference of references) {
      if (
        !reference ||
        reference.startsWith("#") ||
        reference.startsWith("data:") ||
        reference.startsWith("mailto:") ||
        reference.startsWith("tel:") ||
        reference.startsWith("http://") ||
        reference.startsWith("https://") ||
        reference.startsWith("//")
      ) {
        continue;
      }

      const pagePath = `/${relative(distRoot, file).replaceAll("\\", "/")}`;
      const pageUrl = new URL(
        pagePath.endsWith("/index.html") ? pagePath.slice(0, -10) : pagePath,
        "https://local.test",
      );
      const resolved = new URL(reference, pageUrl);
      if (!targetExists(distRoot, resolved.pathname)) {
        failures.push(`${relative(workspaceRoot, file)} -> ${reference}`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(`Found ${failures.length} broken static reference(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("All built HTML and CSS references resolve.");
