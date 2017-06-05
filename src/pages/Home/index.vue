<template>
    <ul>
        <li v-for="(item,index) in list" :index="index">
            <form-input :opt="item"></form-input>
        </li>
        <li>
            <button type="button" @click="showInfo">Click</button>
        </li>
    </ul>
</template>

<script>
import FormInput from '@/components/FormInput';

export default {
    data: function () {
        return {
            list: [{
                lbl: '姓名：',
                name: 'name',
                val: ''
            }, {
                lbl: '年龄：',
                name: 'age',
                val: ''
            }]
        };
    },
    methods: {
        showInfo() {
            let str = JSON.stringify(this.list, null, '    ');
            console.log(str);
        }
    },
    components: {
        FormInput
    },
    watch: {
        list: function (newVal) {
            console.log(JSON.stringify(newVal, null, '    '));
        }
    }
}
</script>


