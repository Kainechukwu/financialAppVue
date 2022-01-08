<template>
	<div @click="cancel">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="12" fill="#E3EEFD" />
			<path
				d="M15.5 8.5L8.5 15.5"
				stroke="#2B7EE4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8.5 8.5L15.5 15.5"
				stroke="#2B7EE4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
	name: "CancelSvg",
	setup() {
		const router = useRouter();
		const cancel = () => {
			router.push("/earn/overview");
		};
		return {
			cancel,
		};
	},
};
</script>

<style lang="scss" scoped></style>
