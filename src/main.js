import { createApp } from 'vue'
<<<<<<< HEAD
=======
// import Vue from "vue";
>>>>>>> b614a954d775031a5810b9d37f04bff7575eac64
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
<<<<<<< HEAD

createApp(App).use(store).use(router).mount('#app')
=======
import "./assets/css/styles.scss"
import "./assets/css/base.css"
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
// import "./assets/css/app.min.css"
// import "./assets/css/bootstrap.min.css"
// import "./assets/css/icons.min.css"
// import "./plugins/chart.js"
// Vue.use(Chartkick.use(Chart))
createApp(App)
	.use(store)
	.use(VueChartkick)
	.use(router)
	.mount('#app')
>>>>>>> b614a954d775031a5810b9d37f04bff7575eac64
