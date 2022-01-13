<template>
	<div class="w-full px-10 pb-8">
		<div class="grid grid-cols-5 mt-12">
			<div class="col-span-2">
				<div class="flex flex-col">
					<h1 class="blacktext fw-500 fs-18 mb-8">Personal Information</h1>
				</div>
			</div>
			<div class="col-span-3">
				<div class="flex flex-col w-9/12">
					<div class="flex flex-col">
						<div class="grid grid-cols-2 gap-4">
							<div class="mb-8">
								<label for="First Name" class="fs-14 fw-400 tx-666666">First Name</label>
								<input
									id="First Name"
									name="FirstName"
									v-model="firstName"
									type="text"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<div class="mb-8">
								<label for="Last Name" class="fs-14 fw-400 tx-666666">Last Name</label>
								<input
									id="Last Name"
									name="LastName"
									v-model="lastName"
									type="text"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<!-- -------------- -->
							<div class="mb-8">
								<label for="Email Address" class="fs-14 fw-400 tx-666666">Email Address</label>
								<input
									id="Email Address"
									name="Email Address"
									v-model="email"
									type="email"
									autocomplete="off"
									required=""
									placeholder="john.doe@gmail.com"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<div>
								<label for="Phone No" class="fs-14 tx-666666 fw-600">Phone No</label>
								<div class="relative">
									<input
										id="Phone No"
										name="PhoneNo"
										type="number"
										v-model="phoneNo"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full pl-12 pr-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									/>

									<div
										class="z-20 w-8 absolute left-0 inset-y-0 blacktext h-5 flex items-center my-auto ml-2"
									>
										+234
									</div>
								</div>
							</div>
						</div>

						<div class="mb-8">
							<label for="Date of Birth" class="fs-14 fw-400 tx-666666">Date of Birth</label>
							<input
								id="Date of Birth"
								name="Date of Birth"
								type="Date"
								autocomplete="off"
								v-model="dob"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>

						<!-- ----------  -->

						<div class="flex justify-end">
							<div
								@click="updateProfile"
								class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
							>
								<span class="text-white">Submit</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Log } from "@/components/util";
import ApiResource from "@/components/core/ApiResource";

// import UserActions from "@/services/userActions/userActions.js";
import { reactive, toRefs } from "vue";

export default {
	name: "ProfileSettings",
	setup() {
		const store = useStore();
		const profileUpdate = ApiResource.create();

		const userProfile = reactive({
			email: store.getters["authToken/email"],
			dob: "",
			firstName: computed(() => store.getters["authToken/firstName"]),
			lastName: store.getters["authToken/lastName"],
			phoneNo: "",

			// userType: "Corporate",
			// accountCreated: false,
		});

		const updateProfile = () => {
			profileUpdate.loading = true;
			// moment(userProfile.dob, inputFormat).format(outputFormat);
			const userDetails = {
				merchantId: store.getters["authToken/userId"],
				firstName: userProfile.firstName,
				lastName: userProfile.lastName,
				dob: userProfile.dob,
				phoneNumber: userProfile.phoneNo,
			};

			Log.info(userDetails);

			// UserActions.merchantUpdateProfile(
			// 	userDetails,

			// 	(response) => {
			// 		Log.info("profileUpdate response" + String(response));
			// 		profileUpdate.loading = false;
			// 		Log.info("profileUpdate" + String(profileUpdate.loading));
			// 	},
			// 	(error) => {
			// 		Log.error("profileUpdate response" + String(error));
			// 		profileUpdate.loading = false;
			// 		Log.error("profileUpdate" + String(profileUpdate.loading));
			// 	}
			// );
		};
		return {
			...toRefs(userProfile),
			updateProfile,
		};
	},
};
</script>

<style lang="scss" scoped></style>
