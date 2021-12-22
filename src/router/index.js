import { createRouter, createWebHistory } from 'vue-router'
import pageRoutes from "./routes.js"



const routes = [
  ...pageRoutes,

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    let currentScroll = document.documentElement.scrollTop,
      int = setInterval(frame, 0)

    function frame() {
      if (0 > currentScroll) {
        clearInterval(int)
      } else {
        currentScroll = currentScroll - 12
        document.documentElement.scrollTop = currentScroll

      }
    }
    // return { x: 0, y: 0 }
  }
})

export default router
