// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入axios
import Axios  from 'axios'
Vue.prototype.$axios = Axios

//导入懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
  //   error: '/assets/logo.png',
    loading: '/static/loading-svg/loading-bars.svg',
    attempt: 1

  })

Vue.config.productionTip = false

//导入css样式
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
