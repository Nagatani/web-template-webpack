const MODE = 'production';
//const MODE = 'development';

module.exports = {
  mode: MODE,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              minimize: true,
              importLoaders: 2
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({grid: true})
              ]
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ]
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    open: true
  }
};
