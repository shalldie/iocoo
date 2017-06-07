<template>
    <transition name="fade">
        <div v-show="visible" class="message-box">
            <img class="message-box-icon" :src="imgSrc">
            <p>{{message}}</p>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                imgSrc: require('../assets/info.svg'),
                visible: false,
                closed: false,
                duration: 3000, // 显示时间
                message: '',    // 显示内容
                timer: null,
                onClose: null
            }
        },
        watch: {
            closed: function (newVal) {  // 当关闭的时候，隐藏组件，并注册渐变完成后的移除dom方法
                if (newVal) {
                    this.visible = false;
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
            }
        },
        methods: {
            destroyElement() {
                // 在渐变完成后取消绑定
                this.$el.removeEventListener('transitionend', this.destroyElement);
                // 解绑该vue实例所有事件
                this.$destroy();
                // 移除dom。 如果是全局单例可以保留
                this.$el.parentNode.removeChild(this.$el);
            },
            close() {
                // 标记该组件已关闭
                this.closed = true;
                // 如果有回调，则执行
                if (typeof this.onClose == 'function') {
                    this.onClose(this);
                }
            }
        },
        mounted() { // 组件的dom在放入页面之后，定时关闭
            setTimeout(() => {
                this.close();
            }, this.duration);
        }
    }

</script>
<style lang="scss" scoped>
    .message-box {
        background: #fff;
        position: fixed;
        left: 50%;
        opacity: 1;
        top: 20px;
        min-width: 250px;
        height: 40px;
        overflow: hidden;
        transform: translateX(-50%);
        border-radius: 3px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        transition: .4s;

        >img {
            position: absolute;
            left: 0;
            top: 0;
            width: 40px;
            height: 40px;
        }

        >p {
            margin: 0;
            margin-left: 40px;
            line-height: 40px;
            min-width: 150px;
            white-space: nowrap;
            text-align: justify;
            box-sizing: border-box;
            padding: 0 10px;
        }
    }

    .fade-enter-active {
        opacity: 0;
        top: 0;
    }

    .fade-enter-to,
    .fade-leave-active {
        opacity: 1;
        top: 20px;
    }

    .fade-leave-to {
        opacity: 0;
        top: 0;
    }
</style>