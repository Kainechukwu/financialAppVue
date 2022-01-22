<template>
	<div class="flex h-40 flex-col bg-white br-10 px-3.5 py-6">
		<div class="flex justify-between h-6">
			<span class="tx-999999 fw-400 fs-12">Interest Earned</span>
			<div style="background-color: #f2f6ff" class="br-5 flex p-2 justify-between items-center">
				<span class="tx-666666 mr-5 fw-500 fs-10">Today</span>
				<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 1L4.015 3.96622L7.03 1"
						stroke="#BFBFBF"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
		<div class="flex flex-col justify-between mt-4 h-7">
			<span class="blacktext fw-600 fs-22 counter">216,000 UST</span>
			<span class="fw-400 fs-14 tx-666666"
				>Here is an overview of your earnings from your investments.</span
			>
			<!-- <slot></slot> -->
		</div>
	</div>
</template>

<script>
import counterUp from "counterup2";
import { onMounted } from "vue";

export default {
	name: "InterestEarnedPlate",

	setup() {
		onMounted(() => {
			const items = document.querySelectorAll(".counter");

			// Start counting, do this on DOM ready or with Waypoints.
			items.forEach((el) => {
				counterUp(el, {
					duration: 900,
					delay: 16,
				});
			});
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
