<template>
    <div :class="{main,mainA}" @click="toVideo">
      <div class="main-big"> 
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
      <div v-for="index in 2" :key="index">
          <ConsInto v-for="(item,index) in mainCard" :key="index" 
                    :imgs="item.imgs"
                    :title="item.title"
                    :user="item.user"
                    :date="item.date"
                    :start_num="item.start_num"
                    :coll_num="item.coll_num"
                    >
          </ConsInto>
      </div>
    </div>
</template>

<script>
import ConsInto from './ConsInto'
export default {
    components:{
        ConsInto
    },
    props:{
        imgs: String,
        title: String,
        user: String,
        date: Number,
        start_num: Number,
        coll_num: Number,
        mainA:Boolean
    },
    data(){
        return{
               main:true,
               mainCard:[                    //插入图片
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                }
              ]   
        }
    },
    methods:{
      toVideo(){
        this.$router.push({
          path : '/video'
        })
      }
    }
}
</script>

<style scoped>
.main{
    width: 1036px;
    /* height: 289px; */
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}
.mainA{
    width: 1036px;
    /* height: 289px; */
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-direction: row-reverse;
}
.main-big{
  width: 512px;
  height: 289px;
  background: #f4f4f4;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  margin: 10px 0;
}
/* 主图 */
.main-pic-img{
    width: 100%;
    height: 100%;
}
.main-img{
  display: block;
  width: 100%;
  height: 100%;
}
.main-tic{
  width: 100%;
  height: 98px;
  padding: 13px 12px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
/* 标题 */
.main-title{
  height: 17px;
  line-height: 17px;
  font-size: 16px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 10px;
}
/* 用户 */
.main-user{
  font-size: 14px;
  color: #fff;
  font-weight: normal;
}
.main-user:hover{
  color: #378bd2;
}
.main-staus{
  width: 100%;
  height: 16px;
  font-size: 12px;
  color: #d1d1d1;
  display: flex;
  justify-content: space-between;
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
  color: #d1d1d1;
}
/* 收藏 */
.main-content-coll{
  width: 32px;
  color: #d1d1d1;
}
</style>