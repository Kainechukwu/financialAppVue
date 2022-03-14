<template>
	<!-- <div class="px-10 pb-8 grid grid-cols-5 mt-12"> -->
	<!-- <div class="col-span-2">
			<div class="flex flex-col">
				<h1 class="blacktext fw-500 fs-18 mb-8">Business Details</h1>
			</div>
		</div> -->
	<div class="col-span-3">
		<div class="flex flex-col w-10/12">
			<!-- <StaticBusinessDetails
				v-if="
					businessDetailsData &&
					businessDetailsData.companyName &&
					businessDetailsData.companyName !== null &&
					businessDetailsData.companyName.length > 0
				"
				:details="businessDetailsData"
			/> -->
			<Form
				@submit="saveDetails"
				:validation-schema="schema"
				v-slot="{ errors }"
				class="flex flex-col"
			>
				<div class="mb-8">
					<label for="Company Name" class="fs-14 fw-400 tx-666666">Company Name</label>
					<Field
						id="Company Name"
						name="companyName"
						type="text"
						autocomplete="off"
						required=""
						placeholder="The Walt Disney Company"
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						:class="{ 'is-invalid': errors.companyName }"
					/>
					<div class="invalid-feedback text-red-500">{{ errors.companyName }}</div>
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
														:class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']"
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

					<!-- <div class="mb-6 col-span-1">
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
					</div> -->

					<div class="mb-8">
						<label for="Registration Date" class="fs-14 fw-400 tx-666666">Registration Date</label>
						<Field
							id="Registration Date"
							name="registrationDate"
							type="date"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.registrationDate }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.registrationDate }}</div>
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
						<label for="Number of Staff" class="mb-2 block fs-14 tx-666666 fw-600"
							>Number of Staff</label
						>
						<div class="relative">
							<Field
								id="Number of Staff"
								name="numberOfStaff"
								type="number"
								autocomplete="off"
								required=""
								placeholder="1-50"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.numberOfStaff }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.numberOfStaff }}</div>

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
					<label for="Opening Address" class="fs-14 fw-400 tx-666666">Opening Address</label>
					<Field
						id="Opening Address"
						name="openingAddress"
						type="text"
						autocomplete="off"
						required=""
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						:class="{ 'is-invalid': errors.openingAddress }"
					/>
					<div class="invalid-feedback text-red-500">{{ errors.openingAddress }}</div>
				</div>

				<!-- ----------------------- -->
				<div class="grid grid-cols-2 gap-4">
					<div class="mb-6 col-span-1">
						<Listbox as="div" v-model="selectedRegType">
							<ListboxLabel class="block fs-14 tx-666666 fw-600"> Registration Type </ListboxLabel>
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
					<div class="mb-6 col-span-1">
						<label for="Rc Number" class="fs-14 tx-666666 fw-600">Rc Number</label>
						<div class="relative">
							<Field
								id="rcNumber"
								name="rcNumber"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.rcNumber }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.rcNumber }}</div>
						</div>
					</div>
				</div>
				<div class="mb-8">
					<label for="Upload ID" class="fs-14 fw-400 tx-666666"
						>Upload Incorporation Document</label
					>
					<div @click="chooseFiles" class="relative">
						<input
							readonly
							id="upload id"
							name="upload id"
							type="number"
							autocomplete="off"
							required=""
							:placeholder="
								typeof selectedFile !== 'object' ? 'No document attatched' : 'Document attatched'
							"
							class="bg-gray-100 mt-1.5 br-5 h-14 appearance-none relative block w-full pr-3 pl-11 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 cursor-pointer sm:text-sm"
						/>
						<div class="absolute mx-3 inset-y-0 h-full flex items-center">
							<svg
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
							<!-- <GreenCheckedSvg v-else  /> -->
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
					<div class="invalid-feedback text-red-500">{{ fileAttatchedErr }}</div>
				</div>
				<!-- ---------------- -->
				<div class="grid grid-cols-2 gap-4">
					<div class="mb-6 col-span-1">
						<label for="Website URL" class="fs-14 fw-400 tx-666666">Website URL</label>
						<Field
							id="Website URL"
							name="websiteUrl"
							type="text"
							autocomplete="off"
							required=""
							placeholder="http://"
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.websiteUrl }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.websiteUrl }}</div>
					</div>

					<div class="mb-6 col-span-1">
						<label for="Ultimate Beneficial Owners" class="fs-14 tx-666666 fw-600"
							>Ultimate Beneficial Owners</label
						>
						<div class="relative">
							<Field
								id="ultimateBeneficialOwners"
								name="ultimateBeneficialOwners"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.ultimateBeneficialOwners }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.ultimateBeneficialOwners }}</div>
						</div>
					</div>
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
			</Form>
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
import { toRefs, reactive, onMounted, ref, watch } from "vue";
import UserActions from "@/services/userActions/userActions.js";
// import StaticBusinessDetails from "./StaticBusinessDetails.vue";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useRouter } from "vue-router";
// import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";

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
		// GreenCheckedSvg,
		Form,
		Field,
		// StaticBusinessDetails,
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

			buisnessDetailsGetter();
		});

		const store = useStore();
		const router = useRouter();
		const countries = ref([]);
		const loading = ref(false);
		const registrationTypes = ref(["LLC", "PLC", "NGO"]);
		const selectedRegType = ref(registrationTypes.value[0]);
		// const countriesLoading = ref(false);
		const selected = ref({});
		const selectedState = ref({});
		const userId = store.getters["authToken/userId"];
		const businessDetailsData = ref({});
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

		const buisnessDetailsGetter = () => {
			UserActions.getBusinessDetails(
				userId,
				(response) => {
					businessDetailsData.value = response.data.data;
					Log.info(response);
				},
				(error) => {
					Log.info(error);
				}
			);
		};
		const selectedIndustry = ref(industries[0]);
		const businessDetails = reactive({
			// companyName: "",
			countryId: 0,
			stateId: 0,
			// industry: "",
			// numberOfStaff: "",
			// websiteUrl: "",
			selectedFile: "",

			documentName: "",
			documentBase64: "",
			about: "",
		});

		const fileAttatchedErr = ref("");
		const showFilesToSelect = ref({});

		const onFileSelected = (e) => {
			const files = e.target.files[0];
			businessDetails.selectedFile = files;
			Log.info(e.target.files);
			Log.info(businessDetails.selectedFile);

			Util.toBase64(files)
				.then((res) => {
					Log.info(res);
					businessDetails.documentBase64 = res.split(",")[1];
				})
				.catch((err) => {
					Log.info(err);
				});
		};

		const chooseFiles = () => {
			showFilesToSelect.value = document.getElementById("upload id2");
			showFilesToSelect.value.click();
		};

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
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const schema = Yup.object().shape({
			numberOfStaff: Yup.string().required("Number of staff field is required"),
			websiteUrl: Yup.string().required("Website url is required"),
			companyName: Yup.string().required("Company name is required"),
			registrationDate: Yup.string().required("Registration Date is required"),
			openingAddress: Yup.string().required("Opening Address is required"),
			rcNumber: Yup.string().required("Opening Address is required"),
			ultimateBeneficialOwners: Yup.string().required("Ultimate Beneficial Owners is required"),
		});

		const prepareBusinessDetails = (values) => {
			const id = getCountryId(selected.value.name);
			const stateId = getStateId(selectedState.value.name);

			const obj = {
				ownerId: store.getters["authToken/userId"],
				companyName: values.companyName,
				countryId: id,
				stateId: stateId,
				industry: selectedIndustry.value.name,
				numberOfStaff: values.numberOfStaff,
				websiteUrl: "http://" + values.websiteUrl,
				about: businessDetails.about,
			};
			return obj;
		};

		const saveDetails = (values) => {
			loading.value = true;
			Log.info(prepareBusinessDetails(values));
			UserActions.setBusinessProfile(
				prepareBusinessDetails(values),
				(response) => {
					loading.value = false;
					// store.commit("authToken/companyName", values.companyName);
					Util.handleGlobalAlert(true, "success", response.data.message);
					Log.info(response);
					if (store.getters["authToken/isKycDone"] === false) {
						router.push("/settings/compliance");
					}
				},
				(error) => {
					loading.value = false;
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);

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

		watch(businessDetails, (newValue) => {
			if (typeof newValue.selectedFile === "object") {
				fileAttatchedErr.value = "";
			}
		});

		return {
			...toRefs(businessDetails),
			countries,
			loading,
			// country,
			states,
			selectedState,
			saveDetails,
			industries,
			selectedIndustry,
			selected,
			schema,
			businessDetailsData,
			registrationTypes,
			selectedRegType,
			chooseFiles,
			onFileSelected,
			fileAttatchedErr,
		};
	},
};
</script>

<style lang="scss" scoped></style>
