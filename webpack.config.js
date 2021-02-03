const sourceMap = true;

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: "./public",
    watchContentBase: true,
  },
};
