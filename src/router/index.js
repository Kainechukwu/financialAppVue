import { createRouter, createWebHistory } from 'vue-router'
import pageRoutes from "./routes.js"
import guard from "./util/guard";



const routes = [
  ...pageRoutes,


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
router.beforeEach(guard);
export default router
