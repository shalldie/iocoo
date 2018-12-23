<template>
    <div class="left-bar">
        <ul>
            <li>lalala</li>
            <li>lalala</li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [
                {
                    label: '基础',
                    children: [

                    ]
                }, {
                    label: '基础',
                    children: [

                    ]
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.left-bar {
    width: 300px;
    height: 100%;
    background: #fff;
    border-right: 1px solid #ddd;
}
</style>
