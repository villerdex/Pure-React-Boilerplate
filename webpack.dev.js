const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /css/],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less|\.css$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          { loader: 'less-loader' }
        ],
      }
    ]
  },
}); 