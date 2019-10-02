/* This config file is only for transpiling the Express server file.
 * You need webpack-node-externals to transpile an express file
 * but if you use it on your regular React bundle, then all the
 * node modules your app needs to function get stripped out.
 *
 * Note: that prod and dev mode are set in npm scripts.
 */
 const path = require('path');
 const webpack = require('webpack');
 const nodeExternals = require('webpack-node-externals');
 const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 const dev = process.env.NODE_ENV !== "production";

 module.exports = (env, argv) => {

   return ({
     mode: dev?'development':'production',
     devtool: dev?'source-map':'none',
     entry: {
       server: './index.js',
     },
     output: {
       path: path.join(__dirname, 'dist'),
       publicPath: '/',
       filename: '[name].js'
     },
     target: 'node',
     node: {
       // Need this when working with express, otherwise the build fails
       __dirname: false,   // if you don't put this is, __dirname
       __filename: false,  // and __filename return blank or /
     },
     optimization: {
       minimizer: [new UglifyJsPlugin()],
     },
     externals: [nodeExternals()], // Need this to avoid error when working with Express
     module: {
       rules: [
         {
           // Transpiles ES6-8 into ES5
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: "babel-loader"
           }
         }
       ]
     }
   })
 }
