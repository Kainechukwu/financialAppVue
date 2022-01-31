<template>
	<div class="w-full pb-8">
		<div class="grid grid-rows-2">
			<div style="border-bottom: 1px solid #efefef" class="px-10 pb-8 grid grid-cols-5 mt-12">
				<div class="col-span-2">
					<div class="flex flex-col">
						<h1 class="blacktext fw-500 fs-18 mb-8">Personal KYC</h1>
					</div>
				</div>
				<div class="col-span-3">
					<div class="flex flex-col w-9/12">
						<Form
							@submit="saveKycDetails"
							:validation-schema="schema"
							v-slot="{ errors }"
							class="flex flex-col"
						>
							<!-- -------------- -->

							<!-- --------------- -->
							<div class="grid grid-cols-2 gap-4 mb-4">
								<div class="mb-6 col-span-1">
									<Listbox as="div" v-model="selectedIdType">
										<ListboxLabel class="block fs-14 tx-666666 fw-600">
											Identification Type
										</ListboxLabel>
										<div class="mt-1 relative">
											<ListboxButton
												class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
											>
												<span class="block truncate">{{ selectedIdType }}</span>
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
														v-for="idType in selectedIdTypeList"
														:key="idType"
														:value="idType"
														v-slot="{ active, selectedIdType }"
													>
														<li
															:class="[
																active ? 'blacktext bg-gray-100' : 'blacktext',
																'cursor-default select-none relative py-2 pl-3 pr-9',
															]"
														>
															<span
																:class="[
																	selectedIdType ? 'font-semibold' : 'font-normal',
																	'block truncate',
																]"
															>
																{{ idType }}
															</span>

															<span
																v-if="selectedIdType"
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
								<div class="mb-6 col-span-1 flex flex-col justify-between">
									<div>
										<label for="Identification Number" class="fs-14 tx-666666 fw-600"
											>Identification Number</label
										>
									</div>
									<div>
										<Field
											id="Identification Number"
											name="idNumber"
											type="text"
											autocomplete="off"
											required=""
											class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
											:class="{ 'is-invalid': errors.idNumber }"
										/>
										<div class="invalid-feedback text-red-500">{{ errors.idNumber }}</div>
									</div>
								</div>
							</div>

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
											typeof selectedFile !== 'object'
												? 'No document attatched'
												: 'Document attatched'
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
										id="upload id1"
										name="upload id1"
										accept=".png, .jpg, .pdf, .gif"
										placeholder="upload file"
										class="hidden"
										@change="onFileSelected"
									/>
								</div>
								<div class="invalid-feedback text-red-500">{{ fileAttatchedErr }}</div>
							</div>
							<!-- ----------  -->

							<div class="flex justify-end">
								<button
									:disabled="loading"
									type="submit"
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
			</div>

			<BusinessVerification />
		</div>
	</div>
</template>

<script>
// import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
import { toRefs, reactive, ref, watch } from "vue";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";
import UserActions from "@/services/userActions/userActions.js";
import BusinessVerification from "./BusinessVerification.vue";
import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
export default {
	name: "Compliance Settings",
	components: {
		// CheckedSvgOutlined,
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		BusinessVerification,
		GreenCheckedSvg,
		Form,
		Field,
	},
	setup() {
		// onMounted(() => {
		// 	UserActions.getCountries(
		// 		(response) => {
		// 			countries.value = response.data.data;
		// 			selected.value = countries.value[0];
		// 			// Log.info(countries.value);

		// 			// getStates();
		// 		},
		// 		(error) => {
		// 			Log.error(error);
		// 		}
		// 	);
		// });
		const store = useStore();

		const selectedIdTypeList = ["Passport", "DriversLicence", "IdentityCard"];
		const selectedIdType = ref(selectedIdTypeList[0]);
		const showFilesToSelect = ref({});
		const loading = ref(false);
		const fileAttatchedErr = ref("");

		const kycDetails = reactive({
			idType: "",
			idNumber: "",
			selectedFile: "",
			selectedFileBase64: "",
		});

		const schema = Yup.object().shape({
			idNumber: Yup.string().required("Id number field is required"),
		});

		const prepareKycDetails = (values) => {
			Log.info(selectedIdType.value);
			const obj = {
				fileName: kycDetails.selectedFile.name,
				type: selectedIdTypeList.indexOf(selectedIdType.value) + 1,
				base64: kycDetails.selectedFileBase64,
				idNumber: values.idNumber,
				ownerId: store.getters["authToken/userId"],
			};
			return obj;
		};

		const onFileSelected = (e) => {
			const files = e.target.files[0];
			kycDetails.selectedFile = files;
			Log.info(e.target.files);
			Log.info(kycDetails.selectedFile);

			Util.toBase64(files)
				.then((res) => {
					Log.info(res);
					kycDetails.selectedFileBase64 = res.split(",")[1];
				})
				.catch((err) => {
					Log.info(err);
				});
		};

		const chooseFiles = () => {
			showFilesToSelect.value = document.getElementById("upload id1");
			showFilesToSelect.value.click();
		};

		const saveKycDetails = (values) => {
			loading.value = true;
			Log.info(prepareKycDetails(values));
			if (typeof kycDetails.selectedFile !== "object") {
				loading.value = false;
				fileAttatchedErr.value = "No file attatched";
			} else {
				UserActions.compliancePersonalUpload(
					prepareKycDetails(values),
					(response) => {
						Log.info(response);
						loading.value = false;
						Util.handleGlobalAlert(true, "success", response.data.message);
					},
					(error) => {
						Log.error(error);
						loading.value = false;
						Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					}
				);
			}
		};

		// const fileAttatchedCheck = () => {
		// 	return typeof selectedFile !== 'object'
		// }

		watch(kycDetails, (newValue) => {
			if (typeof newValue.selectedFile === "object") {
				fileAttatchedErr.value = "";
			}
		});

		return {
			...toRefs(kycDetails),
			loading,
			saveKycDetails,
			selectedIdTypeList,
			selectedIdType,
			chooseFiles,
			onFileSelected,
			schema,
			fileAttatchedErr,
		};
	},
};
</script>

<style lang="scss" scoped></style>
