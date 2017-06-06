import Vue from 'vue'
import Home from './index.vue'
import '@/utils/http';

Vue.config.productionTip = false

import '@/assets/base.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Home)
})
