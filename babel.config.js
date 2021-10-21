const path = require('path');

module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    // We need to run our own plugin here to handle
    // styling with vanilla extract.
    path.resolve(__dirname, './babel-plugin')
  ]
};