const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirShared = path.join(__dirname, 'shared')
const dirStyles = path.join(__dirname, 'styles')
const dirNode = 'node_modules'

// const dirNode = 'node_modules'
console.log("value of dirApp -" + dirApp, +"value of dirAssets -" + dirShared + "value of dirStyles -" + dirStyles);

module.exports = {
    entry: [
        path.join(dirApp, 'index.js'),
        path.join(dirShared, 'index.scss')
    ],

    resolve: {
        modules: {
            dirApp,
            dirShared,
            dirStyles,
            dirNode
        }
    },

    Plugin: [
        new webpack.DefinePlugin({
            IS_DEVELOPMENT
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './shared',
                    to: ''
                }
            ]
        })
    ]
}