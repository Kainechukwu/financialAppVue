<template>
	<div
		style="border: 1px solid #f1f1f1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
		class="ml-6 bg-white flex flex-col br-10 pt-4 pb-8"
	>
		<div class="flex px-4 pb-3 items-center justify-between border-b border-gray-100">
			<div>
				<span class="fw-600 fs-16 blacktext">Deposit Funds</span>
			</div>
			<div>
				<CancelSvg />
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import CancelSvg from "./CancelSvg.vue";
export default {
	name: "Deposit",
	components: {
		CancelSvg,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
