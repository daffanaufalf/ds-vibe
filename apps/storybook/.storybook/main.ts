import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { dirname, join } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../../../packages/*/src/**/*.stories.@(ts|tsx|mdx)",
    "../../../packages/*/src/**/*.mdx",
    "../stories/**/*.stories.@(ts|tsx|mdx)",
    "../stories/**/*.mdx"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes")
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite") as any,
    options: {},
  },
  docs: {
    autodocs: "tag",
  } as any,
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      resolve: {
        dedupe: ["react", "react-dom"],
      },
    });
  },
};

export default config;
