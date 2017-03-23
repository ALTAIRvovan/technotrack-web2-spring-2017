/**
 * Created by altair on 23.03.17.
 */


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
                    loader: 'babel-loader?presets[]=es2015&presets[]=react'
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
        plugins: [
            HtmlWebpackPluginConfig,
        ],
    };
};