const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './lib/levenshtein.js',

  module: {
    rules: [
      { test: /\.js$/, loader: 'eslint-loader', enforce: 'pre', exclude: /node_modules/ },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: '/tmp/',
          plugins: ['transform-flow-strip-types'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },

  output: {
    filename: 'levenshtein.js',
    library: 'levenshtein',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    umdNamedDefine: true
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules')
    ]
  },

  target: 'web'
};
