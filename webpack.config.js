const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin= require('html-webpack-plugin');
const VENDOR_LIBS = [
  "axios",
  "bootstrap",
  "jquery",
  "react",
  "react-dom",
  "react-redux",
  "react-router-dom",
  "redux",
  "redux-thunk"
];

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/, // file bundle chi khi nao can moi vao file vendor lay cac thu vien de su dung.
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: "/node_modules/"
      },
      {
        use: [
          "style-loader", //cho biet the nao  hieu dc cu phap css import
          "css-loader" //nhan cac css import va them vao html
        ],
        test: /\.css$/
      },
      {
        loader: "file-loader", // load font ,hinh anh, icon
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // tu dong load jquery
      // inject ES5 modules as global vars
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    }),
    new HtmlWebpackPlugin({
      template :'src/index.html' // vao file dist tao mot index.html tu src/index.html va ipmort bundle va vedor vao
    })
  ]
};
//rimraf: clean  thu muc dist roi chay cau lenh webpack