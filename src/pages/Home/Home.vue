<template>
    <div class="home">
        {{msg}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello world'
        };
    }
}
</script>

<style lang="scss" scoped>
.home {
    width: 500px;
    height: 300px;
    background: #fff;
    margin: 50px auto;
    box-shadow: 0 0 16px 4px #ddd;
}
</style>


