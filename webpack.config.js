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
        test: /\.scss$|.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: '../'
        })
      },
      {
        test: /\.jpg$|.gif$|.png$/,
        use: 'file-loader?name=[name].[ext]&outputPath=img/'
      },
      {
        test: /\.otf$|.ttf$|.ott$/,
        use: 'file-loader?name=[name].[ext]&outputPath=font/'
      },

    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
    	title: 'Document',
    	template: './src/index.html'
    }),
    new ExtractTextPlugin('css/style.css')
  ]
}