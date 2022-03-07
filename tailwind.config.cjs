const defaultTheme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open SansVariable"', '"Open Sans"', ...defaultTheme.fontFamily.sans],
				display: ['RalewayVariable', 'Raleway', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
