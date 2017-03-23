/**
 * Created by altair on 23.03.17.
 */
// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
//
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: './assets/html/index.html',
//     filename: path.resolve(__dirname, 'public/index.html'),
//     inject: 'body'
// });
//
// module.exports = {
//     entry: {
//         'friends': 'Friends',
//     },
//     output: {
//         filename: '[name].js',
//         path: path.resolve(__dirname, 'static/build'),
//         publicPath: '/static/build/',
//         sourceMapFilename: "sourcemaps/[file].map",
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader?presets[]=es2015&presets[]=react'
//             }
//
//         ],
//     },
//     resolve: {
//         modules: [
//             "node_modules",
//             path.resolve(__dirname, "assets/js")
//         ],
//         extensions: [".js", ".json", ".jsx", ".css"],
//     },
//     devtool: "source-map",
//     watch: true,
//     plugins: [
//         HtmlWebpackPluginConfig,
//         new webpack.HotModuleReplacementPlugin()
//     ],
//
//     devServer: {
//         proxy: { // proxy URLs to backend development server
//             '/api': 'http://localhost:8081'
//         },
//         contentBase: [
//             path.join(__dirname, 'public'),
//             path.join(__dirname, 'static')
//         ], // boolean | string | array, static file location
//         compress: false, // enable gzip compression
//         //historyApiFallback: true, // true for index.html upon 404, object for multiple paths
//         hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
//         https: false, // true for self-signed, object for cert authority
//         noInfo: false, // only errors & warns on hot reload
//         host: "127.0.0.1",
//         port: 8080
//     },
// };

function buildConfig(env) {
    return require('./conf/' + env + '.js')(env)
}

module.exports = buildConfig;