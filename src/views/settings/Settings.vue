<template>
	<div class="main-page p-8">
		<div class="flex flex-col justify-start">
			<div class="mb-6">
				<h1 class="fw-600 fs-24 blacktext">Settings</h1>
			</div>
			<div class="grid grid-cols-5">
				<div class="col-span-5 bg-white pb-12 br-5">
					<div class="w-full">
						<SettingsHeader />
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SettingsHeader from "./SettingsHeader";
export default {
	name: "Settings",
	components: {
		SettingsHeader,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
