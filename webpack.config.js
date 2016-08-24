const PATH = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT = '.';

const SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'src/');
const ENTRY_FILE = PATH.resolve(__dirname, ROOT, SRC_FOLDER, 'popup.js');

const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, "dist/");
const BUILD_FILE = 'popup.min.js';

module.exports = {
    entry: ENTRY_FILE,
    output: {
        path: BUILD_FOLDER,
        filename: BUILD_FILE
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("popup.min.css")
    ]
};
