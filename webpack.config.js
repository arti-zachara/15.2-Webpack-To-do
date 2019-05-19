const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");

module.exports = env => {
  return {
    mode: env || "production",
    entry: "./src/index.js",

    output: {
      path: path.resolve(__dirname, "build"),
      filename: "app.bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body"
      }),
      new OptimizeJsPlugin({
        sourceMap: false
      })
    ]
  };
};
