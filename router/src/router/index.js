import Vue from 'vue'
import Router from 'vue-router'
import end from '../components/end'
import front from '../components/front'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/end',
      name: 'end',
      component: end
    },
    {
      path:'/front',
      name:'front',
      component:front,
    }

  ]
})
