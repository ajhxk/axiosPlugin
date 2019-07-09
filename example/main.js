// import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import routes from './routers'

Vue.use(VueRouter)

// 开启debug模式
Vue.config.debug = true

// 路由配置
const router = new VueRouter({
  esModule: false,
  mode: 'history',
  routes
})

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
