<template>
	<div style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)" class="bg-white max-w-xl mx-auto br-10">
		<div class="border-b gray-200 flex items-center justify-start px-6 py-4">
			<span>Confirm Transaction</span>
		</div>
		<div class="p-6 flex flex-col">
			<div class="py-4 flex flex-col br-5 mb-6">
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Account Holder:</span>
						<span class="fw-600 fs-12 blacktext"> {{ bankDetails.holderName }} </span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Account Number:</span>
						<span class="fw-600 fs-12 blacktext"> {{ bankDetails.accountNumber }} </span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Bank Name:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.bankName }} </span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Routing No:</span>
						<span class="fw-600 fs-12 blacktext"> {{ bankDetails.routingNumber }} </span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Bank Address:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.bankAddress }} </span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Transaction Reference:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.transactionRefCode }} </span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">You will pay:</span>
						<span class="fw-600 fs-12 blacktext">$ {{ bankDetails.amountToSend }} </span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
						<span class="fw-600 fs-12 blacktext">${{ bankDetails.transactionFee }} </span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col col-span-1">
						<span class="fw-400 fs-12 tx-666666">You will receive:</span>
						<span class="fw-600 fs-12 blacktext">$ {{ bankDetails.amountRecieved }}</span>
					</div>
					<!-- 
				<div class="flex flex-col">
					
					<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
					<span class="fw-600 fs-12 blacktext">$5.00</span>
				</div> -->
				</div>

				<!-- --------------- -->
				<!-- <div
					v-if="!isMoneySent"
					style="background-color: #f2f6ff"
					class="br-5 grid grid-cols-2 mb-3 p-4 flex flex-col mt-3"
				>
					<div class="col-span-2">
						<h2 class="blacktext fw-500 fs-14">Instructions</h2>
						<ul class="list-disc mx-4 fs-12 fw-400">
							<li>
								You must include the reference code in your deposit. If a deposit is made without
								the reference code, the transaction will not be accepted.
							</li>
							<li>
								Depending on your bank, Wire transfers take under 24 hours to clear. International
								wire transfers may take 1-5 business days.
							</li>
							<li>
								You can only deposit funds from a Bank Account with the
								<span class="fw-600">EXACT</span> business name as your registered Bornfree account.
								If the transfer is made from a Bank account with a different name, the bank transfer
								will not be accepted.
							</li>
						</ul>
					</div>
				</div>

				<div v-if="!isMoneySent" class="col-span-2 flex">
					<input type="checkbox" v-model="agree" value="true" class="h-6 w-6 mr-3 mb-auto" />
					<span class="fs-12 fw-400">
						By proceeding, you agree that you understood the above instructions, and you are aware
						that if a transaction is made without following these instructions, it is not a valid
						transaction.
					</span>
				</div> -->

				<!-- --------------- -->
			</div>
			<div class="grid grid-cols-2 gap-4">
				<!-- <button
					v-if="isMoneySent"
					@click="returnToOverview"
					style="background: #2b7ee4"
					class="br-5"
				>
					<div class="flex cursor-pointer justify-center items-center h-12">
						<span class="fw-500 fs-16 text-white">I have sent the money</span>
					</div>
				</button> -->

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
import { ref } from "vue";
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

		const bankDetails = {
			amountToSend: Util.currencyFormatter(
				store.getters["deposit/amountToSend"],
				Constants.currencyFormat
			),
			amountRecieved: Util.currencyFormatter(
				store.getters["deposit/amountRecieved"],
				Constants.currencyFormat
			),
			holderName: store.getters["deposit/holderName"],
			bankAddress: store.getters["deposit/bankAddress"],
			accountNumber: store.getters["deposit/accountNumber"],
			bankName: store.getters["deposit/bankName"],
			routingNumber: store.getters["deposit/routingNumber"],
			transactionFee: Util.currencyFormatter(
				store.getters["deposit/transactionFee"],
				Constants.currencyFormat
			),
			transactionRefCode: store.getters["deposit/transactionRefCode"],
			transactionsReference: store.getters["deposit/transactionsReference"],
		};

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

			cancel,
			sendAmountLoading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
