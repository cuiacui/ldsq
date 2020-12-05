<template>
    <div class="login">
        <!-- 登录 -->
        <h1 class="login_title">登录</h1>
        <!-- 提示 -->
        <p class="login_tip">
        没有帐号？&nbsp;请点击
        <span class="login_tip_cli" @click="handleLogin">注册</span>
        </p>
        <Message loginPass></Message>
        <!-- 登录按钮 -->
        <button class="login_btn">登录</button>
        <!-- 协议 -->
        <div class="login_protocol">
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
        handleLogin(){
            this.$router.push('/pageregistor')
        }
    }
}
</script>

<style scoped>
.login {
  width: 320px;
  height: 350px;
  padding: 30px;
  /* background: #eee; */
  margin: 10px auto;
}
/* 登录 */
.login_title {
  width: 320px;
  height: 30px;
  margin-bottom: 10px;
  font-size: 22px;
  color: #27282d;
}
/* 提示 */
.login_tip {
  font-size: 12px;
  margin-bottom: 50px;
  color: #27282d;
}
.login_tip_cli {
  font-weight: bold;
  cursor: pointer;
}
/* 登录按钮 */
.login_btn{
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
.login_protocol{
  width: 320px;
  text-align: center;
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
}
.login_protocol span{
  color: #27282d;
  margin-left: 4px;
  cursor: pointer;
}
</style>