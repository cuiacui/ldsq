<template>
  <div>
      <span @click="back">返回我的个人中心主页</span>
      
  </div>
</template>

<script>
export default {    
    methods:{
        back(){
            window.history.back();
        }
    }
}
</script>

<style>

</style>