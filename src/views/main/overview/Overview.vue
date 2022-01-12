<template>
	<div class="main-page py-8 px-12 h-full">
		<div class="w-full mx-auto">
			<div class="flex flex-col pt-10">
				<div class="w-full greeting">
					<h1 class="inter fw-600 fs-24 blacktext mb-2.5">Hello Adeleke!</h1>
					<p class="inter fw-400 fs-14 tx-666666">Welcome to your dashboard</p>
				</div>
				<div class="grid grid-cols-5">
					<div class="col-span-2"><OverviewOps /></div>
					<div class="col-span-3"><TransactionHistory /></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import OverviewOps from "./Overview-Ops";
import TransactionHistory from "./TransactionHistory.vue";
export default {
	name: "Overview",
	components: {
		OverviewOps,
		TransactionHistory,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.greeting {
	margin-bottom: 1.375rem;
}
</style>
