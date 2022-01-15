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
			<div
				class="fw-600 fs-14"
				:class="{ 'nav-link-color': currentPage === 'Business Details Settings' }"
			>
				<router-link to="/settings/business_details">Business Details</router-link>
			</div>
			<div
				class="h-02rem"
				:class="{ 'nav-link-bg': currentPage === 'Business Details Settings' }"
			></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div
				class="fw-600 fs-14"
				:class="{ 'nav-link-color': currentPage === 'Compliance Settings' }"
			>
				<router-link to="/settings/compliance">Compliance</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Compliance Settings' }"></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div
				class="fw-600 fs-14"
				:class="{ 'nav-link-color': currentPage === 'Change Password Settings' }"
			>
				<router-link to="/settings/security">Security</router-link>
			</div>
			<div
				class="h-02rem"
				:class="{ 'nav-link-bg': currentPage === 'Change Password Settings' }"
			></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div
				class="fw-600 fs-14"
				:class="{ 'nav-link-color': currentPage === 'Access Key Settings' }"
			>
				<router-link to="/settings/access_keys">Access Keys</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Access Key Settings' }"></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div class="fw-600 fs-14" :class="{ 'nav-link-color': currentPage === 'Roles Settings' }">
				<router-link to="/settings/roles">Roles</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'Roles Settings' }"></div>
		</div>
		<!-- ------------------------- -->
		<div class="h-16 ml-2 flex flex-col justify-between mr-10">
			<div class="h-2"></div>
			<div class="fw-600 fs-14" :class="{ 'nav-link-color': currentPage === 'PIN' }">
				<router-link to="/settings/pin">PIN</router-link>
			</div>
			<div class="h-02rem" :class="{ 'nav-link-bg': currentPage === 'PIN' }"></div>
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
