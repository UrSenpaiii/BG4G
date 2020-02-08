const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const ImageMinPngquant = require('imagemin-pngquant');
const ImageMinMozjpeg = require('imagemin-mozjpeg');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new ImageMinPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        ImageMinMozjpeg({quality: 92, progressive: true}),
        ImageMinPngquant({strip: true, speed: 1, quality: 80})
      ],
    }),
  ]
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
