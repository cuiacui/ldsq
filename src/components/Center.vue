<template>
<!-- 中间内容部分 -->
  <div class="section">
    <!-- 广告 -->
    <div class="advertising">
        <img src="https://a1-img.huxiucdn.com/img/2020.11/1606210448631.jpg" height="75px">
    </div>
    <!-- 内容头部部分 -->
    <div class="sectionTop">
        <div class="section-topLeft">
          <div class="swiper">
            <Swiper></Swiper>
          </div>
          <Content></Content>
          <div class="sectionBottom">
            <Title titleValue='最新'></Title>
            <div class="CardList">
<<<<<<< HEAD
                <ConsInto v-for="(item,index) in mainCard" 
                          :key="index"
                          :imgs="item.imgs"
                          :title="item.title"
                          :user="item.user"
                          :date="item.date"
                          :start_num="item.start_num"
                          :coll_num="item.coll_num" 
                          class="card"
                    ></ConsInto>
=======
                <Card v-for="index in 9" :key="index" class="card"></Card>
>>>>>>> b8897b7... 添加了登录注册
            </div>
          </div>
        </div>
        <div class="section-topRight">
            <div class="tuiguang">
              <img src="https://a1-img.huxiucdn.com/img/2020.11/1606191658063.jpg" width="100%">
            </div>
            <div class="comment">
              <Title titleValue="24小时"></Title>
              <div class="comBox">
                  <div class="moment" :style="{top:topValue}" @mouseenter="cleartAuto" @mouseleave="autoPlay()">
                      <CommentCard v-for="(index) in 20" :key="index"></CommentCard>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import ConsInto from "../components/ConsInto";
=======
import Card from "../components/Card";
>>>>>>> b8897b7... 添加了登录注册
import Content from "../components/Content";
import Swiper from "../components/Swiper";
import Title from "../components/Title";
import CommentCard from "../components/CommentCard";

export default {
  components:{
<<<<<<< HEAD
    ConsInto,
=======
    Card,
>>>>>>> b8897b7... 添加了登录注册
    Content,
    Swiper,
    Title,
    CommentCard
  },
<<<<<<< HEAD
  
  data(){
    return{
      topValue:'',
      time:null,
       mainCard:[
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        },
        {
          imgs: '../../public/img/logo-tb.jpg',
          title: '这才是马保国的真面目',
          user: '正解局',
          date: 14,
          start_num: 6,
          coll_num: 3
        }
      ],
=======
  data(){
    return{
      topValue:'',
      time:null
>>>>>>> b8897b7... 添加了登录注册
    }
  },
  created(){
    this.autoPlay()
  },
  methods:{
    autoPlay(){
      let i = 0
      let that = this
      return this.time = setInterval(()=>{
        that.topValue = i-- + 'px'
        // console.log(i)
      },16)
    },
    cleartAuto(){
      clearInterval(this.time)
    }
  }
}
</script>
<style scoped>
.section{
  width: 1094px;
  margin: 0 auto;
  padding-top: 90px;
<<<<<<< HEAD
  padding-bottom: 20px;
=======
>>>>>>> b8897b7... 添加了登录注册
}
.advertising{
  width: 100%;
  margin-bottom: 24px;
}
.sectionTop{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.section-topLeft{
  width: 760px;
}
.section-topRight{
  width: 317px;
}
.comBox{
  display: block;
  width: 317px;
  overflow: hidden;
  height: 1291px !important;
  position: relative;
}
.moment{
  /* height: 800%; */
  height: 100%;
  position: absolute;
  left: 0;
}
.CardList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card{
  width: 243px;
  border: none;
}
</style>