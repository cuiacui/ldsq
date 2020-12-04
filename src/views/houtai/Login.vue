
<template>
  <div id="login">
    <h1>灵动社区注册</h1>
    <p>
      <span>请输入用户名:</span
      ><el-input
        class="login_input"
        placeholder="请输入内容"
        v-model="input"
        clearable
        @blur="user(input)"
      >
      </el-input>
    </p>
    <p>
      <span>请输入密码:</span
      ><el-input
        class="login_input"
        placeholder="请输入密码"
        v-model="password"
        show-password
        @blur="pwd(password)"
      ></el-input>
    </p>
    <p>
      <span>请确认密码:</span
      ><el-input
        class="login_input"
        placeholder="请输入密码"
        v-model="surepwd"
        show-password
        @blur="ensurepwd(surepwd)"
      ></el-input>
    </p>
    <p class="p_btn">
      <el-button class="login_btn" type="primary" @click="submit"
        >注册</el-button
      > <el-button class="login_btn" type="primary" @click="goreg"
        >去登陆</el-button
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      password: "",
      surepwd: "",
      list: [],
      userlist:[],
    };
  },
  methods: {
    user(item) {
      let reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
      if (item.trim() == "") {
        alert("用户名不能为空");
      } else if (!item.match(reg)) {
        alert("用户名格式不对");
      } else {
        this.list.push(true);
      }
    },
    pwd(item) {
      let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/;
      if (item.trim() == "") {
        alert("请输入你的密码");
      } else if (item.length < 6) {
        alert("密码长度不够");
      } else if (!item.match(reg)) {
        alert("密码格式不对");
      } else {
        this.list.push(true);
      }
    },
    ensurepwd(item) {
      if (item == this.password) {
        this.list.push(true);
      } else {
        alert("两次密码输入不一致");
      }
    },
    submit() {
      if (this.list.length ==0 ||this.list.indexOf(false) == 1) {
        alert("请完善注册信息");
      } else {
        alert("注册成功");
        this.userlist.push({
            username:this. input,
            userpwd:this.password
        })
        this.list = [];
      }   console.log(this.userlist)
        localStorage.setItem('user',JSON.stringify(this.userlist)) ;
      //   if(this.input){
      //   alert('注册成功')
      //   }
    },
     goreg(){
          this.$router.push({
              name:'Regin',
          })
     }
  },
};
</script>
<style>
#login {
  width: 50%;
  padding: 20px;
  margin: 50px auto;
  text-align: center;
  border: 5px solid pink;
}
.login_input {
  width: 300px;
  margin: 50px 0px 0 20px;
}
.p_btn {
  display: flex;
  justify-content: space-evenly;
}
.login_btn {
  margin-top: 50px;
}
</style>