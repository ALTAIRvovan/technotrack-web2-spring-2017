/**
 * Created by altair on 23.03.17.
 */


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'assets/html/index.html',
    filename: path.resolve(__dirname, '../public/index.html'),
    inject: 'body'
});

module.exports = function () {
    return {
        entry: {
            'friends': 'Friends',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass?outputStyle=compressed'
                },
                {
                    test: /\.css$/,
                    loader: 'style!css'
                }

            ],
        },
        resolve: {
            modules: [
                "node_modules",
                path.resolve(__dirname, "../assets/js")
            ],
            extensions: [".js", ".json", ".jsx", ".css"],
        },
        resolveLoader: {
            moduleExtensions: ["-loader"]
        },
        plugins: [
            HtmlWebpackPluginConfig,
            new webpack.LoaderOptionsPlugin({
                options: {
                    sassLoader: {
                        includePaths: [
                            './node_modules',
                        ]
                    }
                }
            }),
            new BundleTracker({path: __dirname, filename: '../assets/webpack-stats.json'}),
            new webpack.NoEmitOnErrorsPlugin()
        ],

    };
};