import { resolve } from 'path';

import { Configuration } from 'webpack-dev-server';

export const getDevServerConfig: Configuration = {
	static: {
		directory: resolve(__dirname, '../../../../dist'),
	},
	port: 3008,
};
