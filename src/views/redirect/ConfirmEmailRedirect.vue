<template>
	<div></div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Log, Util } from "@/components/util";
import LoginService from "@/services/login/LoginService.js";

export default {
	name: "ConfirmEmailRedirect",
	setup() {
		const route = useRoute();
		const router = useRouter();
		const confirm = () => {
			LoginService.confirmEmail(
				route.query.userId,
				route.query.code,
				(response) => {
					Log.info("confirmationResponse" + JSON.stringify(response));
					Util.handleGlobalAlert(true, "success", response.data.message);

					router.push("/login");
				},
				(error) => {
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);

					Log.error("confirmationError" + JSON.stringify(error));
				}
			);
			Log.info(route.query);
		};

		onMounted(() => {
			confirm();
		});
	},
};
</script>

<style lang="scss" scoped></style>
