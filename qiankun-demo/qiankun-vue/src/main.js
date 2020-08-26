import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let instance = null;
function render(props) {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app"); // 该子应用挂载到自己的html中，父应用得到这个html后将其挂载到container指定标签中
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 作为独立应用运行
  render();
} else {
  // 作为子应用运行，动态修改public_path，解决子应用发送请求的问题
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  console.log(__webpack_public_path__);
}

// 必须导出这三个函数
export async function bootstrap(props) {}
export async function mount(props) {
  console.log(props);
  // props 是向该子应用传递的参数，可以通过store保存参数
  render(props);
}
export async function unmount(props) {
  // 卸载应用
  instance.$destroy();
}
