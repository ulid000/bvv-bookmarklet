const webpack = require('webpack');
const path = require('path');
const AssetToBookmarkletPlugin = require('./plugins/AssetToBookmarkletPlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [{
  name: 'bookmarklet',
  mode: 'production',
  entry: {
    bvvbookmarklet: './src/bookmarklet.js'
  },
  output: {
    filename: '[name].bookmarklet',
    path: path.resolve(__dirname, 'dist_bookmarklet')
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
    new CleanWebpackPlugin(['dist_bookmarklet']),
    new AssetToBookmarkletPlugin({
      chunks: ['bvvbookmarklet']
    })
  ]
},
{
  mode: 'production',
  name: 'webpage',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: "clipboard"
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
    }, {
      test: /\.bookmarklet$/,
      use: 'raw-loader'
    }]
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
      excludeChunks: ['bvvbookmarklet'],
      template: './src/index.html'
    })
  ]
}]
