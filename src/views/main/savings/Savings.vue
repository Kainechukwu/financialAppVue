<template>
	<div class="main-page pt-8 px-4 md:px-8 pb-56 h-full">
		<div class="flex flex-col justify-start appSpread">
			<div class="mb-2 flex justify-between">
				<h1 class="fw-600 fs-24 blacktext mb-4">Savings</h1>
				<!-- --------------------- -->
				<Menu as="div" class="relative inline-block text-left">
					<div>
						<MenuButton
							style="background-color: #18ae81"
							class="br-3 inline-flex justify-between w-full px-4 py-2"
						>
							<span class="text-white fw-400 fs-14">Share Rewards</span>
							<div class="flex items-center my-auto ml-2">
								<svg
									width="12"
									height="7"
									viewBox="0 0 12 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 1L5.73 5.2L10.46 1"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</MenuButton>
					</div>

					<transition
						enter-active-class="transition ease-out duration-100"
						enter-from-class="transform opacity-0 scale-95"
						enter-to-class="transform opacity-100 scale-100"
						leave-active-class="transition ease-in duration-75"
						leave-from-class="transform opacity-100 scale-100"
						leave-to-class="transform opacity-0 scale-95"
					>
						<MenuItems
							class="z-30 origin-top-right absolute right-0 mt-1 w-40 br-5 menuBoxShadow bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							<div class="py-1">
								<MenuItem v-slot="{ active }">
									<span
										@click="openShareRewards"
										class="cursor-pointer"
										:class="[
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 fs-14 fw-400 blacktext',
										]"
										>Share Rewards</span
									>
								</MenuItem>
							</div>
						</MenuItems>
					</transition>
				</Menu>
				<!-- --------------------- -->
			</div>

			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-4 mb-4"
			>
				<SavingsBalanceCard currency="NGN" title="WALLET BALANCE" />
				<SavingsBalanceCard currency="USD" title="REWARD BALANCE" />
				<SavingsInterestEarnedPlate />
			</div>
			<!-- --------------- -->
			<div class="flex w-full border-b border-gray-200 mb-6 overflow-x-auto innerScrollBar">
				<!-- ------------------------- -->

				<!-- ------------------------- -->
				<div class="h-16 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div class="fw-600 fs-14" :class="{ 'nav-link-color': currentPage === 'Savings List' }">
						<router-link to="/savings/customer_list">Customer List</router-link>
					</div>
					<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Savings List' }"></div>
				</div>
				<!-- ------------------------- -->
				<div class="h-16 ml-2 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': currentPage === 'Savings Transactions' }"
					>
						<router-link :to="`/savings/transactions`">Customer Transactions</router-link>
					</div>
					<div
						class="h-02rem"
						:class="{ 'nav-link-bg': currentPage === 'Savings Transactions' }"
					></div>
				</div>
				<div class="h-16 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': currentPage === 'Savings Rewards Transactions' }"
					>
						<router-link to="/savings/rewards_transactions">Rewards Transactions</router-link>
					</div>
					<div
						class="h-02rem"
						:class="{ 'nav-link-bg': currentPage === 'Savings Rewards Transactions' }"
					></div>
				</div>
				<div class="h-16 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': currentPage === 'Savings Wallet Transactions' }"
					>
						<router-link to="/savings/wallet_transactions">Wallet Transactions</router-link>
					</div>
					<div
						class="h-02rem"
						:class="{ 'nav-link-bg': currentPage === 'Savings Wallet Transactions' }"
					></div>
				</div>
			</div>

			<router-view></router-view>
		</div>
		<share-rewards :open="isShareRewardsOpen" @close="closeShareRewards" />
	</div>
</template>

<script>
import { useRoute } from "vue-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { computed, ref, onMounted } from "vue";
import CustomerService from "@/services/userActions/customerService.js";

import { useStore } from "vuex";
import { Log } from "@/components/util";

import ShareRewards from "@/views/modals/ShareRewards.vue";
import SavingsBalanceCard from "./SavingsBalanceCard.vue";
import SavingsInterestEarnedPlate from "./SavingsInterestEarnedPlate.vue";
export default {
	name: "Savings",
	components: {
		SavingsBalanceCard,
		SavingsInterestEarnedPlate,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		ShareRewards,
	},
	setup() {
		onMounted(() => {
			store.commit("bankDetails/transType", 1);
			getCharges();
			// Log.info("transType:" + store.getters["bankDetails/transType"]);
		});
		const route = ref(useRoute());
		const store = useStore();
		const isShareRewardsOpen = ref(false);
		// const merchantId = store.getters["authToken/userId"];

		const currentPage = computed(() => route.value.name);
		const openShareRewards = () => {
			isShareRewardsOpen.value = true;
		};

		const closeShareRewards = () => {
			isShareRewardsOpen.value = false;
		};

		const getCharges = () => {
			CustomerService.getCharges(
				(response) => {
					Log.info(response);
					const charges = response.data.data;

					store.commit("bankDetails/withdrawalFee", charges.withdrawalFee);
					Log.info(charges.withdrawalFee);
					store.commit("bankDetails/depositFee", charges.depositFee);
					Log.info(charges.depositFee);
				},
				(error) => {
					Log.error(error);
					// Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};
		return {
			currentPage,
			// merchantId,
			openShareRewards,
			isShareRewardsOpen,
			closeShareRewards,
		};
	},
};
</script>

<style lang="scss" scoped>
// select {
// -moz-appearance: none; /* Firefox */
// -webkit-appearance: none; /* Safari and Chrome */
// appearance: none;
// position: relative;
// right: 20px;
// }
</style>
