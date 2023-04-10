import { WebpackPluginInstance } from 'webpack';

import { getWebpackDevPlugins, getWebpackProdPlugins } from '../mods';

export const getModePlugins = (isDev: boolean): WebpackPluginInstance[] =>
	isDev ? getWebpackDevPlugins() : getWebpackProdPlugins();
