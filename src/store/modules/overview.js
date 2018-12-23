import * as types from '@/store/mutation-types';
import axios from 'axios';

const state = {
    info: {}
};

const mutations = {
    [types.UPDATE_OVERVIEW](state, payload) {
        state.info = payload;
    }
};

const actions = {
    async [types.FETCH_OVERVIEW](store) {
        const { data } = await axios.post('/api/overview', {
            _: +new Date
        });
        store.commit(types.UPDATE_OVERVIEW, data);
    }
};

export default {
    state,
    mutations,
    actions
};
