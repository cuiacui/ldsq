<template>
  <div class="card">
    <div class="text">{{text}}</div>
    <div class="sp-card">
      <Card v-for="(item,index) in mainCard" :key="index"
          :imgs="item.imgs"
          :title="item.title"
          :user="item.user"
          :date="item.date"
          :start_num="item.start_num"
          :coll_num="item.coll_num"
        ></Card>
    </div>
    
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  props:{
        text:String
    },
  components:{
    Card
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
    margin-bottom: 40px;
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
</style>