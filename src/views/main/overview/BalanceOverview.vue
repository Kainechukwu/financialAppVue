<template>
	<div class="mb-7 col-span-1">
		<div class="w-full grid grid-rows-2 bg-white br-10">
			<div class="w-full px-6 py-5 flex flex-col border-b border-gray-100">
				<span class="fs-12 fw-400 tx-999999 mb-3">Available Balance</span>

				<h2 style="color: #0d3668" class="fw-600 fs-16">N125,0000</h2>

				<div class="flex mt-5 mb-2">
					<div style="background-color: #619feb" class="py-2 px-7 text-white mr-3 br-5">
						<span>Top Up</span>
					</div>

					<div style="background-color: #e8f1fc; color: #2b7ee4" class="br-5 py-2 px-5 text-white">
						<span>Withdraw</span>
					</div>
				</div>
			</div>
			<div class="w-full px-6 py-5 flex flex-col">
				<div class="flex justify-between">
					<span class="fs-12 fw-400 tx-999999 mb-3">Locked Balance</span>
					<span class="fs-12 fw-400 tx-999999 mb-3">USD Value</span>
				</div>
				<div class="flex justify-between">
					<h2 style="color: #0d3668" class="fw-600 fs-16">N125,000</h2>

					<h2 style="color: #0d3668" class="fw-600 fs-16">N125,000,000</h2>
				</div>

				<span class="mt-5 tx-666666 fw-400 fs-12">
					Your ledger balance is how much you have made but hasn’t been settled to your account yet.
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BalanceOverview",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
