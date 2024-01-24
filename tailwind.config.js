/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				nav: '#f5ba13',
				button: '#f5bd24',
				card: '#fff',
				'card-hover': '#f2f2f2',
				'default-text': '#f1f3f5',
			},
		},
		plugins: [],
	},
};
