// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(VueRouter)

Vue.filter("snippet",function(value){
  return value.slice(0,50) + "......";
})


//创建路由
const router = new VueRouter({
  routes: Routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
