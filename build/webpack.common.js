const path = require('path')
const fs = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack4')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')

// 插件配置
const plugins = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html')
  }),
]
const dllFiles = fs.readdirSync(path.resolve(__dirname, '../dll'))
dllFiles.forEach(file => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../dll', file)
    }))
  } else if (/.*\.manifest.json/.test(file)) {
    plugins.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll', file)
    }))
  }
})


module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(eot|woff|svg|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[contenthash:8].[ext]',
              outputPath: 'font/',
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[contenthash:8].[ext]',
              limit: 10240,
              outputPath: 'images/',
              esModule: false // 启用CommonJS模块语法
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js'],
    mainFiles: ['index'], // 可以省略的子文件名称
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
    }
  },
  plugins,
}