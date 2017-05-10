import './index.scss';

import MenuList from '../MenuList';
import MenuList2 from '../MenuList2';

export default {
    template: require('./index.html'),
    props: {
        msg: {
            type: String,
            default: 'this is defult title'
        },
        list: {
            type: Array
        },
        list2: {
            type: Array
        }
    },
    data() {
        return {};
    },
    components: {
        MenuList,
        MenuList2
    }
}