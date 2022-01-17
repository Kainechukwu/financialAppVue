<template>
	<div></div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
// import { useRouter } from "vue-router";
// import { Log } from "@/components/util";

export default {
	name: "resetPasswordRedirect",
	setup() {
		const route = useRoute();
		// const router = useRouter();
		const confirm = () => {
			// console.log(route.query);
		};

		onMounted(() => {
			confirm();
		});

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
