<template>
  <div>
      <Nav></Nav>
      <div class="personalBgc">
        <!-- 个人资料 -->
      <div class="personalData">
        <!-- personal-head -->
        <div class="personal_head">
          <img :src='$store.state.personal.personal_head' style="display:block;width:80px;height:80px;margin:0 auto;cursor: pointer;" alt="头像">
          <p style="text-align:center;font-size:16px;color:#333;margin:5px 0;cursor: pointer;">{{$store.state.personal.personal_nickname}}</p>
          <p style="text-align:center;font-size:16px;color:#333;margin:5px 0;cursor: pointer;" >{{$store.state.personal.personal_introduce}}</p>
        </div>
        <!-- 用户资料 -->
        <div class="personal_detail">
          <div class="personal_update">
            <span class="el-icon-edit-outline" >&nbsp; &nbsp;&nbsp;&nbsp;修改资料</span>
          </div>
          <div class="personal_detail_content_left">
            <ul>
              <li style="margin-bottom:35px;">公司：{{$store.state.personal.personal_left.personal_company}}</li>
              <li style="margin-bottom:35px;" >职业：{{$store.state.personal.personal_left.personal_job}}</li>
              <li style="margin-bottom:35px;" >邮箱：{{$store.state.personal.personal_left.personal_email}}</li>
            </ul>
          </div>
          <div class="personal_detail_content_right">
            <ul>
              <li style="margin-bottom:35px;">微博：{{$store.state.personal.personal_right.personal_weibo}}</li>
              <li style="margin-bottom:35px;" >微信：{{$store.state.personal.personal_right.personal_weixin}}</li>
              <li style="margin-bottom:35px;" >钱包余额：{{$store.state.personal.personal_right.personal_money}} &nbsp; 元</li>
              <li style="margin-bottom:35px;" >
                 赞赏状态：{{$store.state.personal.personal_right.personal_zan}}  
                 <el-button plain style="margin-left:50px;">关闭</el-button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 我的信息 -->
      <div class="personalMain">
          <div class="personalMain_left">
            <ul id="ulbiao">
             <router-link to="/main"><li class="myNews ">我的消息</li></router-link>
             <router-link to="/artical"><li class="myNews">我的文章</li></router-link>
             <router-link to="/my24"><li class="myNews">我的24小时</li></router-link>
             <router-link to="/comment"><li class="myNews">我的评论</li></router-link>
             <router-link to="/collection"><li class="myNews">我的收藏</li></router-link>
             <router-link to="/zan"><li class="myNews">我的点赞</li></router-link>
            </ul>
          </div>  
          <div class="personalMain_right">
            <router-view></router-view>
          </div>      
      </div>
      </div>
      
  </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
  components:{
    Nav,
  },
  data(){
    return {

    }
  },
  methods:{   
  }

}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
/* 背景框 */
.personalBgc{
  background-color:#F0F4FB;
  height: 939px;
  padding-top: 90px;
}
/* 上部数据 */
.personalData{
  width:1170px;
  height: 290px;
  padding-bottom:30px ;
  background: #fff;
  margin: 0  auto  30px;
  display: flex;
}
/* 用户头像 */
.personal_head{
  width: 210px;
  height: 137px;
  padding:30px;
}
/* 用户资料 */
.personal_detail{
  width: 815px;
  height: 245px;
  padding:65px 35px 0 50px ;
  display: flex;
  position: relative;
  border-left: 1px solid #F0F0F0;
}
/* 用户资料左侧 */
.personal_detail_content_left{
padding: 0px 15px;
margin:0;
flex:1;
font-size: 16px;
}
/* 用户资料右侧
 */
.personal_detail_content_right{
  flex: 1.5;
}
.personal_update{
  position: absolute;
  top:25px;
  right: 25px;
}
.el-icon-edit-outline{
  height: 21px;
  font-size:17px ;
  color: #ff6060;
  cursor: pointer;
}
/* 我的信息 */
.personalMain{
  width:1170px;
  height: 500px;
  padding-bottom:30px ;
  background: #fff;
  margin: 0 auto ;
  display: flex;
}
.personalMain_left{
   background-color: #FAFAFA;
  width: 270px;


}
.myNews{
  list-style-type: none;
  list-style-position:inside;
  width: 270px;
  height: 60px;
  line-height: 60px;
  color: #303030;
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid #f5f5f5;
  background-color: #FAFAFA;
  /* border-left: 1px solid #909090; */
}
.myNews:hover{
  color:#337ab7;
}
.personalMain_right{
  border-left: 1px solid #F0F0F0;
}
.selected{
  background: red;
}
</style>