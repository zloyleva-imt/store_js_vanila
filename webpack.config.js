const path = require('path');

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    watch:true,
    watchOptions:{
        aggregateTimeout: 100
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
        ]
    }
}