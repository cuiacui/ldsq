<template>
<div>
    <div class="article_content">
        <span class="article_time">{{article_time}}</span>
        <h1 class="article_title">{{article_title}}</h1>
        <div class="article_author-info-box">
            <div class="author-img">
                <img src="../../public/img/leg1.jpg" >
            </div>
            <span class="author_info_username">人间纪实</span>
              <el-button :plain="true" size="mini" class="attention-btn" round @click="open" v-model="n">{{textG}}</el-button>
        </div>
        <video controls autoplay loop muted class="video" >
            <source src="../../public/videos/01.mp4" type="video/mp4">
        </video>
        <div class="article-videp-tag">#纪录片</div>
        <div class="article-description">
            <p>马拉多纳在很小的时候就开始为俱乐部效力了，他改善了家里的生活条件。让全家搬到了公寓里面，后来在世界杯上，他带领阿根廷队进入了世界杯总决赛，改 变了人们对阿根廷球队的看法。总之，他是一个天才球员。
                马拉多纳在很小的时候就开始为俱乐部效力了，他改善了家里的生活条件。让全家搬到了公寓里面，后来在世界杯上，他带领阿根廷队进入了世界杯总决赛，改变了人们对阿根廷球队的看法。总之，他是一个天才球员
                马拉多纳在很小的时候就开始为俱乐部效力了，他改善了家里的生活条件。让全家搬到了公寓里面，后来在世界杯上，他带领阿根廷队进入了世界杯总决赛，改变了人们对阿根廷球队的看法。总之，他是一个天才球员
                马拉多纳在很小的时候就开始为俱乐部效力了，他改善了家里的生活条件。让全家搬到了公寓里面，后来在世界杯上，他带领阿根廷队进入了世界杯总决赛，改变了人们对阿根廷球队的看法。总之，他是一个天才球员
                马拉多纳在很小的时候就开始为俱乐部效力了，他改善了家里的生活条件。让全家搬到了公寓里面，后来在世界杯上，他带领阿根廷队进入了世界杯总决赛，改变了人们对阿根廷球队的看法。总之，他是一个天才球员
                马拉多纳在很小的时候就开始为俱乐部效力了，他改善了家里的生活条件。让全家搬到了公寓里面，后来在世界杯上，他带领阿根廷队进入了世界杯总决赛，改变了人们对阿根廷球队的看法。总之，他是一个天才球员
            </p>
            <p></p>
            <p>来源:&nbsp;<a href="javaScript">NXVIM</a></p>
        </div>
        <div class="article_reprinted-center">
            <div class="article_reprinted-explain">
                本内容为作者独立观点，不代表虎嗅立场。未经允许不得转载，授权事宜请联系hezuo@huxiu.com
                                <br />如对本稿件有异议或投诉，请联系tougao@huxiu.com
            </div>
            <div class="article_reprinted-explain-app">
                正在改变与想要改变世界的人，都在 <a href="javaScript" class="app-download">虎嗅APP</a> 
            </div>
        </div>
        <div class="reward">
            <div>
                <el-button type="danger" class="reward-btn" round @click="pop_up">赞赏</el-button>
            </div>
            <div>
                <p>支持一下</p>   
            </div>
        </div>
        <!-- 相关推荐 -->
        <h3>相关推荐</h3>
        <li class="video-push">
            <img src="../../public/img/leg1.jpg" alt="">
            <img src="../../public/img/leg1.jpg" alt="">
            <img src="../../public/img/leg1.jpg" alt="">
            <img src="../../public/img/leg1.jpg" alt="">
        </li>
        <h5>评论</h5>
        <div class="comment-area">
            <el-input
            type="textarea"
            placeholder="你来谈谈？"
            v-model="value"
            show-word-limit
            resize="none"
            rows=3
            >
            </el-input>
            <button class="comment-btn" @click="add">发表</button>
        </div>
        <div class="communion">
            <span class="communion-link">
                虎嗅用户社区交流公约
            </span>
        </div>
        <!-- 最新评论 -->
        <h4>最新评论</h4>
        <ul style="padding:0;">
            <li v-for="(item,index) in list" :key="index" class="comment-list">
                <div style="background:#eee;">
                    <!-- 评论者头像和昵称 -->
                    <div class="commenter-img">
                        <img src="../../public/img/leg1.jpg" alt="图片加载失败">
                        <i>{{ commenter_name}}</i>
                    </div>
                    <!-- 评论内容 -->
                    <p class="comment-content">{{item}}</p>
                    <div class="operate">
                        <p>{{comment_time}}</p>
                        <div class="icon">
                            <div class="iconfont icon-zan1">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span>{{zanNum}}</span>
                                <a href="javaScript:;" class=""></a>
                            </div>
                            <div class="iconfont icon-tubiao_diancai">
                                &nbsp;&nbsp;&nbsp;&nbsp;<span>{{zanNum}}</span>
                                <a href="javaScript:;" class=""></a>
                            </div>
                            <div class="iconfont">
                                <i class="el-icon-more" style="margin-right:10px"></i>
                                <a href="javaScript:;" class=""></a>
                                <b @click="remove">删除</b>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <!-- 模态框 -->
    <div class="modal"  :style="{display:isShow}">
        <div class="model-content">
            <div class="close-modal" @click="closeModal"><i class="el-icon-close close-modal-btn"></i></div>
            <h3>好的内容，值得赞赏</h3>
            <p class="modal-desc">您的赞赏金额会直接进入作者的虎嗅账号</p>
            <div class="modal-price">
                <input type="text" placeholder="1元" value="1元" >
                <input type="text" placeholder="2元" value="2元"  >
                <input type="text" placeholder="6元" value="6元"  >
                <input type="text" placeholder="10元" value="10元"  >
                <input type="text" placeholder="60元" value="60元" >
                <input type="text" placeholder="自定义" style="text-align:center" >
            </div>
            <input type="text" placeholder="写的太赞了" class="modal-reason"> 
            <div class="hide">
                <span>最多15个字哦</span>
               <p> <input type="checkbox" class="hide-name">匿名赞赏</p>
            </div>
            <div class="show-modal-price">￥10</div>
        </div>
    </div>
    </div>
</template>

<script>
// import './videodetails.css'
export default {
    props:{
        isShow : String
    },
    data(){
        return {
            value : '',
            list : [],
            article_time: this.getDate(),//文章发布时间
            article_title:'马拉多纳: 球王的一生是什么样的？(一)',  //文章标题
            author_info_username : '',  //作者用户名
            zanNum : 0,   //点赞数量
            textG:'关注',
            n:false,
            comment_time:this.getDate() ,  //评论时间
            commenter_name:'aaaaaaa',
            // isShow : 'none',
        }
    },
    watch: {
        n(val){
            if(val===false){
                this.textG='关注'
                // this.isShow='none'
            }else{
               this.textG="已关注"
            //    this.isShow = 'block'
            }
        },
    },
    methods:{
        ///关注
        open() {
            this.n=!this.n
            this.$message({
                message : this.n===true ? '关注成功' : '取消关注',
                type : 'success',
            });
        },
        //发表评论功能
        add(){
            if(this.value){
                this.list.push( this.value   )
                this.value = ''
            }  else{
                this.$message({
                    message : '内容不能为空',
                    type : 'error'
                })
            }
        },
        //获取日期功能
        getDate(){
             let d = new Date()
             return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        },
        // 删除评论功能
        remove(index){
            this.list.splice(index,1)
        },
        //赞赏   弹出模态框
        // pop_up(){
        //     this.n = !this.n
        //     this.isShow = this.n === false ? 'none' : 'block'
        // },
        //改变赞赏价格背景颜色
        //关闭模态框
    }
}
</script>

<style scoped>
/* 取消文字选中 */
*{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.article_content{
    width:788px;
    position: relative;
    margin:50px auto;
}
/* 发布时间 */
.article_time{
    color:#D1D1D1;
}
/* 文章标题 */
.article_title{
    font-size: 32px;
    color:#27282D;
    font-weight:normal;
}
.article_author-info-box{
    width:788px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
/* 头像 */
.author-img{
    width:30px;
    height:30px;
    overflow: hidden;
    border-radius:50%;
}
.author-img img{
    width:30px;
    height:30px;
}
.author_info_username{
    margin:0 10px;
}
.author_info_username:hover{
    color:skyblue;
}
/* .attention-btn{
    color:#FF6060;
    border:1px solid #FF6060;
} */
.attention-btn:hover{
    background-color: #FF6060;
    color:#fff;
}
.video{
    width:788px;
    border:none;
    margin:20px 0;
    outline:none;
}
/* 视频类型标签 */
.article-videp-tag{
    color:#666666;
    font-size: 14px;
}
/* 视频描述 */
.article-description p{
    color:#27282D;
    font-size: 16px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    line-height:40px;
}
.article-description p a{
    color:#27282D;
}
.article_reprinted-center{
    margin-top:100px;
}
.article_reprinted-explain{
    text-align: center;
    color:#999999;
}
.article_reprinted-explain-app{
    text-align: center;
    margin-top:20px;
}
.app-download{
    color:#27282D;
    font-weight:900;
    text-decoration: none;
}
/* 赞赏 */
.reward{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-top:20px;
}
.reward-btn{
    color:#eee;
    font-weight: bold;
    width:100px;
}
/* 相关推荐 */
h3{
    font-weight: normal;
    font-size: 18px;
}
.video-push{
    display: flex;
    justify-content: space-between;
}
.video-push img{
    width:182px;
    height:102px;
}
.video-push img:hover{
    transform: translateY(-20px);
    transition: all .5s;
}
/* 评论 */
.comment-area{
    display:flex;
}
.comment-btn{
    width:80px;
    background:transparent;
    border:1px solid #BFBFBF;
    border-left:none;
    color:#BFBFBF;
    cursor: pointer;
    outline: none;
}
.comment-btn:hover{
    color:red;
}
.communion-link{
    font-size: 12px;
    color:#D1D1D1;
    float: right;
    cursor: pointer;
}
.communion-link:hover{
    color:red;
}
.comment-list{
    list-style:none;
    margin-bottom:10px;
    cursor: pointer;
}
.commenter-img{
    display:flex;
    align-items:center;
    padding-left:43px;
}
.commenter-img img{
    width:40px;
    height:40px;
    border-radius:50%
}
.commenter-img i{
    margin-left:10px;
}
.comment-content{
    text-indent:43px;
    transition: all .5s;
}
.comment-content:hover{
    transform: translateX(-10px);
}
.operate{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:43px
}
.icon {
    display: flex;
}
.iconfont a{
    display: block;
    width:30px;
    height:30px;
    background:rgb(138, 136, 136,.3);
    border-radius: 50%;
    position: absolute;
    left:-10px;
    top:-3px;
    display: none;
}
.iconfont{
    margin-right:10px;
    position: relative;
}
.iconfont:hover a{
    display: block;
}
/* 评论删除按钮 */
.iconfont b{
    display: block;
    width:50px;
    height:20px;
    background:#eee;
    position:absolute;
    left:-20px;
    top:-20px;
    text-align: center;
    font-weight: normal;
    transform: scaleY(0);
    transition: all .3s;
    /* display:none; */
}
.iconfont:hover b{
    transform: scaleY(1);
    /* display:block; */
}
/* 模态框开始 */
.modal{
    width:100%;
    height:100%;
    background:rgba(84, 84, 87, .5);
    display:none;
    position:fixed;
    left:0;
    top:0;
    display: flex;
    flex-direction: column;
    justify-items: center;
    display:none;
}
.model-content{
    width:300px;
    height:500px;
    background:green;
    position:fixed;
    left:50%;
    top:50%;
    margin-left:-150px;
    margin-top:-250px;
}
.close-modal{
    width:100%;
    overflow: hidden;
}
.close-modal-btn{
    float: right;
    font-size: 20px;
    font-style: normal;
    font-weight: bolder;
    color:#D1D1D1;
    margin-top:10px;
    text-indent: -30px;
}
.model-content h3{
    margin:10px 0;
    text-align: center;
}
.modal-desc{
    text-align: center;
    width:100%;
    height:20px;
    line-height: 20px;
    font-size:12px;
}
.modal-price{
    width:100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top:20px;
}
.modal-price input{
    border-radius:20px;
    background:#D1D1D1;
    width:80px;
    height:28px;
    outline:none;
    margin-bottom:10px;
    text-align:center;
    line-height:28px;
    border:none;
    cursor:pointer;
}
.modal-reason{
    width:246px;
    height:28px;
    background-color: #D1D1D1;
    border:none;
    outline:none;
    margin-left:27px;
    border-radius:8px;
    text-indent: 8px;
}
.hide{
    font-size:12px;
    display: flex;
    justify-content: space-between;
    width:246px;
    margin:6px 0 10px 27px;
}
/* 展示要赞赏的价格 */
.show-modal-price{
    width:100%;
    font-size:20px;
    text-align: center;
}
</style>