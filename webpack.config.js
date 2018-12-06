const path = require('path');

module.exports = {
	entry: './src/components/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",					
					options: {						
						presets: ["babel-preset-env", "babel-preset-react"],
						plugins: ["babel-plugin-transform-class-properties"]
					}
				}
			}
		]
	}
}