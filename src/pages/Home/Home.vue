<template>
    <div class="home">
        <div class="search-wrap">
            <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-edit"></el-input>
        </div>
        <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane label="All" name="all"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            activeTab: 'all',
            todos: []
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    width: 500px;
    padding: 20px 30px;
    box-sizing: border-box;
    min-height: 400px;
    max-height: 700px;
    background: #fff;
    margin: 50px auto;
    box-shadow: 0 0 16px 4px #ddd;
}

.search-wrap {
}
</style>


