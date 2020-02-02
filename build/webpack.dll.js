const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    'vue': ['vue/dist/vue.esm.js']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: 'vue_[hash]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../dll/[name].manifest.json'),
      name: 'vue_[hash]' // 必须和library保持一致
    }),
  ],
}