const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

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
            /*Choose only one of the following two: if you're using 
            plain CSS, use the first one, and if you're using a
            preprocessor, in this case SASS, use the second one*/
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.jpe?g$|\.png$|\.svg$|\.wav$/,
                type:'asset/resource'
            },
            {
                test: /\.ico$/,
                type: 'asset/resource',
                generator:{
                    filename:'[name][ext]'
                }
            }
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
    ],
    stats: 'errors-only',
}