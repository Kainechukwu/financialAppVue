<template>
	<div class="main-page p-8">
		<div class="flex flex-col justify-start mb-40">
			<div class="mb-6">
				<h1 class="fw-600 fs-24 blacktext">Configurations</h1>
			</div>
			<div class="grid grid-cols-5">
				<div class="col-span-5 bg-white pb-12 br-5">
					<div class="w-full">
						<ConfigurationsHeader />
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ConfigurationsHeader from "./ConfigurationsHeader.vue";
export default {
	name: "Configurations",
	components: {
		ConfigurationsHeader,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
