<template>
    <div class="home-page">
        <button @click="showInfo" type="button">ajax请求获取数据,并弹框显示。</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                message: ''
            };
        },
        methods: {
            async showInfo() {
                let result = await this.$http.postJSON('/postMsg', { name: 'Tom' });
                this.$messageBox({
                    message: result.msg
                });
            }
        }
    }

</script>

<style lang="scss">
    .home-page {
        margin: 150px auto;
        background: #fff;
        width: 300px;
        height: 100px;
        /*border: 1px solid #ddd;*/
        box-shadow: 0 0 16px #ddd;
        text-align: center;
        padding-top: 50px;

        button {
            padding: 6px 10px;
        }
    }
</style>