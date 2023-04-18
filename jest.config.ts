import { Config } from '@jest/types';

const config: Config.InitialOptions = {
	roots: ['src'],
	preset: 'ts-jest',
	testEnvironment: 'node',
};

export default config;
