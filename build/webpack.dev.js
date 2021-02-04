const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const DocThemePlugin = require('../plugin/docs-theme-plugins/index')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        docs: './docs/src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../docs/dist'),
        filename: '[name].build.js'
    },
    // 
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // 
    plugins: [
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin(),
        // new DocThemePlugin()
    ],
    // 启动服务器
    devServer: {
        contentBase: path.join(__dirname, "../docs/dist"),
        compress: true,
        port: 3000,
        hot: true,
        open: true
    }
}