const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({title: "Development", template: "./public/index.html"})],
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  }
};
