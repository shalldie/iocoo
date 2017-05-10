import './index.scss';

export default {
    template: require('./index.html'),
    props: {
        list: {
            default: [
                'one', 'two', 'three'
            ]
        }
    },
    data() {
        return {}
    }
}