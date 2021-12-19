import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
import "./assets/css/styles.scss"
import "./assets/css/base.css"
// import "./assets/css/app.min.css"
// import "./assets/css/bootstrap.min.css"
// import "./assets/css/icons.min.css"


createApp(App).use(store).use(router).mount('#app')
