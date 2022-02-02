import Home from '../views/Home.vue'

export default [
	{
		path: '/',
		redirect: "/signup",
		name: 'Home',
		meta: {
			skipAuth: true,
		},
		component: Home
	},
	{
		path: "/signup",
		name: "Signup",
		meta: {
			skipAuth: true,
		},
		component: () => import("@/views/signup/Signup.vue")
	},
	{
		path: "/account_created",
		name: "Account Created",
		meta: {
			skipAuth: true,
		},
		component: () => import("@/views/signup/AccountCreated.vue")
	},
	{
		path: "/login",
		name: "Login",
		meta: {
			skipAuth: true,
		},
		component: () => import("@/views/login/Login.vue")
	},
	{
		path: "/reset_password",
		name: "ResetPassword",
		meta: {
			skipAuth: true,
		},
		component: () => import("@/views/forgotPassword/ResetPassword.vue")
	},
	{
		path: "/set_new_password",
		name: "SetNewPassword",
		meta: {
			skipAuth: true,
		},
		component: () => import("@/views/forgotPassword/SetNewPassword.vue")
	},
	{
		path: "/verification_code",
		name: "Verification Code",
		meta: {
			skipAuth: true,
		},
		component: () => import("@/views/otp/VerificationCode.vue")
	},
	{
		path: "/api/v1/account/confirm-email",
		name: "Confirm Email",
		meta: {
			skipAuth: true,
		},
		component: () => import("@/views/redirect/ConfirmEmailRedirect.vue"),

	},
	{
		path: "/api/v1/account/reset-password",
		name: "Reset Password",
		meta: {
			skipAuth: true,
		},
		redirect: "/set_new_password",
		component: () => import("@/views/redirect/ConfirmEmailRedirect.vue"),

	},

	// {
	// 	path: "/business_details",
	// 	name: "Business Details",
	// 	component: () => import("@/views/businessDetails/BusinessDetails.vue")
	// },

	{
		path: "/dashboard",
		redirect: "/overview",
		name: "Dashboard",
		component: () => import("@/views/Dashboard.vue"),
		children: [
			{
				path: "/main",
				name: "Main",
				redirect: "/earn",
				component: () => import("@/views/main/Main.vue"),
				children: [
					// {
					// 	path: "/overview",
					// 	name: "Overview",
					// 	component: () => import("@/views/main/overview/Overview.vue")
					// },
					{
						path: "/get_started",
						name: "Get Started",
						component: () => import("@/views/main/PendingTasks.vue")
					},
					{
						path: "/earn",
						name: "Earn",
						redirect: "/earn/overview",
						component: () => import("@/views/main/earn/Earn.vue"),
						children: [
							{
								path: "/earn/overview",
								name: "Earn overview",
								component: () => import("@/views/main/earn/EarnOverview.vue")
							},
							{
								path: "/deposit",
								name: "Earn Deposit",
								redirect: "/earn/deposit",
								component: () => import("@/views/main/earn/Deposit.vue"),
								children: [
									{
										path: "/earn/deposit",
										name: "Earn Deposit 1",
										component: () => import("@/views/main/earn/EarnDeposit.vue")
									},
									{
										path: "/earn/fund_account",
										name: "Earn_fund Account",
										component: () => import("@/views/main/earn/FundAccount.vue")
									},
								]
							},
							{
								path: "/withdraw",
								name: "Earn_Withdraw",
								component: () => import("@/views/main/earn/Withdraw.vue")
							},
							{
								path: "/bank_details",
								name: "Earn_Bank Details",
								component: () => import("@/views/main/earn/BankDetails.vue")
							},
							{
								path: "/confirm_withdrawal",
								name: "Earn_Confirm Withdrawal",
								component: () => import("@/views/main/earn/ConfirmWithdrawal.vue")
							},

						]
					},
					// {
					// 	path: "/transactions",
					// 	name: "Transactions",
					// 	component: () => import("@/views/main/Transactions.vue")
					// },
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
					// {
					// 	path: "/customers",
					// 	redirect: "/customers/customer_list",
					// 	name: "Customers",
					// 	component: () => import("@/views/main/customers/Customers.vue"),
					// 	children: [
					// 		{
					// 			path: "/customers/customer_list",
					// 			name: "Customers List",
					// 			component: () => import("@/views/main/customers/CustomerList.vue")
					// 		},
					// 		{
					// 			path: "/customers/transactions/:merchantId",
					// 			name: "Customers Transactions",
					// 			component: () => import("@/views/main/customers/Transactions.vue")
					// 		},
					// 	]
					// },
					{
						path: "/backOffice/transactions",
						redirect: "/backoffice/transactions/deposit_list",
						name: "Transactions",
						component: () => import("@/views/backoffice/transactions.vue"),
						children: [
							{
								path: "/backoffice/transactions/deposit_list",
								name: 'Transactions Deposit List',
								component: () => import("@/views/backoffice/DepositList.vue")

							},
							{
								path: "/backoffice/transactions/withdrawal_list",
								name: 'Transactions Withdrawal List',
								component: () => import("@/views/backoffice/WithdrawalList.vue")

							}
						]
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
								path: "/settings/business_details",
								name: "Business Details Settings",
								component: () => import("@/views/settings/BusinessDetails.vue")

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
							// {
							// 	path: "/settings/roles",
							// 	name: "Roles Settings",
							// 	component: () => import("@/views/settings/RolesSettings.vue")
							// },
							{
								path: "/settings/pin",
								name: "PIN",
								component: () => import("@/views/settings/Pin.vue")
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