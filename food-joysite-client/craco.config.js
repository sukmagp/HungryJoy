const { ProvidePlugin } = require("webpack");
const webpackFramerTyperScriptPlugin = require("./craco-plugin-framer-typescript");
module.exports = {
  webpack: {
    plugins: [
      new ProvidePlugin({
        React: "react",
      }),
    ],
  },
  plugins: [{ plugin: webpackFramerTyperScriptPlugin }],
};