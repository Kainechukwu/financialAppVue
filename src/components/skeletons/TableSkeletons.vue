<template>
	<div class="bg-white pt-40 pb-40">
		<div class="animate-pulse min-w-full">
			<!-- <thead class="bg-white animate-pulse">
				<tr>
					<th
						scope="col"
						class="animate-pulse px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
					></th>
					<th
						scope="col"
						class="animate-pulse px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
					></th>
					<th
						scope="col"
						class="animate-pulse px-6 py-3 text-right fw-600 fs-14 blacktext tracking-wider"
					></th>
					<th
						scope="col"
						class="animate-pulse px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
					></th>

					<th
						scope="col"
						class="animate-pulse px-6 py-3 text-right fw-600 fs-14 blacktext tracking-wider"
					></th>
					<th
						scope="col"
						class="animate-pulse px-6 py-3 text-right fw-600 fs-14 blacktext tracking-wider"
					></th>
					<th
						scope="col"
						class="animate-pulse px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
					></th>
				</tr>
			</thead> -->

			<div class="bg-white my-auto">
				<!-- <tr>
					<td class="animate-pulse px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400"></td>
					<td class="animate-pulse px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400"></td>
					<td class="animate-pulse px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
						<div class="flex justify-end"></div>
					</td>
					<td class="animate-pulse px-6 py-4 whitespace-nowrap blacktext fw-600 fs-14">
					
					</td>

					<td class="animate-pulse px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
						<div class="flex justify-end"></div>
					</td>
					<td class="animate-pulse px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
						<div class="flex justify-end"></div>
					</td>
					<td style="color: #18ae81" class="animate-pulse px-4 py-4 whitespace-nowrap fs-12 fw-600">
						<div
							class="flex justify-center items-center h-8"
							style="border-radius: 100px; max-width: 93px"
						></div>
					</td>
				
				</tr> -->
				<div class="mx-auto flex my-auto justify-center">
					<svg class="animate-spin h-20 w-20 loader" viewBox="0 0 24 24">
						<!-- ... -->
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Skeletons",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.loader {
	border: 3px solid #f3f3f3;
	border-radius: 50%;
	border-top: 3px solid #cacaca;
	//   width: 100%;
	//   height: 100%;
	// -webkit-animation: spin 2s linear infinite; /* Safari */
	// animation: spin 2s linear infinite;
}
</style>
