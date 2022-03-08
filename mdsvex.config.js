import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'path';
import { fileURLToPath } from 'url';
import rehype_urls from 'rehype-urls';

function encode(url) {
	return new URL(encodeURI(url.href));
};

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: path.join(dirname, './src/lib/components/Layouts/blog/[slug].svelte'),

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [ [rehype_urls, encode] ]
});

export default config;
