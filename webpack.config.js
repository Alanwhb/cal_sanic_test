const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './calculator.js',
    output: {
        path: __dirname + '/dist',
        filename: "calculator.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./calculator.html"
        })
    ]
};