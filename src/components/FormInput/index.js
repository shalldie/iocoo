import './index.scss';

export default {
    template: require('./index.html'),
    props: {
        inputIndex: {
            type: Number,
            default: 0
        },
        lbl: {
            type: String,
            default: 'field'
        },
        defVal: {
            default: ''
        }
    },
    data() {
        return {
            val: this.defVal
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
        'val': function () { // 监听值改变
            this.$emit('update', this.val, this.inputIndex);
        }
    }
}