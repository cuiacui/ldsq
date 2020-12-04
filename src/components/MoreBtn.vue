<template>
  <div class="moreBtn" @mouseenter="()=>{
                flipup=false,
                flipdown=false,
                flipupA=true,
                flipdownA=true
              }" @mouseleave="()=>{
                flipup=true,
                flipdown=true,
                flipupA=false,
                flipdownA=false
              }">
              <span class="moreT">
                  <i :class="{flipup,flipupA}">{{fontText}}</i>
                  <i :class="{flipdown,flipdownA}">{{fontText}}</i>
              </span>
              <div class="moreS"></div>
          </div>
</template>

<script>
export default {
    props:{
        fontText:String
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
.moreBtn{
    cursor: pointer;
    font-size: 12px;
    color: #333;
    margin-right: 8px;
    line-height: 36px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    min-width: 63px;
    position: relative;
}
.moreT{
    --animate-duration: 1s;
    --animate-delay: 1s;
    --animate-repeat: 1;
    -webkit-font-smoothing: antialiased;
    font-family: PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    letter-spacing: .7px;
    -webkit-box-direction: normal;
    cursor: pointer;
    font-size: 12px;
    color: #333;
    line-height: 36px;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-style: normal;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
    font-weight: inherit;
}
.moreT i{
    font-style: normal;
}
.moreS{
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-left: 7px solid #ff6060;
    border-bottom: 4px solid transparent;
}
.flipup{
    display: block;
    transition: transform .3s cubic-bezier(.77,0,.175,1),visibility 0s,opacity .4s cubic-bezier(.77,0,.175,1),-webkit-transform .3s cubic-bezier(.77,0,.175,1);
}
.flipdown{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-35%);
    transition: transform .3s cubic-bezier(.77,0,.175,1),visibility 0s .4s,opacity .4s cubic-bezier(.77,0,.175,1),-webkit-transform .3s cubic-bezier(.77,0,.175,1);
}
.flipupA{
    display: block;
    opacity: 0;
    transform: translateY(35%);
    visibility: hidden;
    transition: transform .4s cubic-bezier(.77,0,.175,1),visibility 0s .4s,opacity .4s cubic-bezier(.77,0,.175,1),-webkit-transform .4s cubic-bezier(.77,0,.175,1);
}
.flipdownA{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    opacity: 1;
    transform: translateY(0);
    visibility: inherit;
    transition: transform .4s cubic-bezier(.77,0,.175,1),visibility 0s,opacity .4s cubic-bezier(.77,0,.175,1),-webkit-transform .4s cubic-bezier(.77,0,.175,1);
}
</style>