import './index.scss'; // 私有样式
import MenuList from '@/components/MenuList'; // 组件

import store from '@/store';
import vm from '@/vm';

function sleep(delay) {
    return new Promise(res => {
        setTimeout(function () {
            res();
        }, delay);
    })
}

export default {
    template: require('./index.html'),
    async created() {
        await sleep(3000);
        store.api = {
            name: 'hello world',
            list: [
                'one', 'two', 'three', 'four'
            ]
        };
    },
    components: {
        MenuList
    }
}