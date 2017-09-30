var path = require('path');
var plugins = require('webpack-load-plugins')();
module.exports = {
entry: './src/',
 output: {
 path: path.join(__dirname, 'dist'),
 publicPath: '/dist/',
 filename: 'bundle.js'
 }
}
