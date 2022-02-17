<template>
	<div>
		<div
			v-if="currView === 'Input Bank Details'"
			style="border: 1px solid #f1f1f1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
			class="max-w-xl mx-auto bg-white flex flex-col br-10 pt-4 pb-8"
		>
			<div class="flex px-5 pb-3 items-center justify-between border-b border-gray-100">
				<div class="flex">
					<!-- <div @click="goBack" class="cursor-pointer">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19 12H5"
								stroke="#333333"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 19L5 12L12 5"
								stroke="#333333"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div> -->

					<span class="fw-600 fs-16 blacktext">Bank Details</span>
				</div>
				<!-- <div>
					<CancelSvg />
				</div> -->
			</div>
			<!-- --------------------- -->
			<Form @submit="goNext" :validation-schema="schema" v-slot="{ errors }" class="mt-6">
				<div class="px-5 flex flex-col">
					<div class="grid grid-cols-2 gap-5 mb-8">
						<div class="">
							<label for="Beneficiary Name" class="fs-14 tx-666666 fw-600">Beneficiary Name</label>
							<Field
								id="Beneficiary Name"
								name="BeneficiaryName"
								type="text"
								autocomplete="on"
								required=""
								:class="{ 'is-invalid': errors.BeneficiaryName }"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.BeneficiaryName }}</div>
						</div>
						<!-- ---------- -->
						<div class="">
							<label for="Beneficiary Account Number" class="fs-14 tx-666666 fw-600"
								>Beneficiary Account Number</label
							>
							<Field
								id="Beneficiary Account Number"
								name="BeneficiaryAccountNumber"
								type="text"
								autocomplete="on"
								required=""
								:class="{ 'is-invalid': errors.BeneficiaryAccountNumber }"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.BeneficiaryAccountNumber }}</div>
						</div>
					</div>
					<div class="grid grid-cols-2 gap-5 mb-8">
						<div class="">
							<label for="Bank Name" class="fs-14 tx-666666 fw-600">Bank Name</label>
							<Field
								id="Bank Name"
								name="BankName"
								type="text"
								autocomplete="on"
								required=""
								:class="{ 'is-invalid': errors.BankName }"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.BankName }}</div>
						</div>
						<!-- ---------- -->
						<div class="">
							<label for="ABA Routing Number" class="fs-14 tx-666666 fw-600"
								>ABA Routing Number</label
							>
							<Field
								id="ABA Routing Number"
								name="ABARoutingNumber"
								type="text"
								autocomplete="on"
								required=""
								:class="{ 'is-invalid': errors.ABARoutingNumber }"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.ABARoutingNumber }}</div>
						</div>
					</div>
					<div class="grid grid-cols-2 gap-5 mb-8">
						<div class="col-span-2">
							<label for="Bank Address" class="fs-14 tx-666666 fw-600">Bank Address</label>
							<Field
								id="Bank Address"
								name="BankAddress"
								type="text"
								autocomplete="on"
								required=""
								:class="{ 'is-invalid': errors.BankAddress }"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.BankAddress }}</div>
						</div>
					</div>

					<div
						style="background-color: #d2f9ed"
						class="br-5 grid grid-cols-2 mb-3 px-3 py-4 flex flex-col mt-3"
					>
						<div class="col-span-2">
							<h2 class="blacktext fw-500 fs-14">Instructions</h2>
							<ul class="list-disc mx-4 fs-12 fw-400">
								<li>
									If your withdrawal is returned by the receiving bank, the fund will take longer to
									be credited back to your Bornfree account. Transaction fee will be charged and
									deducted from the credited amount.
								</li>
								<li>
									The arrival of your withdrawal depends on the region of your receiving bank.
									Usually, it takes 2 to 4 business days.
								</li>
							</ul>
						</div>
					</div>

					<div class="col-span-2 flex">
						<input type="checkbox" v-model="agree" value="true" class="h-6 w-6 mr-3 mb-auto" />
						<span class="fs-12 fw-400">
							By proceeding, you agree that you understood the above instructions, and you are aware
							that if a transaction is made without following these instructions, it is not a valid
							transaction.
						</span>
					</div>
				</div>
				<button
					type="submit"
					:disabled="nextLoading"
					style="background-color: #2b7ee4"
					class="mt-4 mx-auto flex items-center justify-center h-12 w-52 br-5"
				>
					<div class="flex items-center justify-center">
						<span class="fw-500 fs-16 text-white"> Continue</span>
						<div v-if="nextLoading" class="h-4 w-4 ml-4 rounded-md block">
							<div class="roundLoader opacity-50 mx-auto"></div>
						</div>
					</div>
				</button>
			</Form>
			<!-- ------------------ -->
		</div>
		<ConfirmWithdrawal @cancel="$emit('cancel')" v-else-if="'View Bank Details'" />
	</div>
</template>

<script>
// import { useRouter } from "vue-router";
// import CancelSvg from "./CancelSvg.vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { ref } from "vue";
import ConfirmWithdrawal from "./ConfirmWithdrawal.vue";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";

export default {
	name: "Bank Details",
	props: {
		step: Number,
	},
	components: {
		// CancelSvg,
		Form,
		Field,
		ConfirmWithdrawal,
	},
	setup(props, context) {
		// const router = useRouter();
		// const goBack = () => {
		// 	router.push("/withdraw");
		// };

		const currView = ref("Input Bank Details");

		const agree = ref(false);
		const nextLoading = ref(false);
		const store = useStore();
		const schema = Yup.object().shape({
			BeneficiaryName: Yup.string().required("Beneficiary Name is required"),
			BeneficiaryAccountNumber: Yup.string().required("Beneficiary Account Number is required"),
			BankName: Yup.string().required("Bank Name is required"),
			BankAddress: Yup.string().required("Bank Address is required"),
			ABARoutingNumber: Yup.string().required("ABA Routing Number is required"),
		});

		const goNext = (values) => {
			Log.info(values);
			Log.info(agree.value);
			nextLoading.value = true;
			if (agree.value === false) {
				nextLoading.value = false;
				Util.handleGlobalAlert(true, "failed", "You must agree to Terms and Conditions");
			} else {
				store.commit("bankDetails/bankAddress", values.BankAddress);
				store.commit("bankDetails/abaRoutingNumber", values.ABARoutingNumber);
				store.commit("bankDetails/bankName", values.BankName);
				store.commit("bankDetails/beneficiaryAccountNumber", values.BeneficiaryAccountNumber);
				store.commit("bankDetails/beneficiaryName", values.BeneficiaryName);
				nextLoading.value = false;

				Log.info(props.step);
				context.emit("finalStep");
				currView.value = "View Bank Details";
				Log.info(currView.value);
				// router.push("/confirm_withdrawal");
			}
		};

		return {
			goNext,
			// goBack,
			schema,
			agree,
			nextLoading,
			currView,
		};
	},
};
</script>

<style lang="scss" scoped></style>
