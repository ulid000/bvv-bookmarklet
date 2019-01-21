const webpack = require('webpack');
const path = require('path');
const AssetToBookmarkletPlugin = require('./plugins/AssetToBookmarkletPlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bvvbookmarklet: './src/bookmarklet.js',
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
    new AssetToBookmarkletPlugin({
      chunks: ['nochunk']
    }),
    new HtmlWebpackPlugin({
      excludeChunks: ['nochunk'],
      template: './src/index.html'
    })
  ]
};
