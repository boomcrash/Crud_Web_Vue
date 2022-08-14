import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Post',
    component: () => import('../components/posts/Post')
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: () => import("../components/navigation/Navigation")
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import("@/components/navigation/Bar")
  },
  {
    path: '/mypost',
    name: 'myPost',
    component: () => import("@/components/mypost/myPost")
  }
    //{
    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
