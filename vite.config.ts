import { defineConfig } from 'vite';

export default defineConfig(async () => ({
	root: 'src',
	publicDir: 'public',
	build: {
		outDir: 'dist',
	},
	server: {
		open: 'index.html',
	},
}));
