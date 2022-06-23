<template>
	<div class="col-span-3">
		<div>
			<div class="flex flex-col w-9/12">
				<div class="flex flex-col">
					<!-- <span class="blacktext fw-500 fs-14 mb-4">Suprbiz Rates</span> -->
					<div class="grid grid-cols-1 gap-4">
						<div class="mb-8 col-span-1">
							<label for="Buy" class="fs-14 fw-400 tx-666666"></label>
							<input
								readonly
								id="Buy"
								name="suprbizRates"
								type="number"
								autocomplete="off"
								required=""
								class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
							/>
							<!-- <div class="invalid-feedback text-red-500">{{ errors.suprbizRates }}</div> -->
						</div>
					</div>

					<!-- ----------  -->

					<!-- <div class="grid grid-cols-1 gap-4">
						<div class="mb-8 col-span-1">
							<label for="Buy" class="fs-14 fw-400 tx-666666"></label>
							<Input
								readonly
								id="Buy"
								name="yourRates"
								type="number"
								autocomplete="off"
								required=""
								class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>

					<div class="flex justify-start mt-3">
						<button
							class="animate-pulse cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
						>
							<div class="flex items-center justify-center">
								<span class="text-white"></span>
							</div>
						</button>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoadingInputs",
	components: {},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
