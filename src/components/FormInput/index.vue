<template>
    <div class="row">
        <label>
            {{opt.lbl}}
            <input type="text" :name="opt.name" v-model="opt.val">
        </label>
    </div>
</template>
<script>
export default {
    props: {
        opt: {
            required: true,
            type: Object
        }
    },
    data: function () {
        return {

        };
    }
}
</script>

<style lang="scss">
label{
    font-family:'microsoft yahei';
}

</style>
