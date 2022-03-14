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
				<!-- --------------- -->
				<div class="grid grid-cols-2 gap-4">
					<div class="mb-6 col-span-1">
						<label for="Bank Name" class="fs-14 fw-400 tx-666666">Bank Name</label>
						<Field
							id="Bank Name"
							name="bankName"
							type="text"
							autocomplete="off"
							required=""
							placeholder="Bank name"
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.bankName }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.bankName }}</div>
					</div>

					<div class="mb-6 col-span-1">
						<label for="Bank Officer" class="fs-14 fw-400 tx-666666">Bank Officer</label>
						<Field
							id="Bank Officer"
							name="bankOfficer"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.bankOfficer }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.bankOfficer }}</div>
					</div>
				</div>

				<!-- ---------------- -->
				<div class="mb-6">
					<label for="Bank Address" class="fs-14 fw-400 tx-666666">Bank Address</label>
					<Field
						id="Bank Address"
						name="bankAddress"
						type="text"
						autocomplete="off"
						required=""
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						:class="{ 'is-invalid': errors.bankAddress }"
					/>
					<div class="invalid-feedback text-red-500">{{ errors.bankAddress }}</div>
				</div>

				<!-- -------------- -->

				<div class="grid grid-cols-2 gap-4">
					<div class="mb-6 col-span-1">
						<label for="Bank Phone Number" class="fs-14 fw-400 tx-666666">Bank Phone Number</label>
						<Field
							id="Bank Phone Number"
							name="bankPhoneNumber"
							type="text"
							autocomplete="off"
							required=""
							placeholder=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.bankPhoneNumber }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.bankPhoneNumber }}</div>
					</div>

					<div class="mb-6 col-span-1">
						<label for="Account Name" class="fs-14 fw-400 tx-666666">Account Name</label>
						<Field
							id="Account Name"
							name="accountName"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.accountName }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.accountName }}</div>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="mb-6 col-span-1">
						<label for="Account Number" class="fs-14 fw-400 tx-666666">Account Number</label>
						<Field
							id="Account Number"
							name="accountNumber"
							type="text"
							autocomplete="off"
							required=""
							placeholder=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.accountNumber }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.accountNumber }}</div>
					</div>

					<div class="mb-6 col-span-1">
						<label for="Transfer Type" class="fs-14 fw-400 tx-666666">Transfer Type</label>
						<Field
							id="Transfer Type"
							name="transferType"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.transferType }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.transferType }}</div>
					</div>
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

// import {
// 	Listbox,
// 	ListboxButton,
// 	ListboxLabel,
// 	ListboxOption,
// 	ListboxOptions,
// } from "@headlessui/vue";
export default {
	name: "BankAccount",
	components: {
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
			// bankName: "",
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
			bankPhoneNumber: Yup.string().required("Bank Phone Number field is required"),
			accountName: Yup.string().required("Account Name is required"),
			bankName: Yup.string().required("Bank name is required"),
			bankOfficer: Yup.string().required("Bank Officer is required"),
			bankAddress: Yup.string().required("Bank Address is required"),
			accountNumber: Yup.string().required("Account Number is required"),
			transferType: Yup.string().required("Transfer Type Owners is required"),
		});

		const prepareBusinessDetails = (values) => {
			const id = getCountryId(selected.value.name);
			const stateId = getStateId(selectedState.value.name);

			const obj = {
				ownerId: store.getters["authToken/userId"],
				companyName: values.bankName,
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
