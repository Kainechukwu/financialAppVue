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
							<div class="relative">
								<Listbox as="div" v-model="selected">
									<ListboxLabel class="block fs-14 tx-666666 fw-600">
										Country of Incorporation
									</ListboxLabel>
									<div class="mt-1 relative">
										<ListboxButton
											class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
										>
											<span class="block truncate">{{ selected.name }}</span>
											<span
												class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
											>
												<div class="h-5 w-5 text-gray-400">
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

						<div class="mb-6 col-span-1">
							<div class="relative">
								<Listbox as="div" v-model="selectedState">
									<ListboxLabel class="block fs-14 tx-666666 fw-600"> State </ListboxLabel>
									<div class="mt-1 relative">
										<ListboxButton
											class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
										>
											<span class="block truncate">{{ selectedState.name }}</span>
											<span
												class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
											>
												<div class="h-5 w-5 text-gray-400">
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
													v-for="state in states"
													:key="state.id"
													:value="state"
													v-slot="{ active, selectedState }"
												>
													<li
														:class="[
															active ? 'blacktext bg-gray-100' : 'blacktext',
															'cursor-default select-none relative py-2 pl-3 pr-9',
														]"
													>
														<span
															:class="[
																selectedState ? 'font-semibold' : 'font-normal',
																'block truncate',
															]"
														>
															{{ state.name }}
														</span>

														<span
															v-if="selectedState"
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

					<!-- -------------- -->

					<div class="grid grid-cols-2 gap-4">
						<div class="mb-6 col-span-1">
							<div class="relative">
								<Listbox as="div" v-model="selectedIndustry">
									<ListboxLabel class="block fs-14 tx-666666 fw-600"> Industry </ListboxLabel>
									<div class="mt-1 relative">
										<ListboxButton
											class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
										>
											<span class="block truncate">{{ selectedIndustry.name }}</span>
											<span
												class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
											>
												<div class="h-5 w-5 text-gray-400">
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
													v-for="industry in industries"
													:key="industry.id"
													:value="industry"
													v-slot="{ active, selectedIndustry }"
												>
													<li
														:class="[
															active ? 'blacktext bg-gray-100' : 'blacktext',
															'cursor-default select-none relative py-2 pl-3 pr-9',
														]"
													>
														<span
															:class="[
																selectedIndustry ? 'font-semibold' : 'font-normal',
																'block truncate',
															]"
														>
															{{ industry.name }}
														</span>

														<span
															v-if="selectedIndustry"
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

								<!-- <div class="absolute mx-3 inset-y-0 h-full flex items-center right-0">
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
								</div> -->
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
						<button
							type="submit"
							:disabled="loading"
							@click="saveDetails"
							class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
						>
							<div class="flex items-center justify-center">
								<span class="text-white">Save</span>
								<div v-if="loading" class="h-4 w-4 ml-4 rounded-md block">
									<div class="roundLoader opacity-50 mx-auto"></div>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { toRefs, reactive, onMounted, ref, watch } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
export default {
	name: "BusinessDetails",
	components: {
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		// CheckIcon,
		// SelectorIcon,
	},
	setup() {
		onMounted(() => {
			UserActions.getCountries(
				(response) => {
					countries.value = response.data.data;
					selected.value = countries.value[0];
					// Log.info(countries.value);

					getStates();
				},
				(error) => {
					Log.error(error);
				}
			);
		});

		const store = useStore();
		const countries = ref([]);
		const loading = ref(false);
		const selected = ref({});
		const selectedState = ref({});

		// const state = ref("");
		const states = ref([]);
		const industries = [
			{
				id: "1",
				name: "Industrial Technology",
			},
			{
				id: "2",
				name: "Agriculture",
			},
			{
				id: "3",
				name: "Banking",
			},
		];
		const selectedIndustry = ref(industries[0]);
		const businessDetails = reactive({
			companyName: "",
			countryId: 0,
			stateId: 0,
			// industry: "",
			numberOfStaff: "",
			websiteUrl: "",
			about: "",
		});

		const getCountryId = (country) => {
			const id = countries.value.find((obj) => obj.name === country).id;

			return id;
		};

		const getStateId = (state) => {
			const id = states.value.find((obj) => obj.name === state).id;

			return id;
		};

		const getStates = () => {
			const stateId = getCountryId(selected.value.name);
			Log.info("stateId:" + String(stateId));
			UserActions.getStates(
				stateId,
				(response) => {
					states.value = response.data.data;
					selectedState.value = states.value[0];
					// Log.info(response);
					Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					Log.error(error);
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};

		const prepareBusinessDetails = () => {
			const id = getCountryId(selected.value.name);
			const stateId = getStateId(selectedState.value.name);

			const obj = {
				ownerId: store.getters["authToken/userId"],
				companyName: businessDetails.companyName,
				countryId: id,
				stateId: stateId,
				industry: selectedIndustry.value.name,
				numberOfStaff: businessDetails.numberOfStaff,
				websiteUrl: "http://" + businessDetails.websiteUrl,
				about: businessDetails.about,
			};
			return obj;
		};

		const saveDetails = () => {
			loading.value = true;
			Log.info(prepareBusinessDetails());
			UserActions.setBusinessProfile(
				prepareBusinessDetails(),
				(response) => {
					loading.value = false;
					Log.info(response);
				},
				(error) => {
					loading.value = false;
					Log.error(error);
				}
			);
		};

		watch(selected, (newValue, oldValue) => {
			if (newValue !== oldValue && oldValue !== {}) {
				Log.info("changed");
				Log.info(newValue);
				// Log.info();
				getStates();
			}
		});

		return {
			...toRefs(businessDetails),
			countries,
			// country,
			states,
			selectedState,
			saveDetails,
			industries,
			selectedIndustry,
			selected,
		};
	},
};
</script>

<style lang="scss" scoped></style>
