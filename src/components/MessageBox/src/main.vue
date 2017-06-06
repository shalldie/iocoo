<template>
    <div v-show="visible" class="message-box">
        <div class="close-btn">X</div>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            message: ''
        }
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.message-box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);

    >.close-btn {
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>


