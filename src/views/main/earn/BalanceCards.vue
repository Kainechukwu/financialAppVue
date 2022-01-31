<template>
	<div class="flex flex-col">
		<!-- <img class="h-10 w-10" src="@/assets/bg.png" alt="" /> -->
		<div class="mb-2.5">
			<div class="principalCard br-10 flex flex-col items-start px-6 py-8 totalAssets">
				<div class="mb-3.5">
					<h1 class="text-white inter fw-400 fs-12 mb-2">Principal Balance</h1>
					<p class="inter text-white fs-18 fw-600">{{ principalBalance }} UST</p>
				</div>
				<div class="relative flex items-center justify-between w-full">
					<div class="flex">
						<div @click="goToDeposit" class="cursor-pointer br-3 h-6 bg-white mr-3 px-3.5">
							<span class="fw-400 fs-10"> Add Funds </span>
						</div>
						<div
							@click="goToWithdraw"
							style="border: 1px solid #ffffff"
							class="cursor-pointer br-3 h-6 px-3.5 bg-transparent"
						>
							<span class="fw-400 fs-10 text-white"> Withdraw </span>
						</div>
					</div>
					<div
						style="background-color: rgba(255, 255, 255, 0.38); height: 1.688rem"
						class="cursor-pointer flex items-center br-24 px-4"
					>
						<svg
							width="8"
							height="9"
							viewBox="0 0 8 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.98134 8.13164C6.17505 8.13164 7.9534 6.52929 7.9534 4.5527C7.9534 2.5761 6.17505 0.973755 3.98134 0.973755C1.78763 0.973755 0.00927734 2.5761 0.00927734 4.5527C0.00927734 6.52929 1.78763 8.13164 3.98134 8.13164Z"
								fill="#7ED321"
							/>
						</svg>

						<span class="fw-500 fs-10 text-white ml-2"> Selected </span>
					</div>
				</div>
			</div>
		</div>
		<div class="">
			<div class="interestCard br-10 flex flex-col items-start px-6 py-8 totalAssets">
				<div class="mb-3.5">
					<h1 class="text-white inter fw-400 fs-12 mb-2">Interest Balance</h1>
					<p class="inter text-white fs-18 fw-600">{{ interestBalance }} UST</p>
				</div>
				<div class="relative flex items-center justify-between w-full">
					<div class="flex">
						<div @click="goToWithdraw2" class="cursor-pointer br-3 h-6 bg-white px-3.5">
							<span class="fw-400 fs-10"> Withdraw</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserInfo from "@/services/userInfo/userInfo.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import { Log, Util } from "@/components/util";
// import { getCurrentInstance, onUpdated } from "vue";

export default {
	name: "BalanceCards",
	// methods: {
	// 	forceUpdate() {
	// 		this.$forceUpdate();
	// 	},
	// },
	setup() {
		// onUpdated(() => {
		// 	getBalance();
		// });
		onMounted(() => {
			getBalance();
		});

		// onUpdated(() => {
		// 	internalInstance.ctx.forceUpdate();
		// });
		// const internalInstance = getCurrentInstance();
		const router = useRouter();
		const store = useStore();

		const customerId = store.getters["authToken/userId"];
		const principalBalance = ref(0);
		const interestBalance = ref(0);
		const goToDeposit = () => {
			router.push("/deposit");
		};
		const reloadMe = computed(() => store.state.reloadMe);

		const goToWithdraw = () => {
			store.commit("bankDetails/balance", principalBalance.value);
			store.commit("bankDetails/walletId", 1);
			router.push("/withdraw");
		};

		const goToWithdraw2 = () => {
			store.commit("bankDetails/balance", interestBalance.value);
			store.commit("bankDetails/walletId", 2);
			router.push("/withdraw");
		};

		const getBalance = () => {
			UserInfo.accountBalance(
				customerId,
				(response) => {
					Log.info(response);
					const balance = response.data.data;
					principalBalance.value = Util.currencyFormatter(balance.principalBalance, "0,0.00000000");
					interestBalance.value = Util.currencyFormatter(balance.interestBalance, "0,0.00000000");
				},
				(error) => {
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					Log.error(error);
				}
			);
		};

		watch(reloadMe, (newValue) => {
			if (newValue === true) {
				Log.info("boolean");
				Log.info(newValue);
				getBalance();
				store.commit("setReloadMe", false);
			}
		});

		return {
			goToDeposit,
			goToWithdraw,
			goToWithdraw2,
			principalBalance,
			interestBalance,
		};
	},
};
</script>

<style lang="scss" scoped>
.principalCard {
	background-image: url("bg.png");
}

.interestCard {
	background-image: url("bg2.png");
}
</style>
