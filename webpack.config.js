/**
 * Created by boli on 2017/4/1.
 */
var webpack = require('webpack');
var path = require('path');
var htmlWebpackPluign = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports = {
    context: path.join(__dirname),
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    resolve:{
        extensions:[' ', '.js','.jsx']
    },
    entry: {
        app:["./APP/index.jsx"]
    },
    output: {
        path: path.join(__dirname,'./dist/'),
        filename: "[name][hash:5].js",
        publicPath:'/',
        chunkFilename:'js/[name][chunkhash:5].chunk.js'
    },
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        publicPath:'/',
        stats: { colors: true }
    },
    plugins: [
       // new CleanWebpackPlugin('dist'),
        //new webpack.optimize.UglifyJsPlugin(),//压缩JS
        new htmlWebpackPluign({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({//加载postcss
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")
                    ]
                }
            }
        }),
        //new ExtractTextPlugin('css/style-[contenthash].css'),
    ],
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        "transform-runtime"
                    ],
                    presets: [ 'es2015','react','stage-0']
                },
                exclude: /node_modules/,
                include: /APP/
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test:/\.less$/,
                /* loader: ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 //resolve-url-loader may be chained before sass-loader if necessary
                 use: [ 'css-loader','postcss-loader','less-loader']
                 },*/
                loaders: ['style-loader', 'css-loader', 'postcss-loader','less-loader'],
                exclude: /node_modules/,
                include: /APP/

            }
        ]
    }

};

