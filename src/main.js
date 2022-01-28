import { createApp } from 'vue'
// import Vue from "vue";
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
import "./assets/css/styles.scss"
import "./assets/css/base.css"
import VueChartkick from "vue-chartkick";
import VueNumerals from 'vue-numerals';
import "chartkick/chart.js";

// import vClickOutside from './library/v-click-outside'
// import "./assets/css/app.min.css"
// import "./assets/css/bootstrap.min.css"
// import "./assets/css/icons.min.css"
// import "./plugins/chart.js"
// Vue.use(Chartkick.use(Chart))
createApp(App)
	.use(store)
	.use(VueChartkick)
	.use(VueNumerals)
	.use(router)
	.mount('#app')
	// .directive('clickOutside', vClickOutside)
