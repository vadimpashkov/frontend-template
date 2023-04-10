import { Configuration } from 'webpack';

import { getWebpackDevConfig, getWebpackProdConfig } from '../mods';

export const getModeConfig = (isDev: boolean): Configuration =>
	isDev ? getWebpackDevConfig() : getWebpackProdConfig();
