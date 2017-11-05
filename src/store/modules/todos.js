import * as types from '../mutation-types';

import { getStorage, saveStorage } from '../../lib/storage';

//#region initialState
const state = {
    list: getStorage('todos') || []
};
//#endregion

//#region getters
const getters = {

};
//#endregion

//#region mutations
const mutations = {
    /**
     * 添加 TODO
     * 
     * @param {any} state 
     * @param {any} payload 
     */
    [types.ADD_TODO](state, payload) {
        state.list.push(payload);
        saveStorage('todos', state.list);
    },
    /**
     * 根据key删除 TDOO
     * 
     * @param {any} state 
     * @param {any} key
     */
    [types.DEL_TODO](state, key) {
        state.list = state.list.filter(item => item.key != key);
        saveStorage('todos', state.list);
    },
    /**
     * 切换todo状态
     * 
     * @param {any} state 
     * @param {any} key 
     */
    [types.TOGGLE_TODO_STATU](state, key) {
        let item = state.list.filter(item => item.key == key)[0];
        item.done = !item.done;
        saveStorage('todos', state.list);
    }
};
//#endregion

//#region actions
const actions = {

};
//#endregion

export default {
    state,
    getters,
    mutations,
    actions
};