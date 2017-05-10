import './index.scss'; // 私有样式
import NavBar from '@/components/NavBar'; // 组件


export default {
    template: require('./index.html'),
    data() {
        return {
            msg: '容器组件的标题',
            list: [
                'list-item1',
                'list-item2',
                'list-item3',
                'list-item4'
            ],
            list2: [
                'list2-item1',
                'list2-item2',
                'list2-item3',
                'list2-item4'
            ]
        };
    },
    components: {
        NavBar
    }
}