<template>
  <div>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <div>
              <i class="header-icon el-icon-info"></i><span>用户名：</span><span v-text="userName"></span>
            </div>
            
          </template>
          <div>
              <i class="header-icon el-icon-info"></i><span>新用户名：</span><input type="text" v-model="newUserName">
            </div>
            <el-button type="primary" @click="changeName">完成</el-button>
        </el-collapse-item>
        

        <!-- 头像 -->
        <el-collapse-item>
          <template slot="title">
            <div>
              <i class="header-icon el-icon-info"></i><span>头像：</span><img :src="userPic" style="width:50px;height:50px;border-radius:50%">
            </div>
            
          </template>
              <span>仅支持JPG、PNG格式的图片文件，小于2MB</span>
              <!-- 上传头像  action为上传地址-->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon">用户上传</i>
              </el-upload>
              <div>
                  <img :src="imageUrl" style="width:50px;height:50px;border-radius:50%;overflow:hidden">  
              </div>      
        </el-collapse-item>

        <!-- 更换密码 -->
        <el-collapse-item>
          <template slot="title">
            <i class="header-icon el-icon-info"></i><span>设置密码：</span>
          </template>
            <div>
              <i class="header-icon el-icon-info"></i><span>密码：</span><input type="password" v-model="userPassword">
            </div>
            <div>
              <i class="header-icon el-icon-info"></i><span>确认密码：</span><input type="password" v-model="surePassword">
            </div>
            <el-button type="primary" @click="changepassword" >完成</el-button>
        </el-collapse-item>


      </el-collapse>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName : "11",  //用户名
      newUserName : "" ,//新用户名
      userPic:"https://s0-img.huxiucdn.com/auth/data/avatar/002/97/58/43_1606371779.jpg" , //用户头像
      imageUrl: '' , //新头像
      userPassword : "" , //第一次输入密码
      surePassword : "", //确认密码
      password:"",//修改后的密码
    }
  },
  methods:{
    changeName(){  //修改用户名
      this.userName = this.newUserName;
    },
    handleAvatarSuccess(res, file) { //上传头像
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

    changepassword(){//判断密码
      if(!this.userPassword){
        this.$message({
          showClose: true,
          message: '密码不能为空!',
          type: 'error'
        })
      }else{
          if(this.surePassword != this.userPassword){
            this.$message({
              showClose: true,
              message: '两次密码输入不一致!',
              type: 'error'
            })
          }else{
            this.$message({
              showClose: true,
              message: '修改密码成功!',
              type: 'success'
            });
            this.password = this.newUserName; //修改成功后的密码
          }
      }
    }


  }
}
</script>

<style scoped>

    /* 上传头像 */
    .avatar-uploader .el-upload {
        border: 1px dashed #999;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 14px;
        background: #eee;
        color: #000;
        width: 120px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }

      

</style>