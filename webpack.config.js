var webpack = require('webpack');

module.exports = {
  entry: {
    horace: './index.js'
  },
  output: {
    filename: 'horace.js'
  },
  module: {
    loaders: [
      {
        test: /node_modules\/borges\/.*\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },

      {
        test: /node_modules\/borges\/.*\.jade$/,
        loader: 'jade-loader'
      }
    ]
  }
};
