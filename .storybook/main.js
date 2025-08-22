/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../packages/design-system/src/**/*.mdx",
    "../packages/design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes" 
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};

export default config;
