import './index.scss'; // 私有样式
import MenuList from '@/components/MenuList'; // 组件

import Data from '@/Data';

function sleep(delay) {
    return new Promise(res => {
        res();
    }, delay);
}

export default {
    template: require('./index.html'),
    async created() {
        await sleep(1000);
        console.log(this);
        Data.list = [
            'one', 'two', 'three'
        ];
    },
    components: {
        MenuList
    }
}