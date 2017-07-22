import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../components/home/home.vue'
import seller from '../components/seller/seller.vue'
import download from '../components/download/download.vue'
import servers from '../components/servers/servers.vue'
import login from '../components/login/login.vue'
import bannerlist from '../components/bannerlist/bannerlist.vue'


export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path:'/seller',
      component:seller
    },
    {
      path:'/download',
      component:download
    },
    {
      path:'/servers',
      component:servers
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/bannerlist',
      component:bannerlist
    }

  ]
})
