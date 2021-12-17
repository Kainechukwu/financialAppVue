export default [
	{
		path: "/signup",
		name: "Signup",
		component: () => import("@/views/signup/Signup.vue")
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/Login.vue")
	}
]