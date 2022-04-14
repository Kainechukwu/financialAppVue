<template>
	<div
		style="background: rgba(255, 255, 255, 0.8); border-radius: 20px"
		class="whySuprbizCard col-span-1 z-10 px-6 py-8"
	>
		<div class="flex flex-col">
			<div class="my-2">
				<slot></slot>
			</div>

			<span class="mt-2 brFirmaSB fs-16 fw-600 mb-3" style="color: #1e2235">{{ header }} </span>
			<span class="brFirmaReg fs-14 fw-400">{{ description }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "WhySuprbizCards",
	props: {
		header: String,
		description: String,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
