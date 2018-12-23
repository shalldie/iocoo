<template>
    <button class="btn">
        <slot />
    </button>
</template>

<script>
export default {
    data() {

    }
};
</script>

<style lang="scss">
.btn {
    display: inline-block;
    cursor: pointer;
}
</style>
