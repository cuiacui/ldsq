<template>
  <el-container style="height: 100%">
    <el-header class="my-header">
      <div id="header-left">
        灵动社区后台管理系统
        <i :class="icon" @click="onClick"></i>
      </div>
      <div id="user">
        <span>当前用户：</span>
        <span>退出登录</span>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="`${collapseWidth}px`" class="my-side">
        <el-menu
          :default-active="defaultActive"
          :collapse="isCollapse"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          style="border: 0"
        >
          <el-menu-item index="/show">
            <i class="el-icon-setting"></i>
            <span slot="title">控制台</span>
          </el-menu-item>
          <el-menu-item index="/classfy"> 
            <i class="el-icon-setting"></i>
            <span slot="title">新闻分类</span>
          </el-menu-item>
          <el-submenu index="/addgoods">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">审核管理</span>
            </template>
            <el-menu-item index="/addgoods">
              <span slot="title">发布商品</span>
            </el-menu-item>
            <el-menu-item index="/goodlist/1">
              <span slot="title">未审核新闻</span>
            </el-menu-item>
            <el-menu-item index="/goodlist/0" >
              <span slot="title">已审核新闻</span>
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="/user">
            <i class="el-icon-setting"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="background: #e4e7ed">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: window.location.pathname,
      isCollapse: false,
      icon: "el-icon-s-unfold",
      collapseWidth: 200,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onClick() {
      this.isCollapse = !this.isCollapse;
      this.collapseWidth = this.isCollapse ? 64 : 200;
      this.icon = this.isCollapse ? "el-icon-s-fold " : "el-icon-s-unfold";
    },
  },
};
</script>

<style scoped>
.my-header {
  background: #303133;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#header-left {
  font-size: 18px;
  font-weight: bold;
}

#user {
  width: 250px;
  display: flex;
  justify-content: space-between;
}

.my-side {
  background: #545c64;
}
</style>
