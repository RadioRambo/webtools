/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',

	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				svgcolor: '#000000',
				primarycolor: '#FFFFFF',
				textcolor: '#000000',
				backgroundcolor: '#EAEAEA',
				darksvgcolor: '#FFFFFF',
				darkprimarycolor: '#323232',
				darktextcolor: '#EEEEEE',
				darkbackgroundcolor: '#252525'
			},
			screens: {
				// Added screen size breakpoints for small mx-auto margins
				breakpoint850: '850px',
				breakpoint900: '900px',
				breakpoint1000: '1000px',
				breakpoint1100: '1100px',
				breakpoint1200: '1200px',
				breakpoint1300: '1300px',
				breakpoint1400: '1400px'
			}
		}
	},
	plugins: []
};
