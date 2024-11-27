const path = require('path');

module.exports = {
  mode: 'development', // Add mode here ('development' or 'production')
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
  },
  watch: true
}