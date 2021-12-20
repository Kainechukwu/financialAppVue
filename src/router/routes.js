import Home from '../views/Home.vue'

export default [
	{
		path: '/',
		redirect: "/signup",
		name: 'Home',
		component: Home
	},
	{
		path: "/signup",
		name: "Signup",
		component: () => import("@/views/signup/Signup.vue")
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/login/Login.vue")
	},
	{
		path: "/reset_password",
		name: "ResetPassword",
		component: () => import("@/views/forgotPassword/ResetPassword.vue")
	},
	{
		path: "/set_new_password",
		name: "SetNewPassword",
		component: () => import("@/views/forgotPassword/SetNewPassword.vue")
	},
	{
		path: "/verification_code",
		name: "Verification Code",
		component: () => import("@/views/otp/VerificationCode.vue")
	},

	{
		path: "/dashboard",
		redirect: "/overview",
		name: "Dashboard",
		component: () => import("@/views/Dashboard.vue"),
		children: [
			{
				path: "/main",
				name: "Main",
				redirect: "/overview",
				component: () => import("@/views/main/Main.vue"),
				children: [
					{
						path: "/overview",
						name: "Overview",
						component: () => import("@/views/main/overview/Overview.vue")
					},
					{
						path: "/pending_tasks",
						name: "Pending Tasks",
						component: () => import("@/views/main/PendingTasks.vue")
					}
				]
			}
		]
	}
]