const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

// Combines the common webpack config with extra development env settings.

module.exports = merge(common, {
  devServer: {
    port: process.env.PORT || 3000,
    inline: true,
    contentBase: './build',
    historyApiFallback: true,
    host: '0.0.0.0',
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
