<template>
	<div class="flex w-full px-10 border-b border-gray-200">
		<!-- ------------------------- -->
		<div class="h-16 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div
				class="fw-600 fs-14"
				:class="{
					'nav-link-color': currentPage === 'ProfileSettings',
				}"
			>
				<router-link to="/settings/profile">Profile</router-link>
			</div>
			<div
				class="h-02rem"
				:class="{
					'nav-link-bg': currentPage === 'ProfileSettings',
				}"
			></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div class="fw-600 fs-14" :class="{ 'nav-link-color': currentPage === 'Verification' }">
				<router-link to="/settings/verification">Verification</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Verification' }"></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div class="fw-600 fs-14" :class="{ 'nav-link-color': currentPage === 'Change Password' }">
				<router-link to="/settings/change_password">Password</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Change Password' }"></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div class="fw-600 fs-14" :class="{ 'nav-link-color': currentPage === 'Pin Settings' }">
				<router-link to="/settings/pin">PIN</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Pin Settings' }"></div>
		</div>
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
