const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  staticDirs: ['../public'],
  refs: {
    starburst: {
      title: 'Starburst',
      url: 'http://localhost:4401',
    },
    supernova: {
      title: 'Supernova',
      url: 'http://localhost:4402',
    },
    'storybook-website-storybook': {
      title: 'The Storybook of the Storybook website',
      url: 'https://next--storybookjs.netlify.app/official-storybook/',
    },
  },
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
  babel: async (options) => {
    return {
      ...options,
      presets: [...options.presets, '@babel/preset-react'],
      plugins: [...options.plugins, 'react-require'],
    };
  },
};
