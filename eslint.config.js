import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
  {
    // Individual blog pages are frozen by standing decision (static content, no
    // motion) and are excluded from site design work; routeTree.gen.ts is
    // regenerated on every build. Prettier formatting is not enforced there so
    // neither set gets rewritten as a side effect of linting. This block must
    // stay AFTER eslintPluginPrettier — flat config applies later entries last.
    files: [
      "src/routes/resources.adhd-time-blindness.tsx",
      "src/routes/resources.alexithymia-emotional-vocabulary.tsx",
      "src/routes/resources.autism-emotional-regulation.tsx",
      "src/routes/resources.burnout-recovery-signs.tsx",
      "src/routes/resources.distress-detection.tsx",
      "src/routes/resources.emotional-awareness-patterns.tsx",
      "src/routes/resources.emotional-granularity.tsx",
      "src/routes/resources.overthinking-rumination.tsx",
      "src/routes/resources.science-of-reflection.tsx",
      "src/routeTree.gen.ts",
      "src/components/vocolens/AlexithymiaEmotionalVocabulary.tsx",
      "src/components/vocolens/AutismEmotionalRegulation.tsx",
      "src/components/vocolens/BurnoutRecovery.tsx",
      "src/components/vocolens/DistressDetection.tsx",
      "src/components/vocolens/EmotionalAwareness.tsx",
      "src/components/vocolens/EmotionalGranularity.tsx",
      "src/components/vocolens/ListenToArticle.tsx",
      "src/components/vocolens/OverthinkingRumination.tsx",
      "src/components/vocolens/ScienceOfReflection.tsx",
      "src/components/vocolens/TimeBlindness.tsx",
    ],
    rules: {
      "prettier/prettier": "off",
    },
  },
);
