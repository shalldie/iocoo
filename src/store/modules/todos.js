import * as types from '../mutation-types';

import { getStorage, saveStorage } from '../../lib/storage';

//#region initialState
const state = {
    todos: getStorage('todos') || []
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
        state.todos.push(payload);
        saveStorage('todos', state.todos);
    },
    /**
     * 根据key删除 TDOO
     * 
     * @param {any} state 
     * @param {any} { key } 
     */
    [types.DEL_TODO](state, { key }) {
        state.todos = state.todos.filter(item => item.key != key);
        saveStorage('todos', state.todos);
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