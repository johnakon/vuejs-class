import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppBodyStructure from './components/AppBodyStructure.vue'
import AppHome from './components/AppHome.vue'
import AppProducts from './components/AppProducts.vue'
import AppServices from './components/AppServices.vue'
import AppAboutUs from './components/AppAboutUs.vue'


import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

//create multiple routes but each route will have one path
const routes = [
  {path: "/", component: AppBodyStructure},
  {path: "/home", component: AppHome},
  {path: "/products", component: AppProducts},
  {path: "/services", component: AppServices},
  {path: "/about-us", component: AppAboutUs}
]
//creating new instance of a router, argument is an object of routes

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
