<template>
	<div class="h-full">
		<MainSideBar />
		<router-view />
		<!-- <add-product-modal /> -->
		<this-plan-modal />
	</div>
</template>

<script>
// import AddProductModal from "@/views/modals/AddProductModal.vue";
import MainSideBar from "./MainSideBar.vue";
import ThisPlanModal from "./modals/ThisPlanModal.vue";
export default {
	name: "Dashboard",
	components: {
		MainSideBar,
		// AddProductModal,
		ThisPlanModal,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
