<template>
<div>
  <!-- 头部 -->
  <div style="position : fixed ; top : 0 ; width : 100%">
    <Nav style="margin : 0 auto"></Nav>
  </div>
  <!-- 主体内容 -->
  <div class="news">                                               
        <!-- 主图 -->
        <img class="mainPic" :src="msgDate.msgPic[0]" >
        <!-- 发布日期         -->
        <div>
          <el-tag type="danger">原创</el-tag>
           <span v-html="msgDate.createTime" style="margin-left : 10px"></span>
        </div>
        <!-- 文章标题 -->
        <h1 v-text="msgDate.msgTitle"></h1>
        <!-- 发布者信息 -->
        <div class="pubUser">
          <!-- 头像 -->
          <div class="pubPic">
            <img :src="msgDate.pubPic">
          </div>
          <!-- 发布者姓名 -->
          <a class="pubName" href="javascript:;" v-text="msgDate.pubName"></a>
          <a href="javascript:;" style="margin-left : 5px">
            <img src="img/97_1591866915.jpg" style="width : 16px">
            <img src= "img/97_1591866959.jpg" style="width : 16px">
          </a>
          <!-- 关注按钮 -->
          <el-button type="danger" :plain="true" size="mini" round @click="changeConcern()" style="margin-left : 10px" v-text="msgDate.Concern"></el-button>
        </div>
        <!-- 文章内容 -->
        <div class="mainMsg" v-html="msgDate.htmlText">
        </div>
        <!-- 赞赏/支持一下 -->
        <div class="dianzan"> 
          <div>
            <el-button type="danger" round style="margin : 15px auto">赞赏</el-button>
          </div>
          <span>支持一下</span>
        </div>
        <!-- 相关推荐 -->
        <h3>相关推荐</h3>
        <div class="relateds" >
            <div class="related" v-for="item in recommend" :key="item">
              <a :href="item.reHref">
                <img :src="item.rePic" style="width : 182px" >
                <div v-text="item.reTxt"></div>
              </a>
            </div>
        </div>
        <!-- 评论 -->
        <h3>评论</h3>
        <el-input
          type="textarea"
          rows=3
          placeholder="请输入内容"
          class = "textarea"
          v-model="inputTextValue"
          resize="none"
          >
        </el-input>
        <button class="pl_btn" @click="addComment">发表</button>
        <h3>最新评论</h3>
        <div>
              <!-- 评论卡片 -->
            <div v-for="(item,index) in pl.pl_list" :key="index" class="pl_card">
              <div class="pl_header">
                <img :src="item.userPic" style="width : 30px ;  height : 30px ; border-radius : 50%"> 
                <span >{{item.name}}</span>
              </div>
              <div class="pl_body"> 
                    {{item.msg}}
                    <br>
                    <textarea cols="115" rows="7" style="resize:none ; display : none " ></textarea>
              </div>
                <div class="pl_footer">
                  <span class="pl_time">{{item.createTime}}</span>
                  <div class="pl_set">
                    <button ><div class="iconfont icon-support" :style="item.pl_zanColor" @click="pl_zan(item)"></div></button>
                    <button style="margin : 10px 15px"><div class="iconfont icon-cai" :style="item.pl_caiColor" @click="pl_cai(item)"></div></button>
                    <button @click="pl_del(index)">删除</button>
                  </div>
                </div>
            </div>
        </div>
  </div>
  <!-- 尾部 -->
  <Fotter></Fotter>

  <!-- 侧边导航栏 -->
  <aside-nav></aside-nav>
</div>

</template>

<script>
import Nav from '../components/Nav'
import AsideNav from "../components/AsideNav"
import Fotter from '../components/Fotter.vue'
export default {
  components : {
    "aside-nav" : AsideNav,
    Fotter,
    Nav
  },
    data(){
      return {
        msgDate : {//文章内容
            msgPic:["https://img.huxiucdn.com/article/cover/202011/26/191056472676.jpg?imageView2/1/w/800/h/450/|imageMogr2/strip/interlace/1/quality/85/format/jpg"],//主图
            htmlText : "<h1>1111</h1><h1>1111</h1><h1>1111</h1><h1>1111</h1><h1>1111</h1><h1>1111</h1><h1>1111</h1><h1>1111</h1><h1>1111</h1><h1>1111</h1>" ,  //主要内容 
            createTime : "2020-11-26 19:58",  //发布日期
            msgTitle : "你看那个京东，好像两年前的腾讯啊", //文章标题
            pubPic : "https://s0-img.huxiucdn.com/auth/data/avatar/002/19/50/90_1529373985.jpg?imageView2/1/w/60/h/60/|imageMogr2/strip/interlace/1/quality/85/format/jpg?imageView2/1/w/80/h/80/|imageMogr2/strip/interlace/1/quality/85" ,    //发布者头像
            pubName : "拉布拉卡", //发布者姓名
            Concern : "关注",  //关注/已关注 
            Concernflag : true,   //是否关注  
        },    
        inputTextValue : ""   , //评论输入框内容
        pl : { //评论
           pl_list : [  //评论展示
              {
                  name : "li",   //评论人昵称
                  userPic : "https://s0-img.huxiucdn.com/auth/data/avatar/002/97/58/43_1606371779.jpg?imageView2/1/w/80/h/80/|imageMogr2/strip/interlace/1/quality/85",  //评论人头像
                  msg : "xxxxx", //评论内容
                  createTime : this.pl_time(),  //评论日期
                  pl_isZan : false,   //是否点赞
                  pl_isCai : false,   //是否点踩
                  pl_zanColor : {  // 点赞样式
                    color :""
                  },  
                  pl_caiColor : {  //点踩样式                                             
                    color : ""
                  }
              } 
            ], 
        },
        recommend :[
          {
            rePic : "https://img.huxiucdn.com/article/cover/202009/09/142128077538.jpg?imageView2/1/w/240/h/135/|imageMogr2/strip/interlace/1/quality/85/format/jpg", //推荐图片 
            reTxt : "平成电影30梦", //推荐描述
            reHref : "https://www.huxiu.com/article/380919.html" ,//推荐连接
          },
          {
            rePic : "https://img.huxiucdn.com/article/cover/202009/09/142128077538.jpg?imageView2/1/w/240/h/135/|imageMogr2/strip/interlace/1/quality/85/format/jpg", //推荐图片 
            reTxt : "平成电影30梦", //推荐描述
            reHref : "https://www.huxiu.com/article/380919.html" ,//推荐连接
          },
          {
            rePic : "https://img.huxiucdn.com/article/cover/202009/09/142128077538.jpg?imageView2/1/w/240/h/135/|imageMogr2/strip/interlace/1/quality/85/format/jpg", //推荐图片 
            reTxt : "平成电影30梦", //推荐描述
            reHref : "https://www.huxiu.com/article/380919.html" ,//推荐连接
          }
          ,{
            rePic : "https://img.huxiucdn.com/article/cover/202009/09/142128077538.jpg?imageView2/1/w/240/h/135/|imageMogr2/strip/interlace/1/quality/85/format/jpg", //推荐图片 
            reTxt : "平成电影30梦", //推荐描述
            reHref : "https://www.huxiu.com/article/380919.html" ,//推荐连接
          },
          {
            rePic : "https://img.huxiucdn.com/article/cover/202009/09/142128077538.jpg?imageView2/1/w/240/h/135/|imageMogr2/strip/interlace/1/quality/85/format/jpg", //推荐图片 
            reTxt : "平成电影30梦", //推荐描述
            reHref : "https://www.huxiu.com/article/380919.html" ,//推荐连接
          }
        ]
      }
    },
    
    methods:{
      changeConcern(){//是否关注作者
        this.msgDate.Concernflag = !this.msgDate.Concernflag;
        if(this.msgDate.Concernflag == false){``
          this.msgDate.Concern = "已关注";
          this.$message({
            showClose: false,
            message: '已关注',
            type: 'success'
          });  
        }else{
          this.msgDate.Concern = "关注";
          this.$message({
            showClose: false,
            message: '已取消关注',
            type: 'error'
          });
        }
      },
      addComment(){  //添加评论
          this.pl.pl_list.unshift({
              name : "li",  //当前账号的昵称
              userPic : "",  //当前账号头像
              msg : this.inputTextValue,
              createTime : this.pl_time() ,                                                                                     
              pl_isZan : false,   //是否点赞
              pl_isCai : false,   //是否点踩
              pl_zanColor : {  // 点赞样式
                color :""
              },  
              pl_caiColor : {  //点踩样式                                             
                color : ""
              }
          })
          this.inputTextValue = "";  //清空输入框
      },
      pl_zan(item){  //点赞
        console.log(item);
        item.pl_isZan = !item.pl_isZan;
        item.pl_isCai = false;
        if(item.pl_isZan == true){
            item.pl_zanColor.color = "red"
        }else{
            item.pl_zanColor.color = "gray"
        }
        if(item.pl_isCai == true){
            item.pl_caiColor.color = "red"
        }else{
            item.pl_caiColor.color = "gray"
        }
      },
      pl_cai(item){  //点踩
        console.log(item);
        item.pl_isZan = false;
        item.pl_isCai = !item.pl_isCai;
        if(item.pl_isCai == true){
            item.pl_caiColor.color = "red"
        }else{
            item.pl_caiColor.color = "gray"
        }
        if(item.pl_isZan == true){
            item.pl_zanColor.color = "red"
        }else{
            item.pl_zanColor.color = "gray"
        }
      },
      pl_del(index){  //删除评论
        this.pl.pl_list.splice(index,1)
      },
      pl_time(){
        let d = new Date();
        return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
      }

    }
} 

</script>

<style scoped>
    /* 主内容 */
    .news{ 
      width : 800px;
      /* border : 1px solid black; */
      margin : 450px auto 0;
      background-color: white;
      padding : 10px 0;
    }
    .news h3{
      margin: 20px;
    }
    /* 主图 */
    .mainPic{
      position: fixed;
      margin : 0 auto;
      top : 102px;
      z-index: -999;
    }
    /* 文章内容 */
    .mainMsg {
      width: 100%;
      height: 100%;
    }
    /* 发布者 */
    .pubUser{
      display: flex;
      align-items: center;
      padding: 5px ;
    }
    /* 发布者头像 */
    .pubPic{
      width: 30px;
      height : 30px;
      border-radius: 50%;
      overflow: hidden;
      margin-right : 10px;
    }
    .pubPic img{
      width: 100%;
      cursor: pointer;
    }
    /* 姓名 */
    .pubName{
      text-decoration: none;
      color : black;
    }
    .pubName:hover{
        color : skyblue;
    }   
    /* 赞赏 */
    .dianzan{
      margin: 0 auto;
      display: flex;
      width: 100%;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    } 
    /* 相关推荐 */
    .relateds{
      width: 788px;
      height: 170px;
      overflow-x:auto ;
      display: flex;
    }
    /* .relateds::-webkit-scrollbar {
                display: none;
    } */
    .related{
      flex:none;
      width: 182px;
      height : 162px ;
      background-color: blanchedalmond;
      margin-right : 5px;
    }

    /* 评论 */
    .textarea{
      width : 749px;
      resize : none;
      height:70px;
      border-right: white 1px solid;
    }
    .pl_btn{
      width: 50px;
      height: 70px;
      font-size : 16px;
      background-color: #fff;
      border:1px solid gray ;
      outline: none;
      border-left: none;
    }

    /* 评论展示 */
    .pl_card{
      background-color: #eef;
      padding: 15px;
      margin-bottom: 15px;
    }
    .pl_header{
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .pl_header img{
      width: 50px;
      height : 50px;
      margin-right: 15px;
    }
    .pl_footer {
      padding: 10px ;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .pl_body{
      border-bottom: 1px solid #eee;
      margin-top: 15px;
      text-indent: 5px;
      font-size: 18px;
      color: gray;
      transition: .5s;
    }
    .pl_body:hover{
      transform: translateX(-5px);
    }
    .pl_time{
      color : gray;
      font-size: 14px;
    }

    /* 侧边导航 */
    .asideNav{
      position: fixed;
      top : 30%;
      right:50px;
    }

</style>