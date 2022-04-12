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

						<!-- <div
							:class="steps >= 3 ? 'done' : 'undone'"
							class="flex items-center justify-center h-10 w-10 rounded-full"
						>
							<h1 class="fw-600">3</h1>
						</div> -->
					</div>
				</div>
				<!-- --------------------- -->
				<div
					style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
					class="br-10 bg-white max-w-xl mx-auto pt-5 pb-10"
				>
					<EarnDepositLoading v-if="requestLoading" />
					<div v-else-if="!requestLoading && !openRecipients" class="">
						<div style="border-bottom: 0.8px solid #f1f1f1" class="pb-4 px-6">
							<span class="fw-600 fs-14 blacktext">Withdraw Funds</span>
						</div>
						<Form @submit="openNaijaWithdrawalOtp" :validation-schema="schema" v-slot="{ errors }">
							<div class="flex flex-col px-6 pt-10">
								<div class="grid grid-cols-2 gap-4 py-6">
									<div class="col-span-2 sm:col-span-1">
										<!-- ------------------------ -->
										<div>
											<div
												@click="switchWallet('Principal Account')"
												:class="wallet === 'Principal Account' ? 'activeWallet' : ''"
												class="flex br-5 p-2.5 cursor-pointer border border-gray-200"
											>
												<div class="flex flex-col w-full">
													<div class="flex justify-between">
														<span class="tx-666666 fw-400 fs-10">PRINCIPAL BALANCE</span>
														<svg
															v-if="wallet === 'Principal Account'"
															width="12"
															height="12"
															viewBox="0 0 12 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M0 6C0 2.67273 2.67273 0 6 0C9.32727 0 12 2.67273 12 6C12 9.32727 9.32727 12 6 12C2.67273 12 0 9.32727 0 6ZM5.1 8.64535L9.46364 4.11808C9.57273 4.00899 9.57273 3.84535 9.46364 3.76353L9.08182 3.38171C8.97273 3.27262 8.80909 3.27262 8.7 3.38171H8.67273L5.01818 7.17262C4.96364 7.22717 4.88182 7.22717 4.82727 7.17262L3.32727 5.56353L3.3 5.53626C3.19091 5.42717 3.02727 5.42717 2.91818 5.53626L2.53636 5.91808C2.48182 5.97262 2.45454 6.05444 2.45454 6.10899C2.45454 6.16353 2.48182 6.24535 2.53636 6.2999L2.59091 6.35444L4.71818 8.64535C4.74545 8.6999 4.82727 8.72717 4.90909 8.72717C4.99091 8.72717 5.04545 8.6999 5.1 8.64535Z"
																fill="#75A0FF"
															/>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M0 6C0 2.67273 2.67273 0 6 0C9.32727 0 12 2.67273 12 6C12 9.32727 9.32727 12 6 12C2.67273 12 0 9.32727 0 6ZM5.1 8.64535L9.46364 4.11808C9.57273 4.00899 9.57273 3.84535 9.46364 3.76353L9.08182 3.38171C8.97273 3.27262 8.80909 3.27262 8.7 3.38171H8.67273L5.01818 7.17262C4.96364 7.22717 4.88182 7.22717 4.82727 7.17262L3.32727 5.56353L3.3 5.53626C3.19091 5.42717 3.02727 5.42717 2.91818 5.53626L2.53636 5.91808C2.48182 5.97262 2.45454 6.05444 2.45454 6.10899C2.45454 6.16353 2.48182 6.24535 2.53636 6.2999L2.59091 6.35444L4.71818 8.64535C4.74545 8.6999 4.82727 8.72717 4.90909 8.72717C4.99091 8.72717 5.04545 8.6999 5.1 8.64535Z"
																fill="#75A0FF"
															/>
														</svg>
													</div>
													<span class="fw-500 fs-20 blacktext"
														>N{{ formatCurr(principalBalance) }}</span
													>
												</div>
											</div>
										</div>
										<!-- ------------------------- -->
									</div>
									<div class="col-span-2 sm:col-span-1">
										<!-- ------------------------ -->
										<div>
											<div
												@click="switchWallet('Interest Account')"
												:class="wallet === 'Interest Account' ? 'activeWallet' : ''"
												class="flex br-5 p-2.5 cursor-pointer border border-gray-200"
											>
												<div class="flex flex-col w-full">
													<div class="flex justify-between">
														<span class="tx-666666 fw-400 fs-10">INTEREST BALANCE</span>
														<svg
															v-if="wallet === 'Interest Account'"
															width="12"
															height="12"
															viewBox="0 0 12 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M0 6C0 2.67273 2.67273 0 6 0C9.32727 0 12 2.67273 12 6C12 9.32727 9.32727 12 6 12C2.67273 12 0 9.32727 0 6ZM5.1 8.64535L9.46364 4.11808C9.57273 4.00899 9.57273 3.84535 9.46364 3.76353L9.08182 3.38171C8.97273 3.27262 8.80909 3.27262 8.7 3.38171H8.67273L5.01818 7.17262C4.96364 7.22717 4.88182 7.22717 4.82727 7.17262L3.32727 5.56353L3.3 5.53626C3.19091 5.42717 3.02727 5.42717 2.91818 5.53626L2.53636 5.91808C2.48182 5.97262 2.45454 6.05444 2.45454 6.10899C2.45454 6.16353 2.48182 6.24535 2.53636 6.2999L2.59091 6.35444L4.71818 8.64535C4.74545 8.6999 4.82727 8.72717 4.90909 8.72717C4.99091 8.72717 5.04545 8.6999 5.1 8.64535Z"
																fill="#75A0FF"
															/>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M0 6C0 2.67273 2.67273 0 6 0C9.32727 0 12 2.67273 12 6C12 9.32727 9.32727 12 6 12C2.67273 12 0 9.32727 0 6ZM5.1 8.64535L9.46364 4.11808C9.57273 4.00899 9.57273 3.84535 9.46364 3.76353L9.08182 3.38171C8.97273 3.27262 8.80909 3.27262 8.7 3.38171H8.67273L5.01818 7.17262C4.96364 7.22717 4.88182 7.22717 4.82727 7.17262L3.32727 5.56353L3.3 5.53626C3.19091 5.42717 3.02727 5.42717 2.91818 5.53626L2.53636 5.91808C2.48182 5.97262 2.45454 6.05444 2.45454 6.10899C2.45454 6.16353 2.48182 6.24535 2.53636 6.2999L2.59091 6.35444L4.71818 8.64535C4.74545 8.6999 4.82727 8.72717 4.90909 8.72717C4.99091 8.72717 5.04545 8.6999 5.1 8.64535Z"
																fill="#75A0FF"
															/>
														</svg>
													</div>
													<span class="fw-500 fs-20 blacktext"
														>N{{ formatCurr(interestBalance) }}</span
													>
												</div>
											</div>
										</div>
										<!-- ------------------------- -->
									</div>
								</div>
								<span class="fw-400 fs-14 tx-666666 mb-3">How much would you like to withdraw</span>

								<div class="flex flex-col">
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
										<Field
											autofocus
											class="pl-3 w-full rounded-r-md border border-gray-100 text-gray-900 focus:outline-none sm:text-sm"
											type="number"
											name="Amount"
											placeholder=""
											:class="{ 'is-invalid': errors.Amount }"
										/>
									</div>
									<div class="ml-20 invalid-feedback text-red-500">
										{{ errors.Amount }}
									</div>
								</div>

								<span
									v-if="beneficiaryListArray.length > 0"
									@click="goToBeneficiaryList"
									style="text-decoration-line: underline; color: #407bff"
									class="cursor-pointer mt-5 fw-400 fs-14"
									>Previous Beneficiaries</span
								>

								<div class="mb-7 mt-6">
									<div class="relative">
										<Listbox as="div" v-model="selectedBank">
											<ListboxLabel class="block fs-14 tx-666666 fw-600 truncate">
												Bank Name
											</ListboxLabel>
											<div class="mt-1 relative">
												<input
													ref="bankInput"
													onkeyup="filterFunction()"
													@focus="openBankArray"
													class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:border-gray-400 sm:text-sm"
													type="text"
													v-model="bankText"
												/>
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
												<ListboxButton
													id="bankButton"
													class="hidden bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:border-gray-400 sm:text-sm"
												>
													<span class="block truncate">{{ selectedBank.name }}</span>
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
															id="bankOptions"
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
									<Field
										id="BeneficiaryAccountNumber"
										name="AccNumber"
										type="text"
										autocomplete="off"
										v-model="beneficiaryAccountNumber"
										required=""
										:class="{ 'is-invalid': errors.AccNumber }"
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 focus:border-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
									/>
									<div class="invalid-feedback text-red-500">{{ errors.AccNumber }}</div>
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

								<!-- <button
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
							</button> -->
								<div v-if="beneficiaryLoading" class="h-8 w-8 mx-auto rounded-md block">
									<div class="roundLoader opacity-25 mx-auto"></div>
								</div>
								<button
									:class="
										beneficiaryName.length === 0 || Object.keys(errors).length > 0
											? 'opacity-50'
											: ''
									"
									:disabled="beneficiaryName.length === 0"
									type="submit"
									style="background-color: #2b7ee4"
									class="mx-auto cursor-pointer flex items-center justify-center h-12 w-full md:w-80 br-5"
								>
									<div class="flex items-center justify-center">
										<span class="fw-500 fs-16 text-white">Proceed</span>
										<!-- <div v-if="beneficiaryLoading" class="h-4 w-4 ml-4 rounded-md block">
										<div class="roundLoader opacity-50 mx-auto"></div>
									</div> -->
									</div>
								</button>
							</div>
						</Form>
					</div>
					<NaijaBeneficiaryList
						v-else-if="!requestLoading && openRecipients"
						:beneficiaries="beneficiaryListArray"
						@close="closeBeneficiaryList"
					/>
				</div>

				<naija-withdrawal-modal-otp
					:open="naijaWithdrawalOtpOpen"
					:amount="withdrawalAmount"
					:destinationAccountNumber="beneficiaryAccountNumber"
					:destinationAccountName="beneficiaryName"
					:destinationBankCode="selectedBank.code"
					:destinationBankName="selectedBank.name"
					@close="closeNaijaWithdrawalOtp"
					@success="openSuccessModal"
				/>
				<!-- <ConfirmWithdrawal /> -->
				<!-- ------------------ -->
			</div>
		</div>
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
// import CancelSvg from "./CancelSvg.vue";
import { Log, Util, Constants } from "@/components/util";
import {
	ref,
	onMounted,
	onBeforeMount,
	//  computed,
	watch,
} from "vue";
import UserInfo from "@/services/userInfo/userInfo.js";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import EarnDepositLoading from "./earnDepositLoading.vue";
import UserActions from "@/services/userActions/userActions.js";
import NaijaBeneficiaryList from "./NaijaBeneficiaryList.vue";
import NaijaWithdrawalModalOtp from "@/views/modals/NaijaWithdrawalModalOtp";
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

		Listbox,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
		ListboxLabel,
		EarnDepositLoading,
		NaijaBeneficiaryList,
		NaijaWithdrawalModalOtp,
		Form,
		Field,
	},
	props: {
		page: String,
	},
	setup() {
		onBeforeMount(() => {
			switchWallet("Principal Account");
			getBankList();
			getBalance();
			getPrevBeneficiaries();
		});
		onMounted(() => {
			// getAllRates();
		});

		const steps = ref(1);
		const store = useStore();
		const router = useRouter();
		const currencies = ref([
			{
				currency: "NGN",
				id: 5,
			},
		]);
		const wallet = ref("Principal Account");
		const beneficiaryName = ref("");
		const beneficiaryAccountNumber = ref("");
		const principalBalance = ref(0);
		const interestBalance = ref(0);
		const beneficiaryLoading = ref(false);
		const naijaWithdrawalOtpOpen = ref(false);
		const userId = ref(store.getters["authToken/userId"]);
		const beneficiaryListArray = ref([]);
		const pageNumber = ref(1);
		const pageSize = ref(10);
		const selectedCurrency = ref(currencies.value[0]);
		const openRecipients = ref(false);
		const banks = ref([]);
		const bankInput = ref(null);
		const selectedBank = ref({});
		const bankText = ref("");
		const withdrawalAmount = ref("");
		const bankListButton = ref(null);

		const sendAmountLoading = ref(false);

		// const store = useStore();
		const requestLoading = ref(false);

		const formatCurr = (balance) => {
			return Util.currencyFormatter(balance, Constants.currencyFormat);
		};

		const openBankArray = () => {
			bankListButton.value = document.getElementById("bankButton");
			bankListButton.value.click();
			bankInput.value.focus();
		};

		const increaseStep = () => {
			steps.value += 1;
		};

		const goToBeneficiaryList = () => {
			openRecipients.value = true;
		};

		const closeBeneficiaryList = (selectedBeneficiary) => {
			openRecipients.value = false;
			if (Object.keys(selectedBeneficiary).length > 0) {
				// const index = banks.value.findIndex((item) => item.name === selectedBeneficiary.bankName);
				// selectedBank.value = banks.value[index];
				beneficiaryAccountNumber.value = selectedBeneficiary.accountNumber;
				beneficiaryName.value = selectedBeneficiary.accountName;

				return;
			} else {
				return;
			}
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

		const schema = Yup.object().shape({
			Amount: Yup.string()
				.required("Amount is required")
				.matches(/^[0-9]+$/, "Amount must contain only numbers"),
			AccNumber: Yup.string()
				.required("Account Number is required")
				.matches(/^[0-9]+$/, "Account number must contain only numbers")
				// .typeError("Account number must contain only numbers")

				// .min(10)
				.test(
					"len",
					"Account Number must be exactly 10 characters",
					(val) => val?.toString().length === 10
				),
		});

		const openNaijaWithdrawalOtp = (values) => {
			withdrawalAmount.value = values.Amount;
			beneficiaryAccountNumber.value = values.AccNumber;
			naijaWithdrawalOtpOpen.value = true;
			// store.commit("setTransactionSuccessfulModal", true);
		};

		const closeNaijaWithdrawalOtp = () => {
			naijaWithdrawalOtpOpen.value = false;
		};

		const switchWallet = (acc) => {
			wallet.value = acc;

			if (wallet.value === "Principal Account") {
				// store.commit("bankDetails/balance", principalBalance.value);
				store.commit("bankDetails/walletId", 1);
			} else if (wallet.value === "Interest Account") {
				// store.commit("bankDetails/balance", interestBalance.value);
				store.commit("bankDetails/walletId", 2);
			}

			Log.info(store.getters["bankDetails/walletId"]);
			// Log.info(store.getters["bankDetails/balance"]);
		};

		const getBalance = () => {
			UserInfo.accountBalance(
				userId.value,
				(response) => {
					Log.info(response);
					const balance = response.data.data;
					principalBalance.value = balance.principalBalance;
					interestBalance.value = balance.interestBalance;
					store.commit("bankDetails/balance", principalBalance.value);
				},
				(error) => {
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					Log.error(error);
				}
			);
		};

		const getBankList = () => {
			UserActions.getBankList(
				(response) => {
					banks.value = response.data.data;
					selectedBank.value = banks.value !== null ? banks.value[0] : {};
					bankText.value = banks.value !== null ? banks.value[0].name : "";
					Log.info(response);
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const getPrevBeneficiaries = () => {
			UserActions.getPrevBeneficiaries(
				userId.value,
				pageNumber.value,
				pageSize.value,
				(response) => {
					// const fakeData = [
					// 	{
					// 		accountName: "Kaine Bismarck",
					// 		accountNumber: "0123456789",
					// 		bankName: "ACCESS BANK",
					// 		bankCode: "000114",
					// 		id: "1",
					// 	},
					// 	{
					// 		accountName: "Wale Adenuga",
					// 		accountNumber: "0123456789",
					// 		bankName: "Access Bank",
					// 		bankCode: "000115",
					// 		id: "2",
					// 	},
					// ];
					beneficiaryListArray.value = response.data.data.length > 0 ? response.data.data : [];
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

		const openSuccessModal = () => {
			store.commit("setNaijaTransactionSuccessfulModal", true);
		};

		watch(selectedBank, (newValue) => {
			// store.commit("bankDetails/rateId", newValue.id);
			bankText.value = newValue.name;
			if (beneficiaryAccountNumber.value.length === 10) {
				getNaijaBeneficiary();
			}
			Log.info(newValue);
		});

		// watch(rate, (newValue) => {
		// 	Log.info(newValue);
		// 	youReceive.value =
		// });
		watch(beneficiaryAccountNumber, (newValue) => {
			if (newValue.length === 10) {
				getNaijaBeneficiary();
			}
		});

		watch(beneficiaryName, (newValue) => {
			if (newValue.length > 0) {
				steps.value = 2;
			}
		});

		function filterFunction() {
			let input, filter, span, div, txtValue, i;
			//get input element
			input = document.getElementById("bankInput");
			//get input value
			filter = input.value.toUpperCase();

			//get list parent div
			div = document.getElementById("bankOptions");

			//get individual list items
			span = div.getElementsByTagName("span");
			for (i = 0; i < span.length; i++) {
				txtValue = span[i].textContent || span[i].innerText;
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
					span[i].style.display = "";
				} else {
					span[i].style.display = "none";
				}
			}
		}

		return {
			proceed,
			goToBeneficiaryList,
			closeBeneficiaryList,
			currencies,
			selectedCurrency,
			openRecipients,
			filterFunction,
			// youReceive,
			sendAmountLoading,
			requestLoading,
			beneficiaryListArray,
			steps,
			banks,
			selectedBank,
			withdrawalAmount,
			beneficiaryAccountNumber,
			beneficiaryName,
			openSuccessModal,
			increaseStep,
			goBack,
			bankText,
			formatCurr,
			goToRootPage,
			getNaijaBeneficiary,
			beneficiaryLoading,
			openNaijaWithdrawalOtp,
			naijaWithdrawalOtpOpen,
			closeNaijaWithdrawalOtp,
			switchWallet,
			wallet,
			bankInput,
			principalBalance,
			interestBalance,
			schema,
			openBankArray,

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
