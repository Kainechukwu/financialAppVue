<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-2">
				<h1 class="fw-600 fs-24 blacktext mb-4">Customers</h1>
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
						<router-link to="/customers/transactions">Transactions</router-link>
					</div>
					<div
						class="h-02rem"
						:class="{ 'nav-link-bg': currentPage === 'Customers Transactions' }"
					></div>
				</div>
			</div>

			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
export default {
	name: "Customers",
	setup() {
		const route = ref(useRoute());
		const currentPage = computed(() => route.value.name);
		return {
			currentPage,
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
