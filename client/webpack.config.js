const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader', 'eslint-loader' ]
			},
			{
				test: /\.html$/,
				use: [ 'html-loader' ]
			},
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: [ 'css-loader', 'sass-loader' ]
					})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin(
			{ filename: 'style.css' }
		),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new CleanWebpackPlugin([ 'dist' ]),
		new ProgressBarPlugin({
			format: 'Build [:bar] :percent (:elapsed seconds)',
			clear: false,
		})
	]
};