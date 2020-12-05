<template>
    <div>
        <!-- 输入框 -->
        <div v-show="loginInp" class="login_input">
            <!-- 行输入 -->
            <div class="login_input_row">
                <!-- 选择地区前缀号码 -->
                <input @click="handleChange" v-model="value" type="text" readonly ="readonly" class="login_choose" placeholder="+86">
                <!-- 输入号码框 -->
                <input type="text" class="login_white" placeholder="请输入手机号">
                <!-- 选择图标 -->
                <i @click="handleChange" class="el-icon-caret-bottom login_icon"></i>
                <!-- 选择内容 -->
                <ul v-show="handleul" class="login_content">
                    <li @click="handleli" class="login_content_item" v-for="(item,index) in list" :key="index">{{item.name}}{{item.num}}</li>
                </ul>
            </div>
            <div class="login_input_row">
                <!-- 输入验证码 -->
                <input type="text" class="login_sure" placeholder="请输入6位验证码">
                <!-- 获取验证码 -->
                <input type="text" class="login_send" readonly ="readonly" placeholder="发送验证码">
            </div>
            <!-- 登录方式 -->
            <div class="login_input_rows">
                <span @click="handleCont" v-show="loginPass" class="login_pas">账号密码登录</span>
            </div>
        </div>
        <!-- 账号密码登录 -->
        <div v-show="loginCont" class="login_input_group">
        <div class="login_input_groupcell">
            <!-- 账号 -->
            <input type="text" class="group_user" placeholder="请输入手机号/灵动账号">
            <input type="password" class="group_pass" placeholder="请输入密码">
        </div>
        <!-- 快捷登录 -->
            <div class="login_input_fl">
            <span @click="loginPhone" class="login_input_click">手机快捷登录&nbsp;|</span>
            <span class="login_input_click"> 忘记密码</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        loginPass: Boolean,
    },
    data() {
        return {
        value: '+86',
        handleul: false,
        loginCont: false,
        loginInp: true,
        // loginPass: false,
        list: [
            {
            name: '中国大陆',
            num: '+86'
            },
            {
            name: '中国台湾',
            num: '+886'
            },
            {
            name: '中国香港特别行政区',
            num: '+852',
            },
            {
            name: '中国澳门特别行政区',
            num: '+853'
            }
        ]
        };
    },
    methods:{
        handleChange(){
        this.handleul = true
        // this.value = this.list
        console.log(this.list)
        },
        handleli(){
        this.handleul = false
        },
        handleCont(){
        this.loginCont = true
        this.loginInp = false
        },
        loginPhone(){
        this.loginCont = false
        this.loginInp = true
        }
    }
}
</script>

<style scoped>
/* 输入框 */
.login_input {
  width: 320px;
  height: 130px;
  margin-bottom: 20px;
}
/* 行输入 */
.login_input_row {
  width: 320px;
  height: 36px;
  margin-bottom: 20px;
}
/* 选择地区前缀号码 */
.login_choose {
  width: 58px;
  height: 36px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding-left: 12px;
}
/* 选择图标 */
.login_icon{
  margin-left: -23px;
  color: #aaa;
  cursor: pointer;
  /* vertical-align: middle; */
}
/* 选择内容框 */
.login_content{
  width: 200px;
  height: 120px;
  border: 2px solid #aaa;
  border-radius: 4px;
  overflow: auto;
  background: #fff;
  margin-top: 3px;
  position: relative;
}
/* 选择内容 */
.login_content_item{
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  padding-left: 19px;
  color: #aaa;
  cursor: pointer;
}
.login_content_item:hover{
  background: #eee;
}
/* 输入号码框 */
.login_white{
  width: 214px;
  height: 36px;
  font-size: 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding-left: 16px;
  float: right;
}
/* 输入验证码框 */
.login_sure{
  width: 188px;
  height: 36px;
  font-size: 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding-left: 16px;
}
/* 获取验证码 */
.login_send{
  float: right;
  width: 70px;
  height: 36px;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0 20px 0 16px;
}
/* 登陆方式 */
.login_input_rows{
  width: 320px;
  height: 15px;
  margin-bottom: 20px;
}
.login_pas{
  float: right;
  font-size: 12px;
  color: #27282d;
  cursor: pointer;
}
/* 账号密码登录 */
.login_input_group{
  width: 320px;
  height: 130px;
  margin-bottom: 20px;
}
.login_input_groupcell{
  width: 320px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 账号 */
.group_user{
  width: 304px;
  height: 36px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding-left: 16px;
}
/* 密码 */
.group_pass{
  width: 304px;
  height: 36px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding-left: 16px;
}
/* 手机登录 */
.login_input_fl{
  width: 133px;
  height: 12px;
  margin-top: 10px;
  float: right;
}
.login_input_click{
  font-size: 12px;
  color: #27282d;
  cursor: pointer;
}
</style>