const path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({   
  //     inject: true,
  //     template: path.resolve('dist', 'index.html'),
  //     filename: 'index.html',
  //     favicon: path.resolve('dist', 'favicon.ico'),
  //   })
  // ],
  module: {
      
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(pdf)$/i,
        use: ['file-loader'],
      },
    ],
  },
};