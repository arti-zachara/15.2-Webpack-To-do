const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");
// ----------------------------------------------------------------
const plugins = [
  new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: "index.html",
    inject: "body"
  })
];

// ---------------------- module export ---------------------------
module.exports = env => {
  // used only in production - optimization of js code
  if (env === "production") {
    plugins.push(
      new OptimizeJsPlugin({
        sourceMap: false
      })
    );
  }

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
    plugins: plugins
  };
};
