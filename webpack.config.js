var webpack = require('webpack');
var borges_loaders = require('borges/webpack-module');

module.exports = borges_loaders({
  entry: {
    horace: './index.js'
  },
  output: {
    path: 'dist',
    filename: 'horace.js'
  }
});
