<template>
	<div class="flex w-full px-10 border-b border-gray-200">
		<!-- ------------------------- -->
		<div class="h-16 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div
				class="fw-600 fs-14"
				:class="{
					'nav-link-color': currentPage === 'Configurations Profile',
				}"
			>
				<router-link to="/configurations/profile">Products</router-link>
			</div>
			<div
				class="h-02rem"
				:class="{
					'nav-link-bg': currentPage === 'Configurations Profile',
				}"
			></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div
				class="fw-600 fs-14"
				:class="{ 'nav-link-color': currentPage === 'Configurations Setting' }"
			>
				<router-link to="/configurations/settings">Settings</router-link>
			</div>
			<div
				class="h-02rem"
				:class="{ 'nav-link-bg': currentPage === 'Configurations Setting' }"
			></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div
				class="fw-600 fs-14"
				:class="{ 'nav-link-color': currentPage === 'Configurations Rates' }"
			>
				<router-link to="/configurations/rates">Rates</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Configurations Rates' }"></div>
		</div>
		<!-- ------------------------- -->
	</div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
export default {
	name: "SettingsHeader",
	setup() {
		const route = ref(useRoute());
		const currentPage = computed(() => route.value.name);
		return {
			currentPage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
