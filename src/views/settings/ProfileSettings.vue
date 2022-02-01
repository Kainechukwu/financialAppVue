/*eslint quote-props: ["error", "consistent-as-needed"]*/

<template>
	<div class="w-full px-10 pb-8">
		<div class="grid grid-cols-5 mt-12">
			<div class="col-span-2">
				<div class="flex flex-col">
					<h1 class="blacktext fw-500 fs-18 mb-8">Personal Information</h1>
				</div>
			</div>
			<div class="col-span-3">
				<Form @submit="updateProfile" :validation-schema="schema" v-slot="{ errors }">
					<div class="flex flex-col w-9/12">
						<div class="flex flex-col">
							<div class="grid grid-cols-2 gap-4">
								<div class="mb-8">
									<label for="First Name" class="fs-14 fw-400 tx-666666">First Name</label>
									<Field
										:readonly="isProfileUpdated"
										id="First Name"
										name="firstName"
										v-model="firstName"
										type="text"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.firstName }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.firstName }}</div>
								</div>

								<div class="mb-8">
									<label for="Last Name" class="fs-14 fw-400 tx-666666">Last Name</label>
									<Field
										:readonly="isProfileUpdated"
										id="Last Name"
										name="lastName"
										v-model="lastName"
										type="text"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.lastName }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.lastName }}</div>
								</div>
							</div>

							<div class="grid grid-cols-2 gap-4">
								<!-- -------------- -->
								<div class="mb-8">
									<label for="Email Address" class="fs-14 fw-400 tx-666666">Email Address</label>
									<Field
										:readonly="isProfileUpdated"
										id="Email Address"
										name="email"
										v-model="email"
										type="email"
										autocomplete="off"
										required=""
										placeholder="john.doe@gmail.com"
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.email }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.email }}</div>
								</div>

								<div>
									<label for="Phone No" class="fs-14 tx-666666 fw-600">Phone No</label>
									<div class="relative">
										<Field
											:readonly="isProfileUpdated"
											id="Phone No"
											name="phoneNo"
											type="number"
											v-model="phoneNo"
											autocomplete="off"
											required=""
											class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
											:class="{ 'is-invalid': errors.phoneNo }"
										/>
										<div class="invalid-feedback text-red-500">{{ errors.phoneNo }}</div>
										<!-- pl-12 -->
										<!-- <div
										
											:class="{ numHolder: errors.phoneNo }"
											class="z-20 w-8 absolute left-0 inset-y-0 top-0 blacktext h-5 flex items-center my-auto ml-2"
										>
											+234
										</div> -->
									</div>
								</div>
							</div>

							<div class="mb-8">
								<label for="Date of Birth" class="fs-14 fw-400 tx-666666">Date of Birth</label>
								<Field
									:readonly="isProfileUpdated"
									id="Date of Birth"
									name="dob"
									:type="isProfileUpdated ? 'text' : 'date'"
									autocomplete="off"
									v-model="dob"
									required=""
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									:class="{ 'is-invalid': errors.dob }"
								/>
								<div v-if="!isProfileUpdated" class="invalid-feedback text-red-500">
									{{ errors.dob }}
								</div>
							</div>

							<!-- ----------  -->

							<div class="flex justify-end">
								<button
									:disabled="submitLoading || isProfileUpdated"
									type="submit"
									class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
								>
									<div class="flex items-center justify-center">
										<span class="text-white">Submit</span>
										<div v-if="submitLoading" class="h-4 w-4 ml-4 rounded-md block">
											<div class="roundLoader opacity-50 mx-auto"></div>
										</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</div>
		<otp-phone-number />
	</div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { Log, Util } from "@/components/util";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
// import ApiResource from "@/components/core/ApiResource";
import OtpPhoneNumber from "@/views/modals/OtpPhoneNumber.vue";
import UserActions from "@/services/userActions/userActions.js";
import { reactive, toRefs, ref } from "vue";

/*eslint quote-props: ["error", "consistent"]*/

export default {
	name: "ProfileSettings",
	components: {
		OtpPhoneNumber,
		Form,
		Field,
	},
	setup() {
		onMounted(() => {});
		const store = useStore();
		// const profileUpdate = ApiResource.create();
		const submitLoading = ref(false);
		const isProfileUpdated = computed(() => store.getters["authToken/isProfileUpdated"]);
		const userProfile = reactive({
			email: store.getters["authToken/email"],
			// dob: store.getters["authToken/dob"],
			// .length > 0
			// 	? computed(() => store.getters["authToken/dob"])
			// 	: "",
			firstName: computed(() => store.getters["authToken/firstName"]),
			lastName: store.getters["authToken/lastName"],
			phoneNo: store.getters["authToken/phoneNumber"],

			// userType: "Corporate",
			// accountCreated: false,
		});

		const schema = Yup.object().shape({
			firstName: Yup.string().required("First Name is required"),
			lastName: Yup.string().required("Last name is required"),
			email: Yup.string().required("Email is required").email("Email is invalid"),
			dob: Yup.date().required("Date of birth is required"),
			phoneNo: Yup.string().required("Phone number is required"),
		});

		// const sliceNumber = (num) => {
		// 	const number = num;
		// 	return "0" + String(number);
		// };

		const updateProfile = (values) => {
			submitLoading.value = true;
			Util;

			const userDetails = {
				merchantId: store.getters["authToken/userId"],
				firstName: values.firstName,
				lastName: values.lastName,
				// dob: new Date(values.dob),
				dob: values.dob,
				phoneNumber: values.phoneNo,
			};

			Log.info(userDetails);

			UserActions.merchantUpdateProfile(
				userDetails,

				(response) => {
					submitLoading.value = false;
					Log.info("profileUpdate response" + String(response));

					store.commit("setOtpPhoneNumberModal", true);
					store.commit("authToken/phoneNumber", userDetails.phoneNumber);
					store.commit("authToken/firstName", userDetails.firstName);
					store.commit("authToken/lastName", userDetails.lastName);
					store.commit("authToken/email", userDetails.values.email);
					store.commit("authToken/dob", userDetails.values.dob);

					// Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					submitLoading.value = false;
					Log.error("profileUpdate response" + String(error));

					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};
		return {
			...toRefs(userProfile),
			updateProfile,
			schema,
			submitLoading,
			isProfileUpdated,
		};
	},
};
</script>

<style lang="scss" scoped>
.numHolder {
	top: -20px;
}
</style>
