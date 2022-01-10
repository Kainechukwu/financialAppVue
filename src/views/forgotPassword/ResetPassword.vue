<template>
	<div class="h-full">
		<!-- <AccountCreated v-if="accountCreated" :userEmail="userEmail" /> -->
		<div
			class="min-h-full pt-10 register-page flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="mb-9">
				<SuprBizLogo />
			</div>
			<div style="max-width: 500px" class="register-form sm:mx-auto w-full sm:w-full">
				<div class="">
					<div class="flex flex-col justify-center items-center">
						<h2 class="mb-2 fs-24 fw-600 font-extrabold blacktext">Reset Password</h2>
						<p class="tx-666666 fw-400 fs-14">Enter the email associated with your account .</p>
					</div>

					<form class="mt-8" action="#" method="POST">
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
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<!-- ------------ -->
						</div>

						<div class="">
							<button
								@click.prevent="sendInstructions"
								type="submit"
								class="cursor-pointer bluebtn h-11 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
							>
								<span class="fs-14 items-center text-white fw-400 my-auto"> Reset Password </span>
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
				<span @click="goToLogin" class="cursor-pointer fs-14 fw-400">Return to Login</span>
			</div>
		</div>
	</div>
</template>

<script>
import SuprBizLogo from "@/components/svg/SuprBizLogo.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
// import ApiResource from "@/components/core/ApiResource";
// import LoginService from "@/services/login/LoginService.js";
// import { Log } from "@/components/util";

export default {
	name: "ResetPassword",
	components: {
		SuprBizLogo,
	},
	setup() {
		const router = useRouter();

		// const sentEmail = ApiResource.create();
		const userEmail = ref("");
		// const isEmailSent = ref(false);

		const sendInstructions = () => {
			router.push("/set_new_password");
			// sentEmail.loading = true;
			// Log.info(sentEmail.loading);
			// Log.info("userEmail" + userEmail.value);

			// LoginService.forgotPasswordApi(
			//   {
			//     email: userEmail.value,
			//   },
			//   (response) => {
			//     sentEmail.loading = false;
			//     isEmailSent.value = true;
			//     Log.info("response: " + JSON.stringify(response));
			//   },
			//   (error) => {
			//     sentEmail.loading = false;
			//     Log.error("error: " + JSON.stringify(error));
			//   }
			// );
		};

		const goToLogin = () => {
			router.push("/login");
		};

		const setNewPassword = () => {
			router.push("/set_new_password");
		};

		return {
			userEmail,
			sendInstructions,
			goToLogin,
			setNewPassword,
		};
	},
};
</script>

<style lang="scss" scoped></style>
