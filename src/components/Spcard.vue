<template>
  <div class="card">
    <div class="text">{{text}}</div>
    <div class="sp-card">
<<<<<<< HEAD
      <ConsInto v-for="(item,index) in mainCard" :key="index"
=======
      <Card v-for="(item,index) in mainCard" :key="index"
>>>>>>> b8897b7... 添加了登录注册
          :imgs="item.imgs"
          :title="item.title"
          :user="item.user"
          :date="item.date"
          :start_num="item.start_num"
          :coll_num="item.coll_num"
<<<<<<< HEAD
        ></ConsInto>
    </div>
    <div class="more">查看更多></div>
=======
        ></Card>
    </div>
>>>>>>> b8897b7... 添加了登录注册
    
  </div>
</template>

<script>
<<<<<<< HEAD
import ConsInto from './ConsInto.vue'
=======
import Card from './Card.vue'
>>>>>>> b8897b7... 添加了登录注册
export default {
  props:{
        text:String
    },
  components:{
<<<<<<< HEAD
    ConsInto
=======
    Card
>>>>>>> b8897b7... 添加了登录注册
  },
  data(){
    return{
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
        }
      ]
    }
  }
}
</script>

<style>
  .card{
    width: 1094px;
    margin: 0 auto;
    border-top: 5px solid #333;
<<<<<<< HEAD
    margin-bottom: 10px;
=======
    margin-bottom: 40px;
>>>>>>> b8897b7... 添加了登录注册
  }
  .text{
    line-height: 50px;
    font-size: 18px;
  }
  .sp-card{
    width: 1094px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
  }
<<<<<<< HEAD
  .more{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
    line-height: 20px;
  }
=======
>>>>>>> b8897b7... 添加了登录注册
</style>