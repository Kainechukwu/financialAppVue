<template>
	<!-- <div> -->
	<div
		style="top: 0; left: 0"
		class="z-40 fixed h-screen w-screen bg-white text-left overflow-hidden transform transition-all"
	>
		<div class="w-full h-full overflow-y-auto">
			<div class="flex flex-col h-full pb-6">
				<!-- <div class="flex-1 h-full flex flex-col"> -->
				<div
					style="border-bottom: 1px solid #efefef"
					class="px-6 flex items-center justify-between"
				>
					<div class="my-4 flex justify-between w-full">
						<h2 class="blacktext fw-600 fs-16">Notification</h2>
						<div @click="$emit('close')" class="cursor-pointer">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
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
					</div>
				</div>
				<div style="" class="flex flex-col p-6">Notifications Mobile</div>
				<!-- </div> -->
			</div>
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
export default {
	name: "NotificationMobile",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
