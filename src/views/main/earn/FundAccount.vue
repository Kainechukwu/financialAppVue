<template>
	<div class="p-5 flex flex-col">
		<div style="background-color: #f2f6ff" class="p-4 flex flex-col br-5 mb-6">
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Account Name:</span>
					<span class="fw-600 fs-12 blacktext">Bonfree LLC</span>
				</div>

				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Account No:</span>
					<span class="fw-600 fs-12 blacktext">0123456789</span>
				</div>
			</div>

			<!-- --------------- -->
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Bank Name:</span>
					<span class="fw-600 fs-12 blacktext">Bank of America</span>
				</div>

				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Reference:</span>
					<span class="fw-600 fs-12 blacktext">1234567890</span>
				</div>
			</div>

			<!-- --------------- -->
			<div class="grid grid-cols-2 mb-3">
				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
					<span class="fw-600 fs-12 blacktext">$5.00</span>
				</div>

				<div class="flex flex-col">
					<span class="fw-400 fs-12 tx-666666">You receive:</span>
					<span class="fw-600 fs-12 blacktext">USDT 89.10</span>
				</div>
			</div>

			<!-- --------------- -->
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div @click="sendMoney" style="background: #2b7ee4" class="br-5">
				<div class="flex justify-center items-center h-12">
					<span v-if="isMoneySent" class="fw-500 fs-16 text-white">I have sent the money</span>
					<span v-else class="fw-500 fs-16 text-white">Fund Account</span>
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
import { ref } from "vue";
export default {
	name: "Fund Account",
	setup() {
		const isMoneySent = ref(false);

		const sendMoney = () => {
			isMoneySent.value = true;
		};

		return {
			sendMoney,
			isMoneySent,
		};
	},
};
</script>

<style lang="scss" scoped></style>
