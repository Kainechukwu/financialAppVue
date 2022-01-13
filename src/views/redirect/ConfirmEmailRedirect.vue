<template>
	<div></div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Log } from "@/components/util";
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

					router.push("/login");
				},
				(error) => {
					Log.error("confirmationError" + JSON.stringify(error));
				}
			);
			console.log(route.query);
		};

		onMounted(() => {
			// const params = route.params;
			// console(params);
			confirm();
		});
	},
};
</script>

<style lang="scss" scoped></style>
