
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont : 'mdi'
})
Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  routes : routes,
  mode: 'history'
})



//above we create the const (eg. router) and below we claim that in the vue (router: router,)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')




//use "NPM install --save sequelize" at command line
//followed by "npm install --save sqlite3"

//seqeulize documentation: http://docs.sequelizejs.com/