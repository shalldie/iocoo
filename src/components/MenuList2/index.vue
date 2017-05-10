<template>
    <div class="menu-list2">
        <h4>This is MenuList.</h4>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
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

</script>

<style lang="scss" scoped>
    .menu-list2 {
        border: 1px solid #2ad;
        margin: 2px;
    }
</style>