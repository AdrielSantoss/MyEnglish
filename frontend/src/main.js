import Vue from 'vue'
import App from './App.vue'

import './config/bootstrap'
import 'font-awesome/css/font-awesome.css'

import router from './config/routes'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
