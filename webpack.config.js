'use strict';

var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        "main": [
            'webpack-hot-middleware/client?reload=true',
            path.resolve(SRC_PATH, 'app.js')
        ]
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        publicPath: '/dist/'
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        alias: {
            'mycommon': path.resolve(ROOT_PATH, './src/common')
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ['style', 'css'],
                include: SRC_PATH
            }, {
                test: /\.less$/,
                loaders: ['style', 'css?modules&localIdentName=[name]__[local]__[hash:base64:5]', 'less'],
                include: SRC_PATH
            },  {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8096'
            }, {
                test: /\.js[x]?$/,
                loader: ['babel'],
                include: SRC_PATH,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }

        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
