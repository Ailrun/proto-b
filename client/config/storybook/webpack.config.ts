import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import webpack from 'webpack';

import customConfig from '../webpack/webpack.config';

const mergeConfigs = (
  base: webpack.Configuration,
  custom: webpack.Configuration,
): webpack.Configuration => ({
  ...base,
  mode: custom.mode,
  module: custom.module,
  resolve: custom.resolve,
  stats: 'none',
  devServer: {
    stats: 'minimal',
  },
  plugins: [
    ...base.plugins!
      .filter((plugin) => !(plugin instanceof webpack.ProgressPlugin)),
    new ProgressBarPlugin(),
  ],
})

export default (
  storybookBaseConfig: webpack.Configuration,
  configType: 'DEVELOPMENT' | 'PRODUCTION',
) => {
  switch (configType) {
    case 'DEVELOPMENT': {
      return mergeConfigs(
        storybookBaseConfig,
        customConfig(undefined, { mode: 'development' }),
      );
    }
    case 'PRODUCTION': {
      return mergeConfigs(
        storybookBaseConfig,
        customConfig(undefined, { mode: 'production' }),
      );
    }
  }
};
