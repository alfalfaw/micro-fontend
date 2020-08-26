import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerApplication, start } from "single-spa";
Vue.config.productionTip = false;

function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 *  appName: string 子应用别名
 *  applicationOrLoadingFn 路由匹配成功进行子应用加载
 *  activityFn 路由匹配规则
 *  customProps?: {} | CustomPropsFn<{}> 自定义参数，用于父应用和子应用通信
 */
registerApplication(
  "myVueApp",
  async () => {
    // 必须先加载公共模块 chunk-vendors.js ，然后加载私有模块 app.js
    await loadScript("http://localhost:10000/js/chunk-vendors.js");
    await loadScript("http://localhost:10000/js/app.js");
    // 加载完成后，window 上会挂载一个 singleVue 属性(该名称在子应用的vue.config.js中定义)，该属性包含 bootstrap、mount、unmount等方法，将其作为函数返回结果
    return window.singleVue;
  },
  (location) => location.pathname.startsWith("/vue") // 用户切换到 /vue 时加载 myVueApp
);
start();
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
