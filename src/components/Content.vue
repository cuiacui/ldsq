<template>
  <div class="news">
      <a href="javascript:;">
          <img :src="img" class="news_img">
      </a>
      <div class="news_content">
          <div class="news_content_top">
              <Title titleValue='24小时'></Title>
          </div>
          <a href="javascript:;" class="news_content_foot">
              <span class="news_content_hour">{{date}}小时之前更新</span>
              <span class="news_content_hour">{{pro_num}}人正在参与</span>
              <h4 class="news_content_pro">{{title}}</h4>
              <p class="news_content_dis">{{disc}}</p>
          </a>
      </div>
  </div>
</template>

<script>
import Title from "./Title";
export default {
    props:{
        img: String,
        date: Number,
        pro_num: Number,
        title: String,
        disc: String
    },
    components:{
        Title
    }
}
</script>

<style scoped>
.news{
    width: 760px;
    height: 260px;
    display: flex;
    justify-content: space-between;
    margin: 24px auto;
}
.news_img{
    width: 260px;
    height: 260px;
    border-radius: 3px;
    transition: all .5s;
}
.news_img:hover{
    transform: translateX(-4px);
}
.news_content{
    width: 484px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.news_content_top{
    width: 484px;
    height: 39px;
}
.news_content_foot{
    width: 484px;
    height: 165px;
    margin-bottom: 10px;
}
.news_content_hour{
    font-size: 14px;
    color: #d1d1d1;
    margin-right: 15px;
}
.news_content_pro{
    font-size: 26px;
    color: #27282d;
    font-weight: normal;
    height: 36px;
    line-height: 36px;
    margin-top: 25px;
}
.news_content_dis{
    width: 430px;
    height: 48px;
    font-size: 16px;
    color: #27282d;
    margin-top: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>