const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: '/src/components/index.js',
  output: {
    filename: "main.js",
    libraryTarget: "umd",
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
      },
    ],
  },
  externals: [nodeExternals()]
};
