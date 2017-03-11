var path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'), // 输出文件的保存路径
    filename: 'js/bundle.js' // 输出文件的名称
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: 'babel-loader',
      query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};