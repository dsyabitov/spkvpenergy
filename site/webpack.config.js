const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

var shellPlug = new WebpackShellPlugin({
	  onBuildEnd: {
			scripts: [
				'echo "Starting deploy..."',
				'cp dist/index.app.js static/js/',
				'cp dist/vendor.app.js static/js/',
				'echo "Deploy finished!"'
			],
			blocking: true,
			parallel: false
		},
		dev: false,
})

var devPlugins = [
	shellPlug,
];

var prodPlugins = [
	shellPlug,
	new BundleAnalyzerPlugin({ analyzerMode: "static", })
];

module.exports = (env) => {
	console.log(env);
	const isProduction = env === 'production';

	return {
		entry: {
			index: './src/index.js',
		},
		output: {
			filename: '[name].app.js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|.*svg)/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.(png|jpg|gif)$/i,
					type: 'asset/inline',
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: "babel-loader"
						},
						{
							loader: "svg-url-loader",
							options: {
								jsx: true, // true outputs JSX tags
								limit: 10000
							}
						}
					]
				}
			]
		},
		devtool : isProduction ? 'nosources-source-map' : 'inline-source-map',
		watch: isProduction ? false: true,
		plugins: isProduction ? prodPlugins : devPlugins,
		optimization: {
			splitChunks: {
				name: false,
				cacheGroups: {
					default: false,
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendor",
						chunks: "all"
					}
				}
			},
			minimize: isProduction,
			minimizer: [new TerserPlugin(
				{
					terserOptions: {
						output: {
							comments: false
						},
					},
					extractComments: false
				}
			)],
		}
	}
};
