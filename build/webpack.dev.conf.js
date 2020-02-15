const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  watchOptions: {aggregateTimeout: 100},
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    inline: true,
    host: "localhost",
    watchOptions: {
      poll: true
    },
    port: 8081,
    compress: true,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
