import adapter from '@sveltejs/adapter-static';

let baseHref = process.env.HTML_BASE_HREF || '/'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: baseHref,
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
};

export default config;
