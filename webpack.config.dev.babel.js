import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true,
    filename: "[name].entry.js"
  },
  debug: true,
  devtool: '#eval',
  entry: {
    bundle: path.join(__dirname,'/src/app.js'),
    vendor: ['angular','@uirouter/angularjs'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
});

