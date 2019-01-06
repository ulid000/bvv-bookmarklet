const webpack = require('webpack');
const path = require('path');
const AssetToBookmarkletPlugin = require('./plugins/AssetToBookmarkletPlugin.js');


module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {limit: 0} // 0 = always inline resource
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {}
      }]
    }]
  },
  plugins: [
    new AssetToBookmarkletPlugin()
  ]
};
