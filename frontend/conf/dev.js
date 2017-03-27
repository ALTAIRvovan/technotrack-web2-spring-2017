/**
 * Created by altair on 23.03.17.
 */

const webpackMerge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./base.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../static/build'),
            publicPath: '/static/build/',
            sourceMapFilename: "sourcemaps/[file].map",
        },
        devServer: {
            proxy: { // proxy URLs to backend development server
                '/api': 'http://localhost:8081'
            },
            contentBase: [
                path.join(__dirname, '../public'),
                path.join(__dirname, '../static')
            ], // boolean | string | array, static file location
            compress: false, // enable gzip compression
            //historyApiFallback: true, // true for index.html upon 404, object for multiple paths
            hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
            https: false, // true for self-signed, object for cert authority
            noInfo: false, // only errors & warns on hot reload
            host: "127.0.0.1",
            port: 8080
        },
        devtool: "source-map",
        watch: true,

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development')
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: false,
                debug: true,
                options: {
                    sassLoader: {
                        includePaths: [
                            './node_modules',
                        ]
                    }
                }
            }),
        ]
    })
};
