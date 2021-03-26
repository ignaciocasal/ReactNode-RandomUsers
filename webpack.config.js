const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.s[a|c]ss$/,
            loader: 'sass-loader!style-loader!css-loader'
        }, {
            test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
