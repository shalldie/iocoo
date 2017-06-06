import Vue from 'vue'
import Home from './Home.vue'
import '@/components/MessageBox';  // messagebox 弹框组件。  js+vue 混合组件
import '@/utils/http';             // http 请求库。          纯js组件

Vue.config.productionTip = false

import '@/assets/base.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Home)
})
