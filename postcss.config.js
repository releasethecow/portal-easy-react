
const px2rem = require('postcss-plugin-px2rem');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    px2rem({ rootValue: { px: 100, rpx: 100 }, minPixelValue: 3 }),
    autoprefixer({ browsers: [ 'Android >= 2.1', 'iOS >= 6' ] }),
  ],
};
