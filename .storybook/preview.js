import "../packages/design-system/src/styles/index.scss";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: "Light",
      list: [
        { name: "Light", class: "light", color: "#ffffff" },
        { name: "Dark", class: "dark", color: "#000000" }
      ]
    }
  }
};

export default preview;
