<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-2 flex justify-between">
				<h1 class="fw-600 fs-24 blacktext mb-4">Customers</h1>
				<!-- --------------------- -->
				<Menu as="div" class="relative inline-block text-left">
					<div>
						<MenuButton
							style="background-color: #18ae81"
							class="br-3 inline-flex justify-between w-full px-4 py-2"
						>
							<span class="text-white fw-400 fs-14">New Actions</span>
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
										@click="openCreateCustomer"
										class="cursor-pointer border-b border-gray-100"
										:class="[
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 fs-14 fw-400 blacktext',
										]"
										>Create Customer</span
									>
								</MenuItem>
								<MenuItem v-slot="{ active }">
									<router-link
										to="/customers/create_deposit"
										class="cursor-pointer border-b border-gray-100"
										:class="[
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 fs-14 fw-400 blacktext',
										]"
										>Create Deposit</router-link
									>
								</MenuItem>
								<MenuItem v-slot="{ active }">
									<router-link
										to="/customers/create_withdrawal"
										class="cursor-pointer border-b border-gray-100"
										:class="[
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 fs-14 fw-400 blacktext',
										]"
										>Create Withdrawal</router-link
									>
								</MenuItem>
								<MenuItem v-slot="{ active }">
									<span
										class="cursor-pointer"
										:class="[
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 fs-14 fw-400 blacktext',
										]"
										>Configure Rate</span
									>
								</MenuItem>
							</div>
						</MenuItems>
					</transition>
				</Menu>
				<!-- --------------------- -->
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
				<CustomerBalanceCard currency="NGN" />
				<CustomerBalanceCard currency="USD" />
				<CustomerInterestEarnedPlate />
			</div>
			<!-- --------------- -->
			<div class="flex w-full border-b border-gray-200 mb-6">
				<!-- ------------------------- -->

				<!-- ------------------------- -->
				<div class="h-16 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div class="fw-600 fs-14" :class="{ 'nav-link-color': currentPage === 'Customers List' }">
						<router-link to="/customers/customer_list">Customer List</router-link>
					</div>
					<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Customers List' }"></div>
				</div>
				<!-- ------------------------- -->
				<div class="h-16 ml-2 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': currentPage === 'Customers Transactions' }"
					>
						<router-link :to="`/customers/transactions/${merchantId}`"
							>Customer Transactions</router-link
						>
					</div>
					<div
						class="h-02rem"
						:class="{ 'nav-link-bg': currentPage === 'Customers Transactions' }"
					></div>
				</div>
				<div class="h-16 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': currentPage === 'NGN Transactions' }"
					>
						<router-link to="/customers/ngn_transactions">NGN Transactions</router-link>
					</div>
					<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'NGN Transactions' }"></div>
				</div>
				<div class="h-16 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': currentPage === 'USD Transactions' }"
					>
						<router-link to="/customers/usd_transactions">USD Transactions</router-link>
					</div>
					<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'USD Transactions' }"></div>
				</div>
			</div>

			<router-view></router-view>
		</div>
		<create-customer :open="isCreateCustomerOpen" @close="closeCreateCustomer" />
	</div>
</template>

<script>
import { useRoute } from "vue-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CreateCustomer from "@/views/modals/CreateCustomer.vue";
import CustomerBalanceCard from "./CustomerBalanceCard.vue";
import CustomerInterestEarnedPlate from "./CustomerInterestEarnedPlate.vue";
export default {
	name: "Customers",
	components: {
		CustomerBalanceCard,
		CustomerInterestEarnedPlate,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		CreateCustomer,
	},
	setup() {
		const route = ref(useRoute());
		const store = useStore();
		const isCreateCustomerOpen = ref(false);
		const merchantId = store.getters["authToken/userId"];

		const currentPage = computed(() => route.value.name);
		const openCreateCustomer = () => {
			isCreateCustomerOpen.value = true;
		};

		const closeCreateCustomer = () => {
			isCreateCustomerOpen.value = false;
		};
		return {
			currentPage,
			merchantId,
			openCreateCustomer,
			isCreateCustomerOpen,
			closeCreateCustomer,
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
