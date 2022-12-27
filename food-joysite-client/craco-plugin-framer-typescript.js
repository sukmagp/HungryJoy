const { loaderByName, addBeforeLoader } = require("@craco/craco");
module.exports = {
  overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {
    const ruleToAdd = {
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    };
    addBeforeLoader(webpackConfig, loaderByName("file-loader"), ruleToAdd);
    return webpackConfig;
  },
};