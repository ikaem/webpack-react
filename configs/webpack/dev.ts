import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
} from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer: DevServerConfiguration;
}

export const devConfig: Configuration = {
  mode: 'development',
  devServer: {
    open: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new HotModuleReplacementPlugin()],
};
