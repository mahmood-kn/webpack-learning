const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    laptop: './src/laptop.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './build'),
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000, //? minSize used when a library is small and we want to be chanked
      automaticNameDelimiter: '_',
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      title: 'Hello Webpack',
      chunks: ['hello-world', '486'], //? refer to entry in top //? library name is 486 and it will included without adding it in chuncks but in the course the teacher added manually
      template: 'src/pageTemplate.hbs',
      description: 'Hello webpack',
    }),
    new HtmlWebpackPlugin({
      filename: 'laptop.html',
      title: 'laptop',
      chunks: ['laptop', '486'], //? refer to entry in top //? library name is 486 and it will included without adding it in chuncks but in the course the teacher added manually
      template: 'src/pageTemplate.hbs',
      description: 'Laptop Stickers',
    }),
  ],
};
