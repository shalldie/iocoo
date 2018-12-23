import * as types from '@/store/mutation-types';

const state = {
    info: []
};

const mutations = {
    [types.UPDATE_SIDEBAR](state, payload) {
        state.info = payload;
    }
};

// const actions = {
//     [types.FETCH_SIDEBAR]() {

//     }
// };

export default {
    state,
    mutations
};
