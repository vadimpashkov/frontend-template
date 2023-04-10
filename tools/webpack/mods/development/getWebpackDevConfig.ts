import { Configuration } from 'webpack';

import { getDevServerConfig } from './getDevServerConfig';

export const getWebpackDevConfig = (): Configuration => ({
	mode: 'development',
	devtool: 'source-map',
	devServer: getDevServerConfig,
});
