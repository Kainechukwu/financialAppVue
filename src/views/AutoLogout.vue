<template>
	<div v-if="isLoggedIn">
		<div v-if="warningZone" class="px-8 py-2 blacktext fw-400 fs-16 bg-yellow-100">
			<span>Are you there?</span>
		</div>
	</div>
</template>

<script>
// import { Log } from "@/components/util";

import { useStore } from "vuex";
import { onMounted, onUnmounted, ref, computed } from "vue";
import LoginService from "@/services/login/LoginService.js";
import { useRouter } from "vue-router";

export default {
	name: "AutoLogout",
	setup() {
		onMounted(() => {
			events.forEach((event) => {
				window.addEventListener(event, resetTimer);
			});
			setTimers();
		});

		onUnmounted(() => {
			events.forEach((event) => {
				window.removeEventListener(event, resetTimer);
			});
			clearTimeout(warningTimer.value);
			clearTimeout(logoutTimer.value);
		});
		const store = useStore();
		const router = useRouter();

		const warningTimer = ref(null);
		const warningZone = ref(false);
		const logoutTimer = ref(null);
		const events = ["click", "mousemove", "mousedown", "scroll", "keypress", "load"];
		const isLoggedIn = computed(() => store.getters["authToken/loggedIn"]);

		const setTimers = function () {
			warningTimer.value = setTimeout(warningMessage, 4.5 * 60 * 1000); // 14mins * 60 * 1000
			logoutTimer.value = setTimeout(logoutUser, 5 * 60 * 1000); // 15mins * 60 * 1000
			warningZone.value = false;
		};
		const resetTimer = function () {
			clearTimeout(warningTimer.value);
			clearTimeout(logoutTimer.value);
			setTimers();
		};
		const warningMessage = function () {
			warningZone.value = true;
		};

		const logoutUser = function () {
			LoginService.handleLogout();

			router.push("/login");
		};
		return { isLoggedIn, warningZone };
	},
};
</script>

<style lang="scss" scoped></style>
