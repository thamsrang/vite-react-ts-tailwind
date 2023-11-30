
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
    autodocs: "tag",
  },
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
	typescript: {
    reactDocgen: 'react-docgen', // 👈 react-docgen configured here.
  },
	async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};

export default config;