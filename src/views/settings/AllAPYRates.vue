<template>
	<div>
		<APYRates2 v-if="product === 'savings'" />
		<APYRates v-if="product === 'customers'" />
	</div>
</template>

<script>
import APYRates2 from "./APYRates2.vue";
import APYRates from "./APYRates.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
	name: "AllAPYRates",
	components: {
		APYRates,
		APYRates2,
	},
	setup() {
		const route = useRoute();
		const product = computed(() => route.params.product);

		return { product };
	},
};
</script>

<style lang="scss" scoped></style>
