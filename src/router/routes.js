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
		path: "/business_details",
		name: "Business Details",
		component: () => import("@/views/businessDetails/BusinessDetails.vue")
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
					},
					{
						path: "/transactions",
						name: "Transactions",
						component: () => import("@/views/main/Transactions.vue")
					},
					{
						path: "/payouts",
						name: "Payouts",
						component: () => import("@/views/main/Payouts.vue")
					},
					{
						path: "/plans",
						name: "Plans",
						component: () => import("@/views/main/plans/Plans.vue")
					},
					{
						path: "/merchants",
						name: "Merchants",
						component: () => import("@/views/main/Merchants.vue")
					},
					{
						path: "/customers",
						name: "Customers",
						component: () => import("@/views/main/Customers.vue")
					},
					{
						path: "/settings",
						redirect: "/settings/profile",
						name: "Settings",
						component: () => import("@/views/settings/Settings.vue"),
						children: [
							{
								path: "/settings/profile",
								name: "ProfileSettings",
								component: () => import("@/views/settings/ProfileSettings.vue")

							},
							{
								path: "/settings/security",
								name: "Change Password Settings",
								component: () => import("@/views/settings/Security.vue")
							},
							{
								path: "/settings/access_keys",
								name: "Access Key Settings",
								component: () => import("@/views/settings/AccessKeys.vue")
							},
							{
								path: "/settings/compliance",
								name: "Compliance Settings",
								component: () => import("@/views/settings/Compliance.vue")
							},
							{
								path: "/settings/roles",
								name: "Roles Settings",
								component: () => import("@/views/settings/RolesSettings.vue")
							}
						]
					},
					{
						path: "/configurations",
						name: "Configurations",
						redirect: "/configurations/profile"
						, component: () => import("@/views/main/configurations/Configurations.vue"),
						children: [
							{
								path: "/configurations/profile",
								name: "Configurations Profile",
								component: () => import("@/views/main/configurations/ConfigProfile.vue")
							},
							{
								path: "/configurations/settings",
								name: "Configurations Setting",
								component: () => import("@/views/main/configurations/ConfigSettings.vue")
							},
							{
								path: "/configurations/rates",
								name: "Configurations Rates",
								component: () => import("@/views/main/configurations/ConfigRates.vue")
							}
						]
					},
					{
						path: "/audit_logs",
						name: "AuditLogs",
						component: () => import("@/views/main/AuditLogs.vue")
					}
				]
			}
		]
	}
]