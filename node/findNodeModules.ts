import * as fs from "fs";
import * as path from "path";

export function findNodeModules(startDir: string) {
  let currentDir = startDir;
  const nodeModulesDir = "node_modules";
  while (currentDir !== ".") {
    const candidate = path.join(currentDir, nodeModulesDir);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
    const newCurrentDir = path.dirname(currentDir);
    if (newCurrentDir === currentDir) {
      break;
    }
    currentDir = newCurrentDir;
  }
  return null;
}
