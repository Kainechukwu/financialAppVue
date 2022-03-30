<template>
	<div class="main-page pb-8 px-8">
		<div class="w-full mx-auto mb-64">
			<div>
				<div style="border-bottom: 1px solid #c7d8ff" class="py-4 pt-6 flex justify-between mb-10">
					<div @click="goBack" class="flex cursor-pointer items-center">
						<svg
							width="8"
							height="14"
							viewBox="0 0 8 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 13L1 7L7 1"
								stroke="#333333"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<span class="blacktext ml-4 fw-600 fs-18"> Withdraw Funds</span>
					</div>

					<div class="flex text-white">
						<div
							:class="steps >= 1 ? 'done' : 'undone'"
							class="flex items-center justify-center h-10 w-10 rounded-full mr-4"
						>
							<svg
								v-if="steps > 1"
								width="13"
								height="10"
								viewBox="0 0 13 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.9754 1.18243L4.64205 8.51577L1.30872 5.18243"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<h1 v-else class="fw-600">1</h1>
						</div>
						<div
							:class="steps >= 2 ? 'done' : 'undone'"
							class="flex items-center justify-center h-10 w-10 rounded-full mr-4"
						>
							<svg
								v-if="steps > 2"
								width="13"
								height="10"
								viewBox="0 0 13 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.9754 1.18243L4.64205 8.51577L1.30872 5.18243"
									stroke="white"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<h1 v-else class="fw-600">2</h1>
						</div>

						<div
							:class="steps >= 3 ? 'done' : 'undone'"
							class="flex items-center justify-center h-10 w-10 rounded-full"
						>
							<h1 class="fw-600">3</h1>
						</div>
					</div>
				</div>
				<!-- --------------------- -->
				<div
					v-if="steps === 1"
					style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
					class="br-10 bg-white max-w-xl mx-auto pt-5 pb-10"
				>
					<EarnDepositLoading v-if="requestLoading" />
					<div v-else-if="!requestLoading && !openRecipients" class="">
						<div style="border-bottom: 0.8px solid #f1f1f1" class="pb-4 px-6">
							<span class="fw-600 fs-14 blacktext">Withdraw Funds</span>
						</div>
						<div class="flex flex-col px-6 pt-10">
							<span class="fw-400 fs-14 tx-666666 mb-3">How much would you like to withdraw</span>
							<div class="flex br-5 h-12">
								<Listbox as="div" v-model="selectedCurrency">
									<div class="h-full relative">
										<ListboxButton
											class="text-gray-400 h-full bg-gray-100 w-20 pr-2 pl-1 py-2 focus:outline-none sm:text-sm rounded-l-md"
										>
											<span class="block truncate">
												{{ selectedCurrency.currency }}
												<!-- UST -->
											</span>
											<span
												class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
											>
												<div class="h-5 my-auto flex items-center justify-center text-gray-400">
													<svg
														width="12"
														height="6"
														viewBox="0 0 12 6"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1 1L5.73 5.2L10.46 1"
															stroke="#BFBFBF"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
												</div>
											</span>
										</ListboxButton>

										<transition
											leave-active-class="transition ease-in duration-100"
											leave-from-class="opacity-100"
											leave-to-class="opacity-0"
										>
											<ListboxOptions
												class="absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-b-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
											>
												<ListboxOption
													as="template"
													v-for="currency in currencies"
													:key="currency.id"
													:value="currency"
													v-slot="{ active, selectedCurrency }"
												>
													<li
														:class="[
															active ? 'blacktext bg-gray-100' : 'blacktext',
															'cursor-default select-none relative py-2 pl-3 pr-9',
														]"
													>
														<span
															:class="[
																selectedCurrency ? 'font-semibold' : 'font-normal',
																'block truncate',
															]"
														>
															{{ currency.currency }}
															<!-- UST -->
														</span>

														<span
															v-if="selectedCurrency"
															:class="[
																active ? 'text-white' : 'text-indigo-600',
																'absolute inset-y-0 right-0 flex items-center pr-4',
															]"
														>
														</span>
													</li>
												</ListboxOption>
											</ListboxOptions>
										</transition>
									</div>
								</Listbox>
								<input
									autofocus
									class="pl-3 w-full rounded-r-md border border-gray-100 text-gray-900 focus:outline-none sm:text-sm"
									type="number"
									placeholder="1000.00"
									v-model="withdrawalAmount"
								/>
							</div>

							<span
								@click="goToBeneficiaryList"
								style="text-decoration-line: underline; color: #407bff"
								class="cursor-pointer mt-5 mb-6 fw-400 fs-14"
								>Previous Recipients</span
							>

							<div class="mb-7">
								<div class="relative">
									<Listbox as="div" v-model="selectedBank">
										<ListboxLabel class="block fs-14 tx-666666 fw-600 truncate">
											Bank Name
										</ListboxLabel>
										<div class="mt-1 relative">
											<ListboxButton
												class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:border-gray-400 sm:text-sm"
											>
												<span class="block truncate">{{ selectedBank.name }}</span>
												<span
													class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
												>
													<div class="h-5 w-5 text-gray-400 flex items-center">
														<svg
															width="12"
															height="6"
															viewBox="0 0 12 6"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M1 1L5.73 5.2L10.46 1"
																stroke="#BFBFBF"
																stroke-width="1.5"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</svg>
													</div>
												</span>
											</ListboxButton>

											<transition
												leave-active-class="transition ease-in duration-100"
												leave-from-class="opacity-100"
												leave-to-class="opacity-0"
											>
												<ListboxOptions
													class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
												>
													<ListboxOption
														as="template"
														v-for="bank in banks"
														:key="bank.id"
														:value="bank"
														v-slot="{ active, selectedBank }"
													>
														<li
															:class="[
																active ? 'blacktext bg-gray-100' : 'blacktext',
																'cursor-default select-none relative py-2 pl-3 pr-9',
															]"
														>
															<span
																:class="[
																	selectedBank ? 'font-semibold' : 'font-normal',
																	'block truncate',
																]"
															>
																{{ bank.name }}
															</span>

															<span
																v-if="selectedBank"
																:class="[
																	active ? 'text-white' : 'text-indigo-600',
																	'absolute inset-y-0 right-0 flex items-center pr-4',
																]"
															>
															</span>
														</li>
													</ListboxOption>
												</ListboxOptions>
											</transition>
										</div>
									</Listbox>
								</div>
							</div>

							<div class="mb-6">
								<label for="Beneficiary Account Number" class="fs-14 tx-666666 fw-600"
									>Beneficiary Account Number</label
								>
								<input
									id="BeneficiaryAccountNumber"
									name="BeneficiaryAccountNumber"
									type="text"
									autocomplete="off"
									v-model="beneficiaryAccountNumber"
									required=""
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 focus:border-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
								/>
								<!-- <div class="invalid-feedback text-red-500">{{ passwordError }}</div> -->
							</div>

							<div v-if="beneficiaryName.length > 0" class="mb-6">
								<label for="Beneficiary Name" class="fs-14 tx-666666 fw-600"
									>Beneficiary Name</label
								>
								<input
									readonly
									id="BeneficiaryName"
									name="BeneficiaryName"
									type="text"
									autocomplete="off"
									required=""
									v-model="beneficiaryName"
									style="background-color: #f9f9f9"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 focus:border-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
								/>
								<!-- <div class="invalid-feedback text-red-500">{{ passwordError }}</div> -->
							</div>

							<button
								v-if="beneficiaryName.length === 0"
								@click="getNaijaBeneficiary"
								:disabled="beneficiaryLoading"
								style="background-color: #2b7ee4"
								class="mx-auto cursor-pointer flex items-center justify-center h-12 w-80 br-5"
							>
								<div class="flex items-center justify-center">
									<span class="fw-500 fs-16 text-white"> Get Beneficiary</span>
									<div v-if="beneficiaryLoading" class="h-4 w-4 ml-4 rounded-md block">
										<div class="roundLoader opacity-50 mx-auto"></div>
									</div>
								</div>
							</button>
							<button
								v-else
								style="background-color: #2b7ee4"
								class="mx-auto cursor-pointer flex items-center justify-center h-12 w-80 br-5"
							>
								<div class="flex items-center justify-center">
									<span class="fw-500 fs-16 text-white">Proceed</span>
									<!-- <div v-if="beneficiaryLoading" class="h-4 w-4 ml-4 rounded-md block">
										<div class="roundLoader opacity-50 mx-auto"></div>
									</div> -->
								</div>
							</button>
						</div>
					</div>
					<NaijaBeneficiaryList
						v-else-if="!requestLoading && openRecipients"
						@close="closeBeneficiaryList"
					/>
				</div>
				<BankDetails
					@cancel="goToRootPage"
					@finalStep="increaseStep"
					:step="steps"
					v-if="steps === 2 || steps === 3"
				/>
				<!-- <ConfirmWithdrawal /> -->
				<!-- ------------------ -->
			</div>
		</div>
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import BankDetails from "./BankDetails.vue";
// import CancelSvg from "./CancelSvg.vue";
import { Log, Util, Constants } from "@/components/util";
import {
	ref,
	onMounted,
	onBeforeMount,
	//  computed,
	watch,
} from "vue";
// import UserInfo from "@/services/userInfo/userInfo.js";

import EarnDepositLoading from "./earnDepositLoading.vue";
import UserActions from "@/services/userActions/userActions.js";
import NaijaBeneficiaryList from "./NaijaBeneficiaryList.vue";
import {
	Listbox,
	ListboxLabel,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
// import { useStore } from "vuex";
// import { numeralFormat } from "vue-numerals";
// var numeral = require("numeral");
// import numeral from "numeral";

export default {
	name: "NaijaWithdraw",

	components: {
		// CancelSvg,
		BankDetails,
		Listbox,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
		ListboxLabel,
		EarnDepositLoading,
		NaijaBeneficiaryList,
	},
	props: {
		page: String,
	},
	setup() {
		onBeforeMount(() => {
			getBankList();
		});
		onMounted(() => {
			// getAllRates();
		});

		const steps = ref(1);
		const router = useRouter();
		const currencies = ref([
			{
				currency: "NGN",
				id: 5,
			},
		]);
		const beneficiaryName = ref("");
		const beneficiaryAccountNumber = ref("");
		const beneficiaryLoading = ref(false);

		const selectedCurrency = ref(currencies.value[0]);
		const openRecipients = ref(false);
		const banks = ref([]);
		const selectedBank = ref({});
		const withdrawalAmount = ref("");

		const sendAmountLoading = ref(false);

		// const store = useStore();
		const requestLoading = ref(false);

		const formatCurr = (balance) => {
			return Util.currencyFormatter(balance, Constants.currencyFormat);
		};

		const increaseStep = () => {
			steps.value += 1;
		};

		const goToBeneficiaryList = () => {
			openRecipients.value = true;
		};

		const closeBeneficiaryList = () => {
			openRecipients.value = false;
		};

		const goToRootPage = () => {
			router.push("/earn/overview");
		};

		const goBack = () => {
			if (steps.value === 1) {
				goToRootPage();
			} else {
				steps.value -= 1;
			}
		};

		const getBankList = () => {
			UserActions.getBankList(
				(response) => {
					banks.value = response.data.data;
					selectedBank.value = banks.value[0];

					Log.info(response);
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const getNaijaBeneficiary = () => {
			beneficiaryLoading.value = true;
			UserActions.getNaijaBeneficiary(
				{
					bankCode: String(selectedBank.value.code),
					accountNumber: String(beneficiaryAccountNumber.value),
				},
				(response) => {
					beneficiaryLoading.value = false;
					beneficiaryName.value = response.data.data ? response.data.data : "";

					Log.info(response);
				},
				(error) => {
					beneficiaryLoading.value = false;

					Log.error(error);
				}
			);
		};

		// const getAllRates = () => {
		// 	requestLoading.value = true;
		// 	UserActions.getAllRates(
		// 		(response) => {
		// 			currencies.value = response.data.data;
		// 			selectedCurrency.value = currencies.value.length > 0 ? currencies.value[0] : {};

		// 			store.commit("bankDetails/rateId", selectedCurrency.value.id);
		// 			requestLoading.value = false;
		// 		},
		// 		(error) => {
		// 			requestLoading.value = false;
		// 			Log.info(error);
		// 			Util.handleGlobalAlert(true, "failed", error.response.data.Message);
		// 		}
		// 	);
		// };

		const proceed = () => {
			Log.info("Proceed");
		};

		watch(selectedCurrency, (newValue) => {
			// store.commit("bankDetails/rateId", newValue.id);
			Log.info(newValue);
		});

		// watch(rate, (newValue) => {
		// 	Log.info(newValue);
		// 	youReceive.value =
		// });

		return {
			proceed,
			goToBeneficiaryList,
			closeBeneficiaryList,
			currencies,
			selectedCurrency,
			openRecipients,
			// youReceive,
			sendAmountLoading,
			requestLoading,

			steps,
			banks,
			selectedBank,
			withdrawalAmount,
			beneficiaryName,
			beneficiaryAccountNumber,
			increaseStep,
			goBack,
			formatCurr,
			goToRootPage,
			getNaijaBeneficiary,
			beneficiaryLoading,
			// addComma,
		};
	},
};
</script>

<style lang="scss" scoped>
.activeWallet {
	border: 1.5px solid #99b8ff;
	background-color: #f2f6ff;
}
</style>
