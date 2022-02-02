/*eslint quote-props: ["error", "consistent-as-needed"]*/

<template>
	<div class="col-span-3">
		<div>
			<div class="flex flex-col w-9/12">
				<div class="flex flex-col">
					<div class="grid grid-cols-2 gap-4">
						<div class="mb-8">
							<label for="First Name" class="fs-14 fw-400 tx-666666">First Name</label>
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

						<div class="mb-8">
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

					<div class="grid grid-cols-2 gap-4">
						<!-- -------------- -->
						<div class="mb-8">
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

						<div>
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

					<div class="mb-8">
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
							class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
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
// import { computed, onMounted } from "vue";

import { reactive, toRefs } from "vue";

/*eslint quote-props: ["error", "consistent"]*/

export default {
	name: "StaticProfileSettings",
	props: {
		details: Object,
	},

	setup(props) {
		const userProfile = reactive({
			email: props.details.email,
			dob: props.details.dob,
			firstName: props.details.firstName,
			lastName: props.details.lastName,
			phoneNo: props.details.phoneNumber,

			// userType: "Corporate",
			// accountCreated: false,
		});

		return {
			...toRefs(userProfile),
		};
	},
};
</script>

<style lang="scss" scoped>
.numHolder {
	top: -20px;
}
</style>
