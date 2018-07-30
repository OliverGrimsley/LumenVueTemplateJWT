import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from './dashboard.vue'
import login from './login.vue'
import logout from './logout.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/api/spa/test', component: login },
  
  { path:
    '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout
  }
]

export default new VueRouter({
  routes
})
