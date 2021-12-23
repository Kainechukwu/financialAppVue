<template>
	<div class="w-full px-10 pb-8">
		<div class="mt-12 grid grid-cols-3 max-w-6xl">
			<div class="col-span-3">
				<div class="grid grid-cols-2 w-full mb-8">
					<div class="flex col-span-1 flex-col w-9/12">
						<h1 class="blacktext fs-14 fw-500">Set Minimum Deposit</h1>
						<span class="tx-666666 fw-400 fs-12">
							Your password should be at least 8 characters and contain a uppercase, lowercase,
							number and special character
						</span>
					</div>
					<div class="col-span-1 flex flex-col w-9/12">
						<div>
							<label for="Minimum Amount" class="fs-14 tx-666666 fw-600"
								>Minimum Amount (NGN)</label
							>
						</div>
						<div>
							<input
								id="Minimum Amount"
								name="Minimum Amount"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<!-- --------------------- -->
				<div class="grid grid-cols-2 w-full mb-8">
					<div class="flex col-span-1 flex-col w-9/12">
						<h1 class="blacktext fs-14 fw-500">Set Maximum Deposit</h1>
						<span class="tx-666666 fw-400 fs-12">
							Your password should be at least 8 characters
						</span>
					</div>
					<div class="col-span-1 flex flex-col w-9/12">
						<div>
							<label for="Maximum amount" class="fs-14 tx-666666 fw-600"
								>Maximum Amount (NGN)</label
							>
						</div>
						<div>
							<input
								id="Maximum amount"
								name="Maximum amount"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<!-- -------------------- -->
				<div class="grid grid-cols-2 w-full mb-8">
					<div class="flex col-span-1 flex-col w-9/12">
						<h1 class="blacktext fs-14 fw-500">Start Accruing Interest</h1>
						<span class="tx-666666 fw-400 fs-12">
							Your password should be at least 8 characters
						</span>
					</div>
					<div class="col-span-1 flex flex-col w-9/12">
						<div>
							<label for="Number of Hours" class="fs-14 tx-666666 fw-600">Number of Hours</label>
						</div>
						<div>
							<input
								id="Number of Hours"
								name="Number of Hours"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<!-- -------------------- -->
				<div class="grid grid-cols-2 w-full mb-8">
					<div class="flex col-span-1 flex-col w-9/12">
						<h1 class="blacktext fs-14 fw-500">Set Investment Threshold</h1>
						<span class="tx-666666 fw-400 fs-12">
							Your password should be at least 8 characters
						</span>
					</div>
					<div class="col-span-1 flex flex-col w-9/12">
						<div>
							<label for="Invertment Threshold" class="fs-14 tx-666666 fw-600"
								>Investment Threshold (USD)</label
							>
						</div>
						<div>
							<input
								id="Invertment Threshold"
								name="Invertment Threshold"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<!-- -------------------- -->
				<div class="grid grid-cols-2 w-full mb-8">
					<div class="flex col-span-1 flex-col w-9/12">
						<h1 class="blacktext fs-14 fw-500">Set Daily LP Settlement Time</h1>
						<span class="tx-666666 fw-400 fs-12">
							Your password should be at least 8 characters
						</span>
					</div>
					<div class="col-span-1 flex flex-col w-9/12">
						<div>
							<label for="Set Time" class="fs-14 tx-666666 fw-600">Set Time (24 Hour fomat)</label>
						</div>
						<div>
							<input
								id="Set Time"
								name="Set Time"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<!-- -------------------- -->
				<div class="grid grid-cols-2 w-full mb-8">
					<div class="flex col-span-1 flex-col w-9/12">
						<h1 class="blacktext fs-14 fw-500">Set Minimum Liquidity Before Settlement</h1>
						<span class="tx-666666 fw-400 fs-12">
							Your password should be at least 8 characters and contain a uppercase, lowercase,
							number and special character
						</span>
					</div>
					<div class="col-span-1 flex flex-col w-9/12">
						<div>
							<label for="Liquidity before settlement" class="fs-14 tx-666666 fw-600"
								>Liquidity before settlement (%)
							</label>
						</div>
						<div>
							<input
								id="Liquidity before settlement"
								name="Liquidity before settlement"
								type="text"
								autocomplete="off"
								required=""
								placeholder=""
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<!-- -------------------- -->
				<div class="grid grid-cols-2 w-full">
					<div></div>
					<div class="flex justify-end w-9/12">
						<div
							class="cursor-pointer greenButton fs-14 fw-500 w-10/12 h-14 br-5 flex items-center justify-center"
						>
							<span class="text-white">Save</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Configurations Setting",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
