// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false

//Vue.use(VueAxios, axios)
/* eslint-disable no-new */
// 生产环境错误日志
//if (process.env === 'production') {
//  Vue.config.errorHandler = function (err, vm) {
//    console.log(err, window.location.href)
//    errLog.pushLog({
//      err,
//      url: window.location.href,
//      vm,
//    })
//  }
//}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
