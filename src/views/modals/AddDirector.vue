<template>
	<transition name="fadeIn">
		<div v-if="isModalOpen" class="fixed z-50 inset-0 overflow-hidden modal-blur">
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div @click="close" class="absolute inset-0 bg-gray-800 bg-opacity-75 modal-blur"></div>
				</div>

				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
				<section
					class="main inline-block bg-white align-bottom br-5 shadow-xs text-left overflow-hidden transform transition-all max-w-lg mx-auto sm:my-8 sm:align-middle sm:w-full"
				>
					<div class="w-full h-full overflow-y-auto">
						<div class="flex flex-col h-full pb-6">
							<!-- <div class="flex-1 h-full flex flex-col"> -->
							<div
								style="border-bottom: 1px solid #efefef"
								class="px-6 flex items-center justify-between"
							>
								<div class="my-4 flex justify-between w-full">
									<h2 class="blacktext fw-600 fs-16">Add Director</h2>
									<div @click="close" class="cursor-pointer">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="12" cy="12" r="12" fill="#E3EEFD" />
											<path
												d="M15.5 8.5L8.5 15.5"
												stroke="#2B7EE4"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M8.5 8.5L15.5 15.5"
												stroke="#2B7EE4"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div style="max-height: 500px; overflow-y: scroll" class="flex flex-col p-6">
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
									<div class="grid grid-cols-2 gap-4">
										<div class="mb-6 col-span-1">
											<label for="First Name" class="fs-14 fw-400 tx-666666">First Name</label>
											<Field
												id="First Name"
												name="firstName"
												type="text"
												autocomplete="off"
												required=""
												class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												:class="{ 'is-invalid': errors.firstName }"
											/>
											<div class="invalid-feedback text-red-500">{{ errors.firstName }}</div>
										</div>

										<div class="mb-6 col-span-1">
											<label for="Last Name" class="fs-14 tx-666666 fw-600">Last Name</label>
											<div class="relative">
												<Field
													id="lastName"
													name="lastName"
													type="text"
													autocomplete="off"
													required=""
													placeholder=""
													class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
													:class="{ 'is-invalid': errors.lastName }"
												/>
												<div class="invalid-feedback text-red-500">
													{{ errors.lastName }}
												</div>
											</div>
										</div>
									</div>

									<div class="grid grid-cols-2 gap-4">
										<div class="mb-6 col-span-1">
											<label for="Phone Number" class="fs-14 fw-400 tx-666666">Phone Number</label>
											<Field
												id="Phone Number"
												name="phoneNumber"
												type="number"
												autocomplete="off"
												required=""
												class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												:class="{ 'is-invalid': errors.phoneNumber }"
											/>
											<div class="invalid-feedback text-red-500">{{ errors.phoneNumber }}</div>
										</div>

										<div class="mb-6 col-span-1">
											<label for="Email Address" class="fs-14 tx-666666 fw-600"
												>Email Address</label
											>
											<div class="relative">
												<Field
													id="Email Address"
													name="email"
													type="text"
													autocomplete="off"
													required=""
													placeholder=""
													class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
													:class="{ 'is-invalid': errors.email }"
												/>
												<div class="invalid-feedback text-red-500">
													{{ errors.email }}
												</div>
											</div>
										</div>
									</div>

									<!-- --------------- -->
									<div class="grid grid-cols-2 gap-4">
										<div class="mb-6">
											<label for="Date of Birth" class="fs-14 fw-400 tx-666666"
												>Date of Birth</label
											>
											<Field
												id="Date of Birth"
												name="DOB"
												type="date"
												autocomplete="off"
												required=""
												class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												:class="{ 'is-invalid': errors.DOB }"
											/>
											<div class="invalid-feedback text-red-500">{{ errors.DOB }}</div>
										</div>

										<div class="mb-6 col-span-1">
											<div class="relative">
												<Listbox as="div" v-model="selected">
													<ListboxLabel class="block fs-14 tx-666666 fw-600">
														Country of Residence
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
									</div>
									<!-- ------------------- -->

									<div class="mb-8">
										<label for="Address" class="fs-14 fw-400 tx-666666">Address</label>
										<Field
											id="Address"
											name="address"
											type="text"
											autocomplete="off"
											required=""
											placeholder=""
											class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
											:class="{ 'is-invalid': errors.address }"
										/>
										<div class="invalid-feedback text-red-500">{{ errors.address }}</div>
									</div>

									<!-- -------------- -->

									<div class="grid grid-cols-2 gap-4">
										<div class="mb-6 col-span-1">
											<div class="relative">
												<Listbox as="div" v-model="selectedId">
													<ListboxLabel class="block fs-14 tx-666666 fw-600">
														Identification Type
													</ListboxLabel>
													<div class="mt-1 relative">
														<ListboxButton
															class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
														>
															<span class="block truncate">{{ selectedId.name }}</span>
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
																	v-for="idType in idTypes"
																	:key="idType.id"
																	:value="idType"
																	v-slot="{ active, selectedId }"
																>
																	<li
																		:class="[
																			active ? 'blacktext bg-gray-100' : 'blacktext',
																			'cursor-default select-none relative py-2 pl-3 pr-9',
																		]"
																	>
																		<span
																			:class="[
																				selectedId ? 'font-semibold' : 'font-normal',
																				'block truncate',
																			]"
																		>
																			{{ idType.name }}
																		</span>

																		<span
																			v-if="selectedId"
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
											<label for="Identification Number" class="mb-2 block fs-14 tx-666666 fw-600"
												>Identification Number</label
											>
											<div class="relative">
												<Field
													id="Identification Number"
													name="identificationNumber"
													type="number"
													autocomplete="off"
													required=""
													placeholder="1-50"
													class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
													:class="{ 'is-invalid': errors.identificationNumber }"
												/>
												<div class="invalid-feedback text-red-500">
													{{ errors.identificationNumber }}
												</div>

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
													typeof selectedFile !== 'object'
														? 'No document attatched'
														: 'Document attatched'
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

									<!-- ----------  -->

									<div class="flex justify-center">
										<button
											type="submit"
											:disabled="loading"
											class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-12 br-5 flex items-center justify-center"
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
							<!-- </div> -->
						</div>
					</div>
				</section>
			</div>
		</div>
	</transition>
</template>

<script>
import { toRefs, reactive, onMounted, ref, watch, toRef } from "vue";
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
	name: "AddDirector",
	props: {
		open: Boolean,
	},
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
	setup(props, context) {
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

		// const store = useStore();
		const isModalOpen = toRef(props, "open");
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
		const idTypes = [
			{
				id: "1",
				name: "Passpost",
			},
			{
				id: "2",
				name: "Drivers Lisence",
			},
			{
				id: "3",
				name: "National Identification",
			},
		];

		const plan = reactive({
			name: "",
			description: "",
			customerRate: "",
			sellingRate: "",
			country: "",
		});

		const close = () => {
			context.emit("close");
		};
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
		const selectedId = ref(idTypes[0]);
		const businessDetails = reactive({
			// companyName: "",
			countryId: 0,
			stateId: 0,
			// idType: "",
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
			DOB: Yup.date().required("Number of staff field is required"),
			firstName: Yup.string().required("First Name is required"),
			lastName: Yup.string().required("Last Name is required"),
			phoneNumber: Yup.string().required("Phone Numberis required"),
			email: Yup.string().required("Email Address is required"),
			address: Yup.string().required("Address is required"),
			identificationNumber: Yup.string().required("Identification number is required"),
		});

		const prepareBusinessDetails = (values) => {
			const id = getCountryId(selected.value.name);
			const stateId = getStateId(selectedState.value.name);

			const obj = {
				ownerId: store.getters["authToken/userId"],
				companyName: values.companyName,
				countryId: id,
				stateId: stateId,
				idType: selectedId.value.name,
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
			isModalOpen,
			close,
			...toRefs(plan),
			...toRefs(businessDetails),
			countries,
			loading,
			// country,
			states,
			selectedState,
			saveDetails,
			idTypes,
			selectedId,
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
