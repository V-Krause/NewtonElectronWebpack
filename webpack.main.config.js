const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/main.js'),
  },
  // externals: ['jquery'],

  module: {
    rules: require('./webpack.rules'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'log.html',
      template: path.resolve(__dirname, './src/log.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'wizard.html',
      template: path.resolve(__dirname, './src/wizard.html')
    }),
  ],
};

