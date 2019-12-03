const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const webpack = require('webpack');
const dotenv = require('dotenv');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = dev?dotenv.config({path: `${path.join(__dirname)}/.env.development`}).parsed:dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const APP_CONTEXT_PATH = process.env.APP_CONTEXT_PATH ? process.env.APP_CONTEXT_PATH : ''

const plugins = [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new webpack.DefinePlugin(envKeys),
    new LiveReloadPlugin({
        appendScriptTag: env,
        delay: 1500
      }),
    new HtmlWebpackPlugin({ template: './index.html' })
  ];

if ( !dev ) {
    plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    } ) );
} else {
    //plugins.push(new CleanWebpackPlugin());
}

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join( __dirname, "src" ),
    devtool: dev ? "source-map" : "none",
    entry: {
        app: "./app/client.js",
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
              test: /\.html/,
              loader: 'html-loader'
            },
            {
                test: /\.(scss|css)$/,
                use:[
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '',
                      hmr: process.env.NODE_ENV === 'development',
                    },
                  },
                  'css-loader','sass-loader'

                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        url: false,
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].[hash].bundle.js",
        publicPath: `${APP_CONTEXT_PATH}/static`
    },
    plugins,
};
