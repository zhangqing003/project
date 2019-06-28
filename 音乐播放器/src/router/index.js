import Vue from 'vue'
import Router from 'vue-router'
import collect from '../components/collect'
import news  from '../components/news'
import person from '../components/person'
import search from '../components/search'
import gq from '../components/gsgq'
import jpgd from '../components/jpgd'







Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/collect',
      name: 'collect',
      component:collect,
      children:[
        {
          path:'gsgq',
         component:gq
        }
      ]
      
    },
    {
      path: '/news',
      name: 'news',
      component:news,
      children:[
        {
          path:'jpgd',
         component:jpgd
        }
      ]
    },
     {
      path: '/person',
      name: 'person',
      component:person,
      children:[
        {
          path:'scgq',
          component:(resolve) => require(['../components/scgq.vue'], resolve)
        }
      ]
    },
     {
      path: '/search',
      name: 'search',
      component:search,
      children:[
        {path:'/',redirect:'dq'},
           {path:'dq',
           component: (resolve) => require(['../components/dq.vue'], resolve)},
           {path:'gd',
           component:(resolve) => require(['../components/gd.vue'], resolve)},
           {path:'gs',
           component:(resolve) => require(['../components/gs.vue'], resolve)},
           {path:'mv',
           component:(resolve) => require(['../components/mv.vue'], resolve)},
           {path:'zj',
           component:(resolve) => require(['../components/zj.vue'], resolve)},
      ]
    }
  ]
})
