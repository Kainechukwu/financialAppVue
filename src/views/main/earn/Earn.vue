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
					<div class="col-span-3"><TransactionHistory /></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BalanceCards from "./BalanceCards.vue";
import TransactionHistory from "../overview/TransactionHistory.vue";
export default {
	name: "Earn",
	components: {
		BalanceCards,
		TransactionHistory,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
