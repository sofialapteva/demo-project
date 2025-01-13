import path from "path";
import webpack from "webpack";
import HTMLWEbpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export default function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new HTMLWEbpackPlugin({ template: paths.html }),
  ];
}
