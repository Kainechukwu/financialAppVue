<template>
	<div>
		<div class="grid grid-cols-2 ml-6 gap-4 mb-4">
			<div class="col-span-1"><InterestEarnedPlate /></div>
			<div class="col-span-1">
				<div class="flex h-40 flex-col bg-white br-10 px-3.5 py-6">
					<div class="flex justify-between items-center">
						<StartSavingSvg />
					</div>
					<div class="flex flex-col justify-between mt-4 h-7">
						<span class="blacktext fw-700 fs-14"
							>Start saving, earn <span class="text-blue-400 fw-500">10%</span> interest
						</span>
						<span class="fw-400 fs-14 tx-666666"
							>Share your referral code and get money on each account</span
						>
						<!-- <slot></slot> -->
					</div>
				</div>
			</div>
		</div>
		<TransactionHistory />
	</div>
</template>

<script>
import TransactionHistory from "./TransactionHistory.vue";
import InterestEarnedPlate from "./InterestEarnedPlate.vue";
import StartSavingSvg from "@/components/svg/StartSavingSvg.vue";
export default {
	name: "Earn Overview",
	components: {
		TransactionHistory,
		InterestEarnedPlate,
		StartSavingSvg,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
