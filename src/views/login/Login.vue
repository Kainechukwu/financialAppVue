<template>
	<div class="h-full overflow-auto">
		<!-- <AccountCreated v-if="accountCreated" :userEmail="userEmail" /> -->
		<div
			class="min-h-full pt-10 register-page flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="mb-9">
				<StarLogoSvg />
			</div>
			<div class="register-form">
				<div class="w-96">
					<div class="flex flex-col justify-center items-center">
						<h2 class="mb-0 fs-24 fw-600 font-extrabold blacktext">Welcome Back</h2>
					</div>

					<form class="mt-8 w-full" action="#" method="POST">
						<!-- <input type="hidden" name="remember" value="true" /> -->
						<div class="">
							<!-- --------------- -->

							<div class="mb-6">
								<label for="email-address" class="fs-14 tx-666666 fw-600">Email address</label>
								<input
									id="email-address"
									name="email"
									type="email"
									v-model="userEmail"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<!-- ------------ -->

							<div class="mb-4">
								<label for="password" class="fs-14 tx-666666 fw-600">Password</label>
								<input
									id="password"
									name="password"
									type="password"
									v-model="userPassword"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>

						<div class="mb-8">
							<span class="fs-14 fw-500 cursor-pointer blacktext">Forgot Password?</span>
						</div>

						<div class="">
							<button
								@click.prevent="handleLogin"
								type="submit"
								class="cursor-pointer bluebtn h-50px relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
							>
								<span class="fs-14 items-center text-white fw-400 my-auto">
									Login to your account
								</span>
							</button>
						</div>
					</form>
				</div>
				<!-- <div class="text-center tx-666666 fs-14 fw-400 mt-10">
          <span>
            By clicking "Create Account", you agree to bonfree’s terms of
            acceptable use</span
          >
        </div> -->
			</div>
			<div class="mt-11">
				<span class="fs-14 fw-400 blacktext"
					>Don’t have an account?
					<span @click="goToSignUp" class="cursor-pointer fw-600">Sign Up</span></span
				>
			</div>
		</div>
	</div>
</template>

<script>
import StarLogoSvg from "@/components/svg/StarLogoSvg.vue";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
// import ApiResource from "@/components/core/ApiResource";
// import LoginService from "@/services/login/LoginService.js";
// import { Log } from "@/components/util";

export default {
	name: "Login",
	components: {
		StarLogoSvg,
	},
	setup() {
		const router = useRouter();

		// const loginUser = ApiResource.create();

		const user = reactive({
			userEmail: "",
			userPassword: "",
		});

		const handleLogin = () => {
			router.push("/overview");
			// loginUser.loading = true;
			// Log.info("user:" + JSON.stringify(user));
			// LoginService.loginUser(
			//   {
			//     email: user.userEmail,
			//     password: user.userPassword,
			//   },
			//   (response) => {
			//     Log.info("response:" + JSON.stringify(response));
			//     //   router.push("/overview")
			//   },
			//   (error) => {
			//     Log.error("error:" + JSON.stringify(error));
			//   }
			// );
		};

		const goToSignUp = () => {
			router.push("/signup");
		};

		return {
			...toRefs(user),
			handleLogin,
			goToSignUp,
		};
	},
};
</script>

<style lang="scss" scoped></style>
