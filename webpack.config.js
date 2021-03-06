﻿var autoprefixer = require('autoprefixer');
'use strict';
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');
if (!isProd) {
    var publicPathFill = "./public"; //If you have web dev then just put this at  base in memory and redirect with node.
} else {
    var publicPathFill = "./public";
}
console.log("Public path: " + publicPathFill)
var config = {
    entry: {
        fastOne: ['./assets/fastPageOneEntry.js'],
        blackWhiteOne: ['./assets/blackWhiteOneEntry.js'],
        cloudsOne: ['./assets/cloudsOneEntry.js'],
        virusOne: ['./assets/virusOneEntry.js'],
        eye: ['./assets/eye/eye.jsx'],
        router: ['./assets/react-nav-component-example/index.jsx']
    },
    plugins: [
        //require('postcss-smart-import')({ /* ...options */ }),
        //require('precss')({ /* ...options */ }),
        //require('autoprefixer')({ /* ...options */ })
    ],

    output: {
        path: publicPathFill,
        filename: '[name].js',
        libraryTarget: 'umd' // Need this for static site generation.
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js",".jsx"]

    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style-loader!css-loader!postcss-loader!sass" },
            { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(png|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            },
						{
							test: /\.jsx$/,
							exclude: /(node_modules)/,
							loader: 'babel-loader'
						}
        ]
    },
    postcss: function () {
        return [autoprefixer(
                //    { browsers: ['ie 10', 'firefox 20', 'safari 9.1','Chrome ] }
            { browsers: ['> 0%'] }
                )];
    }
};

module.exports = config;
