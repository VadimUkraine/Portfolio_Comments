const path = require('path');

module.exports = {
	entry: './dev/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	watch: true,
	devtool: 'source-map',
	module:{
		rules:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}


};