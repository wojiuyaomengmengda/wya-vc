const path = require('path');
const nodeExternals = require('webpack-node-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const APP_ROOT = process.cwd();

const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		config: {
			path: path.resolve(APP_ROOT, 'config/postcss.config.js')
		}
	}
};

module.exports = {
	target: 'web',
	mode: 'development',
	resolve: {// 重定向路径
		mainFiles: ['index'],
		modules: [path.resolve(APP_ROOT, 'src'), 'node_modules'],
		extensions: ['.js', '.vue', '.json', '.scss', '.css'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'node_modules': path.resolve(APP_ROOT, 'node_modules')
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true // 启用编译缓存
						}
					}
				]
			},
			{
				test: /\.vue/,
				use: [
					{
						loader: 'vue-loader',
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: ['vue-style-loader', 'css-loader', postcssLoader, 'sass-loader'],
			},
			{
				test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.html$/i,
				use: 'html-loader'
			}
		]
	},
	externals: [nodeExternals()],
	plugins: [
		new VueLoaderPlugin()
	],
};