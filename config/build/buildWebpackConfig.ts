import { Configuration } from 'webpack';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/config';
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(options: BuildOptions): Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
