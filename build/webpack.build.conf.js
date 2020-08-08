const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const ImageMinPlugin = require('imagemin-webpack-plugin').default;

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new ImageMinPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 9
      },
      jpegtran: {
        progressive: true,
        arithmetic: true
      },
    }),
  ],
  module: {
    rules: [{
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75
            },
            svgo: {
              removeEmptyContainers: true,
              removeViewBox: true,
              removeEmptyText: true,
              removeHiddenElems: true,
              removeEmptyAttrs: true,
              convertStyleToAttrs: true,
              removeTitle: true,
              removeMetadata: true,
              removeComments: true,
              removeDoctype: true,
              inlineStyles: true,
            }
          }
        },
      ],
    }]
  },
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
