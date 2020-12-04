<template>
  <div id="hot">
        <!-- 深度 -->
      <div class="deep-top">
        <div class="deep hover" >
        <img :src="list[0].picture" width="494px" height="278px" alt="" ref="img" class="img">
        </div>
        <div class="deep-right">
                <p>深度</p>
                <div  class="deep-content " >
                   <p class="deep-content-p " v-text="list[0].description"  @mouseenter="hoverEnter"> </p>
                   <p class="deep-content-p2 "  v-text="list[0].descriptionTwo"></p>
                </div>
                <span class="deep-content-right">
                   {{list[0].comment}}<i class="el-icon-s-comment "></i>
                    {{list[0].collection}}<i class="el-icon-collection-tag "></i>
                </span>
                
 

        </div>
      </div>
      <!-- 热文推荐边框 -->
      <div class="hot-middle">
        <span class="hot-article">热文推荐</span>
        <p class="more-p">
            <span class="more-display">查看更多 <i class="el-icon-caret-right"></i></span>
            <span class="more">查看更多 <i class="el-icon-caret-right"></i></span>
        </p>
       
      </div>
      <!-- 热文推荐 -->
      <div class="hot-bottom"  >
            <div class="hot-list-body"  v-for="(item,index) in list2" :key="index">
                <div class="hot-list">
                    <div class="hot-list-img">
                        <img :src="item.picture" width="327px" height="184px" >
                    </div>
                    <div class="detail">
                        <p v-text="item.description" style="font-size:16px"></p>
                        <p v-text="item.author" style="font-size:14px" class="hot-author"></p>
                        <p class="detail-icon">
                            <span>一天前</span>
                            <span>{{item.comment}} <i class="el-icon-s-comment"></i>
                            <span>{{item.collection}} <i class="el-icon-collection-tag"></i></span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
      </div>
      <!-- 查看更多 -->
      <div class="findMore">
<<<<<<< HEAD
            <el-button round size="samll" plain class="find-btn">查看更多最新资讯</el-button>
=======
            <el-button round size="samll" plain class="nav-btn">查看更多最新资讯</el-button>
>>>>>>> b8897b7... 添加了登录注册
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    description:'刘瑜： 我们的社会充满了成功学，但却没有失败学',
                    descriptionTwo:'请势不可挡的成为一个普通人',
                    picture : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    comment:99,
                    collection:99,
                }
            ],
            list2:[
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
                {
                    description:'经纬张颖：谁在推动电动科技股的暴涨',
                    picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606478955937&di=ce2c55f0a243b98e85d4ea0792eceb80&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-09-05%2F5d70b6f3c203c.jpg',
                    author:"经纬创投©",
                    comment:99,
                    collection:99,
                },
            ]
        }
    },
    methods:{
        hoverEnter(){
           
               
        },
        hoverLeave(){

        }
    }
}
</script>


<style   scoped>
#hot{
    width: 1094px;
    margin: 0 auto;
}
.deep-top{
    width:1094px;
    height:278px;
    display:flex;
    margin-bottom:39px;
}
.deep{
    width:494px;
    height :278px;
    position: relative;
}
.img{
    position: relative;
    left: 0;
}
.deep-right{
    margin-left: 26px;
    width:584px;
    height: 273px;
    border-top: 5px solid #27282D;
    position: relative;
}
.deep-content{
    width: 584px;
    height: 86px;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: 56px;

}
.deep-content-p{
    font-size: 20px;
    margin-bottom: 16px;
}
.deep-content-right{
    position: absolute;
    bottom: 0;
    right: 0;
}
.hover{
  transition:all  linear .5s ;
}
.hover:hover.hover{
  transform:translateX(-15px);

}
.el-icon-s-comment{
    margin:0 5px;
}
.el-icon-collection-tag{
    margin:0 5px;
}
.hot-middle{
    width:1094px;
    height:39px;
    border-top:5px solid #27282D;
    line-height:36px;
    font-size:18px;
    display:flex;
    justify-content:space-between;
}
.more-p{
    width:64px;
    height:18px;
    overflow:hidden;
    margin:auto 0 ;
    line-height:18px;
    position:relative;
}
.more-display{
    position:absolute;
    top:-30px;
    font-size:12px;
    transition:.5s;
}
.more{
    cursor: pointer;
    font-size: 12px;
    color:#333;
    position:absolute;
    top:2px;
    transition:.5s;
}

.more-p:hover .more{
   top:17px;
}
.more-p:hover .more-display{
   top:2px;
}
.el-icon-caret-right{
    color:orange;
}
.hot-bottom{
    width:1094px;
    /* overflow:hidden; */
}
.hot-list-body{
    overflow:hidden;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    cursor:pointer;
    transition: all .5s;
}
.hot-list{
    width:535px;
    height:184px;
    background:gray;
    display:flex;
    margin-bottom:16px;
    overflow:hidden;
    transition:all .3s linear;   
}
.hot-list-body:hover{
    transform: translateX(-20px);
}
.hot-list-img{
     width:327px;
    height:184px;
}
.detail{
    width:186px;
    height:141px;
    padding:32px 13px 11px 13px ;
    background:#F4F4F4;
}
.detail-icon{
    display:flex;
    justify-content:space-between;
    font-size:12px;
}
.hot-author{
    margin:25px 0px;
}
.hot-author:hover{
    color:blue; 
}
.hot-bottom{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
}
.findMore{
    width: 1094px;
    height: 120px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;
}
<<<<<<< HEAD
.find-btn{
  color: black;
  border-color: black;
  height: 30px;
  width: 160px;
=======
.nav-btn{
  color: black;
  border-color: black;
>>>>>>> b8897b7... 添加了登录注册
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.el-button.is-plain:hover{
  color: white;
  background-color: black;
  border-color: black;
}
</style>