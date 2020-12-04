<template>
    <div class="main-pic">
      <!-- 主图 -->
      <div class="main-pic-img" >
        <img :src="imgs" class="main-img">
      </div>
      <div class="main-tic">
        <!-- 标题 -->
        <h5  class="main-title">{{title}}</h5>
        <!-- 用户 -->
        <span class="main-user">{{user}}</span>
        <div class="main-staus">
          <!-- 发布时间 -->
          <span class="main-hour">{{date}}小时前</span>
          <!-- 评论 -->
          <div class="main-content">
            <span class="main-content-more">
              <b class="main-content-num">{{start_num}}</b>
              <i class="el-icon-s-comment"></i>
            </span>
            <!-- 收藏 -->
            <span class="main-content-coll">
              <b class="main-content-num">{{coll_num}}</b>
              <i class="el-icon-s-home"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        imgs: String,
        title: String,
        user: String,
        date: Number,
        start_num: Number,
        coll_num: Number
    },
    data(){
        return{
                    
        }
    },
    methods:{
      
    }
}
</script>


<style scoped>
.main-pic{
  width: 262px;
  height: 299px;
  /* float: left; */
  display: inline-block;
  background: #f4f4f4;
  /* margin-right: 11px; */
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
}
/* 主图 */
.main-img{
  display: block;
  width: 262px;
  height: 147px;
}
.main-tic{
  width: 238px;
  height: 126px;
  padding: 13px 12px;
  box-sizing: border-box;
}
/* 标题 */
.main-title{
  height: 48px;
  line-height: 24px;
  font-size: 16px;
  color: #27282D;
  font-weight: normal;
  margin-bottom: 15px;
}
/* 用户 */
.main-user{
  font-size: 14px;
  color: #3c3d3f;
  font-weight: normal;
}
.main-user:hover{
  color: #378bd2;
}
.main-staus{
  width: 238px;
  height: 16px;
  font-size: 12px;
  color: #bfbfbf;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
/* 发布时间 */
.main-hour{
  width: 54px;
}
/* 评论 */
.main-content{
  display: flex;
}
.main-content-more{
  width: 48px;
}
.main-content-num{
  font-weight: normal;
}
/* 收藏 */
.main-content-coll{
  width: 32px;
}
</style>