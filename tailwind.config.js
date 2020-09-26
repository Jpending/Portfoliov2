//const { default: src } = require("*.bmp")

module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundAttachment: [ 'responsive', 'hover', 'focus' ],
    gradientColorStops: [ 'responsive', 'hover', 'focus', 'active', 'group-hover' ],
    animation: [ 'responsive', 'hover', 'focus' ],
    outline: [ 'responsive', 'focus', 'hover', 'active' ],
  },
  plugins: [],
  'background-image': 'src(./src/images/ocean.jpg)'
}
