<template>
    <div class="hello-world">
        <div v-for="(item,index) in msg" :key="index">item</div>
    </div>
</template>

<script>
export default {

    name: 'HelloWorld',

    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello-world {
    
}
</style>
