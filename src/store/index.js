import Vue from 'vue'
import Vuex from 'vuex'
import leftBar from './modules/leftBar';
import leftBar2 from './modules/leftBar2';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        leftBar,
        leftBar2
    }
});
