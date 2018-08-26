// Import modules ==============================================================
const merge = require('webpack-merge');
const webpack = require('webpack');

// Import plugins ==============================================================
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// Import config ===============================================================
const common = require('./webpack.common.js');

// Combines the common webpack config with extra production env settings.
module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({
      parallel: true,
    }),
  ],
});
