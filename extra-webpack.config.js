const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'build/static/js/'), //build struktur muss manuell erstellt werden
    publicPath: 'auto' // für lazy loading
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].[contenthash].css', // build struktur muss manuell erstellt werden
    }),
  ],
};









