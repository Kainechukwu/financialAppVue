<template>
	<div class="main-page pb-8 px-12">
		<div class="w-full mx-auto">
			<div class="flex flex-col pt-10">
				<div class="w-full greeting">
					<h1 class="inter fw-600 fs-24 blacktext mb-2.5">Earn</h1>
					<p class="inter fw-400 fs-14 tx-666666">Track your investment performance</p>
				</div>
				<div class="grid grid-cols-5">
					<div class="col-span-2"><BalanceCards /></div>
					<div class="col-span-3 flex flex-col">
						<div class="grid grid-cols-2 ml-6 gap-4 mb-4">
							<div class="col-span-1"><InterestEarnedPlate /></div>
							<div class="col-span-1 flex">
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BalanceCards from "./BalanceCards.vue";
import TransactionHistory from "../overview/TransactionHistory.vue";
import InterestEarnedPlate from "./InterestEarnedPlate.vue";
import StartSavingSvg from "@/components/svg/StartSavingSvg.vue";
export default {
	name: "Earn",
	components: {
		BalanceCards,
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
