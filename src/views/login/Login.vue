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
				<!-- <div class="w-96"> -->
				<div class="flex flex-col justify-center items-center">
					<h2 class="mb-0 fs-24 fw-600 font-extrabold blacktext">Welcome Back</h2>
				</div>

				<Form @submit="handleLogin" :validation-schema="schema" v-slot="{ errors }">
					<!-- <input type="hidden" name="remember" value="true" /> -->
					<div class="">
						<!-- --------------- -->

						<div class="mb-6">
							<label for="email-address" class="fs-14 tx-666666 fw-600">Email address</label>
							<Field
								name="email"
								type="text"
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.email }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.email }}</div>
							<!-- <input
								id="email-address"
								name="email"
								type="email"
								v-model="userEmail"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/> -->
						</div>

						<!-- ------------ -->

						<div class="mb-4">
							<label for="password" class="fs-14 tx-666666 fw-600">Password</label>
							<Field
								autocomplete="off"
								name="password"
								type="password"
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.password }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.password }}</div>
							<!-- <input
								id="password"
								name="password"
								type="password"
								v-model="userPassword"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/> -->
						</div>
					</div>

					<div @click="goToPasswordReset" class="mb-8">
						<span class="fs-14 fw-500 cursor-pointer blacktext">Forgot Password?</span>
					</div>

					<div class="">
						<button
							:disabled="loginUser.loading"
							type="submit"
							class="bluebtn h-50px relative w-full py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
						>
							<div class="flex items-center justify-center">
								<span class="fs-14 items-center text-white fw-400 my-auto">
									Login to your account
								</span>
								<div v-if="loginUser.loading" class="h-4 w-4 ml-4 rounded-md block">
									<div class="roundLoader opacity-50 mx-auto"></div>
								</div>
							</div>
						</button>
					</div>
				</Form>
				<!-- </div> -->
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
import SuprBizLogo from "@/components/svg/SuprBizLogo.vue";
import { reactive, toRefs } from "vue";
import UserInfo from "@/services/userInfo/userInfo.js";

import { useRouter } from "vue-router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import LoginService from "@/services/login/LoginService.js";
import { Log, Util, Constants } from "@/components/util";
import UserActions from "@/services/userActions/userActions.js";
import { useStore } from "vuex";
// import { askForPermissioToReceiveNotifications } from "@/push-notification";

export default {
	name: "Login",
	components: {
		SuprBizLogo,
		Form,
		Field,
	},
	setup() {
		const router = useRouter();
		const store = useStore();
		const loginUser = reactive({
			loading: false,
		});

		const user = reactive({
			userEmail: "",
			userPassword: "",
		});

		const schema = Yup.object().shape({
			email: Yup.string().required("Email is required").email("Email is invalid"),
			password: Yup.string().required("Password is required"),
		});

		const postDeviceInfo = () => {
			const device = Util.getDeviceType(window.navigator.userAgent);
			const os = Util.getSystemOs(window.navigator.userAgent);
			Log.info("type:" + device);
			Log.info("os:" + os);

			Log.info("info nav:" + JSON.stringify(window.navigator));
			UserActions.postDeviceInfo(
				{
					deviceName: device,
					operatingSystem: os,
					// email: store.getters["authToken/email"],
					// userId: store.getters["authToken/userId"],
				},
				(response) => {
					Log.info(response);
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const generateKeys = () => {
			UserInfo.getClientKeys(
				(response) => {
					Log.info(response);
					const data = response.data.data;

					store.commit("authToken/clientLiveKey", data.liveKey);
					store.commit("authToken/clientTestKey", data.testKey);
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const handleLogin = (values) => {
			loginUser.loading = true;
			Log.info(loginUser.loading);
			Log.info("user:" + JSON.stringify(user));
			LoginService.loginUser(
				{
					email: values.email,
					password: values.password,
				},
				(response) => {
					Log.info("login response:" + JSON.stringify(response.data));

					loginUser.loading = false;

					LoginService.handleSuccessfulLogin(response);

					if (Util.checkAuth(Constants.backOfficeAuth)) {
						router.push("/backOffice/transactions");
					} else if (Util.checkAuth(Constants.merchantAuth)) {
						router.push("/earn");
						postDeviceInfo();
						// askForPermissioToReceiveNotifications();
					}
					Util.handleGlobalAlert(true, "success", response.data.message);
					generateKeys();
				},
				(error) => {
					Log.error("login error:" + JSON.stringify(error));
					// Log.info("it erred")
					loginUser.loading = false;
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					Log.info("loginLoading " + String(loginUser.loading));
					// Util.throttle({
					// 	key: "login",
					// 	run: () => {
					// 		handleLogin();
					// 	},
					// 	time: 400,
					// });
					handleLogin();
				}
			);
		};

		const goToSignUp = () => {
			router.push("/signup");
		};

		const goToPasswordReset = () => {
			router.push("/reset_password");
		};

		return {
			...toRefs(user),
			handleLogin,
			goToSignUp,
			schema,
			goToPasswordReset,
			loginUser,
		};
	},
};
</script>

<style lang="scss" scoped></style>
