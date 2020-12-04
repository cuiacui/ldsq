<template>
  <div style="width: 800px;margin : 0 auto "> 
      <span class="back" @click="back">
           ＜返回我的主页
      </span>
      <div class="nav">
          <router-link to="/changedata">修改资料</router-link>
          <router-link to="/userdata">账户信息</router-link>
          <router-link to="/userbind">账户绑定</router-link>
      </div>

      <div class="main">
          <router-view></router-view>
      </div> 
  </div>
</template>

<script>
export default {
    methods : {
        back(){
            window.history.back()
        }
    }
}
</script>

<style scoped>
    .back{
        font-size: 18px;
        color : gray;
        cursor: pointer;
    }
    .nav{
        display:flex;
        justify-content: space-around;
        width :800px;
        height :50px;
        line-height: 50px;
        border-bottom: 1px solid gray;
    }
    
</style>