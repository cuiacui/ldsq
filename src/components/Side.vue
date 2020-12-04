<template>
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
</template>

<script>
export default {
    data(){
        return {
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
    }
}
</script>

<style scoped>
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
    overflow:hidden;
}
.hot-list-body{
    overflow:hidden;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    cursor:pointer;
}
.hot-list{
    width:539px;
    height:184px;
    background:gray;
    display:flex;
    margin-bottom:16px;
    overflow:hidden;
    transform-origin:100% 50% 0;
    transition:all .3s linear;   
}
.hot-list:hover{
    transform:scaleX(1.009) ;  
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
</style>
