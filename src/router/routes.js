// import Home from '../views/Home.vue'
import LandingPage from "@/views/LandingPage/LandingPage.vue"
// import { Constants } from '@/components/util';

export default [

	{
		path: '/',

		name: 'LandiingPage',
		meta: {
			skipAuth: true,
		},
		component: LandingPage
	},

]