const { composePlugins, withNx, withReact } = require('@nx/rspack');

const postcssSimpleVars = require('postcss-simple-vars');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              {'postcss-preset-mantine': {}},
              postcssSimpleVars({
                variables: {
                  'mantine-breakpoint-xs': '36em',
                  'mantine-breakpoint-sm': '48em',
                  'mantine-breakpoint-md': '62em',
                  'mantine-breakpoint-lg': '75em',
                  'mantine-breakpoint-xl': '88em',
                },
              }),
            ],
          },
        },
      },
    ],
  });

  return config;
});