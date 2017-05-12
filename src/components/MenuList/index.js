import './index.scss';
import Store from '@/Store';

export default {
    template: require('./index.html'),
    data() {
        return {
            list: Store.list
        }
    },
    computed: {
        // list() {
        //     // return this.$root.$data.list;
        //     return Store.list;
        // }
    },
    created() {
        // setTimeout(() => {
        //     // console.log(this.$root.$data.list);
        //     console.log(this.list);
        // }, 3000);
    }
}