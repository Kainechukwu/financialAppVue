<template>
	<div class="h-full">
		<div class="hidden 900:block vertical-menu h-full w-64 fixed py-5 px-6 overflow-y-auto">
			<MainSideBar />
		</div>
		<router-view />
		<!-- <add-product-modal /> -->
		<this-plan-modal />
		<bank-details-pin />
		<successful-withdrawal-modal />
	</div>
</template>

<script>
// import AddProductModal from "@/views/modals/AddProductModal.vue";
import MainSideBar from "./MainSideBar.vue";
import ThisPlanModal from "./modals/ThisPlanModal.vue";
import BankDetailsPin from "@/views/modals/BankDetailsPin.vue";
import SuccessfulWithdrawalModal from "@/views/modals/SuccessfulWithdrawal.vue";
export default {
	name: "Dashboard",
	components: {
		MainSideBar,
		// AddProductModal,
		SuccessfulWithdrawalModal,
		ThisPlanModal,
		BankDetailsPin,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
