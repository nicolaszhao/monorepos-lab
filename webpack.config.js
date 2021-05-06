const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          rootMode: 'upward',
        },
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(process.cwd(), 'public/index.html'),
  })],
};