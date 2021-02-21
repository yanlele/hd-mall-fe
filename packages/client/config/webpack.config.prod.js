const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');
const paths = require('./paths');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(paths.PATH_DIST),
    filename: 'js/[name]-[hash:7].js',
    chunkFilename: 'js/[name]-[chunkhash:7].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:7]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          'less-loader',
        ],
        include: paths.PATH_SRC,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: paths.PATH_ROOT,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:7].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: './favicon.png',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'index',
    //       test: /\.(css|styl|less)$/,
    //       chunks: 'all',
    //       enforce: true
    //     }
    //   }
    // }
  },
});
