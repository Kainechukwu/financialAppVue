<template>
	<div class="h-full">
		<MainSideBar />
		<router-view />
		<!-- <add-product-modal /> -->
		<this-product-modal />
	</div>
</template>

<script>
// import AddProductModal from "@/views/modals/AddProductModal.vue";
import MainSideBar from "./MainSideBar.vue";
import ThisProductModal from "./modals/ThisProductModal.vue";
export default {
	name: "Dashboard",
	components: {
		MainSideBar,
		// AddProductModal,
		ThisProductModal,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
