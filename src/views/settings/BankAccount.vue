<template>
	<!-- <div class="px-10 pb-8 grid grid-cols-5 mt-12"> -->
	<!-- <div class="col-span-2">
			<div class="flex flex-col">
				<h1 class="blacktext fw-500 fs-18 mb-8">Business Details</h1>
			</div>
		</div> -->
	<div class="col-span-3">
		<div class="flex flex-col w-10/12">
			<StaticBankAccount
				v-if="
					bankAccountData &&
					bankAccountData.bankName &&
					bankAccountData.bankName !== null &&
					bankAccountData.bankName.length > 0 &&
					bankAccountData.approved
				"
				:details="bankAccountData"
			/>
			<Form
				v-else
				@submit="saveDetails"
				:validation-schema="schema"
				v-slot="{ errors }"
				class="flex flex-col"
			>
				<!-- --------------- -->
				<div class="grid grid-cols-2 sm:gap-4">
					<div class="mb-6 col-span-2 sm:col-span-1">
						<label for="Bank Name" class="fs-14 fw-400 tx-666666">Bank Name</label>
						<Field
							id="Bank Name"
							name="bankName"
							type="text"
							v-model="bankName"
							autocomplete="off"
							required=""
							placeholder="Bank name"
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.bankName }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.bankName }}</div>
					</div>

					<div class="mb-6 col-span-2 sm:col-span-1">
						<label for="Bank Officer" class="fs-14 fw-400 tx-666666">Bank Officer</label>
						<Field
							id="Bank Officer"
							name="bankOfficer"
							type="text"
							v-model="bankOfficer"
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
						v-model="bankAddress"
						autocomplete="off"
						required=""
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						:class="{ 'is-invalid': errors.bankAddress }"
					/>
					<div class="invalid-feedback text-red-500">{{ errors.bankAddress }}</div>
				</div>

				<!-- -------------- -->

				<div class="grid grid-cols-2 md:gap-4">
					<div class="mb-6 col-span-2 md:col-span-1">
						<label for="Bank Phone Number" class="fs-14 fw-400 tx-666666">Bank Phone Number</label>
						<Field
							id="Bank Phone Number"
							name="bankPhoneNumber"
							type="text"
							autocomplete="off"
							required=""
							v-model="bankPhoneNumber"
							placeholder=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.bankPhoneNumber }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.bankPhoneNumber }}</div>
					</div>

					<div class="mb-6 col-span-2 md:col-span-1">
						<label for="Account Name" class="fs-14 fw-400 tx-666666">Account Name</label>
						<Field
							id="Account Name"
							name="accountName"
							type="text"
							autocomplete="off"
							required=""
							v-model="accountName"
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.accountName }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.accountName }}</div>
					</div>
				</div>

				<div class="grid grid-cols-2 sm:gap-4">
					<div class="mb-6 col-span-2 sm:col-span-1">
						<label for="Account Number" class="fs-14 fw-400 tx-666666">Account Number</label>
						<Field
							id="Account Number"
							name="accountNumber"
							type="text"
							autocomplete="off"
							required=""
							v-model="accountNumber"
							placeholder=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							:class="{ 'is-invalid': errors.accountNumber }"
						/>
						<div class="invalid-feedback text-red-500">{{ errors.accountNumber }}</div>
					</div>

					<div class="mb-6 col-span-2 sm:col-span-1">
						<label for="Transfer Type" class="fs-14 fw-400 tx-666666">Transfer Type</label>
						<Field
							id="Transfer Type"
							name="transferType"
							type="text"
							v-model="transferType"
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
	</div>
	<!-- </div> -->
</template>

<script>
import { onMounted, ref, toRef, reactive, toRefs } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import StaticBankAccount from "./StaticBankAccount.vue";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
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
	props: {
		details: Object,
	},
	components: {
		// GreenCheckedSvg,
		StaticBankAccount,
		Form,
		Field,
		// StaticBusinessDetails,
		// CheckIcon,
		// SelectorIcon,
	},
	setup(props) {
		onMounted(() => {
			// getBankAccount();
		});

		const store = useStore();
		// const router = useRouter();
		const bankAccountData = toRef(props, "details");
		const autoFillData = reactive({
			bankPhoneNumber: bankAccountData.value.bankPhoneNumber,
			accountName: bankAccountData.value.accountName,
			bankName: bankAccountData.value.bankName,
			bankOfficer: bankAccountData.value.bankOfficer,
			bankAddress: bankAccountData.value.bankAddress,
			accountNumber: bankAccountData.value.accountNumber,
			transferType: bankAccountData.value.transferType,
		});

		const loading = ref(false);
		const userId = store.getters["authToken/userId"];

		const schema = Yup.object().shape({
			bankPhoneNumber: Yup.string(),
			accountName: Yup.string().required("Account Name is required"),
			bankName: Yup.string().required("Bank name is required"),
			bankOfficer: Yup.string(),
			bankAddress: Yup.string().required("Bank Address is required"),
			accountNumber: Yup.string().required("Account Number is required"),
			transferType: Yup.string(),
		});

		const prepareBankDetails = (values) => {
			const obj = {
				ownerId: userId,
				bankPhoneNumber: values.bankPhoneNumber,
				accountName: values.accountName,
				bankName: values.bankName,
				bankOfficer: values.bankOfficer,
				bankAddress: values.bankAddress,
				accountNumber: values.accountNumber,
				transferType: values.transferType,
			};
			return obj;
		};

		const saveDetails = (values) => {
			loading.value = true;
			Log.info(prepareBankDetails(values));
			UserActions.saveBankAccount(
				prepareBankDetails(values),
				(response) => {
					loading.value = false;
					// store.commit("authToken/companyName", values.companyName);
					Util.handleGlobalAlert(true, "success", response.data.message);
					Log.info(response);
					// if (store.getters["authToken/isKycDone"] === false) {
					// 	router.push("/settings/compliance");
					// }
				},
				(error) => {
					loading.value = false;
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);

					Log.error(error);
				}
			);
		};

		return {
			loading,
			bankAccountData,
			...toRefs(autoFillData),
			saveDetails,

			schema,
		};
	},
};
</script>

<style lang="scss" scoped></style>
