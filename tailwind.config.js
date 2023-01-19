/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', 'Sans-serif'],
				clashDisplay: ['Clash Display', 'Sans-serif'],
			},
			animation: {
				'spin-slow': 'spin 5s linear infinite',
				'slow-bounce-1': 'bounce 12s linear infinite',
				'slow-bounce-2': 'bounce 11s linear infinite',
				'slow-bounce-3': 'bounce 10s linear infinite',
			},
		},
	},
	plugins: [],
};
