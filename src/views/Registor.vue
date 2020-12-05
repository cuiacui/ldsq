<template>
  <div  class="registor">
      <!-- 注册 -->
      <h1 class="registor_title">注册</h1>
      <!-- 提示 -->
        <p class="registor_tip">
        已有帐号？&nbsp;请点击
        <span class="registor_tip_cli" @click="handleRegistor">登录</span>
        </p>
        <Message></Message>
        <!-- 注册按钮 -->
        <button class="registor_btn">注册</button>
        <!-- 协议 -->
        <div class="registor_protocol">
            登录即代表您已同意
            <span>灵动用户注册协议与隐私政策</span>
        </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'
export default {
    components:{
        Message
    },
    data(){
        return{
            
        }
    },
    methods:{
        handleRegistor(){
            this.$router.push('/pagelogin')
        }
    }
}
</script>

<style scoped>
.registor {
  width: 320px;
  height: 350px;
  padding: 30px;
  /* background: #eee; */
  margin: 10px auto;
}
/* 登录 */
.registor_title {
  width: 320px;
  height: 30px;
  margin-bottom: 10px;
  font-size: 22px;
  color: #27282d;
}
/* 提示 */
.registor_tip {
  font-size: 12px;
  margin-bottom: 50px;
  color: #27282d;
}
.registor_tip_cli {
  font-weight: bold;
  cursor: pointer;
}
/* 登录按钮 */
.registor_btn{
  width: 320px;
  height: 40px;
  background: #e2e2e2;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 38px;
}
/* 协议 */
.registor_protocol{
  width: 320px;
  text-align: center;
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
}
.registor_protocol span{
  color: #27282d;
  margin-left: 4px;
  cursor: pointer;
}
</style>