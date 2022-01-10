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
						<h2 class="mb-2 fs-24 fw-600 font-extrabold blacktext">Set New Password</h2>
						<p class="tx-666666 fw-400 fs-14">Enter the email associated with your account .</p>
					</div>

					<form class="mt-8" action="#" method="POST">
						<!-- <input type="hidden" name="remember" value="true" /> -->
						<div class="">
							<!-- --------------- -->

							<div class="mb-4">
								<label for="New Password" class="fs-14 tx-666666 fw-600">New Password</label>
								<input
									id="New Password"
									name="New Password"
									type="password"
									v-model="newPassword"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<div v-for="instruction in instructions" :key="instruction" class="flex flex-col">
								<div class="flex py-0.5">
									<div class="flex items-center mr-2">
										<SmallCheckedSvg />
									</div>
									<span class="fw-400 fs-12 tx-666666">{{ instruction }}</span>
								</div>
							</div>

							<!-- ------------ -->
						</div>

						<div class="mt-6">
							<button
								@click.prevent="setNewPassword"
								type="submit"
								class="cursor-pointer bluebtn h-50px relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
							>
								<span class="fs-14 items-center text-white fw-400 my-auto"> Set Password </span>
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
import SmallCheckedSvg from "@/components/svg/SmallCheckedSvg.vue";
// import ApiResource from "@/components/core/ApiResource";
// import LoginService from "@/services/login/LoginService.js";
import { Log } from "@/components/util";

export default {
	name: "SetNewPassword",
	components: {
		SuprBizLogo,
		SmallCheckedSvg,
	},
	setup() {
		const router = useRouter();
		const newPassword = ref("");
		const instructions = [
			"At least 8 characters",
			"Minimum one lower case",
			"Minimum one upper case",
			"One number or special character",
		];
		const setNewPassword = () => {
			Log.info(newPassword.value);
		};

		const goToLogin = () => {
			router.push("/login");
		};

		return {
			newPassword,
			setNewPassword,
			goToLogin,
			instructions,
		};
	},
};
</script>

<style lang="scss" scoped></style>
