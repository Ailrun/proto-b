module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { modules: false },
    ],
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-transform-react-display-name',
  ],
  env: {
    development: {
      plugins: [
        [
          'emotion',
          {
            hoist: true,
            sourceMap: true,
            autoLabel: true,
          },
        ],
      ],
    },
    production: {
      plugins: [
        [
          'emotion',
          {
            hoist: true,
          },
        ],
      ],
    },
    test: {
      plugins: [
        [
          'emotion',
          {
            hoist: true,
            sourceMap: true,
            autoLabel: true,
          },
        ],
        'dynamic-import-node',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
};
