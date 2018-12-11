const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_s', resolve('src/server'))
  },
  devServer: {
    proxy: {
      "/app": {
        target: "http://127.0.0.2:8080",     // dev环境接口ip
        changeOrigin: true,
        pathRewrite: {
          '^/app': ''
        }
      }
    }
  }
}
