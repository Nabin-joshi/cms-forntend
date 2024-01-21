const webpack = require("webpack");

module.exports = {
  entry: ["react-hot-loader/patch", "./src"],
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  rules: [
    {
      test: /\.js$/,
      enforce: "pre",
      use: ["source-map-loader"],
    },
  ],

  // ...
};
