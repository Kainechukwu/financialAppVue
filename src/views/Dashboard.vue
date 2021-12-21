<template>
	<div class="h-full">
		<MainSideBar />
		<router-view />
		<add-product-modal />
	</div>
</template>

<script>
import AddProductModal from "@/views/modals/AddProductModal.vue";
import MainSideBar from "./MainSideBar.vue";
export default {
	name: "Dashboard",
	components: {
		MainSideBar,
		AddProductModal,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
