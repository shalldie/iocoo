import Vue from 'vue'
import Home from './pages/Home'

Vue.config.productionTip = false

import '@/assets/base.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Home)
})
