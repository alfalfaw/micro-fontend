module.exports = {
  configureWebpack: {
    output: {
      library: "singleVue",
      //  打包成 umd 模块，export 导出的属性可以通过 window.singleVue.bootstrap/mount/unmount访问到
      libraryTarget: "umd",
    },
    devServer: {
      port: 10000,
    },
  },
};
