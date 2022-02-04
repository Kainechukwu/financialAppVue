<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-2">
				<h1 class="fw-600 fs-24 blacktext mb-4">Merchants</h1>
			</div>
			<!-- --------------- -->
			<div class="flex w-full border-b border-gray-200 mb-6">
				<!-- ------------------------- -->

				<!-- ------------------------- -->
				<div class="h-16 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': $route.name === 'Verified Merchants' }"
					>
						<router-link to="/backoffice/merchants/verified">Verified Customers</router-link>
					</div>
					<div
						class="h-02rem"
						:class="{ 'nav-link-bg': $route.name === 'Verified Merchants' }"
					></div>
				</div>
				<!-- ------------------------- -->
				<div class="h-16 ml-2 flex flex-col justify-between mr-10">
					<div class="h-2"></div>
					<div
						class="fw-600 fs-14"
						:class="{ 'nav-link-color': $route.name === 'Pending Merchants' }"
					>
						<router-link to="/backoffice/merchants/pending">Pending</router-link>
					</div>
					<div
						class="h-02rem"
						:class="{ 'nav-link-bg': $route.name === 'Pending Merchants' }"
					></div>
				</div>
			</div>

			<router-view></router-view>
			<!-- <confirm-transaction-modal />
			<reject-transaction-modal />
			<transaction-details-modal /> -->
		</div>
	</div>
</template>

<script>
// import { useRoute } from "vue-router";
// import {computed,ref,} from "vue";
// import ConfirmTransactionModal from "./modals/ConfirmTransactionModal.vue";
// import RejectTransactionModal from "./modals/RejectTransactionModal.vue";
// import TransactionDetailsModal from "./modals/TransactionDetailsModal.vue";
export default {
	name: "BackOfficeMerchants",
	components: {
		// ConfirmTransactionModal,
		// RejectTransactionModal,
		// TransactionDetailsModal,
	},
	setup() {
		// const route = ref(useRoute());

		// const currentPage = computed(() => route.value.name);

		return {
			// currentPage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
