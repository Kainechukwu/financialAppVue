<template>
	<div class="main-page pb-8 px-4 md:px-8">
		<div class="w-full appSpread mb-64">
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
						<span class="blacktext ml-4 fw-600 fs-18"> Create Withdrawal</span>
					</div>
				</div>
				<!-- --------------------- -->
				<div
					v-if="steps === 1"
					style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
					class="br-10 bg-white max-w-xl mx-auto pt-5 pb-10"
				>
					<!-- <EarnDepositLoading v-if="requestLoading" /> -->
					<div class="">
						<!-- <div style="border-bottom: 0.8px solid #f1f1f1" class="pb-4 px-6">
							<span class="fw-600 fs-14 blacktext">Withdraw Funds</span>
						</div> -->
						<Form @submit="proceed" :validation-schema="schema" v-slot="{ errors }">
							<div class="flex flex-col px-6">
								<div class="grid grid-cols-2 gap-4 py-6">
									<div class="col-span-2">
										<!-- ------------------------ -->
										<div class="mb-6 col-span-1 relative">
											<label for="Email Address" class="fs-14 fw-400 tx-666666"
												>Email Address</label
											>
											<Field
												id="Email Address"
												name="email"
												type="text"
												v-model="searchText"
												autocomplete="off"
												@focus="customerListIsVisible = true"
												@blur="customerListIsVisible = false"
												v-on:keyup="customerSearch"
												required=""
												class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												:class="{ 'is-invalid': errors.email }"
											/>
											<transition
												leave-active-class="transition ease-in duration-100"
												leave-from-class="opacity-100"
												leave-to-class="opacity-0"
											>
												<div
													v-if="customerListIsVisible && customers?.length > 0"
													class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
												>
													<ul
														id="customerOptions"
														class="customerOptions"
														as="template"
														v-for="customer in customers"
														:key="customer.customerId"
													>
														<li
															@click="pickCustomer(customer)"
															:class="[
																'cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-200',
															]"
														>
															<span
																:class="[
																	selectedCustomer ? 'font-semibold' : 'font-normal',
																	'block truncate',
																]"
															>
																{{ customer.customerEmail }}
															</span>

															<!-- <span
																	v-if="selectedcustomer"
																	:class="['absolute inset-y-0 right-0 flex items-center pr-4']"
																>
																</span> -->
														</li>
													</ul>
												</div>
											</transition>
											<div class="invalid-feedback text-red-500">{{ errors.email }}</div>
										</div>
										<!-- ------------------------- -->
									</div>
									<!-- <div class="col-span-2 sm:col-span-1">
										<div class="relative">
											<Listbox as="div" v-model="selectedCurrency">
												<ListboxLabel class="block fs-14 tx-666666 fw-600 truncate">
													Select product
												</ListboxLabel>
												<div class="mt-1 relative">
													<ListboxButton
														class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
													>
														<span class="block truncate">
															{{ selectedCurrency }}
														</span>
														<span
															class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
														>
															<div
																class="h-5 my-auto flex items-center justify-center text-gray-400"
															>
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
																:key="currency"
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
																		{{ currency }}
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
										</div>
									</div> -->

									<!-- ---------------- -->
									<div class="flex flex-col col-span-2">
										<label class="block fs-14 tx-666666 fw-600 truncate"> Enter Amount </label>
										<div class="flex br-5 h-12 mt-2">
											<Listbox as="div" v-model="selectedCurrency">
												<div class="h-full relative">
													<ListboxButton
														class="text-gray-400 h-full bg-gray-100 w-20 pr-2 pl-1 py-2 focus:outline-none sm:text-sm rounded-l-md"
													>
														<span class="block truncate">
															{{ selectedCurrency }}
														</span>
														<span
															class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
														>
															<div
																class="h-5 my-auto flex items-center justify-center text-gray-400"
															>
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
																:key="currency"
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
																		{{ currency }}
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
											<Field
												autofocus
												class="pl-3 w-full rounded-r-md border border-gray-100 text-gray-900 focus:outline-none sm:text-sm"
												type="number"
												name="amount"
												placeholder="1000.00"
												:class="{ 'is-invalid': errors.email }"
											/>
										</div>
										<div class="ml-20 invalid-feedback text-red-500">
											{{ errors.amount }}
										</div>
									</div>
								</div>

								<button
									type="submit"
									style="background-color: #2b7ee4"
									class="mx-auto cursor-pointer flex items-center justify-center h-12 w-full md:w-80 br-5"
								>
									<div class="flex items-center justify-center">
										<span class="fw-500 fs-16 text-white">Proceed</span>
										<div v-if="withdrawalLoading" class="h-4 w-4 ml-4 rounded-md block">
											<div class="roundLoader opacity-50 mx-auto"></div>
										</div>
									</div>
								</button>
							</div>
						</Form>
					</div>
				</div>

				<ConfirmWithdrawal v-else-if="steps === 2" @cancel="decreaseStep" />

				<!-- <ConfirmWithdrawal /> -->
				<!-- ------------------ -->
			</div>
		</div>
		<!-- <successful-transaction-modal /> -->
	</div>
</template>

<script>
import { useRouter } from "vue-router";
// import SuccessfulTransactionModal from "./SuccessfulTransactionModal.vue";

import { useStore } from "vuex";
// import CancelSvg from "./CancelSvg.vue";
import { Log, Util, Constants } from "@/components/util";
import {
	ref,
	onMounted,
	onBeforeMount,
	//  computed,
	// watch,
} from "vue";
import ConfirmWithdrawal from "@/views/main/customers/ConfirmWithdrawal.vue";
// import UserInfo from "@/services/userInfo/userInfo.js";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
// import EarnDepositLoading from "./earnDepositLoading.vue";
// import UserActions from "@/services/userActions/userActions.js";
import {
	Listbox,
	// ListboxLabel,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
import CustomerService from "@/services/userActions/customerService.js";

// import { useStore } from "vuex";
// import { numeralFormat } from "vue-numerals";
// var numeral = require("numeral");
// import numeral from "numeral";

export default {
	name: "CreateSavingsWithdrawal",

	components: {
		// CancelSvg,
		ConfirmWithdrawal,
		// SuccessfulTransactionModal,

		Listbox,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
		// ListboxLabel,
		// EarnDepositLoading,

		Form,
		Field,
	},
	props: {
		page: String,
	},
	setup() {
		onBeforeMount(() => {});
		onMounted(() => {
			// getAllRates();
		});

		const steps = ref(1);
		const store = useStore();
		const router = useRouter();
		const currencies = ref(["NGN", "USD"]);
		const customerListIsVisible = ref(false);
		const pageNumber = ref(1);
		const pageSize = ref(10);
		const searchText = ref("");
		const customers = ref([]);
		const selectedCustomer = ref({});
		const withdrawalLoading = ref(false);

		// const userId = ref(store.getters["authToken/userId"]);

		const selectedCurrency = ref(currencies.value[0]);

		const formatCurr = (balance) => {
			return Util.currencyFormatter(balance, Constants.currencyFormat);
		};

		const increaseStep = () => {
			steps.value += 1;
		};

		const decreaseStep = () => {
			if (steps.value > 1) {
				steps.value -= 1;
			}
		};

		const goToRootPage = () => {
			router.push("/savings");
		};

		const goBack = () => {
			if (steps.value === 1) {
				goToRootPage();
			} else if (steps.value > 1) {
				decreaseStep();
			}
		};

		const schema = Yup.object().shape({
			amount: Yup.string()
				.required("Amount is required")
				.matches(/^[0-9]+$/, "Amount must contain only numbers"),
			email: Yup.string()
				.required("Email is required")
				.email("Email is invalid")
				.test("exists", "Email must be valid and must belong to a Suprbiz customer", (val) =>
					customers.value?.length > 0
						? customers.value.some((customer) => customer.customerEmail === val)
						: false
				),
		});

		// const getBalance = () => {
		// 	UserInfo.accountBalance(
		// 		userId.value,
		// 		(response) => {
		// 			Log.info(response);
		// 			const balance = response.data.data;
		// 			principalBalance.value = balance.principalBalance;
		// 			interestBalance.value = balance.interestBalance;
		// 			store.commit("bankDetails/balance", principalBalance.value);
		// 		},
		// 		(error) => {
		// 			Util.handleGlobalAlert(true, "failed", error.response.data.Message);
		// 			Log.error(error);
		// 		}
		// 	);
		// };

		const customerSearch = () => {
			if (searchText.value.length > 0) {
				CustomerService.customerSearch(
					pageNumber.value,
					pageSize.value,
					searchText.value,
					(response) => {
						Log.info(response);
						customers.value = response.data.data;
					},
					(error) => {
						Log.error(error);
					}
				);
			}
		};

		const pickCustomer = (customer) => {
			searchText.value = customer.customerEmail;
			store.commit("customer/customerId", customer.customerId);

			Log.info(customer);
			selectedCustomer.value = customer;

			currencies.value = customer?.product.split(",");
		};

		const proceed = (values) => {
			Log.info("Proceed");
			Log.info(values);
			withdrawalLoading.value = true;
			CustomerService.customerTransactionWithdrawal(
				{
					customerId: selectedCustomer.value.customerId,
					product: selectedCurrency.value,
					amount: Number(values.amount),
				},
				(response) => {
					withdrawalLoading.value = false;
					Log.info("deposit response: " + JSON.stringify(response));
					store.commit("customer/transactionDetails", response.data.data);
					increaseStep();
				},
				(error) => {
					withdrawalLoading.value = false;
					Log.error(error);
				}
			);
		};

		// const openSuccessModal = () => {
		// 	store.commit("setNaijaTransactionSuccessfulModal", true);
		// };

		return {
			proceed,
			currencies,
			selectedCurrency,
			decreaseStep,
			customerListIsVisible,
			pickCustomer,
			selectedCustomer,
			searchText,
			customerSearch,
			customers,
			withdrawalLoading,

			goBack,
			formatCurr,
			steps,
			schema,

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
