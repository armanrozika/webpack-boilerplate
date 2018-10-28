var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path  = require('path')
module.exports = {
	entry: './src/main.js',
	output: {
    path: path.resolve(__dirname, "dist"),
		filename: './js/main.js'
	},
	module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: '/dist'
        })
      }
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
    	title: 'Document',
    	template: './src/index.html'
    }),
    new ExtractTextPlugin({
    	filename: '/css/style.css',
    	disable: false,
    	allChunks: true
    })
  ]
}