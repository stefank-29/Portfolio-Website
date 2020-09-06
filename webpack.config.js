// webpack.config.js
//import webpack from "webpack";

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
		particles: './src/particles.js',
		shell: './src/shellSessionAnimation.js',
		scroll: './src/scrollToDom.js',
		email: './src/emailSender.js',
		aos: './src/animateOnScroll.js',
	},
	output: {
		filename: '[name].bundle.js',
		publicPath: 'dist',
	},
	module: {
		// kako da se tretiraju fajlovi pre nego sto se ubace u dependency graph
		rules: [
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{
				test: /\.jpe?g$/,
				use: ['file-loader'],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		// razne funkcionalnosti
		// new webpack.optimize.UglifyJsPlugin({
		//   compress: {
		//     warnings: false,
		//   },
		//   output: {
		//     comments: false,
		//   },
		//   sourceMap: true,
		// }),
		//new webpack.ContextReplacementPlugin(),
	],
};
