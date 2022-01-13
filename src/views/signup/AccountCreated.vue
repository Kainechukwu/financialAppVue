<template>
	<div class="h-full">
		<!-- <AccountCreated v-if="accountCreated" :userEmail="userEmail" /> -->
		<div
			class="min-h-full register-page flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="max-w-md p-6 sm:px-12 py-12 bg-white br-10 shadow-md">
				<div class="flex flex-col items-center">
					<div class="mb-5">
						<AccountCreatedSvg />
					</div>
					<h1 class="text-center mb-5 fw-600 fs-20 blacktext">Account Created</h1>

					<p class="tx-666666 fw-400 fs-14 text-center">
						A verification email has been sent to your inbox. Click the provided link to complete
						registration.
					</p>

					<div class="text-center tx-666666 fs-14 fw-500 mt-7 mb-7">
						<span
							>Haven’t seen verification mail?
							<span @click="resendEmail" class="cursor-pointer text-blue-500">Resend</span></span
						>
					</div>

					<div class="w-full flex justify-center">
						<button
							@click.prevent="goToLogin"
							type="submit"
							class="bluebtn h-50px relative w-11/12 py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
						>
							<div class="flex items-center justify-center">
								<span class="fs-14 items-center text-white fw-400 my-auto"> Return to Login </span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import AccountCreatedSvg from "@/components/svg/AccountCreatedSvg.vue";
import SignupService from "@/services/signup/SignupService.js";
import { Log } from "@/components/util";
import { useRouter } from "vue-router";

export default {
	name: "Account Created",
	components: {
		AccountCreatedSvg,
	},

	setup() {
		// onMounted(() => {

		// 	const email = store.state.signupEmail;
		// 	Log.info("email" + email);
		// });
		const store = useStore();
		const router = useRouter();
		const email = computed(() => store.state.signupEmail);
		const goToLogin = () => {
			router.push("/login");
		};

		const resendEmail = () => {
			Log.info("email resend" + email.value);
			SignupService.resendVerificationEmail(
				email.value,
				// "bismarckkaine@gmail.com",
				// "kaine.bismarck@suprbiz.io",
				(response) => {
					Log.info("resendVerificationResponse" + JSON.stringify(response));
				},
				(error) => {
					Log.error("resendVerificationError" + JSON.stringify(error));
				}
			);
		};
		return {
			resendEmail,
			goToLogin,
		};
	},
};
</script>

<style lang="scss" scoped></style>
