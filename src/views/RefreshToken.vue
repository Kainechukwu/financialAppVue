<template>
	<div v-if="isLoggedIn"></div>
</template>

<script>
import { useStore } from "vuex";
import { Log } from "@/components/util";
import {
	onMounted,
	onUnmounted,
	// ref,
	computed,
} from "vue";
import LoginService from "@/services/login/LoginService.js";
export default {
	name: "RefreshToken",
	setup() {
		onMounted(() => {
			// setTimer();
			// setInterval(replaceToken, 28 * 60 * 1000);
			setInterval(replaceToken, 5000);
		});
		onUnmounted(() => {
			// clearTimeout(refreshTimer.value);
		});
		const store = useStore();
		// const refreshTimer = ref(null);

		function parseJwt(token) {
			let base64Url = token.split(".")[1];
			let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
			let jsonPayload = decodeURIComponent(
				atob(base64)
					.split("")
					.map(function (c) {
						return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
					})
					.join("")
			);

			return JSON.parse(jsonPayload);
		}

		const replaceToken = () => {
			LoginService.getRefreshToken(
				store.getters["authToken/refreshToken"],
				(response) => {
					const data = response.data.data;
					store.commit("authToken/apiToken", data.jwToken);
					store.commit("authToken/refreshToken", data.refreshToken);
					Log.info("tokenData:" + JSON.stringify(parseJwt(data.jwToken).exp));
					let t = 0;
					Log.info(t++);
				},
				(error) => {
					Log.info("Tokenerror: " + error);
				}
			);
		};

		// const setTimer = () => {
		// 	refreshTimer.value = setTimeout(replaceToken(), 10000);
		// };

		const isLoggedIn = computed(() => store.getters["authToken/loggedIn"]);

		return { isLoggedIn };
	},
};
</script>

<style lang="scss" scoped></style>
