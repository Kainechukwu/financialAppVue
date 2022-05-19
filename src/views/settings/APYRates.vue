<template>
	<div class="w-full px-10 pb-8">
		<div class="grid grid-cols-5 gap-8 lg:gap-4 mt-12">
			<div class="col-span-5 sm:col-span-3 md:col-span-2">
				<div class="flex flex-col">
					<h1 class="blacktext fw-500 fs-18 mb-3">APY Rates</h1>
					<span class="fs-12 fw-400 tx-666666">Set your rates for your customers</span>
				</div>
			</div>
			<LoadingInputs v-if="suprbizRateLoading || customerRateLoading" />

			<div v-else class="col-span-5 sm:col-span-3">
				<Form @submit="getPin" :validation-schema="schema" v-slot="{ errors }">
					<div class="flex flex-col lg:w-10/12">
						<div class="tx-666666 fw-500 fs-18 mb-3">USD</div>
						<div class="flex flex-col">
							<!-- <span class="blacktext fw-500 fs-14 mb-4">Suprbiz Rates</span> -->
							<div class="grid grid-cols-2 gap-4">
								<div class="mb-4 md:mb-8 col-span-2 md:col-span-1">
									<label for="Buy" class="fs-14 fw-400 tx-666666">Our Rates</label>
									<input
										readonly
										id="Buy"
										name="suprbizRates"
										v-model="suprbizRate"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
									/>
									<!-- <div class="invalid-feedback text-red-500">{{ errors.suprbizRates }}</div> -->
								</div>

								<div class="mb-8 col-span-2 md:col-span-1">
									<label for="Buy" class="fs-14 fw-400 tx-666666">Your Rates</label>
									<Field
										id="Buy"
										name="yourUSDRates"
										v-model="yourUSDRate"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.yourUSDRates }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.yourUSDRates }}</div>
								</div>
							</div>

							<!-- ----------  -->
							<div class="tx-666666 fw-500 fs-18 mb-3">NGN</div>
							<div class="grid grid-cols-2 gap-4">
								<div class="mb-4 md:mb-8 col-span-2 md:col-span-1">
									<label for="Buy" class="fs-14 fw-400 tx-666666">Our Rates</label>
									<input
										readonly
										id="Buy"
										name="suprbizRates"
										v-model="suprbizRate"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
									/>
									<!-- <div class="invalid-feedback text-red-500">{{ errors.suprbizRates }}</div> -->
								</div>
								<div class="mb-8 col-span-2 md:col-span-1">
									<label for="Buy" class="fs-14 fw-400 tx-666666">Your Rates</label>
									<Field
										id="Buy"
										name="yourNGNRates"
										v-model="yourNGNRate"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.yourNGNRates }"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.yourNGNRates }}</div>
								</div>
							</div>

							<div class="flex justify-start mt-3">
								<button
									:disabled="saveLoading"
									type="submit"
									class="cursor-pointer greenButton fs-14 fw-500 w-3/4 sm:w-2/4 h-14 br-5 flex items-center justify-center"
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
		<pin-code-modal :open="isPinAuthOpen" @success="saveRate" @close="closePinAuth" />
	</div>
</template>

<script>
import { Form, Field } from "vee-validate";
import PinCodeModal from "@/views/modals/PinCodeModal";
import LoadingInputs from "./LoadingInputs.vue";
import * as Yup from "yup";
import { ref } from "vue";
import { Log, Util } from "@/components/util";
import { onMounted } from "vue";
// import { useStore } from "vuex";
import CustomerService from "@/services/userActions/customerService.js";

export default {
	name: "APYRates",
	components: {
		Form,
		Field,
		PinCodeModal,
		LoadingInputs,
	},
	setup() {
		onMounted(() => {
			getSuprbizRate();
			getCustomerRate();
		});
		// const store = useStore();
		const saveLoading = ref(false);
		const suprbizRateLoading = ref(false);
		const customerRateLoading = ref(false);
		const isPinAuthOpen = ref(false);
		const suprbizRate = ref(null);
		const yourUSDRate = ref(null);
		const yourNGNRate = ref(null);
		const ratesDetails = ref({
			rates: [
				{
					interestPercent: 0,
					product: "USD",
				},
				{
					interestPercent: 0,
					product: "NGN",
				},
			],
			pin: "",
		});

		const schema = Yup.object().shape({
			// suprbizRates: Yup.string(),
			yourUSDRates: Yup.number()
				.typeError("USD rates is required and must be a number")
				.required("Your rate is required")
				.test(
					"max",
					"USD rate must be less than or equal to suprbiz rate",
					(val) => val <= suprbizRate.value
				),
			yourNGNRates: Yup.number()
				.typeError("NGN rates is required and must be a number")
				.required("Your rate is required")
				.test(
					"max",
					"NGN rate must be less than or equal to suprbiz rate",
					(val) => val <= suprbizRate.value
				),
		});

		const openPinAuth = () => {
			// Log.info("openAttempted");
			isPinAuthOpen.value = true;
		};

		const closePinAuth = () => {
			isPinAuthOpen.value = false;
		};

		const getCustomerRate = () => {
			customerRateLoading.value = true;
			CustomerService.getCustomerRate(
				(response) => {
					customerRateLoading.value = false;
					Log.info("customer-rate" + JSON.stringify(response));
					const rates = response.data.data;
					rates.forEach((rate) => {
						if (rate.product === "USD" && rate.interestPercent > 0) {
							yourUSDRate.value = rate.interestPercent;
						} else if (rate.product === "NGN" && rate.interestPercent > 0) {
							yourNGNRate.value = rate.interestPercent;
						}
					});
				},
				(error) => {
					customerRateLoading.value = false;
					Log.info(error);
					// getCustomerRates();
				}
			);
		};

		const getSuprbizRate = () => {
			suprbizRateLoading.value = true;
			CustomerService.getSuprbizRate(
				(response) => {
					suprbizRateLoading.value = false;
					Log.info(response);
					suprbizRate.value = response.data.data;
				},
				(error) => {
					suprbizRateLoading.value = false;
					Log.error(error);
				}
			);
		};

		const getPin = (values) => {
			Log.info(JSON.stringify(values));
			ratesDetails.value.rates[0].interestPercent = Number(values.yourUSDRates);
			ratesDetails.value.rates[1].interestPercent = Number(values.yourNGNRates);
			openPinAuth();
		};

		const saveRate = (pin) => {
			saveLoading.value = true;
			Log.info("pin: " + pin);
			ratesDetails.value.pin = pin;
			Log.info("ratesDetails: " + JSON.stringify(ratesDetails.value));
			CustomerService.saveRate(
				ratesDetails.value,
				(response) => {
					saveLoading.value = false;
					Log.info(response);
					Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					saveLoading.value = false;
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};

		//after filling rate input
		//open modal and emit pin
		//after emit run save rate function
		return {
			saveLoading,
			schema,
			getPin,
			saveRate,
			suprbizRate,
			openPinAuth,
			closePinAuth,
			isPinAuthOpen,
			yourUSDRate,
			yourNGNRate,
			suprbizRateLoading,
			customerRateLoading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
