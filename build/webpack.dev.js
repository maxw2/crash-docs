const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DocThemePlugin = require('../plugin/docs-theme-plugins/index')

module.exports = {
    mode: process.env.NODE_ENV,
    entry:{
        docs: './docs/src/main.js'
    },
    output: {
        path: path.resolve(__dirname,'../docs/dist'),
        filename:'[name].build.js'
    },
    // 
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'docs/public/index.html',
            favicon: 'docs/public/favicon.ico'
        }),
        new DocThemePlugin()
    ],
    // 启动服务器
    devServer: {
        contentBase: path.join(__dirname, "../docs/dist"),
        compress:false,
        port:3000,
        hot:true,
        open:true
    }
}