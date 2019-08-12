const HtmlWebpackPlugin =  require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
// var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // { loader: 'style-loader', // inject CSS to page },
                    { loader: MiniCssExtractPlugin.loader },  // inject CSS to page
                    { loader: 'css-loader' }, // translates CSS into CommonJS modules
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () { // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    { loader: 'sass-loader' } // compiles Sass to CSS
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}