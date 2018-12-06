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
        // target: "http://192.168.188.195:8301",    // 开发环境
        // target: "http://10.252.53.107:8301",      // 南石电脑
        target: "http://10.252.54.194:8522",     // 王辉电脑
        changeOrigin: true,
        pathRewrite: {
          '^/app': ''
        }
      }
    }
  }
}
