<template>
	<div class="w-full px-10 pb-8">
		<div class="grid grid-cols-5 mt-12">
			<div class="col-span-2 mr-4">
				<div class="flex flex-col">
					<h1 class="blacktext fw-500 fs-18 mb-3">USD Rates</h1>
					<span class="fs-12 fw-400 tx-666666">Set your rates for your customers</span>
				</div>
			</div>

			<div class="col-span-3">
				<Form @submit="updateRates" :validation-schema="schema" v-slot="{ errors }">
					<div class="flex flex-col w-9/12">
						<div class="flex flex-col">
							<span class="blacktext fw-500 fs-14 mb-4">Suprbiz Rates</span>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div class="mb-8 col-span-1">
									<label for="Buy" class="fs-14 fw-400 tx-666666">Buy</label>
									<Field
										id="Buy"
										name="suprbizBuy"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.suprbizBuy }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.suprbizBuy }}</div>
								</div>

								<div class="mb-8 col-span-1">
									<label for="Sell" class="fs-14 fw-400 tx-666666">Sell</label>
									<Field
										id="Sell"
										name="suprbizSell"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.suprbizSell }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.suprbizSell }}</div>
								</div>
							</div>

							<!-- ----------  -->
							<span class="blacktext fw-500 fs-14 mb-4">Your Rates</span>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div class="mb-8 col-span-1">
									<label for="Buy" class="fs-14 fw-400 tx-666666">Buy</label>
									<Field
										id="Buy"
										name="customerBuy"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.customerBuy }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.customerBuy }}</div>
								</div>

								<div class="mb-8 col-span-1">
									<label for="Sell" class="fs-14 fw-400 tx-666666">Sell</label>
									<Field
										id="Sell"
										name="customerSell"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.customerSell }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.customerSell }}</div>
								</div>
							</div>

							<div class="flex justify-start mt-3">
								<button
									:disabled="saveLoading"
									type="submit"
									class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
								>
									<div class="flex items-center justify-center">
										<span class="text-white">Save Changes</span>
										<div v-if="saveLoading" class="h-4 w-4 ml-4 rounded-md block">
											<div class="roundLoader opacity-50 mx-auto"></div>
										</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</div>
	</div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { ref } from "vue";
import { Log } from "@/components/util";

export default {
	name: "Rates",
	components: {
		Form,
		Field,
	},
	setup() {
		const saveLoading = ref(false);

		const schema = Yup.object().shape({
			suprbizBuy: Yup.string().required("Suprbiz buy is required"),
			suprbizSell: Yup.string().required("Suprbiz sell is required"),
			customerBuy: Yup.string().required("Customer buy is required"),
			customerSell: Yup.string().required("Customer sell is required"),
		});

		const updateRates = (values) => {
			Log.info(JSON.stringify(values));
		};
		return {
			saveLoading,
			schema,
			updateRates,
		};
	},
};
</script>

<style lang="scss" scoped></style>
