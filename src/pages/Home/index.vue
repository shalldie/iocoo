<template>
    <div class="home-page">
    </div>
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

<style lang="scss">
.home-page {
    margin: 50px auto;
    width: 300px;
    height: 300px;
    border: 1px solid #ddd;
}
</style>



