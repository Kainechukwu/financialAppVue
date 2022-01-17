<template>
	<div class="px-10 pb-8 grid grid-cols-5 mt-12">
		<div class="col-span-2">
			<div class="flex flex-col">
				<h1 class="blacktext fw-500 fs-18 mb-8">Business Details</h1>
			</div>
		</div>
		<div class="col-span-3">
			<div class="flex flex-col w-10/12">
				<div class="flex flex-col">
					<div class="mb-8">
						<label for="Company Name" class="fs-14 fw-400 tx-666666">Company Name</label>
						<input
							id="Company Name"
							name="Company Name"
							type="text"
							v-model="companyName"
							autocomplete="off"
							required=""
							placeholder="The Walt Disney Company"
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>

					<!-- --------------- -->
					<div class="grid grid-cols-2 gap-4">
						<div class="mb-6 col-span-1">
							<label for="Country of Incorporation" class="fs-14 tx-666666 fw-600"
								>Country of Incorporation</label
							>
							<div class="relative">
								<input
									id="Country of Incorporation"
									name="Country of Incorporation"
									type="text"
									autocomplete="off"
									required=""
									placeholder="United States of America"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>

								<div class="absolute mx-3 inset-y-0 h-full flex items-center right-0">
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
							</div>
						</div>

						<div class="mb-6 col-span-1">
							<label for="State" class="fs-14 tx-666666 fw-600">State</label>
							<div class="relative">
								<input
									id="State"
									name="State"
									type="text"
									autocomplete="off"
									required=""
									placeholder="Texas"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>

								<div class="absolute mx-3 inset-y-0 h-full flex items-center right-0">
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
							</div>
						</div>
					</div>

					<!-- -------------- -->

					<div class="grid grid-cols-2 gap-4">
						<div class="mb-6 col-span-1">
							<label for="Industry" class="fs-14 tx-666666 fw-600">Industry</label>
							<div class="relative">
								<input
									id="Industry"
									name="Industry"
									type="text"
									autocomplete="off"
									required=""
									placeholder="Information Technology"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>

								<div class="absolute mx-3 inset-y-0 h-full flex items-center right-0">
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
							</div>
						</div>
						<div class="mb-6 col-span-1">
							<label for="Number of Staff" class="fs-14 tx-666666 fw-600">Number of Staff</label>
							<div class="relative">
								<input
									id="Number of Staff"
									name="Number of Staff"
									type="text"
									autocomplete="off"
									required=""
									v-model="numberOfStaff"
									placeholder="1-50"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>

								<div class="absolute mx-3 inset-y-0 h-full flex items-center right-0">
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
							</div>
						</div>
					</div>
					<!-- ---------------- -->
					<div class="mb-6">
						<label for="Website URL" class="fs-14 fw-400 tx-666666">Website URL</label>
						<input
							id="Website URL"
							name="Website URL"
							type="text"
							autocomplete="off"
							required=""
							v-model="websiteUrl"
							placeholder="http://"
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>

					<!-- ---------------- -->
					<div class="mb-6">
						<label for="Company description" class="fs-14 fw-400 tx-666666"
							>Tell us about your company</label
						>
						<textarea
							id="Company description"
							rows="5"
							name="Company description"
							type="text"
							v-model="about"
							autocomplete="off"
							required=""
							placeholder=""
							class="mt-1.5 br-5 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						></textarea>
					</div>

					<!-- ----------  -->

					<div class="flex justify-end">
						<div
							class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
						>
							<span class="text-white">Save</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { toRefs, reactive, onMounted, ref } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import { Log } from "@/components/util";
import { useStore } from "vuex";
export default {
	name: "BusinessDetails",
	setup() {
		onMounted(() => {
			UserActions.getCountries(
				(response) => {
					countries.value = response.data.data.map((res) => res.name);
					Log.info(response.data.data);
				},
				(error) => {
					Log.error(error);
				}
			);
		});
		const store = useStore();
		const countries = ref([]);
		const businessDetails = reactive({
			ownerId: store.getters["authToken/userId"],
			companyName: "",
			countryId: 0,
			stateId: 0,
			industry: "",
			numberOfStaff: "",
			websiteUrl: "",
			about: "",
		});
		return {
			...toRefs(businessDetails),
			countries,
		};
	},
};
</script>

<style lang="scss" scoped></style>
