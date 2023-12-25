/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [],
  theme: {

      screens: {
        'lg': {'max': '992px'},
        'md': {'max': '768px'},
        'sm': {'max': '480px'}
      },
      container: {
        padding: '20px',
        center: true,
      },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/img/Maskgroup.svg')",
        'body-texture': "url('/src/img/Maskgroup2.svg')",
        'last-texture': "url('/src/img/Maskgroup11.png')",
        'texture': "url('/src/img/Texture.png')",
      },
      spacing: {
        '98': '98.23px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

