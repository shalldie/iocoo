import './index.scss';

import store from '@/store';
import vm from '@/vm';

export default {
    template: require('./index.html'),
    data() {
        return {
            store: store
        };
    },
    computed: {
        name() {
            return store.api.name;
        }
    },
    created() {
        // vm.$on('update', () => {   // 在动态数据加载完毕之后，重新初始化data数据
        //     Object.assign(this.$data, this.$options.data());
        // });
    },
    watch: {
    }
}