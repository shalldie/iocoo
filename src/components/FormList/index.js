import './index.scss';

import FormInput from '@/components/FormInput';

export default {
    template: require('./index.html'),
    props: {
        formOpt: {
            type: Object,
            require: true
        }
        // title: {
        //     type: String,
        //     // require: true,
        //     default: 'This is title'
        // },
        // list: {
        //     type: Array,
        //     require: true,
        //     default: []
        // }
    },
    data() {
        return {
        };
    },
    computed: {
        title() {
            return this.formOpt.title;
        },
        list() {
            return this.formOpt.list;
        },
        upperTitle() {
            return this.formOpt.title.toUpperCase();
        }
    },
    created() {
        // vm.$on('update', () => {   // 在动态数据加载完毕之后，重新初始化data数据
        //     Object.assign(this.$data, this.$options.data());
        // });
    },
    methods: {
        updateInput(newVal, index) {
            this.formOpt.list[index].val = newVal;
            // console.log(newVal, index);
        }
    },
    components: {
        FormInput
    }
}