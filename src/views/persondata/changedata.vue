<template>
  <div class="change">
      <div style="width:60px ; height : 60px ;border-radius:50% ;overflow:hidden;margin : 50px auto 10px">
          <img :src="userPic" width="60px">
      </div>
      <a href="javascript:;">点击更换头像</a>
      <!-- 姓名 -->
      <p>
          <span>真实姓名：<i></i></span>
          <input type="text" v-model="userName"> 
          <el-select v-model="nameVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      <!-- 性别 -->
      <p>
          <span>性别：<i></i></span>
          <el-radio-group v-model="radio">
                <el-radio :label="0">男</el-radio>
                <el-radio :label="1">女</el-radio>
                <el-radio :label="2">保密</el-radio>
          </el-radio-group>
          <el-select v-model="sexVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      <!-- 出生日期 -->
      <p>
          <span>出生日期：<i></i></span>
           
           <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
            
            </el-date-picker>

          <el-select v-model="bothVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      <!-- 所在公司 -->
      <p>
          <span>所在公司:<i></i></span>
          <input type="text" v-model="company"> 
          <el-select v-model="comVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      <!-- 职位 -->
      <p>
          <span>职位:<i></i></span>
          <input type="text" v-model="job"> 
          <el-select v-model="jobVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      <!-- 居住地址 -->
      <p>
          <span>居住地址:<i></i></span>
          <input type="text" v-model="adress"> 
          <el-select v-model="adressVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      <!-- 邮箱 -->
      <p>
          <span>邮箱:<i></i></span>
          <input type="text" v-model="email"> 
          <el-select v-model="emailVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      <!-- 手机号 -->
      <p>
          <span>邮箱:<i></i></span>
          <input type="text" v-model="phone"> 
          <el-select v-model="phoneVis" placeholder="请选择" size="mini">
                <el-option
                v-for="item in visList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
      </p>
      
  </div>
</template>

<script>
export default {
    methods:{
        a(){
            console.log(this.radio)
        }
    },
    data(){
        return {
            userPic : "https://s0-img.huxiucdn.com/auth/data/avatar/002/97/58/43_1606371779.jpg",   //用户头像
            userName : "1" ,//用户姓名
            nameVis : "" , //姓名可见
            visList : [ //是否可见选项
                {
                    value : "选项1",
                    label : "所有人可见",
                },
                {
                    value : "选项2",
                    label : "仅虎嗅可见",
                }
            ],
            radio : "" ,//性别   0 1 2   0：男    1：女    2：保密 
            sexVis : "",//性别可见选项
            pickerOptions: { //  日期选择
                 disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            },
            value1: '',  //出生日期
            bothVis : "" , //出生日期可见选项
            company : "" , //所在公司
            comVis : "",//公司可见
            job : "",  //职位
            jobVis : "", //职位可见
            adress : "" , //现居住地址
            adressVis : "", //居住地址可见
            email : "" , //邮箱
            emailVis : "", //邮箱可见
            phone : "", //手机号
            phoneVis : "" //手机号可见
        }
    }

}
</script>

<style scoped>
    .change{
        text-align:center;
    }
    p{
        width: 100%;
        height: 50px;
        margin: 10px 0 ;
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
    }
    p span {
        display: inline-block;
        height: 50px;
        width: 100px;
        text-align: justify;
    }
    p span i {
        display: inline-block;
        width: 100%;
    }
    input{
        width : 490px;
        height: 30px;
        border: 1px solid #eee;
    }
</style>