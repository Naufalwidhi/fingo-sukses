const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
    path.resolve(process.cwd(), 'resources', 'js', 'app.js'),
    path.resolve(process.cwd(), 'resources', 'sass', 'app.scss'),
  ],
  output: {
    filename: 'js/app.js',
    publicPath: path.join(process.cwd(), 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: [
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('css/app.css')],
  devtool:
    process.env.NODE_ENV === 'production' ? '#source-map' : '#eval-source-map',
}
