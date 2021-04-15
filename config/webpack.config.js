const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '../'); 
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public'); 

const config = {
  entry: [path.resolve(ROOT_DIRECTORY, 'src/index.js')], 
  output: {
    // instructions for compiling the code
    path: path.resolve(ROOT_DIRECTORY, 'build'), 
    filename: 'bundle.js', 
    publicPath: '/', 
  },
  mode: 'development',
  resolve: {
    // instructions on how to resolve modules
    modules: [path.resolve('node_modules'), 'node_modules'], 
  },
  performance: {
    // notifies you if assets and entry points exceed a specific file limit
    hints: false,
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIRECTORY, 'index.html'),
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, 
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader'],
      },
    ],
  },
};

module.exports = config;