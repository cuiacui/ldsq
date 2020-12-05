import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/consult',
    name: 'Consult',
    component: () => import('@/views/Consult.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue'),
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/views/Personal.vue'),
    children: [
      {
        path: '/main',
        name: 'Main',
        component: () => import('@/components/personal/Main.vue'),
      },
      {
        path: '/artical',
        name: 'Artical',
        component: () => import('@/components/personal/Artical.vue'),
      },
      {
        path: '/collection',
        name: 'Collection',
        component: () => import('@/components/personal/Collection.vue'),
      },
      {
        path: '/comment',
        name: 'Comment',
        component: () => import('@/components/personal/Comment.vue'),
      },
      {
        path: '/my24',
        name: 'My24',
        component: () => import('@/components/personal/My24.vue'),
      },
      {
        path: '/zan',
        name: 'Zan',
        component: () => import('@/components/personal/Zan.vue'),
      },
    ]
  }, 
  {
    path: '/detail',
    name: 'datail',
    component: () => import('@/views/News-detail.vue')
  },
  {
    path: '/test',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/classfy',
        name: 'Classfy',
        component: () => import('@/views/houtai/Classfy.vue')
      },
      {
        path: '/addgoods',
        name: 'AddGoods',
        component: () => import('@/views/houtai/goods/AddGoods.vue')
      },
      {
        path: '/goods/update',
        name: 'UpdateGoods',
        component: () => import('@/views/houtai/goods/UpdataGoods.vue')
      },
      {
        path: '/goodlist/:state',
        name: 'GoodsList',
        component: () => import('@/views/houtai/goods/GoodsList.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/houtai/goods/User.vue')
      },
      {
        path: '/show',
        name: 'charts',
        component: () => import('@/views/houtai/goods/Showecharts.vue')
      }
    ]
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('@/views/Personal.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/houtai/Login.vue')
  },
  {
    path: '/regin',
    name: 'Regin',
    component: () => import('@/views/houtai/Reg.vue')
  },
  {
    path: '/pagelogin',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/pageregistor',
    name: 'Registor',
    component: () => import('@/views/Registor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
