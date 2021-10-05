import { resolve } from 'path';
import dotenv from 'dotenv';
import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

export const commonConfig: Configuration = {
	context: resolve(__dirname, '../../'),
	target: 'web',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},

	module: {
		rules: [
			{
				test: [/\.jsx?$/, /\.tsx?$/],
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(scss|sass)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({ template: 'src/index.html' }),
		new DefinePlugin({
			'process.env': JSON.stringify(dotenv.config().parsed),
		}),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new ESLintPlugin({
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		}),
	],
};
