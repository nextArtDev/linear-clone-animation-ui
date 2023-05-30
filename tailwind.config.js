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
        background: '#000212',
        grey: 'rgb(138, 143, 152)',
        'grey-dark': '#222326',
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);',
      },
      boxShadow: {
        primary: 'rgba(80, 63, 205, 0.5) 0px 1px 40px',
      },
    },
  },
  plugins: [],
}
