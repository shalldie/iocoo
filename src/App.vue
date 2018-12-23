<template>
    <div class="app">
        ddd
        <!-- <LeftBar /> -->
        <section class="app-main">
            <button @click="dispatchMsg">click me</button>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import * as types from '@/store/mutation-types';

export default {
    components: {
        // LeftBar: () => import('@/components/LeftBar')
    },
    created() {
        // alert(1);
    },
    methods: {
        dispatchMsg() {
            this.$store.dispatch(types.FETCH_SIDEBAR);
        }
    }
};
</script>

<style lang="scss">
.app {
    width: 100%;
    height: 100%;

    .left-bar {
        // @include flex;
        min-height: 100vh;
        background: #2ad;
    }

    .app-main {
        // @include flex-1;
        background: #f00;
    }
}
</style>
