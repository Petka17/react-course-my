const webpack = require('webpack');
const validate = require('webpack-validator');

const path = require('path');

const SRC_PATH   = path.join(__dirname, 'src');
const BUILD_PATH = path.join(__dirname, 'dist');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '8080';

const config = {
    devtool: 'eval-source-map',

    entry: {
        app: SRC_PATH
    },

    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        publicPath: '/asset/'
    },

    devServer: {
        historyApiFallback: true,

        hot: true,
        inline: true,

        stats: 'errors-only',

        host: HOST,
        port: PORT
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: SRC_PATH
            }, {
                test: /\.css/,
                loaders: ['style', 'css'],
                include: SRC_PATH
            }
        ]
    }
};

module.exports = validate(config);
