<template>
  <div style="overflow:hidden">
        <Nav></Nav>
        <div style="margin-top:70px;width:100%;display:flex;flex-direction:column;align-items:center;margin-top:100px">
        <!-- 搜索输入框 -->
        <div class="search-part">
            <input type="text" class="search-word"  v-model="inputValue"  placeholder="搜索文章" @keydown.enter="toDetails">
            <div class="search-btn" >
                <i class="el-icon-close" v-show="showCloseIcon" @click.stop="clearInput"></i>
                <i class="el-icon-search" @click.stop="haha"></i>
            </div>
        </div>
        <div v-show="showpage" style="width:850px">
            <!-- 搜索历史 -->
            <div class="search-history">
                <div class="search-top">
                    <h3>搜索历史</h3>
                    <el-button type="text" @click="clearHistory">清除历史</el-button>
                </div>
                <div class="search-history-list">
                    <span v-for="(item,index) in searchRecord" :key="index" @click="replaceInput(item)">
                        {{item}}
                        <i class="clear-record" @click.stop="remove(index)">×</i>
                    </span>                                               
                </div>
            </div>
            <!-- 热搜词 -->
            <div class="hot-words">
                <h3>热搜词</h3>
                <div class="hot-words-list">
                    <span v-for="(item,index) in  hot_search_word" :key="index" @click="replaceInput(item)">
                        {{item}}
                    </span>
                </div>
            </div>
        </div>
        <!-- ------------------------------------------------------------------------------------------------------------------------ -->
        <!-- 搜索内容详情页面 -->
        <div v-show="backpage" style="width:850px;margin-top:30px">
            <div style="display:flex;justify-content:space-between">
                <div>
                    <a href="javaScript:;">文章</a>&nbsp;&nbsp;
                    <a href="javaScript:;">作者</a>
                </div>
                <div class="">
                    <select name="" id="" style="outline:none">
                        <option value="">相关度</option>
                        <option value="">最新</option>
                    </select>
                </div>
            </div>
            <div style="margin-top:30px;width:850px;border:1px solid black" v-for="(item,index) in 5" :key="index">
                <h4>{{result.title}}</h4>
                <p>{{result.content}}</p>
                <div style="display:flex;justify-content:space-between">
                    <span>{{result.leftSpan}}</span>
                    <span>{{result.rightSpan}}</span>
                </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
    created() {  //初始化
        let searchRecord =  localStorage.searchRecordList
        if(searchRecord){
            this.searchRecord = JSON.parse(searchRecord)
        }
    },
    components:{
        Nav
    },
    data(){
        return {
            inputValue:'',
            showCloseIcon : false,  //控制输入框中的叉号显示隐藏
            showpage:true,
            backpage:false,
            result:{
                title:'你准备好了么',
                content:'佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛了佛',
                leftSpan:'新华社',
                rightSpan:'2020-12-3'
            },
            searchRecord : [],
            hot_search_word:[
                '新常态',
                '狗叫',
                '美国文化',
                '职场',
                '经济政策',
                '逃离北上广',
                '房地产',
                '养老院',
                '美女',
                '项目什么的都去死吧'
            ]
        }
    },
    watch:{
        inputValue(val){
            this.showCloseIcon = val.length > 0 ? true : false;
            // this.backpage = val.length > 0 ? true : false;
        }
    },
    methods:{
        remove(index){   //删除单条搜索历史
            this.searchRecord.splice(index,1)
            this.saveSearchRecord()
        },
        clearHistory(){   //清除搜索历史
            this.searchRecord = []
            this.saveSearchRecord()

        },
        haha(){   //搜索图标
        console.log(this.inputValue.length)
            if(this.inputValue.length < 2){
                alert('额，搜索词要在2字以上哦');
            }else{
                if(this.searchRecord.includes(this.inputValue)){
                    let index = this.searchRecord.indexOf(this.inputValue)
                    this.searchRecord.splice(index,1);
                    this.searchRecord.unshift(this.inputValue)
                }else{
                    this.searchRecord.unshift(this.inputValue)
                }
                this.showpage = false;
                this.backpage = true;
                this.saveSearchRecord()
            }
        },
        //保存到本地存储
        saveSearchRecord(){
            localStorage.searchRecordList = JSON.stringify(this.searchRecord)
        },
        toDetails(){   //输入框回车事件
            if(this.inputValue.length < 2){
                alert('额，搜索词要在2字以上哦');
                this.backpage = false
                return 
            }else{
                this.showpage = false;
                this.backpage = true
            }
            this.backpage = true
        },
        clearInput(){    //输入框中的叉号图标，清空输入框中的值
            this.inputValue = ''
            this.showpage = true
            this.backpage = false
        },
        replaceInput(item){  // 修改输入框中的值
            this.inputValue = item
             if(this.searchRecord.includes(this.inputValue)){
                    let index = this.searchRecord.indexOf(this.inputValue)
                    this.searchRecord.splice(index,1);
                    this.searchRecord.unshift(this.inputValue)
                }else{
                    this.searchRecord.unshift(this.inputValue)
                }
            this.showpage = false
            this.backpage = true
            this.saveSearchRecord()
        }
    }
}
</script>

<style scoped>
/* 搜索框部分 */
.search-part{
    width:850px;
    border-bottom:1px solid #333;
    display:flex;
    align-items: center;
}
/* 输入框 */
.search-word{
    width:850px;
    height: 50px;
    border:none;
    outline:none;
    font-size: 30px;
}
/* 搜索图标 */
.search-btn{
    font-size:24px;
    color:#D1D1D1;
    font-weight: 900;
    /* display: none; */
    display: flex;
}
.search-btn i:hover{
    color:#000;
}
.search-history{
    width:850px;
    padding-bottom:50px;
}
.search-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:10px;
}
h3{
    font-size:24px;
}
/* 搜索历史部分 */
.search-history-list{
    width:850px;
    /* border:1px solid red; */
    margin-top:10px;
    display:flex;
    flex-wrap: wrap;
}
.search-history-list span{
    display: block;
    padding:3px;
    box-sizing: border-box;
    /* border:1px solid green; */
    margin:10px;
    color:#999999;
    position:relative;
    cursor:pointer;
}
/* 搜索历史的关闭按钮 */
.clear-record{
    position:absolute;
    top:3px;
    transition: all .5s;
    /* background:blue; */
    transform: scaleX(0);
    transform-origin: left;
}
.search-history-list span:hover .clear-record{
    /* display:block; */
    transform: scaleX(1);
}
.hot-words{
    width:850px;
}
.hot-words-list{
    display: flex;
    flex-wrap: wrap;
}
.hot-words-list span{
    display: block;
    height:30px;
    text-align: center;
    line-height: 30px;
    padding:0 16px;
    background:#F4F4F4;
    margin:20px;
    border-radius: 5px;
    color:#999999;
    transition: all 1s;
    cursor:pointer;
}
.hot-words-list span:hover{
    transform: scale(1.1);
}
</style>