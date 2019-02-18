const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './js/index.js',
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};