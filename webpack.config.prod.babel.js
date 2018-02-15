import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';
import CopyWebpackPlugin from 'copy-webpack-plugin';
module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  entry : path.join(__dirname,'/src/app.js'),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ]
})