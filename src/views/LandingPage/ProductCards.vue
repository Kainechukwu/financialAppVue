<template>
	<div
		style="background: rgba(255, 255, 255, 0.5); border-radius: 20px"
		class="productCard col-span-1 z-10 px-6 py-8"
	>
		<div class="flex flex-col h-full relative">
			<div class="my-2">
				<slot></slot>
			</div>

			<span class="mt-2 brFirmaBold fw-700 fs-18 mb-3" style="color: #1e2235">{{ header }} </span>
			<span style="line-height: 21px" class="mb-6 brFirmaReg fw-400 fs-14">{{ description }}</span>

			<div class="flex items-center mt-auto">
				<div
					style="height: 40px"
					v-if="header === 'Multi-Currency Account' || header === 'USDC Backed Debit Cards'"
					class="flex items-center"
				>
					<span class="brFirmaSB fw-600 fs-14">Coming soon</span>
				</div>
				<button
					v-else
					class="brFirmaReg fw-400 fs-14"
					style="
						width: 115px;
						height: 40px;
						border: 1px solid #555555;
						box-sizing: border-box;
						border-radius: 100px;
					"
				>
					Learn More
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductCards",
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
