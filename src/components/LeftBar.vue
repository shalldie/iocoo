<template>
    <div class="left-bar">
        <ul class="menu-list">
            <li class="menu-item" v-for="(item,index) in menus" :key="index">
                <div class="menu-label">{{item.label}}</div>

                <transition name="slide">
                    <ul v-if="item.children && item.children.length" class="menu-list second-menu">
                        <li v-for="(secItem,secIndex) in item.children" :key="secIndex">
                            <div class="menu-label">{{secItem.label}}</div>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            menus: state => state.leftBar.menus
        })
    }
};
</script>

<style lang="scss" scoped>
.left-bar {
    width: 300px;
    height: 100%;
    background: #fff;
    border-right: 1px solid #ddd;
    color: #314659;

    .menu-list {
        list-style: none;
        margin: 0;
        padding: 0;
        padding-top: 40px;
        transition: 0.3s;

        li {
            overflow: hidden;
            // height: 40px;
            line-height: 40px;
            margin: 4px 0 8px;

            .menu-label {
                height: 40px;
                line-height: 40px;
                padding: 0 16px 0 40px;
                cursor: pointer;

                &:hover,
                &.selected {
                    color: #1890ff;
                }
            }
        }
    }

    .second-menu {
        padding: 10px 0;

        li {
            .menu-label {
                padding-left: 60px;

                &:hover,
                &.selected {
                    background-color: #e6f7ff;
                }
            }
        }
    }
}
</style>
