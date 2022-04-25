<template>
	<div id="nav"></div>
	<global-alert />
	<notification />
	<successful-transaction-modal />
	<router-view />
</template>

<script>
import { provide } from "vue";
import firebaseMessaging from "./firebase";
import GlobalAlert from "@/views/alert/GlobalAlert";
import Notification from "@/views/alert/Notification";
import SuccessfulTransactionModal from "@/views/modals/SuccessfulTransactionModal.vue";

export default {
	name: "app",

	components: {
		globalAlert: GlobalAlert,
		notification: Notification,
		SuccessfulTransactionModal,
	},
	setup() {
		provide("messaging", firebaseMessaging);
	},
};
</script>

<style lang="scss"></style>
