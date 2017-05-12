import './index.scss';
import Data from '@/Data';

export default {
    template: require('./index.html'),
    computed: {
        list() {
            return Data.list;
        }
    }
}