<template>
  <div>
    <!-- 侧边栏 -->
    <div class="asideNav">

        <!--回到顶部-->
        <div class="gotop" @click="gototop">
            <div class="gototop" >
            回顶部
            <div class="el-icon-arrow-up"></div>
            </div>
        </div>
        <!-- 下载 -->
        <div style="position :relative" class="downs">
            <div class="gotop">
                <div class="gototop" >
                <div>下载</div>
                <div class="el-icon-s-shop"></div>
                </div>
            </div>
            <img :src="downMa" class="downMa" >
        </div>
        
        <!-- 分享 -->
        <div style="position :relative" class="downs share">
            <div class="gotop">
                <div class="gototop" >
                <div>分享</div>
                <div class="el-icon-share"></div>
                </div>
            </div>
        </div>

        <!-- 收藏 -->
        <el-badge :value="collNum" class="item">
            <div style="position :relative" class="downs">
                <div class="gotop">
                    <div class="gototop" @click="iscoll" >
                    <div v-text="collTxt"></div>
                    <div class="el-icon-s-flag collflag" :style="collColor" ></div>
                    </div>
                </div>
            </div>
        </el-badge>
        
        <!-- 评论 -->
        <div style="position :relative" class="downs">
            <div class="gotop">
                <div class="gototop" >
                <div>评论</div>
                <div class="el-icon-s-comment"></div>
                </div>
            </div>
        </div>

        <!-- 点赞 -->
        <el-badge :value="zanNum" class="item">
            <div style="position :relative" class="downs">
                <div class="gotop">
                    <div class="gototop" @click="iszan" >
                    <div v-text="zanTxt"></div>
                    <div class="iconfont icon-zan" :style="zanColor"></div>
                    </div>
                </div>
            </div>
        </el-badge>

        

    </div>
  </div>
</template>

<script>
export default {
    // props:{
    //     downMa : String,  //二维码 src地址
    //     collTxt : String , //显示  收藏  / 取消   默认收藏
    //     isColl : Boolean ,  //是否收藏  true 为收藏  false : 取消收藏
    //     collNum : Number , // 收藏数量
    //     zanTxt :  String , //显示 点赞 / 取消 默认点赞
    //     isZan : Boolean , //是否点赞  true 为点赞 false : 取消点赞
    //     zanNum : Number , // 点赞数量
    //     collColor : Object , //是否收藏样式  { color : "red"}
    //     zanColor : Object , //是否点赞样式   {color : "red"}
    // },
    data(){
        return{
            collNum : "0",   //收藏数量
            collTxt : "收藏",// 收藏/取消
            isColl : true  , //是否收藏
            collColor : {
              color : ""
            }, //收藏样式 
            zanTxt : "点赞" , //点赞文字
            isZan : true,   //是否点赞
            zanColor : {
              color : ""
            },  //点赞样式
            zanNum : "0", //点赞数量 
            downMa :"https://s1-www.huxiucdn.com/public/download-app-G9.png"   //手机下载二维码   
        }
    },
    methods:{
      // gototop(){//回到顶部
      //   clearInterval(timer);
      //    var timer = setInterval(()=>{
      //      var  num = window.pageYOffset;
      //     //  var number =   window.pageYOffset;
      //      num = num - num / 20;
      //      if(num < 0 || num == 0){
      //         num = 0;
      //          window.scrollTo(0,0) 
      //      }
      //      window.scrollTo(0,num) 
      //    },1)
      // },
      gototop(){
        window.scrollTo(0,0)
      },
      
      iscoll(){ //是否收藏
        this.isColl = !this.isColl;
        if(this.isColl == true){
          this.collTxt = "收藏";
          this.collNum --;
          this.$message({
            showClose: true,
            message: '已取消收藏',
            type: 'error'
          }); 
          this.collColor.color = "gray";
        }else{
          this.collTxt = "取消";
          this.collNum ++;
          this.$message({
            showClose: true,
            message: '已收藏',
            type: 'success'
          });
          this.collColor.color = "red";
        }
      },
      iszan(){ //是否点赞
        this.isZan = !this.isZan;
        if(this.isZan == true){
          this.zanTxt = "点赞";
          this.zanNum --;
          this.$message({
            showClose: true,
            message: '取消赞',
            type: 'error'
          }); 
          this.zanColor.color = "gray";
        }else{
          this.zanTxt = "取消";
          this.zanNum ++;
          this.$message({
            showClose: true,
            message: '点赞成功',
            type: 'success'
          });
          this.zanColor.color = "red";
        }
      }
    }
}
</script>

<style scoped>
   /* 侧边导航 */
    .asideNav{
      position: fixed;
      top : 30%;
      right:50px;
    }
    /* 回顶部 */
    .gotop{
      width: 50px;
      height : 50px ;
      border-radius: 50%;
      background-color: white;
      border: 1px solid slategray;
      text-align: center;
      line-height: 50px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      margin-bottom: 20px;
    }
    .gotop:hover .gototop{
      top : 0
    }
    .gototop{
      width: 50px;
      height : 100px ;
      color: slategray;
      text-align: center;
      line-height: 50px;
      position: absolute;
      top: -50px;
      left: 0;
      transition: 0.5s;
    }
    .gototop a{
      text-decoration: none;
      color : black
    }
    .el-icon-star-on{
       width: 50px;
       height : 50px ;
       text-align: center;
       line-height: 50px;
       font-size: 46px;
       color: gray;
    }
    /* 下载二维码 */
    .downs{
      width:50px;
      margin-bottom: 20px;
    }
    .downs:hover .downMa{
      opacity: 1;
    }
    .downMa{
      width: 100px;
      height : 100px;
      position: absolute;
      left: -120px;
      top : -20px;
      opacity: 0;
      background-color: white;
      transition: 0.5s;
    }
    
</style>