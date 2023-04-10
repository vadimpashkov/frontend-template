import { resolve } from 'path';

import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { isDev, getModeConfig, getModeRules, getModePlugins } from './utils';

const devMode = isDev();

const webpackConfig: Configuration = {
	entry: {
		app: resolve(__dirname, '../../src/app/index.ts'),
	},
	target: 'browserslist',
	...getModeConfig(devMode),
	output: {
		path: resolve(__dirname, '../../dist'),
		clean: true,
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			...getModeRules(devMode),
		],
	},
	resolve: {
		extensions: ['.js', '.ts', '.json'],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, '../../public/index.html'),
			minify: !devMode,
		}),
		...getModePlugins(devMode),
	],
};

export default webpackConfig;
