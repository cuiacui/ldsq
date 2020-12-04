<template>
  <div class="cards">
    <div v-for="(item,index) in list" :key="index" class="news-body">
      <div class="users">
        <!--用户头部 包含用户名头像签名关注状态-->
        <div class="user-title">
          <el-avatar :size="60" @error="errorHandler">
            <img
              :src="item.userPic"
              style="cursor: pointer"
              @click="userHome"
            />
          </el-avatar>
          <a href="javascript:;">
            <p class="user-name">{{ item.userName }}</p>
            <p class="user-text">{{ item.userText }}</p>
          </a>
        </div>
        <div class="user-notice">
          <el-button
            round
            size="mini"
            type="danger"
            class="notice"
            v-if="item.state"
            @click="notice(item)"
            >关注</el-button
          >
          <el-button
            type="info"
            size="mini"
            class="hasnotice"
            round
            v-if="!item.state"
            @click="unnotice(item)"
            >已关注</el-button
          >
        </div>
      </div>
      <p v-html="item.userContext" class="user-content"></p>
      <div class="user-time">
        <div class="public-time">测试时间</div>
        <div class="article-btn">
          <span
            class="iconfont icon-dianzan"
            @click="dianzan(item)"
            :style="{ color: item.fill }"
          ></span>
          <span class="iconfont icon-pinglun" @click="idea(item)">{{
            item.num
          }}</span>
          <span class="iconfont icon-jubao"></span>
        </div>
      </div>
      <div v-show="item.talk" class="board">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="说点什么吧"
          v-model="item.textarea"
          resize="none"
        >
        </el-input>
        <el-button class="submit" @click="submit(item)">发表</el-button>
      </div>
      <ul>
        <li v-for="(ite, index) in item.message" :key="index">
          <el-card class="box-card" shadow="never">
            <span>{{ item.userName }}</span>
            <div>{{ ite }}</div>
            <div>
              <span
                class="iconfont icon-dianzan"
                @click="dianzan"
                :style="{ color: item.fill }"
              ></span>
              <span class="iconfont icon-shanchu" @click="del(item,index)">{{
                item.num
              }}</span>
              <span class="iconfont icon-jubao"></span>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  watch: {
    message: {
      handler(val) {
        this.num = val.length;
        console.log(val.length);
        if (val.length === 0) this.num = "";
        console.log(this.num);
      },
      deep: true,
    },
  },
  data() {
    return {
      list: [
        {
          state: true,
          fill: "#707070",
          textarea: "",
          talk: false,
          message: [],
          num: "",
          userName: "狗剩",
          userText: "今天国外发生了什么?",
          userPic: ["/image/1.jpg"],
          userState: true,
          userContext:
            "<p>昨日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。<div class ='user-image'><img src='/image/6.jpg' style='width:100%'><img src='/image/7.jpg' style='width:100%'><img src='/image/8.jpg' style='width:100%'></div> 今日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。</p>",
        },
        {
          state: true,
          fill: "#707070",
          textarea: "",
          talk: false,
          message: [],
          num: "",
          userName: "李元吉",
          userText: "我是李元吉",
          userPic: ["/image/2.jpg"],
          userState: true,
          userContext:
            "<p>昨日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。<div class ='user-image'><img src='/image/6.jpg' style='width:100%'><img src='/image/7.jpg' style='width:100%'><img src='/image/8.jpg' style='width:100%'></div> 今日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。</p>",
        },
        {
          state: true,
          fill: "#707070",
          textarea: "",
          talk: false,
          message: [],
          num: "",
          userName: "皇甫",
          userText: "我是皇甫",
          userPic: ["/image/3.jpg"],
          userState: true,
          userContext:
            "<p>昨日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。<div class ='user-image'><img src='/image/6.jpg' style='width:100%'><img src='/image/7.jpg' style='width:100%'><img src='/image/8.jpg' style='width:100%'></div> 今日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。</p>",
        },
        {
          state: true,
          fill: "#707070",
          textarea: "",
          talk: false,
          message: [],
          num: "",
          userName: "崔崔",
          userText: "今天国外发生了什么?",
          userPic: ["/image/4.jpg"],
          userState: true,
          userContext:
            "<p>昨日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。<div class ='user-image'><img src='/image/6.jpg' style='width:100%'><img src='/image/7.jpg' style='width:100%'><img src='/image/8.jpg' style='width:100%'></div> 今日，深交所副总经理李鸣钟在第四届中国（深圳）公司治理高峰论坛上称，证监会即将开展“公司治理专项行动”，上市公司要高度重视，做到真整改、见实效。证监会明确，要通过公司自查、现场检查、督促整改等多种方式，切实提高公司治理水平。希望上市公司控股股东、实控人、董监高等“关键少数”比以往任何时候更加重视忠实勤勉，从公司内部筑牢防范违法违规行为的篱笆，切实避免新增资金占用和违规担保，进一步提高信息披露质量。</p>",
        },
      ],
    };
  },
  methods: {
    errorHandler() {
      return true;
    },
    userHome() {
      alert("跳转到用户页面");
    },
    //切换关注状态
    notice(item) {
      // this.item.state = false;

      item.state = !item.state;
      this.$message({
        showClose: true,
        duration: 1000,
        message: "关注成功",
        type: "success",
      });
    },
    unnotice(item) {
      item.state = !item.state;
      const h = this.$createElement;
      this.$message({
        showClose: true,
        duration: 1000,
        message: "取消关注成功",
        type: "success",
      });
    },
    //点赞按钮改变样式
    dianzan(item) {
      item.fill == "#FF6060"
        ? (item.fill = "#707070")
        : (item.fill = "#FF6060");
    },
    //留言板的显示
    idea(item) {
      item.talk = !item.talk;
    },
    del(item,index) {
      item.message.splice(index, 1);
    },
    //提交数据
    submit(item) {
      if (item.textarea.trim() !== 0) {
        item.message.unshift(item.textarea);
        item.textarea = "";
      }
    },
  },
};
</script>

<style>
.iconfont {
  cursor: pointer;
}
a {
  text-decoration: none;
  display: block;
  color: black;
  padding-left: 10px;
}
ul {
  list-style: none;
  width: 100%;
}
a:active {
  color: black;
}
.news-body {
  margin-bottom: 50px;
  background: #fafafa;
  padding: 20px;
  width: 748px;
  max-height: 9000px;
  overflow: hidden;
  margin: 0px auto;
  border: 10px solid #fff;
  border-radius: 5px;
  transition: all 0.1s linear;
  overflow: hidden;
}
.news-body:hover {
  border: 10px solid #f4f4f4;
}
.users {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*
用户头部
*/
.user-title {
  display: flex;
  align-items: center;
}
/*
关注状态
*/
.hasnotice {
  font-size: 14px;
  width: 78px;
  color: #d1d1d1;
  background: #efefef;
  border: none;
}
.hasnotice:hover {
  background: #efefef;
  color: #d1d1d1;
}
.notice {
  font-size: 14px;
  width: 78px;
}
/*
用户名
*/
.user-name:hover {
  color: #378bd2;
}
.user-name {
  height: 25px;
  line-height: 25px;
  margin: 0;
}
/*
个性签名
*/
.user-text {
  font-size: 14px;
  color: #9999a6;
  height: 25px;
  line-height: 25px;
  margin: 10px 0 0px;
}
/*
新闻主体部分
*/
.user-content {
  color: #27282d;
  line-height: 28px;
}
/*
新闻主图部分
*/
.user-image {
  width: 400px;
  background: blanchedalmond;
}
/*
发表时间
*/
.user-time {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.public-time {
  width: 50%;
}
/*
按钮部分
*/
.article-btn {
  float: right;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/*
图标设置
*/
.icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.3s linear;
}
.icon:hover {
  transform: scale(1.2);
}
/*
图标设置
*/
.board {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.box-card {
  width: 100%;
}
</style>