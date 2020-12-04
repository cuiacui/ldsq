<template>
  <div class="nav">
      <div class="nav-img">
        <img src="../../public/img/wx-img.jpg" class="nav-img">
      </div>
      <div class="nav-more">
        <ul class="nav-ul">
          <li class="nav-ul-li">咨询
            <div class="nav-ul-li-div">
                <span>视频</span>
                <span>出行</span>
                <span>年轻一代</span>
                <span>前沿科技</span>
                <span>财经</span>
                <span>娱乐淘金</span>
                <span>医疗健康</span>
                <span>文化教育</span>
                <span>出海</span>
                <span>金融地产</span>
                <span>企业服务</span>
                <span>创业维艰</span>
                <span>社交通讯</span>
                <span>全球热点</span>
                <span>生活强调</span>
            </div>
          </li>
          <li>视频</li>
          <li>24小时</li>
        </ul>
        <div class="nav-right">
          <el-button round size="small" plain class="nav-btn">投稿</el-button>
            <i class="el-icon-zoom-in"></i>
            <div class="logo-tb">
              <!-- <el-button type="text" class="el-icon-user-solid" @click="open"></el-button> -->
              <div class="login-over">
                <img src="../../public/img/logo-tb.png" class="login-ove-img" alt="">
                  <div class="logo-tb-dh">
                    <div>个人中心</div>
                    <div>互动消息</div>
                    <div>系统通知</div>
                    <div>退出登录</div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      
      
  </div>
</template>

<script>
export default {  
   methods: {
      open() {
        this.$alert('登录内容', '登录', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `登录成功 ${ action }`
            });
          }
        });
      }
    }
  }
</script>

<style>
.nav{
  width: 1094px;
  background-image: url(../../public/img/nav.jpg);
  display: flex;
  align-items: center;
  position: fixed;
  height: 70px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 10001;
}
.nav-img{
  width: 100px;
  height: 70px;
<<<<<<< HEAD
  cursor: pointer;
=======
>>>>>>> b8897b7... 添加了登录注册
}
.nav-more{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 994px;
}
.nav-ul{
  display: flex;
  padding-left: 50px;
  height: 70px;
  align-items: center;
}
.nav-ul li{
<<<<<<< HEAD
  cursor: pointer;
}
.nav-ul li{
=======
>>>>>>> b8897b7... 添加了登录注册
  margin: 0 30px;
}
.nav-right{
  display: flex;
  align-items: center;
}
.nav-btn{
<<<<<<< HEAD
  height: 30px;
  width: 70px;
=======
  height: 35px;
>>>>>>> b8897b7... 添加了登录注册
  color: black;
  border-color: black;
}
.el-button.is-plain:hover{
  color: white;
  background-color: black;
  border-color: black;
}
.el-icon-zoom-in{
  font-size: 25px;
  color: #999;
  margin-left: 50px;
}
.el-icon-zoom-in:hover{
  color: black;
  cursor: pointer;
}
.nav-ul-li{
  position: relative;
  cursor: pointer;
  height: 70px;
  /* vertical-align: middle; */
  /* line-height: 70px; */
  display: flex;
  align-items: center;
}
.nav-ul-li-div{
    background-color: #fff;
    width: 1094px;
    height: 0px;
    position: absolute;
    top: 70px;
    left: -180px;
    box-sizing: border-box;
    padding: 0 170px;
    overflow: hidden;
    transition: all .5s;
}
.nav-ul-li-div span{
  color: #999;
  padding: 0px 3px;
}
.nav-ul-li-div span:hover{
  color: #333;
}
.nav .nav-ul .nav-ul-li .nav-ul-li-div span{
  padding-right:30px;
  line-height: 35px;
  font-size: 16px;
}
.nav-ul-li:hover .nav-ul-li-div{
  height: 70px;
  z-index: 101;
}
.logo-tb{
  height: 35px;
  width: 35px;
  background-color: #fff;
  border-radius: 50% 50%;
  margin-left: 55px;
  cursor: pointer;
  text-align: center;
  line-height: 35px;

}
.login-over{
  background:black;
  position: relative;
}
.login-ove-img{
  display: block;
  border-radius: 50%;
}
.logo-tb-dh{
  position: absolute;
  width: 70px;
  box-sizing: border-box;
  top: 40px;
  left: -44px;
  background-color: #999;
  transform-origin: top;
  transform: scaleY(0);
  /* display: none; */
  transition: all .3s;
  z-index: 999;
}
.logo-tb-dh div{
  width: 120px;
  background-color: #999;
}
.logo-tb-dh div:hover{
  background-color: #777;
}
.login-over:hover .logo-tb-dh{
  /* transform-origin: top; */
  transform: scaleY(1);
  /* display: block; */
}
.el-icon-user-solid{
  margin-top: -9px;
  font-size: 25px;
}
.logo-tb img{
  height: 35px;
  width: 35px;
}

</style>
