module.exports = {
  pages: {
    // 自定义
    index: {
      // 入口
      entry: 'src/main.js',
    },
  },
  // 关闭语法检查
  lintOnSave: false,
  // 开启代理服务器 方式1
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 方式2
  devServer: {
    proxy: {
      '/atguigu': { //匹配所有以'/api'开头的请求路径
        target: 'http://localhost:5000', //代理目标的基础路径
        // 重写路径
        pathRewrite:{'^/atguigu':''},
        ws: true,//用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/moer': {
        target: 'http://localhost:5001',
        // 重写路径
        pathRewrite:{'^/moer':''},
        ws: true,//用于支持websocket
        changeOrigin: true //用于控制请求头中的host值，true则真实地址，false则虚假地址
      },
    }
  }
}