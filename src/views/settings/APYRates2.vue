<template>
	<div class="w-full px-10 pb-8">
		<Form @submit="getPin" :validation-schema="schema" v-slot="{ errors }">
			<div class="grid grid-cols-5 gap-8 mt-12">
				<div class="col-span-5 sm:col-span-3 md:col-span-2">
					<div class="flex flex-col">
						<h1 class="blacktext fw-500 fs-18 mb-3">Configure Customer APY</h1>
						<span class="fs-12 fw-400 tx-666666">Set your rates for your customers</span>
					</div>
				</div>
				<LoadingInputs v-if="suprbizRateLoading" />

				<div v-else class="col-span-5 sm:col-span-3">
					<div class="flex flex-col lg:w-10/12">
						<div class="tx-666666 fw-400 fs-14 mb-3">Selling Rate: {{ suprbizRate }}%</div>
						<div class="flex flex-col">
							<!-- <span class="blacktext fw-500 fs-14 mb-4">Suprbiz Rates</span> -->
							<div class="grid grid-cols-2 gap-4">
								<div class="mb-8 col-span-2">
									<label for="yourRate" class="fs-14 fw-400 tx-666666">Your Rate </label>
									<Field
										id="yourRate"
										name="yourRate"
										v-model="yourRate"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
										:class="{ 'is-invalid': errors.yourRate }"
									/>
									<!-- <div class="absolute">%</div> -->
									<div class="invalid-feedback text-red-500">{{ errors.yourRate }}</div>
								</div>
							</div>

							<!-- ----------  -->
						</div>
					</div>
				</div>
			</div>

			<!-- -------------------------- -->
			<div class="grid grid-cols-5 gap-8">
				<div class="col-span-5 sm:col-span-3 md:col-span-2">
					<div class="flex flex-col">
						<h1 class="blacktext fw-500 fs-18 mb-3">Configure Winning rates</h1>
						<span class="fs-12 fw-400 tx-666666"
							>How much do you want to take from your customers winnings?</span
						>
					</div>
				</div>
				<LoadingInputs v-if="suprbizRateLoading" />

				<div v-else class="col-span-5 sm:col-span-3">
					<div class="flex flex-col lg:w-10/12">
						<div class="flex flex-col">
							<!-- <span class="blacktext fw-500 fs-14 mb-4">Suprbiz Rates</span> -->
							<div class="grid grid-cols-2 gap-4">
								<div class="mb-4 md:mb-8 col-span-2">
									<label for="setRate" class="fs-14 fw-400 tx-666666">Set Rate</label>
									<Field
										id="setRate"
										name="setRate"
										v-model="setRate"
										type="number"
										autocomplete="off"
										required=""
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-300 focus:z-10 sm:text-sm"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.setRate }}</div>
								</div>
							</div>

							<!-- ----------  -->

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
				</div>
			</div>
		</Form>
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
import { useStore } from "vuex";
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
			getAllSuprbizRates();
			// getCustomerRate();
			// getSavingsRates();
		});
		const store = useStore();
		const saveLoading = ref(false);

		const dummyRate = ref(null);
		// const savingsRate = ref(null)
		const suprbizRateLoading = ref(false);
		const customerRateLoading = ref(false);
		const isPinAuthOpen = ref(false);
		const suprbizRate = ref(null);
		const yourRate = ref(null);
		const setRate = ref(null);
		const yourNGNRate = ref(null);
		const ratesDetails = ref({
			customerFeeRate: 0,
			winningsPercent: 0,
			pin: "",
			merchantId: store.getters["authToken/userId"],
		});

		const schema = Yup.object().shape({
			// suprbizRates: Yup.string(),
			yourRate: Yup.number()
				.typeError("Rate is required and must be a number")
				.required("Rate is required")
				.test(
					"max",
					"Rate must be less than or equal to suprbiz rate",
					(val) => val <= suprbizRate.value
				),
			setRate: Yup.number()
				.typeError("Rate is required and must be a number")
				.required("Rate is required")
				.test(
					"max",
					"Rate must be less than or equal to suprbiz rate",
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

		// const getCustomerRate = () => {
		// 	customerRateLoading.value = true;
		// 	CustomerService.getCustomerRate(
		// 		(response) => {
		// 			customerRateLoading.value = false;
		// 			Log.info("customer-rate" + JSON.stringify(response));
		// 			const rates = response.data.data;
		// 			rates.forEach((rate) => {
		// 				if (rate.product === "USD" && rate.interestPercent > 0) {
		// 					yourRate.value = rate.interestPercent;
		// 				} else if (rate.product === "NGN" && rate.interestPercent > 0) {
		// 					yourNGNRate.value = rate.interestPercent;
		// 				}
		// 			});
		// 		},
		// 		(error) => {
		// 			customerRateLoading.value = false;
		// 			Log.info(error);
		// 			// getCustomerRates();
		// 		}
		// 	);
		// };

		// const getSavingsRates = () => {
		// 	suprbizRateLoading.value = true;
		// 	CustomerService.getSavingsRates(
		// 		(response) => {
		// 			Log.info("savings rates: " + JSON.stringify(response));
		// 			const data = response.data.data;
		// 			if (data !== null) {
		// 				suprbizRateLoading.value = false;
		// 				Log.info(response);
		// 				suprbizRate.value = data.interestPercent;
		// 				if (data.customerFeeRate > 0) {
		// 					yourRate.value = data.customerFeeRate;
		// 				}
		// 				if (data.winningsPercent > 0) {
		// 					setRate.value = data.winningsPercent;
		// 				}
		// 			}
		// 		},
		// 		(error) => {
		// 			suprbizRateLoading.value = false;
		// 			Log.error(error);
		// 		}
		// 	);
		// };

		// const postSavingsRates = () => {
		// 	CustomerService.postSavingsRates();
		// };

		const getAllSuprbizRates = () => {
			suprbizRateLoading.value = true;
			CustomerService.getAllSuprbizRates(
				(response) => {
					Log.info("savings rates: " + JSON.stringify(response));
					const data = response.data.data;
					if (data !== null) {
						suprbizRateLoading.value = false;
						Log.info(response);
						suprbizRate.value = data.interestPercent;
						dummyRate.value = data.sellingFeeRate;
						yourRate.value = data.sellingFeeRate > 0 ? data.sellingFeeRate : "";
						setRate.value = data.sellingWinningsRate > 0 ? data.sellingWinningsRate : null;
					}
				},
				(error) => {
					suprbizRateLoading.value = false;
					Log.error(error);
				}
			);
		};

		const getPin = (values) => {
			Log.info(JSON.stringify(values));
			ratesDetails.value.customerFeeRate = Number(values.yourRate);
			ratesDetails.value.winningsPercent = Number(values.setRate);
			openPinAuth();
		};

		const saveRate = (pin) => {
			saveLoading.value = true;
			Log.info("pin: " + pin);
			ratesDetails.value.pin = pin;
			Log.info("ratesDetails: " + JSON.stringify(ratesDetails.value));
			CustomerService.postSavingsRates(
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
		// const addTrailingPercentage = (value) => {
		// 	// document.getElementById("yourRate").innerHTML = value + "%";
		// 	return value + "%";
		// };

		// const myGeeks = (value) => {
		// 	let str = value;
		// 	let matches = str.match(/(\d+)/);

		// 	if (matches) {
		// 		return matches[0];
		// 	}
		// };

		// watch(yourRate, (newValue, oldValue) => {
		// 	// if (myGeeks(newValue) !== myGeeks(oldValue)) {
		// 	// yourRate.value = myGeeks(newValue) + "%";
		// 	Log.info(newValue, oldValue);
		// 	// }
		// });
		return {
			saveLoading,
			schema,
			getPin,
			saveRate,
			suprbizRate,
			openPinAuth,
			closePinAuth,
			isPinAuthOpen,
			yourRate,
			yourNGNRate,
			suprbizRateLoading,
			customerRateLoading,
			setRate,
			dummyRate,
		};
	},
};
</script>

<style lang="scss" scoped></style>
