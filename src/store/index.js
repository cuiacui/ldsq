import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personal:{
      personal_id:'1',    // 用户id
      personal_head:'image/2.jpg',   //用户头像
      personal_nickname:'李强',      //用户昵称
      personal_introduce:'我是一个幸运儿' , //用户介绍
      personal_left:{                     //用户资料左侧
        personal_company : '百度',        //用户所在公司
        personal_job:"架构师",             //用户的职业
        personal_email : '121212121@qq.com' // 用户邮箱
      },
      personal_right:{                     //用户资料右侧
        personal_weibo : 'weibo',        //用户的微博
        personal_weixin:"微信",             //用户的微信
        personal_money : '99999',             // 用户余额
        personal_zan : '已开启'                  //赞赏状态  1  已开启  0 关闭
<<<<<<< HEAD
      },
      personal_detail:{
        personal_main :{                          //我的消息
          main:"暂无互动消息",                      //互动消息
          system:"暂无系统消息"                      //系统消息
        }, 
        personal_artical:{                              // 我的文章
          published_list:[                                //已发布                                
              {                                
              artical_name:'来自甫虎的第一篇杂谈',      //文章名称
              artical_time:'time' ,                    //文章时间                  
              }
          ],
          review_list:[                                 //审核中
              {                                
              artical_name:'来自甫虎的第一篇杂谈',      //文章名称
              artical_time:'time' ,                    //文章时间                  
              },
              {                                
                artical_name:'来自甫虎的第一篇杂谈',      //文章名称
                artical_time:'time' ,                    //文章时间                  
                }
          ],
          fail_list:[                                  //未通过列表
              {                                
              artical_name:'来自甫虎的第一篇杂谈',      //文章名称
              artical_time:'time' ,                    //文章时间                  
              },
              {                                
                artical_name:'来自甫虎的第一篇杂谈',      //文章名称
                artical_time:'time' ,                    //文章时间                  
              },
              {                                
                artical_name:'来自甫虎的第一篇杂谈',      //文章名称
                artical_time:'time' ,                    //文章时间                  
                }
          ],
          draft_list:[                                  //草稿箱
              {                                
              artical_name:'来自甫虎的第一篇杂谈',      //文章名称
              artical_time:'time' ,                    //文章时间                   
              }
          ]

        },
        
        personal_my24:""
      }

=======
      }
>>>>>>> b8897b7... 添加了登录注册
      
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
