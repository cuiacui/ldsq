<template>
  <el-table :data="tableData" border style="width: 95%">
    <el-table-column fixed prop="date" label="注册日期" width="150">
    </el-table-column>
    <el-table-column prop="name" label="用户名" width="120"> </el-table-column>
    <el-table-column prop="password" label="密码" width="120">
    </el-table-column>
    <el-table-column prop="city" label="会员等级" width="120">
    </el-table-column>
    <el-table-column prop="city" label="头像" width="120">
      <template slot-scope="scope">
        <img :src="`http://127.0.0.1:8080${scope.row.mainPic}`" width="50px" />
      </template>
    </el-table-column>
    <el-table-column prop="address" label="邮箱" width="200"> </el-table-column>
    <el-table-column prop="zip" label="发布的文章数" width="120">
    </el-table-column>
    <el-table-column prop="phone" label="手机号" width="120"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope)" type="text" size="small"
          >删除</el-button
        >
        <el-button type="text" size="small" @click="update(scope)"
          >修改</el-button
        >
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
          password: "56456dasdfa",
          mainPic: ["/image/4.jpg"],
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          mainPic: ["/image/2.jpg"],
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },

        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },

        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },

        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
        {
          date: "2016-05-02",
          name: "xxxxxx",
          password: "56456dasdfa",
          city: "平民",
          address: "1014322647@qq.com",
          zip: 200333,
          phone: 18818181818,
        },
      ],
    };
  },
  methods: {
    handleClick(item) {
      this.$confirm("删除该用户", "删除用户", {
        confirmButtonText: "修改",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.tableData.splice(item.$index, 1);
          this.$message({
            message: "删除成功",
            type: "success",
          });
        })
        .catch(() => {
          this.$message({
            message: "删除失败",
            type: "warning",
          });
        });
    },
    update(item) {
      this.$prompt("修改用户权限", "修改权限", {
        confirmButtonText: "修改",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          item.row.city = value;
          this.$message({
            message: "删除成功",
            type: "success",
          });
        })
        .catch(() => {
          this.$message({
            message: "删除失败",
            type: "warning",
          });
        });
    },
  },
};
</script>

<style>
</style>