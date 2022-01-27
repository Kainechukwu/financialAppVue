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

				<Form @submit="handleSignup" :validation-schema="schema" v-slot="{ errors }">
					<!-- <input type="hidden" name="remember" value="true" /> -->
					<div class="">
						<div class="grid grid-cols-2 sm:gap-4">
							<div class="mb-6 col-span-2 sm:col-span-1">
								<label for="First Name" class="fs-14 tx-666666 fw-600">First Name</label>
								<!-- <input
									id="First Name"
									name="First name"
									type="text"
									v-model="firstName"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/> -->
								<Field
									name="firstName"
									type="text"
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									:class="{ 'is-invalid': errors.firstName }"
								/>
								<div class="invalid-feedback text-red-500">{{ errors.firstName }}</div>
							</div>
							<div class="mb-6 col-span-2 sm:col-span-1">
								<label for="Last Name" class="fs-14 tx-666666 fw-600">Last Name</label>
								<!-- <input
									id="Last Name"
									name="Last name"
									type="text"
									v-model="lastName"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/> -->
								<Field
									name="lastName"
									type="text"
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									:class="{ 'is-invalid': errors.lastName }"
								/>
								<div class="invalid-feedback text-red-500">{{ errors.lastName }}</div>
							</div>
						</div>
						<!-- --------------- -->

						<!-- ---------------- -->
						<div class="mb-6">
							<label for="email-address" class="fs-14 tx-666666 fw-600">Email address</label>
							<!-- <input
								id="email-address"
								name="email"
								type="email"
								@change="showEmailError = true"
								v-model="userEmail"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/> -->
							<Field
								name="email"
								type="text"
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.email }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.email }}</div>
						</div>

						<!-- ------------ -->

						<!-- ------------- -->
						<div class="mb-8">
							<label for="password" class="fs-14 tx-666666 fw-600">Password</label>
							<!-- <input
								id="password"
								name="password"
								type="password"
								v-model="userPassword"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/> -->
							<Field
								name="password"
								@change="passwordError = ''"
								type="password"
								class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.password }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.password }}</div>
							<!-- <div class="invalid-feedback text-red-500">{{ passwordError }}</div> -->
						</div>
					</div>

					<div class="">
						<!-- :class="[signupUser.loading ? 'opacity-25' : 'opacity-100']" -->
						<button
							:disabled="signupUser.loading"
							type="submit"
							class="bluebtn h-50px relative w-full py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
						>
							<div class="flex items-center justify-center">
								<span class="fs-14 items-center text-white fw-400 my-auto"> Create account </span>
								<div v-if="signupUser.loading" class="h-4 w-4 ml-4 rounded-md block">
									<div class="roundLoader opacity-50 mx-auto"></div>
								</div>
							</div>
						</button>
					</div>
				</Form>
				<div class="text-center tx-666666 fs-14 fw-400 mt-10 w-11/12 mx-auto">
					<span> By clicking "Create Account", you agree to bonfree’s terms of acceptable use</span>
				</div>
			</div>
			<div class="mt-11">
				<span class="fs-14 fw-400 blacktext"
					>Already have an account?
					<span @click="goToLogin" class="cursor-pointer fw-600">Login</span></span
				>
			</div>
		</div>
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { reactive, toRefs } from "vue";
import SignupService from "@/services/signup/SignupService.js";
import { Log, Util } from "@/components/util";
import SuprBizLogo from "@/components/svg/SuprBizLogo.vue";
export default {
	name: "Signup",
	components: {
		SuprBizLogo,
		Form,
		Field,
	},

	setup() {
		onMounted(() => {
			console.log("name", store.getters["authToken/companyName"]);
		});
		const store = useStore();
		const router = useRouter();
		const signupUser = reactive({
			loading: false,
		});

		const user = reactive({
			userEmail: "",
			userPassword: "",
			firstName: "",
			lastName: "",
			emailError: "",
			passwordError: "",
			showEmailError: false,
			showPasswordError: false,

			// userType: "Corporate",
			// accountCreated: false,
		});

		const schema = Yup.object().shape({
			firstName: Yup.string().required("First Name is required"),
			lastName: Yup.string().required("Last name is required"),
			email: Yup.string().required("Email is required").email("Email is invalid"),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Password is required"),
		});
		const goToLogin = () => {
			router.push("/login");
		};

		// const checkPassword = (e) => {
		// 	const password = e.target.value;
		// 	if(!Util.hasNumber(password) || !Util.hasLowerCase(password) || !Util.hasUpperCase(password) || !Util.hasSpecialCharacter(password)){
		// 		user.passwordError = "Field must have at least one uppercase, lowercase, number and special character"
		// 	}
		// }

		const handleSignup = (values) => {
			Log.info("values:" + JSON.stringify(values));
			// Log.info("signupUser:" + JSON.stringify(signupUser));
			if (
				!Util.hasLowerCase(values.password) ||
				!Util.hasUpperCase(values.password) ||
				!Util.hasSpecialCharacter(values.password) ||
				!Util.hasNumber(values.password)
			) {
				user.passwordError =
					"Field must have at least one uppercase, lowercase, number and special character";
				Util.handleGlobalAlert(true, "failed", user.passwordError);
			} else if (
				Util.hasLowerCase(values.password) &&
				Util.hasUpperCase(values.password) &&
				Util.hasSpecialCharacter(values.password) &&
				Util.hasNumber(values.password)
			) {
				signupUser.loading = true;
				SignupService.signupUser(
					{
						firstName: values.firstName,
						lastName: values.lastName,
						email: values.email,
						password: values.password,
					},
					(response) => {
						Log.info("response:" + JSON.stringify(response.response));
						store.commit("setSignupEmail", user.userEmail);
						signupUser.loading = false;
						Util.handleGlobalAlert(true, "success", response.data.message);
						router.push("/account_created");
					},
					(error) => {
						signupUser.loading = false;
						Log.error("error:" + JSON.stringify(error.response.data.Message));

						Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					}
				);
			}
		};

		// watch(user.password, (newValue) => {
		// 	user.password
		// });

		return {
			...toRefs(user),
			handleSignup,
			goToLogin,
			signupUser,
			schema,
		};
	},
};
</script>

<style lang="scss" scoped></style>
