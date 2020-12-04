<template>
    <div style="padding-bottom:50px">
        <div class="account" ref="acc" style="margin-top:20px;text-align:left">账号</div>
        <div class="input-box">
            <input type="text" class="input" placeholder="邮箱/手机号/用户名" @blur="blurAcc" v-model="username">
        </div>
        <div class="account secr" ref="password">
            <span>密码</span>
            <span style="font-size:14px;color:red;font-weight:500" v-show="isPassword">密码至少包含 数字和英文，长度6-20</span>
            </div>
        <div class="input-box">
            <input type="password" class="input" placeholder="密码" @blur='blurSec' ref="passwordBox" @focus="focusPass" v-model="password">
        </div>
        <div class="keep-secr">
            <div class="checkbox">
                <input type="checkbox" style="width:16px;height:16px" v-model="checked"> 
                <span>记住密码</span>
            </div>
            <span style="color:#3C8DBC;cursor:pointer" @click="forgPass">忘记密码?</span>
        </div>
        <div class="login-box" @click="loadData">登&nbsp;&nbsp;录</div>
        <div class="how-login">
            <div style="width:233px;height:48px;background:#F4F4F4;display:flex;justify-content:center;align-items:center">
                <img src="/img/QQ.png" style="width:20px;height:20px;margin-right:6px" >
                <span style="font-size:18px">使用腾讯QQ登录</span>
            </div>
            <div style="width:233px;height:48px;background:#F4F4F4;display:flex;justify-content:center;align-items:center">
                <img src="/img/mobilephone.png" style="width:22px;height:22px;margin-right:6px">
                <span style="font-size:18px">使用手机号登录</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            input:'',
            isPassword:false,
            username: "",
            password: "",
            checked:false
        }
    },
    mounted() {
        this.getCookie();
    },
    methods:{
        blurAcc(e){
            let val = e.target.value
            let re = /(^[a-zA-Z]{3,15}$|^1\d{10}$|^\w+@\w+\.[a-z]{2,3}$)/
            // let re =/(^[a-zA-Z]{3,15}$|^1\d{10}$)/
            let res = re.test(val)
            // console.log(res)
            // if(!res){
            //     console.log('111') 
            // }
            
            if(!re.test(val)){
               this.$refs.acc.style.color = 'red'
               e.target.style.border = '1px solid red'
            }
        },
        blurSec(e){
            let val = e.target.value
            console.log(val)
            let re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
            
            if(!re.test(val)){
                this.$refs.password.style.color = 'red'
                this.$refs.passwordBox.style.border = '1px solid red'
                this.isPassword = true
            }
        },
        focusPass(){
            this.$refs.password.style.color = '#333333'
            this.$refs.passwordBox.style.border = '1px solid #ccc'
            this.isPassword = false
        },
        forgPass(){
            this.$router.push({name:'UpdatePass'})
        },
        // 登录
        loadData() {
            if (Boolean(this.checked) == true) {
                console.log(this.checked);
                // 将账号密码勾选状态存入cookie中，并设置储存天数
                this.setCookie(this.username, this.password,this.checked, 7);
            } else {
                //  清除cookie值
                this.clearCookie();
            }
            this.$router.push('/main')
        },
        //设置cookie
        setCookie(c_name, c_pwd,c_che, exdays) {

            var exdate = new Date(); //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
            //字符串拼接cookie
            window.document.cookie =
                "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie =
            "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();

            window.document.cookie =
            "userChe" + "=" + c_che+ ";path=/;expires=" + exdate.toGMTString();
        },

        //读取cookie
        getCookie: function () {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split("="); //再次切割
                    //判断查找相对应的值
                    console.log(arr2);
                    if (arr2[0] == "userName") {
                        this.username = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == "userPwd") {
                        this.password = arr2[1];
                    }else if(arr2[0]=="userChe") {
                        if(arr2[1]==-1){
                        this.checked=false
                        }else {
                        this.checked=arr2[1];
                        }
                    }
                }
            }
        },
        //清除cookie
        clearCookie: function () {
            this.setCookie("", "","", -1); //修改2值都为空，天数为-1就好了
            },
        }
    
}
</script>

<style scoped>
.input-box{
    width:450px;
    height: 50px;
    margin:10px auto;
    margin-top:20px
}
.input{
    font-size: 20px;
    color: #555555;
    border-radius: 0;
    box-shadow: none;
    border: 1px solid #ccc;
    width:450px;
    height: 50px;
    box-sizing: border-box;
    padding-left: 18px;
    
}
.account{
    color: #333333;
    font-size: 18px;
    width:450px;
    margin:5px auto;
    font-weight: bold;
}
.secr{
    margin-top:40px;
    display: flex;
    justify-content: space-between;
}
.keep-secr{
    display: flex;
    justify-content: space-between;
    width:450px;
    margin:20px auto;
    font-size: 18px;
}
.checkbox{
    width: 100px;
    display: flex;
    justify-content: space-between;
    color: #333333;
    
}
.login-box{
    width: 450px;
    height: 60px;
    background: #2C3E50;
    margin:30px auto;
    color: white;
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
}
.how-login{
    display:flex;
    width:450px;
    justify-content:space-between;
    margin:30px auto;
    border-radius:5px
}
</style>