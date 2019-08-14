const HtmlWebpackPlugin =  require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
// var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        index: ['./src/js/common','./src/js/index'],
        character: ['./src/js/common','./src/js/character'],
        episode: ['./src/js/common','./src/js/episode'],
    },
    // entry: './src/app.js',
    output: {
        path: __dirname + '/public',
        filename: '[name].bundle.js'
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
            inject: true,
            title: 'Home',
            favicon: './src/img/favicon.png',
            chunks: ['index'],
            template: './src/templates/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: 'Character',
            favicon: './src/img/favicon.png',
            chunks: ['character'],
            template: './src/templates/character.html',
            filename: 'character.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: 'Home',
            favicon: './src/img/favicon.png',
            chunks: ['episode'],
            template: './src/templates/episode.html',
            filename: 'episode.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        })
    ]
}