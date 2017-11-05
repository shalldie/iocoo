<template>
    <div class="todo">
        <div class="search-wrap">
            <el-input @keyup.enter.native="addTodo" v-model="input" placeholder="请输入内容" suffix-icon="el-icon-edit"></el-input>
        </div>
        <div class="filter-wrap">
            <router-link :to="{ path:'/todo/all'}">
                <el-button class="el-icon-tickets" type="text">All</el-button>
            </router-link>
            <router-link :to="{ path:'/todo/todo'}">
                <el-button class="el-icon-more" type="text">Todo</el-button>
            </router-link>
            <router-link :to="{ path:'/todo/done'}">
                <el-button class="el-icon-more-outline" type="text">Done</el-button>
            </router-link>
        </div>
        <ul class="todo-list">
            <li v-for="(item,index) in list" :key="index" :class="{'del-type':item.done}">
                <span @click="toggleStatu(item.key)">{{index+1}}. {{item.text}}</span>
                <span @click="delTodo(item.key)" class="btn-del">Del</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import * as types from '../../store/mutation-types';

export default {
    props: {
        filter: {
            type: String,
            default: 'all'
        }
    },
    data() {
        return {
            input: ''
        };
    },
    computed: {
        ...mapState({
            todos: state => state.todos.list
        }),
        list() {
            if (this.filter == 'all') {
                return this.todos;
            }

            if (this.filter == 'todo') {
                return this.todos.filter(item => !item.done);
            }

            return this.todos.filter(item => item.done);
        }
    },
    created() {
        console.log(this.list);
    },
    methods: {
        addTodo() {
            let input = this.input;
            if (input.length <= 0) return;

            this.$store.commit(types.ADD_TODO, {
                key: +new Date,
                done: false,
                text: input
            });

            this.input = '';
            this.$messageBox({
                message: '添加了新 todo ...'
            });
        },
        toggleStatu(key) {
            console.log(key);
            this.$store.commit(types.TOGGLE_TODO_STATU, key);

            this.$messageBox({
                message: '变更了状态 ...'
            });
        },
        delTodo(key) {
            console.log(key);
            this.$store.commit(types.DEL_TODO, key);

            this.$messageBox({
                message: '删除了 todo ...'
            });
        }
    },
    watch: {
        '$route': function () {
            // console.log(this.filter);
        }
    }
}
</script>

<style lang="scss" scoped>
.todo {
    width: 500px;
    padding: 20px 30px;
    box-sizing: border-box;
    min-height: 400px;
    // max-height: 700px;
    background: #fff;
    margin: 50px auto;
    box-shadow: 0 0 16px 4px #ddd;
}

.filter-wrap {
    text-align: left;

    > a {
        margin-right: 16px;

        .el-button {
            color: #666;
        }
        &.router-link-active {
            .el-button {
                color: #409eff;
            }
        }
    }
}

.todo-list {
    padding: 0;
    text-align: left;
    list-style-type: none;
    border-top: 1px solid #ddd;

    > li {
        position: relative;
        border-bottom: 1px solid #ddd;
        line-height: 40px;
        height: 40px;
        padding: 0 6px;
        margin-right: 50px;
        cursor: pointer;
        &:hover {
            // background-color: #f1f1f1;
        }
        &.del-type {
            text-decoration: line-through;
        }

        .btn-del {
            position: absolute;
            right: -50px;
            top: 4px;
            color: #f00;
        }
    }
}
</style>


