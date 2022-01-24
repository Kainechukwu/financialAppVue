<template>
	<div class="p-5 flex flex-col">
		<div style="background-color: #f2f6ff" class="p-4 flex flex-col br-5 mb-6">
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Account Holder:</span>
					<span class="fw-600 fs-12 blacktext">{{ bankDetails.holderName }}</span>
				</div>

				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Account Number:</span>
					<span class="fw-600 fs-12 blacktext">{{ bankDetails.accountNumber }}</span>
				</div>
			</div>

			<!-- --------------- -->
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Bank Name:</span>
					<span class="fw-600 fs-12 blacktext">{{ bankDetails.bankName }}</span>
				</div>

				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Routing No:</span>
					<span class="fw-600 fs-12 blacktext">{{ bankDetails.routingNumber }}</span>
				</div>
			</div>

			<!-- --------------- -->
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Bank Address:</span>
					<span class="fw-600 fs-12 blacktext">{{ bankDetails.bankAddress }}</span>
				</div>

				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Transaction Reference:</span>
					<span class="fw-600 fs-12 blacktext">026073150</span>
				</div>
			</div>

			<!-- --------------- -->
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">You will pay:</span>
					<span class="fw-600 fs-12 blacktext">$1000.00</span>
				</div>

				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
					<span class="fw-600 fs-12 blacktext">$5.00</span>
				</div>
			</div>

			<!-- --------------- -->
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col col-span-1">
					<span class="fw-400 fs-12 tx-666666">You will receive:</span>
					<span class="fw-600 fs-12 blacktext">995 USDT</span>
				</div>
				<!-- 
				<div class="flex flex-col">
					
					<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
					<span class="fw-600 fs-12 blacktext">$5.00</span>
				</div> -->
			</div>

			<!-- --------------- -->
			<div
				v-if="!isMoneySent"
				style="background-color: #d2f9ed"
				class="br-5 grid grid-cols-2 mb-3 px-3 py-4 flex flex-col mt-3"
			>
				<div class="col-span-2">
					<h2 class="blacktext fw-500 fs-14">Instructions</h2>
					<ul class="list-disc mx-4 fs-12 fw-400">
						<li>
							You must include the reference code in your deposit. If a deposit is made without the
							reference code, the transaction will not be accepted.
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
				<input type="checkbox" class="mt-1.5 mr-3" />
				<span class="fs-12 fw-400">
					By proceeding, you agree that you understood the above instructions, and you are aware
					that if a transaction is made without following these instructions, it is not a valid
					transaction.
				</span>
			</div>

			<!-- --------------- -->
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div @click="sendMoney" style="background: #2b7ee4" class="br-5">
				<div class="flex justify-center items-center h-12">
					<span v-if="isMoneySent" class="fw-500 fs-16 text-white">I have sent the money</span>
					<span v-else class="fw-500 fs-16 text-white">Proceed</span>
				</div>
			</div>
			<div class="br-5">
				<div style="border: 1px solid #f1f1f1" class="flex justify-center items-center h-12">
					<span class="blacktext fs-16 fw-500">Cancel</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { Field, Form, ErrorMessage } from "vee-validate";
// import * as yup from "yup";
import UserActions from "@/services/userActions/userActions.js";
import { ref, onMounted } from "vue";
import { Log } from "@/components/util";

export default {
	name: "Fund Account",
	components: {
		// Field,
		// Form,
		// ErrorMessage,
	},

	setup() {
		onMounted(() => {
			UserActions.getBankDetails(
				(response) => {
					Log.info(response.data.data);
					bankDetails.value = response.data.data;
				},
				(error) => {
					Log.info(error);
				}
			);
		});
		const isMoneySent = ref(false);
		const bankDetails = ref({});

		const sendMoney = () => {
			isMoneySent.value = true;
		};

		// const schema = Yup.object().shape({
		// 	checkBoxRules: yup.string().required(),
		// });

		return {
			sendMoney,
			isMoneySent,
			bankDetails,
		};
	},
};
</script>

<style lang="scss" scoped></style>
