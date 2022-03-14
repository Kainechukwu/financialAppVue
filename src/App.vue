<template>
	<div id="nav"></div>
	<global-alert />
	<notification />
	<router-view />
</template>

<script>
import { provide } from "vue";
import firebaseMessaging from "./firebase";
import GlobalAlert from "@/views/alert/GlobalAlert";
import Notification from "@/views/alert/Notification";

export default {
	name: "app",

	components: {
		globalAlert: GlobalAlert,
		notification: Notification,
	},
	setup() {
		provide("messaging", firebaseMessaging);
	},
};
</script>

<style lang="scss"></style>
