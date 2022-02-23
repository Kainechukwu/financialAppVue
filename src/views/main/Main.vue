<template>
	<div class="ml-64 h-full">
		<Header />
		<AutoLogout />
		<RefreshToken />
		<router-view />
	</div>
</template>

<script>
import Header from "./Header.vue";
import AutoLogout from "@/views/AutoLogout.vue";
import RefreshToken from "@/views/RefreshToken.vue";

export default {
	name: "Overview",
	components: {
		Header,
		AutoLogout,
		RefreshToken,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
