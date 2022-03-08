import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: path.join(dirname, './src/lib/components/Layouts/blog/[slug].svelte'),

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
