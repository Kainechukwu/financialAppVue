<template>
	<div class="px-10 pb-8 grid grid-cols-5 mt-12">
		<div class="col-span-2">
			<div class="flex flex-col">
				<h1 class="blacktext fw-500 fs-18 mb-8">Business Verification</h1>
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
							<label for="RC Number" class="fs-14 tx-666666 fw-600">RC Number</label>
							<div class="relative">
								<input
									id="RC Number"
									name="RC Number"
									type="text"
									v-model="rcNumber"
									autocomplete="off"
									required=""
									placeholder="RC132345"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>
					</div>

					<!-- -------------- -->

					<div class="grid grid-cols-2 gap-4">
						<div class="mb-6 col-span-2">
							<Listbox as="div" v-model="selectedRegType">
								<ListboxLabel class="block fs-14 tx-666666 fw-600">
									Registration Type
								</ListboxLabel>
								<div class="mt-1 relative">
									<ListboxButton
										class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
									>
										<span class="block truncate">{{ selectedRegType }}</span>
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
												v-for="type in registrationTypes"
												:key="type"
												:value="type"
												v-slot="{ active, selectedRegType }"
											>
												<li
													:class="[
														active ? 'blacktext bg-gray-100' : 'blacktext',
														'cursor-default select-none relative py-2 pl-3 pr-9',
													]"
												>
													<span
														:class="[
															selectedRegType ? 'font-semibold' : 'font-normal',
															'block truncate',
														]"
													>
														{{ type }}
													</span>

													<span
														v-if="selectedRegType"
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
						<div class="mb-6 col-span-2">
							<label for="Address" class="fs-14 tx-666666 fw-600">Address</label>
							<div class="relative">
								<input
									id="Address"
									name="Address"
									type="text"
									v-model="address"
									autocomplete="off"
									required=""
									placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>
					</div>
					<!-- ---------------- -->
					<div class="mb-8">
						<label for="Upload ID" class="fs-14 fw-400 tx-666666">Upload ID</label>
						<div @click="chooseFiles" class="relative">
							<input
								readonly
								id="upload id"
								name="upload id"
								type="number"
								autocomplete="off"
								required=""
								:placeholder="
									typeof selectedFile !== 'object' ? 'No document uploaded' : 'Document uploaded'
								"
								class="bg-gray-100 mt-1.5 br-5 h-14 appearance-none relative block w-full pr-3 pl-11 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 cursor-pointer sm:text-sm"
							/>
							<div class="absolute mx-3 inset-y-0 h-full flex items-center">
								<svg
									v-if="typeof selectedFile !== 'object'"
									width="21"
									height="20"
									viewBox="0 0 21 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.8337 9.23342V10.0001C18.8326 11.7971 18.2507 13.5457 17.1748 14.9849C16.0988 16.4242 14.5864 17.4772 12.8631 17.9867C11.1399 18.4962 9.29804 18.435 7.61238 17.8122C5.92673 17.1895 4.48754 16.0385 3.50946 14.531C2.53138 13.0235 2.06682 11.2401 2.18506 9.44702C2.30329 7.65389 2.998 5.94703 4.16556 4.58098C5.33312 3.21494 6.91098 2.26291 8.66382 1.86688C10.4167 1.47085 12.2505 1.65204 13.892 2.38342"
										stroke="#CBCBCB"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M18.8333 3.33337L10.5 11.675L8 9.17504"
										stroke="#CBCBCB"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<GreenCheckedSvg v-else />
							</div>
							<input
								required
								autocomplete="off"
								multiple
								ref="uploadDoc"
								type="file"
								id="upload id2"
								name="upload id1"
								accept=".png, .jpg, .pdf, .gif"
								placeholder="upload file"
								class="hidden"
								@change="onFileSelected"
							/>
						</div>
					</div>

					<!-- ----------  -->

					<div class="flex justify-end">
						<button
							:disabled="loading"
							@click="saveVerificationDetails"
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
// import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
import { onMounted, ref, reactive, toRefs } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";

import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";

export default {
	name: "Business Verification",
	components: {
		// CheckedSvgOutlined,
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		GreenCheckedSvg,
	},
	setup() {
		onMounted(() => {
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
		});

		const store = useStore();
		const router = useRouter();
		const loading = ref(false);
		const countries = ref([]);
		const selected = ref({});
		const registrationTypes = ref(["LLC", "PLC", "NGO"]);
		const selectedRegType = ref(registrationTypes.value[0]);
		const verificationDetails = reactive({
			companyName: "",
			countryId: selected.value.id,
			// stateId: 0,
			selectedFile: "",

			rcNumber: "",
			registrationType: "",
			address: "",
			documentName: "",
			documentBase64: "",
			ownerId: store.getters["authToken/userId"],
		});
		const showFilesToSelect = ref({});

		const onFileSelected = (e) => {
			const files = e.target.files[0];
			verificationDetails.selectedFile = files;
			Log.info(e.target.files);
			Log.info(verificationDetails.selectedFile);

			Util.toBase64(files)
				.then((res) => {
					Log.info(res);
					verificationDetails.documentBase64 = res.split(",")[1];
				})
				.catch((err) => {
					Log.info(err);
				});
		};

		const chooseFiles = () => {
			showFilesToSelect.value = document.getElementById("upload id2");
			showFilesToSelect.value.click();
		};

		const prepareVerificationDetails = () => {
			const obj = {
				companyName: verificationDetails.companyName,
				countryId: selected.value.id,
				rcNumber: verificationDetails.rcNumber,
				registrationType: selectedRegType.value,
				address: verificationDetails.address,
				documentName: verificationDetails.selectedFile.name,
				documentBase64: verificationDetails.documentBase64,
				ownerId: store.getters["authToken/userId"],
			};
			return obj;
		};

		const saveVerificationDetails = () => {
			loading.value = true;
			Log.info(prepareVerificationDetails());
			UserActions.businessVerification(
				prepareVerificationDetails(),
				(response) => {
					loading.value = false;
					Log.info(response);
					router.push("/settings/security");
					Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					loading.value = false;
					Log.error(error);
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};

		return {
			loading,
			countries,
			selected,
			registrationTypes,
			selectedRegType,
			...toRefs(verificationDetails),
			chooseFiles,
			onFileSelected,
			saveVerificationDetails,
		};
	},
};
</script>

<style lang="scss" scoped></style>
