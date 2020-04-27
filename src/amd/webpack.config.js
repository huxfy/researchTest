const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        anonymouseLoader: path.join(__dirname, './anonymouseLoader.js'),
        calculatorAdd: path.join(__dirname, 'calculatorAdd.js'),
        calculatorDivide: path.join(__dirname, './calculatorDivide.js'),
        calculatorSubtract: path.join(__dirname, 'calculatorSubtract.js')
    },
    module: {
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, '../../index.html') })
    ]
};