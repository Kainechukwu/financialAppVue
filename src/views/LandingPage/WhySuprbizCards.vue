<template>
	<div
		style="background: rgba(255, 255, 255, 0.8); border-radius: 20px"
		class="col-span-1 px-4 py-6"
	>
		<div class="flex flex-col">
			<div class="my-2">
				<slot></slot>
			</div>

			<span class="mt-2 brFirmaBold fs-18 mb-3" style="color: #1e2235">{{ header }} </span>
			<span class="brFirmaReg fs-14">{{ description }}</span>
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
