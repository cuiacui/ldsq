<template>
  <div class="title-box">
      <div class="line"></div>
      <div class="titleT">
          <h4>{{titleValue}}</h4>
          <MoreBtn fontText="查看更多"></MoreBtn>
      </div>
  </div>
</template>

<script>
import MoreBtn from "./MoreBtn";
export default {
    props:{
        titleValue:String
    },
    components:{
        MoreBtn
    },
    data(){
        return {
            flipup:true,
            flipdown:true,
            flipupA:false,
            flipdownA:false
        }
    }
}
</script>

<style scoped>
.title-box{
    width: 100%;
    padding-bottom: 7px;
}
.line{
    width: 100%;
    height: 5px;
    border-radius: 2px;
    background-color: #27282D;
    display: block;
}
.titleT{
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.titleT h4{
    font-size: 18px;
    line-height: 36px;
    letter-spacing: 1px;
    font-weight: 500;
    margin-top: 3px;
    color: #27282D;
}
</style>