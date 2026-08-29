import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored skill packages (Claude/Cursor/Codex) — third-party code we
    // don't own or want to hold to this project's lint rules. .cursor/skills
    // and .claude/skills are symlinks into .agents/skills; ignoring the
    // symlink paths too keeps ESLint from following them separately.
    ".agents/**",
    ".cursor/**",
    ".claude/**",
  ]),
]);

export default eslintConfig;
