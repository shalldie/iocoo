<template>
    <table class="table">
        <thead>
            <th v-for="(item,index) in schema" :key="index">
                <slot :item="item" :name="`th-${item.name}`">
                    {{item.label}}
                </slot>
            </th>
        </thead>
        <tbody>
            <tr v-for="(row,rowIndex) in datasource" :key="rowIndex">
                <td v-for="(item,index) in schema" :key="index">
                    <slot :item="row" :name="`td-${item.name}`">
                        {{row[item.name]}}
                    </slot>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        schema: {
            type: Array,
            default: () => []
        },
        datasource: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss">
.table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
        text-align: center;
        border: 1px solid #ddd;
        padding: 10px;
    }
}
</style>
