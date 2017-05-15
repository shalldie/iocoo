import './index.scss'; // 私有样式
import FormList from '@/components/FormList'; // 组件

function sleep(delay) {
    return new Promise(res => {
        setTimeout(function () {
            res();
        }, delay);
    })
}

export default {
    template: require('./index.html'),
    data() {
        return {
            formOpt: {
                title: '',
                list: []
            }
        };
    },
    async created() {
        await sleep(1000);
        this.formOpt = {
            title: 'test title',
            list: [{
                lbl: 'name',
                val: 'tom'
            }, {
                lbl: 'age',
                val: 12
            }]
        };
        await sleep(5000);
        console.log(JSON.stringify(this.formOpt, null, '    '));
    },
    components: {
        FormList
    }
}