import Vue from 'vue'
import Vuex from 'vuex'
import leftBar from './modules/leftBar';
import overview from './modules/overview';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        leftBar,
        overview
    }
});
