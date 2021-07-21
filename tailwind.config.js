module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      gray: '#777',
      white: '#fff',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
