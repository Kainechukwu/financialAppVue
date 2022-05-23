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
				<div class="flex flex-col justify-center items-center mb-6">
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
						<div class="mb-6">
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

						<div class="mb-8">
							<div class="relative">
								<Listbox as="div" v-model="selected">
									<ListboxLabel class="block fs-14 tx-666666 fw-600 truncate">
										Country
									</ListboxLabel>
									<div class="mt-1 relative">
										<ListboxButton
											class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
										>
											<span class="block truncate">{{ selected.name }}</span>
											<span
												class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
											>
												<div class="h-5 w-5 text-gray-400 flex items-center">
													<svg
														width="12"
														height="6"
														viewBox="0 0 12 6"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1 1L5.73 5.2L10.46 1"
															stroke="#BFBFBF"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
												</div>
											</span>
										</ListboxButton>

										<transition
											leave-active-class="transition ease-in duration-100"
											leave-from-class="opacity-100"
											leave-to-class="opacity-0"
										>
											<ListboxOptions
												class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
											>
												<ListboxOption
													as="template"
													v-for="country in countries"
													:key="country.id"
													:value="country"
													v-slot="{ active, selected }"
												>
													<li
														:class="[
															active ? 'blacktext bg-gray-100' : 'blacktext',
															'cursor-default select-none relative py-2 pl-3 pr-9',
														]"
													>
														<span
															:class="[
																selected ? 'font-semibold' : 'font-normal',
																'block truncate',
															]"
														>
															{{ country.name }}
														</span>

														<span
															v-if="selected"
															:class="[
																active ? 'text-white' : 'text-indigo-600',
																'absolute inset-y-0 right-0 flex items-center pr-4',
															]"
														>
														</span>
													</li>
												</ListboxOption>
											</ListboxOptions>
										</transition>
									</div>
								</Listbox>
							</div>
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
import { reactive, toRefs, ref } from "vue";
import SignupService from "@/services/signup/SignupService.js";
import { Log, Util } from "@/components/util";
import SuprBizLogo from "@/components/svg/SuprBizLogo.vue";
import UserActions from "@/services/userActions/userActions.js";
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";

export default {
	name: "Signup",
	components: {
		SuprBizLogo,
		Form,
		Field,
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
	},

	setup() {
		onMounted(() => {
			getCountries();
			console.log("name", store.getters["authToken/companyName"]);
		});
		const store = useStore();
		const router = useRouter();
		const signupUser = reactive({
			loading: false,
		});
		const countries = ref([]);
		const selected = ref({});

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

		const getCountries = () => {
			UserActions.getCountries(
				(response) => {
					countries.value = response.data.data;
					selected.value = countries.value[0];
					// Log.info(countries.value);
				},
				(error) => {
					Log.error(error);
				}
			);
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
						countryId: selected.value.id,
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
				// Log.info(
				// 	"signupPayLoad:" +
				// 		JSON.stringify({
				// 			firstName: values.firstName,
				// 			lastName: values.lastName,
				// 			email: values.email,
				// 			password: values.password,
				// 			countryId: selected.value.id,
				// 		})
				// );
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
			selected,
			countries,
		};
	},
};
</script>

<style lang="scss" scoped></style>
