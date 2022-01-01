module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        playstation: {
          primary: '#005499',
          hover: '#003697',
          gray: {
            dark: '#363636',
            light: '#606060',
          },
        },
      },
      spacing: {
        112: '28rem',
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
