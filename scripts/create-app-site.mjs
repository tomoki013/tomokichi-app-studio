import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const templateRoot = join(workspaceRoot, "packages/app-site/template");
const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log("Usage: pnpm create:app-site <slug> <brand> [--port <port>] [--no-install]");
  process.exit(0);
}

const positional = args.filter(
  (arg, index) => arg !== "--no-install" && args[index - 1] !== "--port" && arg !== "--port",
);
const [slug, brand] = positional;
const portFlagIndex = args.indexOf("--port");
const requestedPort = portFlagIndex >= 0 ? Number(args[portFlagIndex + 1]) : undefined;

if (!slug || !brand) {
  console.error("Both a lowercase app slug and a quoted brand name are required.");
  console.error('Example: pnpm create:app-site waypoint "Waypoint"');
  process.exit(1);
}

if (!/^[a-z][a-z0-9-]*$/.test(slug)) {
  console.error(
    "The app slug must start with a lowercase letter and contain only lowercase letters, numbers, and hyphens.",
  );
  process.exit(1);
}

if (
  requestedPort !== undefined &&
  (!Number.isInteger(requestedPort) || requestedPort < 1024 || requestedPort > 65535)
) {
  console.error("The port must be an integer between 1024 and 65535.");
  process.exit(1);
}

const appsRoot = join(workspaceRoot, "apps");
const targetRoot = join(appsRoot, slug);
if (existsSync(targetRoot)) {
  console.error(`apps/${slug} already exists; no files were changed.`);
  process.exit(1);
}

const usedPorts = readdirSync(appsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .flatMap((entry) => {
    const packagePath = join(appsRoot, entry.name, "package.json");
    if (!existsSync(packagePath)) return [];
    const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));
    const match = packageJson.scripts?.dev?.match(/--port\s+(\d+)/);
    return match ? [Number(match[1])] : [];
  });
const port = requestedPort ?? Math.max(4320, ...usedPorts) + 1;
if (usedPorts.includes(port)) {
  console.error(`Port ${port} is already assigned to another app.`);
  process.exit(1);
}

const replacements = new Map([
  ["__APP_SLUG__", slug],
  ["__APP_BRAND__", brand],
  ["__APP_PACKAGE__", slug.replaceAll("-", "_")],
  ["__APP_PORT__", String(port)],
  ["__APP_DATE__", new Date().toISOString().slice(0, 10)],
]);

const render = (source) => {
  let output = source;
  for (const [token, value] of replacements) output = output.replaceAll(token, value);
  return output;
};

const copyTemplate = (sourceDir, targetDir) => {
  mkdirSync(targetDir, { recursive: true });
  for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = join(sourceDir, entry.name);
    const targetPath = join(targetDir, entry.name);
    if (entry.isDirectory()) {
      copyTemplate(sourcePath, targetPath);
    } else {
      writeFileSync(targetPath, render(readFileSync(sourcePath, "utf8")));
    }
  }
};

copyTemplate(templateRoot, targetRoot);
console.log(`Created ${relative(workspaceRoot, targetRoot)} on port ${port}.`);

const registryPath = join(workspaceRoot, "packages/app-site/src/apps.ts");
const registryEnd = "] as const satisfies readonly AppBrandRegistration[];";
const registrySource = readFileSync(registryPath, "utf8");
if (!registrySource.includes(registryEnd)) {
  console.error("The shared app registry marker is missing; register the new app manually.");
  process.exit(1);
}
const registryEntry = `  {
    slug: ${JSON.stringify(slug)},
    name: ${JSON.stringify(brand)},
    publicUrl: appSiteUrl(${JSON.stringify(slug)}),
    workersUrl: appSiteWorkersUrl(${JSON.stringify(slug)}),
    support: true,
    footer: true,
  },
`;
writeFileSync(registryPath, registrySource.replace(registryEnd, `${registryEntry}${registryEnd}`));
console.log("Registered the brand site for shared support and footer links.");

if (!args.includes("--no-install")) {
  execFileSync("pnpm", ["install", "--lockfile-only"], { cwd: workspaceRoot, stdio: "inherit" });
}

console.log(`Run: pnpm --filter @tomokichi/${slug} dev`);
