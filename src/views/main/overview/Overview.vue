<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-6">
				<h1 class="fw-600 fs-24 blacktext">Overview</h1>
				<span class="tx-999999 fw-400 fs-12">Easily get a quick summary of your business</span>
			</div>
			<div class="grid grid-cols-4 gap-3">
				<CashinfoPlate
					:trend="'trending-up'"
					:cash="'216,000'"
					:title="'Net Earnings'"
					:percentage="'36'"
				>
					<!-- <span class="blacktext fw-600 fs-22 counter">N200,000</span> -->
				</CashinfoPlate>

				<CashinfoPlate
					:trend="'trending-down'"
					:cash="'216,000'"
					:title="'Total Earnings'"
					:percentage="'36'"
				>
					<!-- <span class="blacktext fw-600 fs-22 counter">N200,000</span> -->
				</CashinfoPlate>

				<CashinfoPlate
					:trend="'trending-down'"
					:cash="'216,000'"
					:title="'Deposit Count'"
					:percentage="'36'"
				></CashinfoPlate>
				<CashinfoPlate
					:trend="'trending-up'"
					:cash="'216,000'"
					:title="'Withdrawal Count'"
					:percentage="'36'"
				></CashinfoPlate>
			</div>
		</div>
	</div>
</template>

<script>
// import counterUp from "counterup2";
// import { onMounted } from "vue";
import CashinfoPlate from "./CashInfoPlate";
export default {
	name: "Overview",
	components: {
		CashinfoPlate,
	},
	setup() {
		// onMounted(() => {
		// 	const items = document.querySelectorAll(".counter");

		// 	// Start counting, do this on DOM ready or with Waypoints.
		// 	items.forEach((el) => {
		// 		counterUp(el, {
		// 			duration: 1000,
		// 			delay: 16,
		// 		});
		// 	});
		// });
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
