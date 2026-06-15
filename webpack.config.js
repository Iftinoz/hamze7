const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);
  webpack.useConfig('typescript');
  webpack.useConfig('scss');
  webpack.useConfig('snapshot');

  return webpack.resolveConfig();
};
