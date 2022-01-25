<template>
	<div id="nav"></div>
	<global-alert />
	<router-view />
</template>

<script>
import GlobalAlert from "@/views/alert/GlobalAlert";

export default {
	name: "app",
	components: {
		globalAlert: GlobalAlert,
	},
	setup() {},
};
</script>

<style lang="scss"></style>
