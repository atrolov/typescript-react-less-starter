const path = require("path");
const webpack = require("webpack");

const SRC_DIR = path.join(__dirname, "src");
const BUILD_DIR = path.join(__dirname, "lib");

module.exports = {
  debug: true,
  devtool: "cheap-module-source-map",
  entry: "./src/index.ts",
  output: {
    path: BUILD_DIR,
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts", include: SRC_DIR },
      { test: /\.less$/, loader: "style-loader!css?-reduceInitial!less" }
    ]
  },
  resolve: {
    root: [SRC_DIR],
    extensions: ["", ".js", ".ts", ".less", ".css"],
  },
  ts: {
    transpileOnly: false,
    compilerOptions: {
      declaration: false,
      emitDecoratorMetadata: false
    }
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
};
