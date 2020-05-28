const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // entry: path.resolve(__dirname, 'src', 'index.js'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'] //las extensiones que va usar el proyecto
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true, //no se que es inject
        template: './public/index.html',
        filename: './index.html'
      }
    ),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/styles/styles.css', to: './' },
      ],
    }),
  ]
}
