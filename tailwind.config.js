/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"blue-dark": "#147594",
				"blue-light": "#1EA4CE",
				"grey-dark-1": "#6F6F6F",
				"grey-dark-2": "#525252",
				"grey-dark-blueish": "#697488",
				"grey-light-4": "#FAFAFA",
				"grey-light-3": "E0E0E0",
				"grey-light-2": "#A8A8A8",
				"grey-light-1": "#E5E5E5",
				"purple-light-1": "#F2F0FD",
				"purple-light-2": "#F3F0FE",
				"white-dark": "#FEFEFE",
			},
			fontSize: {
				"12px": "12px",
				"13px": "13px",
				"14px": "14px",
				"20px": "20px",
			},
			height: {
				"40px": "40px",
				"76px": "76px",
				"120px": "120px",
				"210px": "210px",
			},
			width: {
				"120px": "120px",
			},
			padding: {
				"12px": "12px",
			},
		},
	},
	plugins: [],
};
