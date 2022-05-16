/*eslint quote-props: ["error", "consistent-as-needed"]*/

<template>
	<div class="col-span-5 sm:col-span-3">
		<div>
			<div class="flex flex-col w-full">
				<div class="flex flex-col">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-6">
						<div class="col-span-1">
							<label for="First Name" class="fs-14 fw-400 tx-666666">First Name </label>
							<input
								readonly
								id="First Name"
								name="firstName"
								v-model="firstName"
								type="text"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>

						<div class="col-span-1">
							<label for="Last Name" class="fs-14 fw-400 tx-666666">Last Name</label>
							<input
								readonly
								id="Last Name"
								name="lastName"
								v-model="lastName"
								type="text"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-6">
						<!-- -------------- -->
						<div class="col-span-1">
							<label for="Email Address" class="fs-14 fw-400 tx-666666">Email Address</label>
							<input
								readonly
								id="Email Address"
								name="email"
								v-model="email"
								type="email"
								autocomplete="off"
								required=""
								placeholder="john.doe@gmail.com"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>

						<div class="col-span-1">
							<label for="Phone No" class="fs-14 tx-666666 fw-600">Phone No</label>
							<div class="relative">
								<input
									readonly
									id="Phone No"
									name="phoneNo"
									type="number"
									v-model="phoneNo"
									autocomplete="off"
									required=""
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>
					</div>

					<div class="mb-6">
						<label for="Date of Birth" class="fs-14 fw-400 tx-666666">Date of Birth</label>
						<input
							readonly
							id="Date of Birth"
							name="dob"
							type="text'"
							autocomplete="off"
							v-model="dob"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>

					<!-- ----------  -->

					<div class="flex justify-end">
						<button
							:disabled="true"
							type="submit"
							class="cursor-pointer opacity-25 greenButton fs-14 fw-500 w-2/4 h-12 br-5 flex items-center justify-center"
						>
							<div class="flex items-center justify-center">
								<span class="text-white">Submit</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from "vue";
import UserActions from "@/services/userActions/userActions.js";

import {
	// reactive, toRefs,
	ref,
} from "vue";
import { useStore } from "vuex";
import { Log } from "@/components/util";

/*eslint quote-props: ["error", "consistent"]*/

export default {
	name: "StaticProfileSettings",

	setup() {
		onMounted(() => {
			getProfile();
		});
		const store = useStore();
		const userId = store.getters["authToken/userId"];

		const firstName = ref("");
		const email = ref("");
		const dob = ref("");
		const lastName = ref("");
		const phoneNo = ref("");
		const getProfile = () => {
			UserActions.getProfileDetails(
				userId,
				(response) => {
					const data = response.data.data;
					firstName.value = data.firstName;
					email.value = data.email;
					dob.value = data.dob;
					lastName.value = data.lastName;
					phoneNo.value = data.phoneNumber;
					Log.info("Static profile data: " + JSON.stringify(response));
				},
				(error) => {
					Log.info(error);
				}
			);
		};

		return {
			// profileData,
			firstName,
			email,
			dob,
			lastName,
			phoneNo,
		};
	},
};
</script>

<style lang="scss" scoped>
.numHolder {
	top: -20px;
}
</style>
