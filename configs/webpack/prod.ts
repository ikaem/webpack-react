import { resolve } from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const prodConfig: Configuration = {
	mode: 'production',
	output: {
		path: resolve(__dirname, '../../dist'),
		filename: '[name].js',
		publicPath: '/',
	},
	plugins: [new CleanWebpackPlugin()],
};
