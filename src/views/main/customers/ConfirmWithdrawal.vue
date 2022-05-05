<template>
	<div style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)" class="bg-white max-w-xl mx-auto br-10">
		<div class="border-b gray-200 flex items-center justify-start px-6 py-4">
			<span>Confirm Transaction</span>
		</div>
		<div class="p-6 flex flex-col">
			<div class="py-4 flex flex-col br-5 mb-6">
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Beneficiary Name:</span>
						<span class="fw-600 fs-12 blacktext"> {{ bankDetails.beneficiaryName }} </span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Email Address:</span>
						<span class="fw-600 fs-12 blacktext"> {{ bankDetails.email }} </span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Product:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.product }} </span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Amount:</span>
						<span class="fw-600 fs-12 blacktext"> {{ formatCurrency(bankDetails.amount) }} </span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
						<span class="fw-600 fs-12 blacktext"
							>{{ formatCurrency(bankDetails.transactionFee) }}
						</span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Transaction Reference:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.transactionRefCode }} </span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col col-span-1">
						<span class="fw-400 fs-12 tx-666666">Amount Received:</span>
						<span class="fw-600 fs-12 blacktext">{{
							formatCurrency(bankDetails.amountRecieved)
						}}</span>
					</div>
				</div>

				<!-- --------------- -->
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div @click="cancel" class="cursor-pointer br-5">
					<div style="border: 1px solid #f1f1f1" class="flex justify-center items-center h-12">
						<span class="blacktext fs-16 fw-500">Cancel</span>
					</div>
				</div>

				<button @click="sendMoney" style="background: #2b7ee4" class="br-5">
					<div class="flex cursor-pointer items-center justify-center h-12">
						<span class="fw-500 fs-16 text-white my-auto">Confirm</span>
						<div v-if="sendAmountLoading" class="h-4 w-4 ml-4 rounded-md block">
							<div class="roundLoader opacity-50 mx-auto"></div>
						</div>
					</div>
				</button>
			</div>
		</div>

		<withdrawal-pin-authentication
			:open="isPinAuthOpen"
			@success="openSuccessModal"
			@close="closePinAuth"
		/>
	</div>
</template>

<script>
import WithdrawalPinAuthentication from "./WithdrawalPinAuthentication.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import {
	Util,
	// Log,
	Constants,
} from "@/components/util";
export default {
	name: "ConfirmWithdrawal",
	props: {},
	components: {
		WithdrawalPinAuthentication,
	},
	setup(props, context) {
		const store = useStore();
		const isMoneySent = ref(false);
		const sendAmountLoading = ref(false);
		const isPinAuthOpen = ref(false);
		const formatCurrency = (amount) => {
			return Util.currencyFormatter(amount, Constants.currencyFormat);
		};

		const bankDetails = computed(() => store.getters["customer/transactionDetails"]);

		const openPinAuth = () => {
			// Log.info("openAttempted");
			isPinAuthOpen.value = true;
		};

		const closePinAuth = () => {
			isPinAuthOpen.value = false;
		};

		const openSuccessModal = () => {
			store.commit("setCustomSuccessTransactionModal", true);
		};

		const sendMoney = () => {
			sendAmountLoading.value = true;
			openPinAuth();
			sendAmountLoading.value = false;

			// if (agree.value === false) {
			// 	sendAmountLoading.value = false;
			// 	Util.handleGlobalAlert(true, "failed", "You must agree to Terms and Conditions");
			// } else {
			// 	UserActions.confirmDeposit(
			// 		{
			// 			amountInUst: store.getters["deposit/amountRecieved"],
			// 			rateId: store.getters["deposit/rateId"],
			// 			transactionRefCode: bankDetails.transactionRefCode,
			// 			userId: store.getters["authToken/userId"],
			// 		},
			// 		(response) => {
			// 			Log.info(response);
			// 			sendAmountLoading.value = false;
			// 			isMoneySent.value = true;
			// 			context.emit("finalStep");
			// 			// router.push("/earn/overview");
			// 			// Util.handleGlobalAlert(true, "success", response.data.message);
			// 		},
			// 		(error) => {
			// 			Log.error(error);
			// 			sendAmountLoading.value = false;
			// 			// router.push("/earn/overview");
			// 			Util.handleGlobalAlert(true, "failed", error.response.data.Message);
			// 		}
			// 	);
			// }
		};

		const cancel = () => {
			// Log.info(props);
			context.emit("cancel");
		};
		return {
			sendMoney,
			isMoneySent,
			bankDetails,
			openPinAuth,
			closePinAuth,
			isPinAuthOpen,
			openSuccessModal,
			formatCurrency,

			cancel,
			sendAmountLoading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
