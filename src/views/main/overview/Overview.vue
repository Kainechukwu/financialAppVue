<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-6">
				<h1 class="fw-600 fs-24 blacktext">Overview</h1>
				<span class="tx-999999 fw-400 fs-12">Easily get a quick summary of your business</span>
			</div>
			<div class="grid grid-cols-4 gap-3 mb-7">
				<CashinfoPlate
					:trend="'trending-up'"
					:cash="'216,000'"
					:title="'Net Earnings'"
					:percentage="'36'"
				/>

				<CashinfoPlate
					:trend="'trending-down'"
					:cash="'216,000'"
					:title="'Total Earnings'"
					:percentage="'36'"
				/>

				<CashinfoPlate
					:trend="'trending-down'"
					:cash="'216,000'"
					:title="'Deposit Count'"
					:percentage="'36'"
				/>
				<CashinfoPlate
					:trend="'trending-up'"
					:cash="'216,000'"
					:title="'Withdrawal Count'"
					:percentage="'36'"
				/>
			</div>
			<div class="grid grid-cols-3 gap-4">
				<div class="col-span-2">
					<BarChart />
				</div>
				<BalanceOverview />
			</div>

			<RecentTransactions />
		</div>
	</div>
</template>

<script>
import CashinfoPlate from "./CashInfoPlate";
import BarChart from "./BarChart.vue";
import RecentTransactions from "./RecentTransactions.vue";
import BalanceOverview from "./BalanceOverview.vue";
export default {
	name: "Overview",
	components: {
		CashinfoPlate,
		BarChart,
		RecentTransactions,
		BalanceOverview,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
