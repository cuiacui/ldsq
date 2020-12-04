<template>
  <li @mouseleave="()=>{this.num='0px'}" @mouseenter="()=>{this.num='100%'}">
      <div class="CardTitle">
          <div class="CardTitle-top">
              <a href="javascript:;">
                  <img src="https://s0-img.huxiucdn.com/auth/data/avatar/001/82/97/30_1592536444.jpg?imageView2/1/w/125/h/125/|imageMogr2/strip/interlace/1/quality/85/format/jpg?imageView2/1/w/80/h/80/|imageMogr2/strip/interlace/1/quality/85" >
                  <span>发布者</span>
              </a>
              <div class="CardTitle-topRight">3小时前</div>
             
          </div> 
          <div class="CardTitle-Bottom"> 
                  对围绕马保国所发生的一系列闹剧，不是一笑了之那么简单。

如果靠哗众取宠就可以风生水起，靠招摇撞骗就能拓展商业版图，这是什么样的价值取向？马保国背后的人到底想干什么？明眼人都清楚，无非就是商业利益。推波助澜、炒作放大马保国的一些互联网平台为什么？无非是流量至上，背后还是利益。然而，无论平台还是资本，蹭热点、找卖点的前提，都是遵循公序良俗，是正确的价值观，否则就会沦为浅薄而拙劣的商业游戏。【原文】
          </div>
      </div>
      <div class="CardTitleBg" :style="{width:num}">
        </div>
  </li>
</template>

<script>
export default {
    data(){
        return {
            num:'0'
        }
    }
}
</script>

<style scoped>
li{
    padding: 10px 7px 20px 12px;
    border-bottom: 1px solid #efefef;
    cursor: pointer;
    position: relative;
}
.CardTitle-top{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    padding-left: 8px;
    -webkit-box-align: center;
    align-items: center;
    height: 23px;
    overflow: hidden;
    margin-bottom: 11px;
}
.CardTitle-top a{
    display: flex;
}
.CardTitle-top a img{
    margin-right: 16px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
}
.CardTitle-top a span{
    color: #27282d;
    font-size: 14px;
    line-height: 23px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    margin-right: 4px;
    vertical-align: middle;
    max-width: 136px;
}
.CardTitle-topRight{
    color: #d1d1d1;
    font-size: 12px;
}
.CardTitleBg{
    height: 100%;
    position: absolute;
    background: #cccedb;
    opacity: 0.3;
    top: 0;
    left: 0;
    transition: all .3s;
}
.CardTitle-Bottom{
    height: 144px;
    position: relative;
    overflow: hidden;
    color: #999;
    letter-spacing: .7px;
    font-size: 14px;
    line-height: 24px;
}
</style>