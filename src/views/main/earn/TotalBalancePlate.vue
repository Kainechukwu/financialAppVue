<template>
	<div class="col-span-1">
		<div class="flex h-full flex-col bg-white br-10 px-4">
			<div class="flex flex-col justify-between my-4 h-7">
				<div class="flex justify-between mb-2">
					<span class="fw-400 fs-12 tx-666666 uppercase"
						>Your total balance in <span>USD</span></span
					>
					<!-- <div class=" flex"> -->
					<Popover class="relative">
						<PopoverButton>
							<div>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
										stroke="#6695FF"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8 5.33337V8.00004"
										stroke="#6695FF"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8 10.6666H8.0075"
										stroke="#6695FF"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</PopoverButton>
						<transition
							enter-active-class="transition ease-out duration-200"
							enter-from-class="opacity-0 translate-y-1"
							enter-to-class="opacity-100 translate-y-0"
							leave-active-class="transition ease-in duration-150"
							leave-from-class="opacity-100 translate-y-0"
							leave-to-class="opacity-0 translate-y-1"
						>
							<PopoverPanel class="absolute right-0 transform px-2 w-screen max-w-xs sm:px-0">
								<div style="background-color: #666666" class="br-5 px-3 py-3">
									<span class="text-white">
										Your available balance is the value you can withdraw. Bornfree gives you
										interests in real-time, and they will impact your available balance every 24
										hours.
									</span>
								</div>
							</PopoverPanel>
						</transition>
					</Popover>
				</div>

				<div class="flex">
					<span class="fw-400 fs-24 blacktext mr-3">${{ totalWithPerSecInterest }}</span>
					<!-- <img src="totalbalance.jpg" class="h-8 w-8" alt="" /> -->
				</div>
				<span class="fw-400 fs-14 tx-666666"
					>Available Balance: <span>${{ availableBalance }}</span></span
				>
				<!-- <span>{{ totalWithPerSecInterest }}</span> -->

				<!-- <slot></slot> -->
			</div>
		</div>
	</div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

import UserInfo from "@/services/userInfo/userInfo.js";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import { onMounted, ref, computed, watch } from "vue";
import { Log, Util, Constants } from "@/components/util";
export default {
	name: "TotalBalancePlate",
	components: {
		Popover,
		PopoverButton,
		PopoverPanel,
	},
	setup() {
		onMounted(() => {
			getInterestRate();
			// Log.info("rerender:" + JSON.stringify(rerender));
			getBalance();
			setInterval(add, 1000);
		});

		const store = useStore();
		const totalBalance = ref("0.00");
		const total = ref(0);
		const availableBalance = ref("0.00");
		const principalBalance = ref(0);
		const interestRate = ref(0);
		const adjustedInterest = ref(0);
		const watchThis = computed(() => (interestRate.value * principalBalance.value) / 86400);
		// const d = ref(computed(() => new Date()));

		// const interestPerSecond = computed(() => interestCalculation());
		const customerId = store.getters["authToken/userId"];
		// const currentdate = ref(new Date());

		const totalWithPerSecInterest = computed(() => {
			const val = Number(total.value) + Number(value.value);
			return Util.currencyFormatter(val, Constants.currencyFormat);
		});
		const value = ref(0);
		const getBalance = () => {
			UserInfo.accountBalance(
				customerId,
				(response) => {
					Log.info(response);
					const balance = response.data.data;
					principalBalance.value = balance.principalBalance;

					total.value = principalBalance.value + balance.interestBalance + balance.suspenseBalance;

					totalBalance.value = Util.currencyFormatter(total.value, Constants.currencyFormat);
					availableBalance.value = Util.currencyFormatter(
						principalBalance.value + balance.interestBalance,
						Constants.currencyFormat
					);
					// interestBalance.value = Util.currencyFormatter(
					// 	balance.interestBalance,
					// 	Constants.currencyFormat
					// );
				},
				(error) => {
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					Log.error(error);
				}
			);
		};

		const getInterestRate = () => {
			UserInfo.getInterestRate(
				(response) => {
					Log.info(response);
					interestRate.value = response.data.data / 100;
					// interestAdjustMent();
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const interestAdjustMent = () => {
			const date = new Date();
			// const lastHour = date.getHours();
			const lastMinute = date.getMinutes();
			const secsInLastHr = date.getSeconds();
			const secondsPassed = lastMinute * 60 + secsInLastHr;

			adjustedInterest.value = secondsPassed * interestPerSec();
			value.value = adjustedInterest.value;
			Log.info("before:" + adjustedInterest.value);
			adjustedInterest.value = 0;
			Log.info("after:" + adjustedInterest.value);
		};

		// const resetAdjustedInterest = () => {
		// 	adjustedInterest.value = 0;
		// };

		const interestPerSec = () => {
			return (interestRate.value * principalBalance.value) / 86400;
		};

		const add = () => {
			const interestPerSecond = interestPerSec();

			value.value += interestPerSecond;
			// Log.info("values: " + value.value);
		};

		watch(watchThis, (newValue) => {
			if (newValue > 0) {
				interestAdjustMent();
				// Log.info("increased");
				// if (adjustedInterest.value) {
				// 	resetAdjustedInterest();
				// }
			}
		});

		return { totalWithPerSecInterest, value, totalBalance, availableBalance };
	},
};
</script>

<style lang="scss" scoped></style>
