import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export default function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff|ttf)$/,
    use: [
      {
        loader: "file-loader",
        options: {},
      },
    ],
  };
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const cssLoader = buildCssLoader(options.isDev);
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
