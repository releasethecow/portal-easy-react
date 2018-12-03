'use strict';
const path = require('path');
const cwd = __dirname;
module.exports = {
  target: 'web',
  framework: 'react',
  alias: {
    asset: path.join(cwd, 'src/asset'),
    component: path.join(cwd, 'src/component'),
    framework: path.join(cwd, 'src/framework'),
  },
  loaders: {
    scss: true,
  },
  devtoo: 'source-map',
  entry: {
    app: 'src/app.js'
  },
  template: 'src/view/layout.html',
  dll: ['react', 'react-dom']
};