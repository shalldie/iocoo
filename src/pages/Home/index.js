import './index.scss'; // 私有样式
import MenuList from '@/components/MenuList'; // 组件

import Store from '@/Store';

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
        console.log(Store.list);
        await sleep(3000);
        Store.list.push(
            'one', 'two', 'three', 'fourssss'
        );
        console.log(Store.list);
    },
    components: {
        MenuList
    }
}