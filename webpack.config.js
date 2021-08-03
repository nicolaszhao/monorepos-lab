const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(process.cwd(), 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(?:ts|js)x?$/,
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