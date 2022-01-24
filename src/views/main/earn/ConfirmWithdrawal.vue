<template>
	<div
		style="border: 1px solid #f1f1f1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
		class="ml-6 bg-white flex flex-col br-10 pt-4 pb-8"
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
			<div style="background-color: #f2f6ff" class="p-4 flex flex-col br-5 mb-6">
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Beneficiary Name:</span>
						<span class="fw-600 fs-12 blacktext">Bonfree LLC</span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Account Number:</span>
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
						<span class="fw-400 fs-12 tx-666666">ABA Routing Number:</span>
						<span class="fw-600 fs-12 blacktext">1234567890</span>
					</div>
				</div>

				<!-- --------------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Transaction Reference:</span>
						<span class="fw-600 fs-12 blacktext">026073150</span>
					</div>

					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Bank Address:</span>
						<span class="fw-600 fs-12 blacktext">810 Seventh Avenue, New York, NY 10019, US</span>
					</div>
				</div>

				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Amount Withdrawn:</span>
						<span class="fw-600 fs-12 blacktext">USDT 89.10</span>
					</div>
					<div class="flex flex-col">
						<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
						<span class="fw-600 fs-12 blacktext">$5.00</span>
					</div>
				</div>

				<!-- -------------- -->
				<!-- --------------- -->
				<div class="grid grid-cols-2 mb-3">
					<div class="flex flex-col col-span-1">
						<span class="fw-400 fs-12 tx-666666">You receive:</span>
						<span class="fw-600 fs-12 blacktext">99.00 USDT</span>
					</div>
					<!-- 
				<div class="flex flex-col">
					
					<span class="fw-400 fs-12 tx-666666">Transaction Fee:</span>
					<span class="fw-600 fs-12 blacktext">$5.00</span>
				</div> -->
				</div>

				<!-- --------------- -->
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div class="br-5">
					<div style="border: 1px solid #f1f1f1" class="flex justify-center items-center h-12">
						<span class="blacktext fs-16 fw-500">Cancel</span>
					</div>
				</div>
				<div style="background: #2b7ee4" class="br-5">
					<div class="flex justify-center items-center h-12">
						<span class="fw-500 fs-16 text-white">Confirm</span>
					</div>
				</div>
			</div>
		</div>
		<!-- ------------------ -->
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import CancelSvg from "./CancelSvg.vue";

export default {
	name: "Confirm Withdrawal",
	components: {
		CancelSvg,
	},
	setup() {
		const router = useRouter();
		const goBack = () => {
			router.push("/bank_details");
		};
		return {
			goBack,
		};
	},
};
</script>

<style lang="scss" scoped></style>
