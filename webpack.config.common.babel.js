import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import customConf from './config';

module.exports = new WebpackConfig().merge({
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/bundle.js'
  },
  context:  path.join(__dirname,'/src'),
  module: {
    loaders: [{
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
    }, {
        test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
        loader: 'url-loader?limit=3000'
    }, {
        test: /\.json$/,
        loader: 'json-loader'
    }, {
        test: /\.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]'
    }, {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015&plugins[]=angularjs-annotate',
        exclude: /node_modules/
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: customConf.title || '',
      template: 'index.ejs',
      inject: 'body'
    })
  ]
})
