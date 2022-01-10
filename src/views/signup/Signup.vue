<template>
	<div class="h-full">
		<!-- <AccountCreated v-if="accountCreated" :userEmail="userEmail" /> -->
		<div
			class="min-h-full register-page flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="mb-9">
				<SuprBizLogo />
			</div>
			<div style="max-width: 500px" class="register-form">
				<div class="flex flex-col justify-center items-center">
					<h2 class="mb-0 fs-24 fw-600 font-extrabold blacktext">Create an account</h2>
				</div>

				<form class="mt-8" action="#" method="POST">
					<!-- <input type="hidden" name="remember" value="true" /> -->
					<div class="">
						<div class="grid grid-cols-2 sm:gap-4">
							<div class="mb-6 col-span-2 sm:col-span-1">
								<label for="First Name" class="fs-14 tx-666666 fw-600">First Name</label>
								<input
									id="First Name"
									name="First name"
									type="text"
									v-model="firstName"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
							<div class="mb-6 col-span-2 sm:col-span-1">
								<label for="Last Name" class="fs-14 tx-666666 fw-600">Last Name</label>
								<input
									id="Last Name"
									name="Last name"
									type="text"
									v-model="lastName"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>
						<!-- --------------- -->

						<!-- ---------------- -->
						<div class="mb-6">
							<label for="email-address" class="fs-14 tx-666666 fw-600">Email address</label>
							<input
								id="email-address"
								name="email"
								type="email"
								v-model="userEmail"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>

						<!-- ------------ -->

						<!-- ------------- -->
						<div class="mb-8">
							<label for="password" class="fs-14 tx-666666 fw-600">Password</label>
							<input
								id="password"
								name="password"
								type="password"
								v-model="userPassword"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>

					<div class="">
						<button
							@click.prevent="handleSignup"
							type="submit"
							class="bluebtn h-50px relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
						>
							<span class="fs-14 items-center text-white fw-400 my-auto"> Create account </span>
						</button>
					</div>
				</form>
				<div class="text-center tx-666666 fs-14 fw-400 mt-10 w-11/12 mx-auto">
					<span> By clicking "Create Account", you agree to bonfree’s terms of acceptable use</span>
				</div>
			</div>
			<div class="mt-11">
				<span class="fs-14 fw-400 blacktext"
					>Don’t have an account?
					<span @click="goToLogin" class="cursor-pointer fw-600">Login</span></span
				>
			</div>
		</div>
	</div>
</template>

<script>
import { useRouter } from "vue-router";

import { reactive, toRefs } from "vue";
// import ApiResource from "@/components/core/ApiResource";
// import SignupService from "@/services/signup/SignupService.js";
// import { Log } from "@/components/util";
// import AccountCreated from "./AccountCreated.vue"
import SuprBizLogo from "@/components/svg/SuprBizLogo.vue";
// import PersonalAccountSvg from "@/components/svg/PersonalAccountSvg.vue"
export default {
	name: "Signup",
	components: {
		SuprBizLogo,
		// AccountCreated,
		// BuildingSvg,
		// PersonalAccountSvg,
	},
	setup() {
		const router = useRouter();
		// const signupUser = ApiResource.create();

		const user = reactive({
			userEmail: "",
			userPassword: "",
			firstName: "",
			lastName: "",
			orgName: "",
			areaCode: "+234",
			phoneNo: "",
			// userType: "Corporate",
			accountCreated: false,
		});

		// const setUserType = (type) => {
		//   user.userType = type
		// }

		const goToLogin = () => {
			router.push("/login");
		};

		const handleSignup = () => {
			router.push("/login");

			// signupUser.loading = true;
			// Log.info("user:" + JSON.stringify(user));
			// Log.info("signupUser:" + JSON.stringify(signupUser));

			// SignupService.signupUser(
			//   {
			//     firstName: user.firstName,
			//     lastName: user.lastName,
			//     email: user.userEmail,
			//     password: user.userPassword,
			//   },
			//   (response) => {
			//     Log.info("response:" + JSON.stringify(response));
			//     signupUser.loading = false;
			//     if (String(response.status).charAt(0) === "2") {
			//       user.accountCreated = true;
			//       Log.info("accountCreated" + JSON.stringify(user.accountCreated));
			//     }
			//   },
			//   (error) => {
			//     Log.error("error:" + JSON.stringify(error));
			//   }
			// );
		};

		// const router = useRouter()
		// const goToSignup = () => {
		//
		// }
		return {
			...toRefs(user),
			handleSignup,
			goToLogin,
			// setUserType,
		};
	},
};
</script>

<style lang="scss" scoped></style>
