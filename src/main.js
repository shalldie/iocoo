import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MessageBox from './components/MessageBox';

Vue.use(ElementUI);
Vue.use(MessageBox);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
