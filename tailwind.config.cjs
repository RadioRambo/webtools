/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				svgcolor: '#000000',
				primarycolor: '#FFFFFF',
				textcolor: '#000000',
				backgroundcolor: '#EAEAEA'
			}
		}
	},
	plugins: []
};
