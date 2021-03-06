// webpack.config.js
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
    entry: path.resolve(__dirname, 'src/client/app.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'jsx-loader'
        }, {
            test: /\.scss$/,
            loader: "style!css!sass?outputStyle=expanded&includePaths[]=" + node_modules
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }],
        noParse: [pathToReact]
    }
};

module.exports = config;
