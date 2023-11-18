const path = require('path');

module.exports = function override(config, env) {
  // Modify the webpack config here

  // Add the necessary loader for font files
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader'],
  });

  // Enable dynamic imports for React.lazy()
  config.output.chunkFilename = 'static/js/[name].[contenthash].js';

  return config;
};
