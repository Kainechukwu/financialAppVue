<template>
	<div class="ml-64 h-full">
		<Header />
		<AutoLogout />
		<router-view />
	</div>
</template>

<script>
import Header from "./Header.vue";
import AutoLogout from "@/views/AutoLogout.vue";

export default {
	name: "Overview",
	components: {
		Header,
		AutoLogout,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
