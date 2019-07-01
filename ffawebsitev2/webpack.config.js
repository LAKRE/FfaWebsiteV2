const webpack = require("webpack");
const path = require("path");

let config = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            }
        ]
    }
}

module.exports = config;