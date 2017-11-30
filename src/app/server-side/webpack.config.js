var path = require('path');

module.exports = {
    entry: '../components/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('../public/JS')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};
