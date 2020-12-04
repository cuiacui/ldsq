<template>
    <div class="sectionCon">
        <Nav></Nav>
        <!-- <div class="left">最&nbsp;&nbsp;新</div> -->
        <div class="Card">
            <div class="CardList" >
                <ConsInto v-for="(item,index) in mainCard" :key="index"
                        :imgs="item.imgs"
                        :title="item.title"
                        :user="item.user"
                        :date="item.date"
                        :start_num="item.start_num"
                        :coll_num="item.coll_num"
                        >
                </ConsInto>
                <ConLeft v-for="(item,index) in mainLeft" :key="index"
                    :imgs="item.imgs"
                    :title="item.title"
                    :user="item.user"
                    :date="item.date"
                    :start_num="item.start_num"
                    :coll_num="item.coll_num"
                    >
                </ConLeft>
            </div>
            <div class="CardList" >
                <ConsInto v-for="(item,index) in mainCard" :key="index"
                        :imgs="item.imgs"
                        :title="item.title"
                        :user="item.user"
                        :date="item.date"
                        :start_num="item.start_num"
                        :coll_num="item.coll_num"
                        >
                </ConsInto>
                <ConLeft v-for="(item,index) in mainLeft" :key="index"
                    :imgs="item.imgs"
                    :title="item.title"
                    :user="item.user"
                    :date="item.date"
                    :start_num="item.start_num"
                    :coll_num="item.coll_num"
                    :mainA='true'
                    >
                </ConLeft>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ConsInto from '@/components/ConsInto.vue'
import ConLeft from '@/components/ConLeft.vue'
export default {
    components:{
        Nav,
        ConsInto,
        ConLeft
    },
    data(){
        return{
            mainCard:[                    //插入图片
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                },
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                },
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                },
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                },
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                },
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                },
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                },
                {
                    imgs: '/imgs/main.jpg',
                    title: '这才是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                }
            ],
            mainLeft:[
                {
                    imgs: '/imgs/main.jpg',
                    title: '这是马保国的真面目',
                    user: '正解局',
                    date: 14,
                    start_num: 8,
                    coll_num: 3
                }
            ]
        }
    }
}
</script>

<style scoped>
/* 最新 */
/* .left{
  position: fixed;
  z-index: 200;
  top: 80px;
  line-height: 1.4;
  font-size: 16px;
  color: #27282d;
  cursor: default;
  right: 50%;
  margin-right: 528px;
} */
.Card{
    padding-top: 70px;
}
.CardList{
    width: 1036px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>