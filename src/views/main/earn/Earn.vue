<template>
	<div class="main-page pb-8 px-12">
		<div class="w-full mx-auto">
			<div class="flex flex-col pt-10">
				<div class="w-full greeting mb-3">
					<h1 class="inter fw-600 fs-24 blacktext mb-2.5">Earn</h1>
					<p class="inter fw-400 fs-14 tx-666666">Track your investment performance</p>
				</div>
				<div class="grid grid-cols-5">
					<div class="col-span-2"><BalanceCards /></div>
					<div class="col-span-3 flex flex-col">
						<div
							style="border: 1px solid #f1f1f1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
							class="ml-6 bg-white flex flex-col br-10 pt-4 pb-8"
						>
							<div class="flex px-4 pb-3 items-center justify-between border-b border-gray-100">
								<div>
									<span class="fw-600 fs-16 blacktext">Deposit Funds</span>
								</div>
								<div>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="12" cy="12" r="12" fill="#E3EEFD" />
										<path
											d="M15.5 8.5L8.5 15.5"
											stroke="#2B7EE4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M8.5 8.5L15.5 15.5"
											stroke="#2B7EE4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>

							<router-view></router-view>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BalanceCards from "./BalanceCards.vue";

export default {
	name: "Earn",
	components: {
		BalanceCards,
		// TransactionHistory,
		// InterestEarnedPlate,
		// StartSavingSvg,
	},

	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
