const path = require(`path`);
const fs = require(`fs`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");

// Main const, free to change it
const PATHS = {
  src: path.join(__dirname, "../src/"),
  dist: path.join(__dirname, "../dist/"),
  assets: "assets/"
};

// Pages const for HtmlWebpackPlugin
const PAGES_DIR = `${PATHS.src}pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith(".html"));
const Meta = {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no', 'Content-Security-Policy': { 'http-equiv': 'X-UA-Compatible', 'content': 'ie=edge' },};

module.exports = {
  externals: {
    paths: PATHS
  },
  //Main point
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        // Vue
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loader: {
            scss: "vue-style-loader!css-loader!sass-loader"
          }
        }
      },
      {
        // images / icons
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "file-loader",
        options: {
          alias: "[alias].[ext]"
        }
      },
      {
        // scss
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {path: `./postcss.config.js`}
            }
          },
          {
            loader: "sass-loader",
            options: {sourceMap: true}
          }
        ]
      },
      {
        // css
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {sourceMap: true}
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {path: `./postcss.config.js`}
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": PATHS.src,
      vue$: "vue/dist/vue.js"
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`
    }),
    new CopyWebpackPlugin([
      {from: `${PATHS.src}${PATHS.assets}img`, to: `${PATHS.assets}img`},
      {from: `${PATHS.src}static`, to: ""},
    ]),
    new HtmlWebpackPlugin({
      meta: Meta,
      favicon: `${PATHS.src}static/favicon.ico`,
      template: `${PATHS.src}index.html`,
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      meta: Meta,
      favicon: `${PATHS.src}static/favicon.ico`,
      template: `${PAGES_DIR}${page}`,
      filename: `pages/${page}`,
    })),
  ]
};
