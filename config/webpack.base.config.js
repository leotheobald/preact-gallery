const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const ProposalClassProperties = require('@babel/plugin-proposal-class-properties');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Custom Imports
const {
  PATH_SOURCE,
} = require('./config');
const {
  PATH_DIST,
} = require('./config');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ['@babel/polyfill', PATH_SOURCE],
      module: {
        rules: [
          {
            test: /\.jsx?/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  //localIdentName: '[name]__[local]__[hash:base64:5]',
                  localIdentName: '[local]'
                }
              },
              { 
                loader: require.resolve('sass-loader')
              }
            ]
          },
          // load any image files included in js.
          {
            test: /\.(jpg|png|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }, 
              'image-webpack-loader',
            ]
          }
        ]
      },
      plugins: [
        new htmlWebpackPlugin({
          template: PATH_SOURCE + '/index.html',
          filename: './index.html',
          title: 'Preact webpack babel'
        }),
        new webpack.DefinePlugin({ 
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([ { from: PATH_SOURCE } ]),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.ModuleConcatenationPlugin()
      ],
      output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.bundle.js',
        path: path.resolve(__dirname, '..', PATH_DIST),
        //publicPath: '/',
      },
    }
  ])
};
