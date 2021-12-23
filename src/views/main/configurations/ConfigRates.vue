<template>
	<div class="w-full px-10 pb-8">
		<div class="h-full w-full">
			<div class="mx-auto w-9/12">
				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="mt-12 py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="overflow-hidden border border-gray-200 sm:rounded-lg">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="">
										<tr>
											<th
												scope="col"
												class="px-6 py-6 text-left fs-14 fw-600 blacktext tracking-wider"
											>
												USD/NGN
											</th>
											<th
												scope="col"
												class="px-6 py-6 text-center fs-14 fw-600 blacktext tracking-wider"
											>
												Rate
											</th>
											<th
												scope="col"
												class="px-6 py-6 text-center fs-14 fw-600 blacktext tracking-wider"
											>
												Markup (+/-)
											</th>
											<th
												scope="col"
												class="px-6 py-6 text-left fs-14 fw-600 blacktext tracking-wider"
											>
												New Rate
											</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										<tr>
											<td class="px-6 py-4 whitespace-nowrap fs-14 fw-400 tx-666666">Buy</td>
											<td class="px-6 py-4 text-center whitespace-nowrap fs-14 fw-400 tx-666666">
												{{ buyRate }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap fs-14 fw-400 tx-666666">
												<div
													class="flex items-center justify-center mx-auto"
													style="max-width: 160px"
												>
													<div @click="buyRateDecrement" class=""><MinusSvg /></div>
													<div class="w-1/3 mx-4">
														<input
															style="
																border: 1px solid #dadada;
																box-sizing: border-box;
																border-radius: 3px;
															"
															id="buyMarkup"
															name="buyMarkup"
															type="number"
															v-model="buyMarkup"
															autocomplete="off"
															required=""
															placeholder=""
															class="text-center fs-14 fw-400 tx-666666 br-5 h-12 appearance-none relative block w-full px-1 py-1 focus:outline-none focus:z-10"
														/>
													</div>
													<div @click="buyRateIncrement"><PlusSvg /></div>
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap fs-14 fw-400 tx-666666">
												{{ newBuyRate }}
											</td>
										</tr>
										<!-- ---------- -->
										<tr>
											<td class="px-6 py-4 whitespace-nowrap fs-14 fw-400 tx-666666">Sell</td>
											<td class="px-6 py-4 text-center whitespace-nowrap fs-14 fw-400 tx-666666">
												{{ sellRate }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap fs-14 fw-400 tx-666666">
												<div
													class="flex items-center justify-center mx-auto"
													style="max-width: 160px"
												>
													<div @click="sellRateDecrement" class=""><MinusSvg /></div>
													<div class="w-1/3 mx-4">
														<input
															style="
																border: 1px solid #dadada;
																box-sizing: border-box;
																border-radius: 3px;
															"
															id="sellMarkup"
															name="sellMarkup"
															type="number"
															v-model="sellMarkup"
															autocomplete="off"
															required=""
															placeholder=""
															class="text-center fs-14 fw-400 tx-666666 br-5 h-12 appearance-none relative block w-full px-1 py-1 focus:outline-none focus:z-10"
														/>
													</div>
													<div @click="sellRateIncrement"><PlusSvg /></div>
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap fs-14 fw-400 tx-666666">
												{{ newSellRate }}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MinusSvg from "@/components/svg/MinusSvg.vue";
import PlusSvg from "@/components/svg/PlusSvg.vue";

import { ref, computed } from "vue";
export default {
	name: "Configurations Rates",
	components: {
		MinusSvg,
		PlusSvg,
	},
	setup() {
		const buyRate = ref(580);
		const buyMarkup = ref(0);
		const newBuyRate = computed(() => {
			let value = buyRate.value;
			value += buyMarkup.value;
			return value;
		});

		const buyRateIncrement = () => {
			buyMarkup.value++;
		};
		const buyRateDecrement = () => {
			buyMarkup.value--;
		};

		const sellRate = ref(580);
		const sellMarkup = ref(5);
		const newSellRate = computed(() => {
			let value = sellRate.value;
			value += sellMarkup.value;
			return value;
		});

		const sellRateIncrement = () => {
			sellMarkup.value++;
		};
		const sellRateDecrement = () => {
			sellMarkup.value--;
		};
		return {
			// 	...toRefs(state),
			buyRateIncrement,
			buyRateDecrement,
			buyRate,
			buyMarkup,
			newBuyRate,
			sellRate,
			sellMarkup,
			newSellRate,
			sellRateIncrement,
			sellRateDecrement,
		};
	},
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type="number"] {
	-moz-appearance: textfield;
}
</style>
