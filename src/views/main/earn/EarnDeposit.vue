<template>
	<div class="">
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
				<span class="blacktext ml-4 fw-600 fs-18"> Deposit</span>
			</div>

			<div class="flex text-white">
				<div
					:class="steps >= 1 ? 'done' : 'undone'"
					class="flex items-center justify-center h-12 w-12 rounded-full mr-4"
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
					class="flex items-center justify-center h-12 w-12 rounded-full mr-4"
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
					class="flex items-center justify-center h-12 w-12 rounded-full"
				>
					<h1 class="fw-600">3</h1>
				</div>
			</div>
		</div>

		<div v-if="steps === 1" class="bg-white max-w-xl mx-auto">
			<EarnDepositLoading v-if="requestLoading" />
			<div v-else class="flex flex-col px-6 py-6">
				<span class="fw-400 fs-14 tx-666666 mb-3">How much would you like to deposit</span>
				<div class="flex br-5 h-12">
					<Listbox as="div" v-model="selected">
						<!-- <ListboxLabel class="hidden block fs-14 tx-666666 fw-600"> Currencies </ListboxLabel> -->
						<div class="h-full relative">
							<ListboxButton
								class="text-gray-400 h-full bg-gray-100 w-20 pr-2 pl-1 py-2 focus:outline-none sm:text-sm rounded-l-md"
							>
								<span class="block truncate">{{ selected.currency }}</span>
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
										v-slot="{ active, selected }"
									>
										<li
											:class="[
												active ? 'blacktext bg-gray-100' : 'blacktext',
												'cursor-default select-none relative py-2 pl-3 pr-9',
											]"
										>
											<span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
												{{ currency.currency }}
											</span>

											<span
												v-if="selected"
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
						v-model="depositAmount"
						placeholder="1000.00"
					/>
				</div>
				<span class="fs-12 fw-400 tx-666666 mt-3"
					>You will receive
					<span class="fs-12 fw-600 blacktext">${{ computeRate(depositAmount) }}</span></span
				>

				<span class="mt-6 mb-4">Payment Method</span>

				<div class="grid grid-cols-2 gap-4 mb-8">
					<div class="col-span-1">
						<div
							style="border: 1.5px solid #99b8ff; background-color: #f2f6ff"
							class="flex br-5 p-2.5"
						>
							<div class="mr-2">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="30" height="30" rx="5" fill="#F2F2F2" />
									<g clip-path="url(#clip0_1582_16303)">
										<path
											opacity="0.4"
											d="M22.5625 8.8125H11.3125C11.3125 10.0562 10.3062 11.0625 9.0625 11.0625V15.5625C10.3062 15.5625 11.3125 16.5688 11.3125 17.8125H22.5625C22.5625 16.5688 23.5688 15.5625 24.8125 15.5625V11.0625C23.5688 11.0625 22.5625 10.0562 22.5625 8.8125ZM16.9369 16.6875C15.3836 16.6875 14.1244 15.1764 14.1244 13.3125C14.1244 11.4485 15.3836 9.9375 16.9369 9.9375C18.4902 9.9375 19.7494 11.4485 19.7494 13.3125C19.7494 15.1764 18.4903 16.6875 16.9369 16.6875ZM5.6875 20.0625V9.375C4.75551 9.375 4 10.1306 4 11.0625V20.625C4 21.8676 5.00737 22.875 6.25 22.875H21.4375C22.3695 22.875 23.125 22.1194 23.125 21.1875H6.8125C6.19115 21.1875 5.6875 20.6838 5.6875 20.0625Z"
											fill="#444444"
										/>
										<path
											d="M24.8125 7.125H9.0625C8.13058 7.125 7.375 7.88058 7.375 8.8125V17.8125C7.375 18.7444 8.13058 19.5 9.0625 19.5H24.8125C25.7446 19.5 26.5 18.7444 26.5 17.8125V8.8125C26.5 7.88058 25.7446 7.125 24.8125 7.125ZM24.8125 15.5625C23.5688 15.5625 22.5625 16.5688 22.5625 17.8125H11.3125C11.3125 16.5688 10.3062 15.5625 9.0625 15.5625V11.0625C10.3062 11.0625 11.3125 10.0562 11.3125 8.8125H22.5625C22.5625 10.0562 23.5688 11.0625 24.8125 11.0625V15.5625Z"
											fill="#444444"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1582_16303">
											<rect width="22.5" height="18" fill="white" transform="translate(4 6)" />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div class="flex flex-col w-full">
								<div class="flex justify-between">
									<span class="blacktext fw-600 fs-14">Bank Transfer</span>
									<svg
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
								<span class="fw-400 fs-10 tx-666666">Charges: ${{ charges }}</span>
							</div>
						</div>
					</div>

					<!-- ------------ -->
					<!-- <div class="col-span-1">
					<div style="border: 1px solid #dadada" class="flex br-5 p-2.5">
						<div class="mr-2">
							<svg
								width="30"
								height="30"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="30" height="30" rx="5" fill="#E0FBF2" />
								<g clip-path="url(#clip0_1582_16311)">
									<path
										opacity="0.4"
										d="M7.25 15.5627C7.25 15.252 7.50186 15.0002 7.8125 15.0002H11.1875C11.4981 15.0002 11.75 15.252 11.75 15.5627V16.6877C11.75 16.9984 11.4981 17.2502 11.1875 17.2502H7.8125C7.50186 17.2502 7.25 16.9984 7.25 16.6877V15.5627ZM18.5 16.6877C18.5 16.9984 18.2481 17.2502 17.9375 17.2502H13.4375C13.1269 17.2502 12.875 16.9984 12.875 16.6877V15.5627C12.875 15.252 13.1269 15.0002 13.4375 15.0002H17.9375C18.2481 15.0002 18.5 15.252 18.5 15.5627V16.6877ZM23 16.6877C23 16.9984 22.7481 17.2502 22.4375 17.2502H20.1875C19.8769 17.2502 19.625 16.9984 19.625 16.6877V15.5627C19.625 15.252 19.8769 15.0002 20.1875 15.0002H22.4375C22.7481 15.0002 23 15.252 23 15.5627V16.6877Z"
										fill="#18AE81"
									/>
									<path
										d="M23 7.12506H7.25C6.0073 7.12506 5 8.13243 5 9.37506V20.6251C5 21.8677 6.0073 22.8751 7.25 22.8751H23C24.2427 22.8751 25.25 21.8677 25.25 20.6251V9.37506C25.25 8.13243 24.2427 7.12506 23 7.12506ZM7.25 15.5626C7.25 15.2518 7.50186 15.0001 7.8125 15.0001H11.1875C11.4981 15.0001 11.75 15.2518 11.75 15.5626V16.6876C11.75 16.9982 11.4981 17.2501 11.1875 17.2501H7.8125C7.50186 17.2501 7.25 16.9982 7.25 16.6876V15.5626ZM10.625 20.3438C10.625 20.4991 10.4991 20.6251 10.3437 20.6251H7.53125C7.37593 20.6251 7.25 20.4991 7.25 20.3438V19.7813C7.25 19.6259 7.37593 19.5001 7.53125 19.5001H10.3437C10.4991 19.5001 10.625 19.6259 10.625 19.7813V20.3438ZM17.375 20.3438C17.375 20.4991 17.2491 20.6251 17.0937 20.6251H12.0312C11.8759 20.6251 11.75 20.4991 11.75 20.3438V19.7813C11.75 19.6259 11.8759 19.5001 12.0312 19.5001H17.0937C17.2491 19.5001 17.375 19.6259 17.375 19.7813V20.3438ZM18.5 16.6876C18.5 16.9982 18.2481 17.2501 17.9375 17.2501H13.4375C13.1269 17.2501 12.875 16.9982 12.875 16.6876V15.5626C12.875 15.2518 13.1269 15.0001 13.4375 15.0001H17.9375C18.2481 15.0001 18.5 15.2518 18.5 15.5626V16.6876ZM23 16.6876C23 16.9982 22.7481 17.2501 22.4375 17.2501H20.1875C19.8769 17.2501 19.625 16.9982 19.625 16.6876V15.5626C19.625 15.2518 19.8769 15.0001 20.1875 15.0001H22.4375C22.7481 15.0001 23 15.2518 23 15.5626V16.6876ZM23 12.1876C23 12.4982 22.7481 12.7501 22.4375 12.7501H19.0625C18.7519 12.7501 18.5 12.4982 18.5 12.1876V9.93756C18.5 9.62685 18.7519 9.37506 19.0625 9.37506H22.4375C22.7481 9.37506 23 9.62685 23 9.93756V12.1876Z"
										fill="#18AE81"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1582_16311">
										<rect width="20.25" height="18" fill="white" transform="translate(5 6)" />
									</clipPath>
								</defs>
							</svg>
						</div>
						<div class="flex flex-col w-full">
							<div class="">
								<span class="blacktext fw-600 fs-14">Credit/Debit Card</span>
							</div>
							<span class="fw-400 fs-10 tx-666666">1.8% Fee</span>
						</div>
					</div>
				</div> -->
				</div>

				<!-- <div class="flex flex-col mb-10">
				<span class="fs-14 fw-700 blacktext mb-2">Instructions</span>
				<span class="fs-14 fw-400 blacktext">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus diam mi adipiscing nisl
					velit. Id at enim sed cursus morbi aliquet eu blandit. A et cras molestie pellentesque.
				</span>
			</div> -->

				<button
					@click="sendAmount"
					:disabled="sendAmountLoading"
					type="submit"
					style="background-color: #2b7ee4"
					class="mx-auto flex items-center justify-center h-12 w-full br-5"
				>
					<div class="flex items-center justify-center">
						<span class="fw-500 fs-16 text-white"> Next</span>
						<div v-if="sendAmountLoading" class="h-4 w-4 ml-4 rounded-md block">
							<div class="roundLoader opacity-50 mx-auto"></div>
						</div>
					</div>
				</button>
			</div>
		</div>
		<FundAccount
			@finalStep="increaseStep"
			@rootPage="goToRootPage"
			@cancel="goBack"
			@moneySent="setMoneySent"
			:step="steps"
			v-if="steps === 2 || steps === 3"
		/>
	</div>
</template>

<script>
// import { useRouter } from "vue-router";
import UserActions from "@/services/userActions/userActions.js";
import {
	ref,
	toRef,
	onMounted,
	//  computed, watch
} from "vue";
import { Log, Util, Constants } from "@/components/util";
import { useStore } from "vuex";
import EarnDepositLoading from "./earnDepositLoading.vue";
import FundAccount from "./FundAccount.vue";
import {
	Listbox,
	ListboxButton,
	// ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
var numeral = require("numeral");
export default {
	name: "Earn Deposit 1",
	components: {
		Listbox,
		ListboxButton,
		// ListboxLabel,
		ListboxOption,
		ListboxOptions,
		EarnDepositLoading,
		FundAccount,
	},
	props: {
		page: String,
	},
	setup(props, context) {
		onMounted(() => {
			// const input = document.getElementById("earnInput");
			// input.focus();
			getRates();
		});
		const page = toRef(props, "page");
		// const router = useRouter();
		const store = useStore();
		const depositAmount = ref("");
		const requestLoading = ref(false);
		const sendAmountLoading = ref(false);
		const rate = ref(0);
		const rateId = ref("");
		const steps = ref(1);
		const currencies = ref([]);
		const selected = ref({});
		const moneySent = ref(false);
		const setMoneySent = () => {
			moneySent.value = true;
		};
		const charges = Util.currencyFormatter(
			store.getters["bankDetails/depositFee"],
			Constants.currencyFormat
		);

		const getRates = () => {
			requestLoading.value = true;
			UserActions.getAllRates(
				(response) => {
					currencies.value = response.data.data;
					selected.value = currencies.value.length > 0 ? currencies.value[0] : {};

					// rate.value = computed(() => depositAmount.value / selected.value.sellingRate);

					rateId.value = selected.value.id;

					// Log.info(rate);
					Log.info("curbelow");
					Log.info("currency: " + JSON.stringify(currencies.value));
					// Log.info("rateId:" + rateId.value);
					// Log.info(selected.value);
					// Log.info("DA:" + String(depositAmount.value));
					// Log.info("BR:" + String(selected.value.sellingRate));
					requestLoading.value = false;
				},
				(error) => {
					requestLoading.value = false;
					Log.info(error);
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);

					// onMounted();
				}
			);
		};

		const goToRootPage = () => {
			Log.info(page.value);
			context.emit("rootPage");
		};

		const increaseStep = () => {
			steps.value += 1;
		};

		const goBack = () => {
			if (steps.value === 1 || moneySent.value === true) {
				goToRootPage();
			} else {
				steps.value -= 1;
			}
		};
		const computeRate = (num) => {
			const val = numeral(num / selected.value.sellingRate).format(Constants.currencyFormat);
			rate.value = val;
			Log.info(rate.value);
			return val;
		};

		const sendAmount = () => {
			sendAmountLoading.value = true;

			// userId: store.getters["authToken/userId"],

			// store.commit("deposit/amount", depositAmount.value);
			// store.commit("deposit/rateId", rateId.value);

			// sendAmountLoading.value = false;
			// router.push("/earn/fund_account");

			UserActions.transactionDeposit(
				{
					rateId: rateId.value,
					userId: store.getters["authToken/userId"],
					amount: depositAmount.value,
				},
				(response) => {
					const data = response.data.data;
					Log.info(data);
					store.commit("deposit/rateId", rateId.value);
					store.commit("deposit/amountToSend", data.amountToSend);
					store.commit("deposit/amountRecieved", data.amountRecieved);
					store.commit("deposit/holderName", data.bankDetails.holderName);
					store.commit("deposit/bankAddress", data.bankDetails.bankAddress);
					store.commit("deposit/accountNumber", data.bankDetails.accountNumber);
					store.commit("deposit/bankName", data.bankDetails.bankName);
					store.commit("deposit/routingNumber", data.bankDetails.routingNumber);
					store.commit("deposit/transactionFee", data.transactionFee);
					store.commit("deposit/transactionRefCode", data.transactionRefCode);
					store.commit("deposit/transactionsReference", data.transactionsReference);
					sendAmountLoading.value = false;
					increaseStep();
					// router.push("/earn/fund_account");
				},
				(error) => {
					Log.error(error);
					sendAmountLoading.value = false;
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
			// }
		};

		// watch(selected, (newValue) => {
		// 	rateId.value = newValue.id;
		// 	rate.value = computed(() => depositAmount.value / newValue.sellingRate);

		// 	Log.info(rateId.value);
		// 	Log.info(rate.value);
		// });

		return {
			currencies,
			selected,
			depositAmount,
			// rate,
			sendAmount,
			charges,
			requestLoading,
			sendAmountLoading,
			computeRate,
			steps,
			goBack,
			goToRootPage,
			increaseStep,
			setMoneySent,
		};
	},
};
</script>

<style lang="scss" scoped>
// button > span {
// 	background-color: yellow;
// 	margin-top
// }

.done {
	background-color: #18ae81;
}

.undone {
	background-color: #c2cfed;
}
</style>
