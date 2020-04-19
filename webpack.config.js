const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');

module.exports = webpackEnv => {
    const isEnvProduction = webpackEnv === 'production';
    return {
        entry: ['./src/index.js'],
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/',
            filename: 'static/app.bundle.js',
        },
        mode: isEnvProduction ? 'production' : 'development',
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            extensions: ['.js', '.jsx', '.json', '.scss'],
        },
        devtool: isEnvProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            disableHostCheck: true,
            historyApiFallback: true,
            hot: true,
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].[contenthash:8].css',
                chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
            }),
            // Generates an `index.html` file with the <script> injected.
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: path.join(__dirname, 'public', 'index.html'),
            }),
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' },
                { from: 'public', to: '' },
            ]),
        ],
        optimization: {
            minimize: isEnvProduction,
            minimizer: [
                // This is only used in production mode
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        parser: safePostCssParser,
                        map: {
                            inline: false,
                            annotation: true,
                        },
                    },
                    cssProcessorPluginOptions: {
                        preset: ['default', { minifyFontValues: { removeQuotes: false } }],
                    },
                }),
            ],
            // Automatically split vendor and commons
            splitChunks: {
                chunks: 'all',
                name: false,
            },
            // Keep the runtime chunk separated to enable long term caching
            runtimeChunk: {
                name: entrypoint => `runtime-${entrypoint.name}`,
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve('babel-loader'),
                        options: {
                            // Babel configuration is in babel.config.json
                            // because jest requires it to be there.
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: isEnvProduction,
                        },
                    },
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                // "file" loader makes sure the assets get served by WebpackDevServer.
                {
                    test: /.(woff|woff2|eot|ttf|otf)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
                // "url" loader works like "file" loader except that it embeds assets
                // smaller than specified limit in bytes as data URLs to avoid requests.
                {
                    test: /.(bmp|gif|jpe?g|png)$/,
                    exclude: /node_modules/,
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },

                {
                    test: /\.css$/,
                    use: [
                        isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                    ],
                },
            ],
        },
    };
};
