// Import modules ==============================================================
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin');
const postCSSConfig = require('../postcss/postcss.config');

const nearest = require('find-nearest-file');
const context = path.dirname(nearest('package.json'));

// Webpack configuration
module.exports = {
  context: context,
  entry: path.join(context, 'src', 'entry', 'index.js'),

  output: {
    publicPath: '/',
    path: path.join(context, 'build'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      __CONFIG_API_URL__: JSON.stringify(process.env.API_URL),
        'process.env.ALGOLIA_APP_ID': JSON.stringify(process.env.ALGOLIA_APP_ID),
        'process.env.ALGOLIA_SEARCH_KEY': JSON.stringify(process.env.ALGOLIA_SEARCH_KEY),
    }),
    new CaseSensitivePlugin(),
    new HtmlWebpackPlugin({
      template: path.join(context, 'src', 'entry', 'index.html'),
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules\/(?!.*react-datepicker).*$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                // localIdentName: '[local]',
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'config/postcss/postcss.config.js',
                },
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'asset/image/[name].[ext]',
          },
        },
      },
    ],
  },
};
