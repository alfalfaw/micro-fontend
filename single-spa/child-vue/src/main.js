import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

const appOptions = {
  el: "#vue", // 挂载到父应用的id为vue的标签中
  router,
  render: (h) => h(App),
};

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions,
});

// 如果有父应用引用，发送请求时都用绝对路径
if (window.singleSpaNavigate) {
  // 末尾的 / 不能遗漏
  __webpack_public_path__ = "http://localhost:10000/";
  console.log(__webpack_public_path__);
} else {
  // 没有父应用引用时允许单独访问子应用
  delete appOptions.el;
  new Vue(appOptions).$mount("#app");
}
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

// 将子应用打包成lib

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
