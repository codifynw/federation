const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  entry: "./index.js",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 1339,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "lego",
      filename: "remoteEntry.js",
      exposes: {
        "./lego": "./app.jsx",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
