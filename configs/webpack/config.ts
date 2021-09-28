import merge from 'webpack-merge';
import { commonConfig, devConfig, prodConfig } from '.';

const config = (env: any, args: { mode: string; config: string[] }) => {
  try {
    switch (args.mode) {
      case 'development':
        return merge(commonConfig, devConfig);
      case 'production':
        return merge(commonConfig, prodConfig);
      default:
        throw new Error('No matching config found');
    }
  } catch (e) {
    console.error(e);
  }
};

export default config;
