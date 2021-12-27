module.exports = {
    lintOnSave:false,
    devServer: { //只用于开发幻境
        proxy: {
            '/api': {     //这里最好有一个 /
                target: 'https://www.jk.cxkf.cc',  // 后台接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite:{
                    '^/api':''
                }
            }
        }
      }
}