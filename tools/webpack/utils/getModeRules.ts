import { RuleSetRule } from 'webpack';

import { getWebpackDevRules, getWebpackProdRules } from '../mods';

export const getModeRules = (isDev: boolean): RuleSetRule[] => (isDev ? getWebpackDevRules() : getWebpackProdRules());
