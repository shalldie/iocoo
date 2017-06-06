import Vue from 'vue';
import http from './src/http';

Vue.prototype.$http = http;

export default http;