const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gbfs_ui.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'static'),
        hot: true
    }
}
