// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js入口文件
// import Vue from 'vue'
// import App from './App'
// import router from './router'
import Vue from "vue";
import router from "./router"
import App from "./App"
import store from '../store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 操作的是HTML中的DOM节点
  el: '#app',
  // 注入路由
  router,
  store,
  // 注册组件
  components: { App },
  // 使用组件
  template: '<App/>'
})
