<template>
  <div>
    <el-button type="primary" icon="el-icon-plue" @click="addItem()"
      >添加分类</el-button
    >
    <el-table :data="tableData" border style="width: 100%; margin: 20px 0">
      <el-table-column fixed prop="order" label="序号"> </el-table-column>
      <el-table-column fixed prop="createTime" label="日期"> </el-table-column>
      <el-table-column fixed prop="name" label="分类名称"> </el-table-column>
      <el-table-column fixed label="操作">
        <template slot-scope="scope">
          <el-button @click="update(scope)" size="small" icon="el-icon-edit"
            >修改</el-button
          >
          <el-button
            size="small"
            @click="removeItem(scope)"
            icon="el-icon-delete"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev,pager, next"
      :page-size="pageSize"
      :total="count"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      count: 0, //当前的所有数据页数 从服务器请求回来的
      pageSize: 0,
    };
  },
  created() {
    // this.goPage(this.p);
  },
  methods: {
    update(scope) {
      this.$prompt("请修改分类名称", "修改分类", {
        confirmButtonText: "修改",
        cancelButtonText: "取消",
        inputValue: scope.row.name,
      }).then(({value}) => { 	
        scope.row.name = value;
        this.$message({
          message: "修改成功",
          type: "success",
        });
      }).catch(()=>{
		   this.$message({
          message: "修改失败",
          type: "warning",
        });
	  });
    },
    removeItem(scope) {
		  this.$confirm("确定要删除分类吗", "修改分类", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
		type:"waining"
      }).then(() => { 	
        this.tableData.splice(scope.$index,1)
        this.$message({
          message: "删除成功",
          type: "success",
        });
      }).catch(()=>{
		   this.$message({
          message: "删除失败",
          type: "warning",
        });
	  });
	},
    addItem() {
      this.$prompt("请输入分类名称", "添加分类", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(({ value }) => {
        this.tableData.push({
          name: value,
        });
        this.$message({
          message: "添加成功",
          type: "success",
        });
      });
    },
  },
};
</script>

<style>
</style>
