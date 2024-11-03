const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = {
        entry: "./index.js",
        output: {
            filename: "bioheal.bundle.js",
            path: path.resolve("dist"),
            publicPath: "/",
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ['@babel/preset-react', { targets: "defaults" }]
                            ]
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: "html-loader"
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
                {
                    test: /\.jpeg$\.jpg$|\.png$|\.svg$|\.wav$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.ico$/,
                    type: 'asset/resource',
                    generator: {
                        filename: '[name][ext]'
                    }
                }
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HTMLWebpackPlugin({
                template: "index.html"
            }),
            new MiniCssExtractPlugin()
        ],
        stats: 'errors-only',
    }