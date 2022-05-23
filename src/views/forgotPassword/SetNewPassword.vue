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
					<div class="flex flex-col justify-center items-center mb-6">
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
									v-model="password"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<div class="mb-4">
								<label for="Confirm Password" class="fs-14 tx-666666 fw-600"
									>Confirm Password</label
								>
								<input
									id="Confirm Password"
									name="Confirm Password"
									type="password"
									v-model="confirmPassword"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
								<span class="text-red-500">{{ confirmErr }}</span>
							</div>

							<div v-for="instruction in instructions" :key="instruction" class="flex flex-col">
								<div class="flex py-0.5">
									<div class="flex items-center mr-2">
										<SmallCheckedSvg
											v-if="instruction === instructions[0]"
											:booleanState="isEnough"
										/>
										<SmallCheckedSvg
											v-else-if="instruction === instructions[1]"
											:booleanState="hasLowerCase"
										/>
										<SmallCheckedSvg
											v-else-if="instruction === instructions[2]"
											:booleanState="hasUpperCase"
										/>
										<SmallCheckedSvg
											v-else-if="instruction === instructions[3]"
											:booleanState="hasSpecialCharOrNum"
										/>

										<SmallCheckedSvg v-else />
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
import { ref, watch, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { Log, Util } from "@/components/util";
// import { Form, Field } from "vee-validate";
// import * as Yup from "yup";
import SmallCheckedSvg from "@/components/svg/SmallCheckedSvg.vue";
// import ApiResource from "@/components/core/ApiResource";
import UserActions from "@/services/userActions/userActions.js";

export default {
	name: "SetNewPassword",
	components: {
		SuprBizLogo,
		SmallCheckedSvg,
	},
	setup() {
		const route = useRoute();
		// const

		const router = useRouter();
		const newPassword = reactive({
			password: "",
			isEnough: false,
			hasLowerCase: false,
			hasUpperCase: false,
			hasSpecialCharOrNum: false,
		});
		const confirmPassword = ref("");
		const confirmErr = ref("");
		// const validArr = ref([]);

		const instructions = [
			"At least 8 characters",
			"Minimum one lower case",
			"Minimum one upper case",
			"One number or special character",
		];

		const setNewPassword = () => {
			if (
				!Util.hasLowerCase(newPassword.password) ||
				!Util.hasUpperCase(newPassword.password) ||
				!Util.hasSpecialCharacter(newPassword.password) ||
				!Util.hasNumber(newPassword.password)
			) {
				Util.handleGlobalAlert(
					true,
					"failed",
					"Field must have at least one uppercase, lowercase, number and special character"
				);
			} else {
				if (newPassword.password !== confirmPassword.value) {
					Util.handleGlobalAlert(true, "failed", "Passwords dont match");
				} else if (
					Util.hasLowerCase(newPassword.password) &&
					Util.hasUpperCase(newPassword.password) &&
					Util.hasSpecialCharacter(newPassword.password) &&
					Util.hasNumber(newPassword.password) &&
					newPassword.password === confirmPassword.value
				) {
					UserActions.resetPassword(
						{
							email: route.query.email,
							token: route.query.token,
							password: newPassword.password,
							confirmPassword: confirmPassword.value,
						},
						(response) => {
							Log.info("resetResponse" + JSON.stringify(response));
							Util.handleGlobalAlert(true, "success", response.data.message);
							router.push("/login");
						},
						(error) => {
							Log.error("resetError" + JSON.stringify(error));
							Util.handleGlobalAlert(true, "failed", error.response.data.Message);
						}
					);
				}
			}
			Log.info(newPassword.password);
		};

		const goToLogin = () => {
			router.push("/login");
		};

		// const showConfirmError = () => {
		// 	if (newPassword.password === confirmPassword.value) {
		// 		confirmErr.value = "";
		// 	} else {
		// 		confirmErr.value = "passwords don't match";
		// 	}
		// }

		watch(confirmPassword, (newValue) => {
			if (newPassword.password === newValue) {
				confirmErr.value = "";
				Log.info(newValue);
			} else {
				Log.info(newValue);
				confirmErr.value = "passwords don't match";
			}
		});

		watch(newPassword, (newValue) => {
			Log.info(newValue);
			if (newValue.password.length < 8) {
				Log.info(newValue.password);
				newValue.isEnough = false;
				Log.info(newValue.isEnough);
			} else {
				newValue.isEnough = true;
				Log.info(newValue.isEnough);
			}

			if (Util.hasLowerCase(newValue.password)) {
				newPassword.hasLowerCase = true;
			} else {
				newPassword.hasLowerCase = false;
			}

			if (Util.hasUpperCase(newValue.password)) {
				newPassword.hasUpperCase = true;
			} else {
				newPassword.hasUpperCase = false;
			}

			if (Util.hasSpecialCharacter(newValue.password) || Util.hasNumber(newValue.password)) {
				newPassword.hasSpecialCharOrNum = true;
			} else {
				newPassword.hasSpecialCharOrNum = false;
			}
		});

		return {
			setNewPassword,
			goToLogin,
			instructions,
			confirmPassword,

			confirmErr,
			...toRefs(newPassword),
		};
	},
};
</script>

<style lang="scss" scoped></style>
