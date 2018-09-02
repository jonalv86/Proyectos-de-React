// Dependencies
import webpack from 'webpack';
import path from 'path';

// Path
const PHATS = {
	index: path.join(__dirname, 'src/index'),
	build: path.join(__dirname, '/dist'),
	src: path.join(__dirname, 'src')
};

// Webpack Config
export default {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client?reload=true',
		PATHS.index
	],
	output: [
		path: PATHS.build,
		publicPath: '/',
		filename: 'bundle.js'
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorPlugins()
	],
	module: [
		loaders: [{
			test: /\.js?$/,
			loaders: ['babel-loader'],
			include: PATHS.src
		},
		{
			test: /\.css)$/,
			loaders: ['style-loader','css-loader']
		},
		{
			test: /\.svg?(\?v=\d+\.\d+\.\d+)?$/,
			loaders: 'url-loared?limit=10000&mimetype=imge/svg+xml'			
		}]
	]
};