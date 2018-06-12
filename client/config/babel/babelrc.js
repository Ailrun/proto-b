module.exports = ({ isProduction }) => ({
  presets: [
    [
      '@babel/preset-env',
      { modules: false },
    ],
  ],
  plugins: [
    [
      'emotion',
      {
        hoist: true,
        sourceMap: !isProduction,
        autoLabel: !isProduction,
      },
    ],
    'react-hot-loader/babel',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-transform-react-display-name',
  ],
});
