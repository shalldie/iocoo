<template>
    <div class="page-index">
        <h2>概览页</h2>
        <div class="overview-preview">
            <div class="img-wrap">
                <img v-if="info.preview" :src="info.preview" class="preview-img">
            </div>
            <div class="table-wrap">
                <Table :schema="overviewForm.schema" :datasource="info.overviewList">
                    <template slot="th-name" slot-scope="slotProps">
                        <span>{{slotProps.item.label}} - required </span>
                    </template>
                    <template slot="td-sex" slot-scope="slotProps">
                        <span>{{slotProps.item.sex===1?'男':'女'}}</span>
                    </template>
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import * as types from '@/store/mutation-types';
import Table from '@/components/Table';

export default {
    components: {
        Table
    },
    data() {
        return {
            overviewForm: {
                schema: [
                    { name: 'name', label: '姓名' },
                    { name: 'age', label: '年龄' },
                    { name: 'sex', label: '性别' },
                    { name: 'date', label: '日期' }
                ]
            }
        };
    },
    computed: {
        ...mapState({
            info: state => state.overview.info
        })
    },
    created() {
        this.$store.dispatch(types.FETCH_OVERVIEW);
    }
};
</script>

<style lang="scss" scoped>
.page-index {
    width: 100%;

    > h2 {
        margin: 0 0 20px;
        padding: 0 0 0 20px;
        height: 50px;
        line-height: 50px;
        font-weight: normal;
        border-left: 8px solid #2ad;
        background: #f0f0f0;
    }

    .overview-preview {
        @include flex;
        .img-wrap {
            margin-right: 20px;
        }

        .table-wrap {
            @include flex-1;
        }
    }
}
</style>
