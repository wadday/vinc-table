const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/scss/global.scss')]
    }
  },

  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'docs',
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./src/demo/main.js')
  }
}
