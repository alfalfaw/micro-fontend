import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "vueApp", // 微应用别名
    entry: "//localhost:10000", // 默认会加载这个html，解析里面的js文件并且执行，注意子应用必须支持跨域
    container: "#vue", // 子应用挂载位置
    activeRule: "/vue", // 激活规则，当访问到 /vue 时挂载这个应用
    props: { a: "qiankun" },
  },
  {
    name: "reactApp",
    entry: "//localhost:20000",
    container: "#react",
    activeRule: "/react",
  },
];
// 注册微应用
registerMicroApps(apps, {
  beforeMount: () => {
    console.log("加载中");
  },
});
// 启动
start({
  prefetch: false, // 取消预加载
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#base");
