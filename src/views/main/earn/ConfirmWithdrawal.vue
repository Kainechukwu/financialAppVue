<template>
	<div
		style="border: 1px solid #f1f1f1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
		class="max-w-xl mx-auto bg-white flex flex-col br-10 pt-4 pb-8"
	>
		<div class="flex px-4 pb-3 items-center justify-between border-b border-gray-100">
			<div class="flex">
				<div @click="goBack" class="cursor-pointer">
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
				</div>

				<span class="fw-600 fs-16 blacktext ml-3">Confirm Withdrawal</span>
			</div>
			<div>
				<CancelSvg />
			</div>
		</div>
		<!-- --------------------- -->
		<div class="p-5 flex flex-col">
			<span class="tx-666666 fw-400 fs-14 mb-2"> You are about to withdraw </span>
			<div style="background-color: #f2f6ff" class="p-4 flex flex-col br-5 mb-6">
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Beneficiary Name:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.beneficiaryName }}</span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Account Number:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.beneficiaryAccountNumber }}</span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Bank Name:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.bankName }}</span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">ABA Routing Number:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.abaRoutingNumber }}</span>
					</div>
				</div>

				<!-- --------------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Amount Withdrawn:</span>
						<span class="fw-600 fs-12 blacktext">${{ bankDetails.amount }}</span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Bank Address:</span>
						<span class="fw-600 fs-12 blacktext">{{ bankDetails.bankAddress }}</span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col col-span-1">
						<span class="fw-400 fs-12 tx-666666">You will receive:</span>
						<span class="fw-600 fs-12 blacktext">${{ bankDetails.amountToReceive }}</span>
					</div>
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
						<span class="fw-600 fs-12 blacktext">$5.00</span>
					</div>
				</div>

				<!-- -------------- -->
				<!-- --------------- -->
				<!-- <div class="grid grid-cols-2 mb-3"> -->
				<!-- <div class="flex flex-col col-span-1">
						<span class="fw-400 fs-12 tx-666666">You will receive:</span>
						<span class="fw-600 fs-12 blacktext">99.00 USDT</span>
					</div> -->
				<!-- 
				<div class="flex flex-col">
					
					<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
					<span class="fw-600 fs-12 blacktext">$5.00</span>
				</div> -->
				<!-- </div> -->

				<!-- --------------- -->
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div @click="goBack" class="cursor-pointer br-5">
					<div style="border: 1px solid #f1f1f1" class="flex justify-center items-center h-12">
						<span class="blacktext fs-16 fw-500">Cancel</span>
					</div>
				</div>
				<button @click="confirmWithdrawal" style="background: #2b7ee4" class="br-5">
					<div class="flex justify-center items-center h-12">
						<span class="fw-500 fs-16 text-white">Confirm</span>
					</div>
				</button>
			</div>
		</div>
		<!-- ------------------ -->
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import CancelSvg from "./CancelSvg.vue";
// import UserActions from "@/services/userActions/userActions.js";
import { onMounted } from "vue";
import { Log, Util, Constants } from "@/components/util";
import { useStore } from "vuex";

export default {
	name: "Confirm Withdrawal",
	components: {
		CancelSvg,
	},
	setup() {
		onMounted(() => {
			Log.info(bankDetails);
			// UserActions.getBankDetails(
			// 	(response) => {
			// 		Log.info(response.data.data);
			// 		bankDetails.value = response.data.data;
			// 	},
			// 	(error) => {
			// 		Log.info(error);
			// 	}
			// );
		});
		const store = useStore();
		const router = useRouter();
		const bankDetails = {
			amountToReceive: Util.currencyFormatter(
				store.getters["bankDetails/amountToReceive"],
				Constants.currencyFormat
			),
			amount: Util.currencyFormatter(store.getters["bankDetails/amount"], Constants.currencyFormat),
			bankAddress: store.getters["bankDetails/bankAddress"],
			abaRoutingNumber: store.getters["bankDetails/abaRoutingNumber"],
			bankName: store.getters["bankDetails/bankName"],
			beneficiaryName: store.getters["bankDetails/beneficiaryName"],
			beneficiaryAccountNumber: store.getters["bankDetails/beneficiaryAccountNumber"],
		};

		const confirmWithdrawal = () => {
			store.commit("setBankDetailsPinModal", true);
		};
		const goBack = () => {
			router.push("/bank_details");
		};
		return {
			goBack,
			bankDetails,
			confirmWithdrawal,
		};
	},
};
</script>

<style lang="scss" scoped></style>
