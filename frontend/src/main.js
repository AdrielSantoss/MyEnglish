import Vue from 'vue'
import App from './App.vue'

import './config/bootstrap'
import 'font-awesome/css/font-awesome.css'
import './config/msgs'
import 'material-design-icons'
import 'material-design-icons/iconfont/material-icons.css'

import VueAudio from 'vue-audio-better'
 
Vue.use(VueAudio)

import router from './config/routes'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
