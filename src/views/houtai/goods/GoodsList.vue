<template>
  <el-table :data="tableData" border fit style="width: auto">
    <el-table-column fixed prop="date" label="发布日期" width="150">
    </el-table-column>
    <el-table-column prop="name" label="发布者" width="120"> </el-table-column>
    <el-table-column prop="title" label="新闻标题" width="120">
    </el-table-column>
    <el-table-column prop="title" label="文章状态" width="120">
      <template slot-scope="scope">
        <span v-show="scope.row.audit === false">{{
          $route.params.state == 1 ? "待审核" : "审核通过"
        }}</span>
        <span v-show="scope.row.audit === true">{{
          $route.params.state == 1 ? "待审核" : "审核通过"
        }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="classify" label="新闻分类" width="120">
    </el-table-column>
    <el-table-column prop="class" label="新闻类型" width="300">
    </el-table-column>
    <el-table-column label="是否通过审核" fit="true">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope)" type="text" size="small">{{
          $route.params.state == 1 ? "通过" : "不通过"
        }}</el-button>
        <el-button type="text" size="small" @click="show"> 查看 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "xxxxxx",
          title: "震惊的新闻",
          classify: "娱乐八卦",
          class: "1014322647@qq.com",
          audit: false,
        },
      ],
    };
  },
  methods: {
    handleClick(item) {
      console.log(item.$index);
    },
    show() {
      this.$router.push({ name: "AddGoods" });
    },
  },
};
</script>

<style>
</style>