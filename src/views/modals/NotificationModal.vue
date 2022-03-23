<template>
	<transition name="fadeIn">
		<div v-if="isModalOpen" class="fixed z-50 inset-0 overflow-hidden modal-blur">
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div @click="close" class="absolute inset-0 bg-gray-800 bg-opacity-75 modal-blur"></div>
				</div>

				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
				<section
					class="main inline-block bg-white align-bottom br-5 shadow-xs text-left overflow-hidden transform transition-all max-w-lg mx-auto sm:my-8 sm:align-middle sm:w-full"
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
									<div @click="close" class="cursor-pointer">
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
							<div style="" class="flex flex-col p-6">
								<!-- <div class="flex flex-col"> -->
								<div class="">
									<span class="blacktext fs-14 fw-700">{{ notification.title }}</span>
								</div>
								<span class="mt-1 fs-12 fw-400 blacktext">{{ notification.details }} </span>
								<span class="tx-666666 fs-12 fw-400 mt-2">{{ dateFormat(notification.date) }}</span>
								<!-- </div> -->
							</div>
							<!-- </div> -->
						</div>
					</div>
				</section>
			</div>
		</div>
	</transition>
</template>

<script>
import { onMounted, toRef } from "vue";

import { Util } from "@/components/util";

export default {
	name: "NotificationModal",
	props: {
		open: Boolean,
		notification: Object,
	},
	components: {},
	setup(props, context) {
		onMounted(() => {});

		// const store = useStore();
		const isModalOpen = toRef(props, "open");

		const close = () => {
			context.emit("close");
		};
		const dateFormat = (date) => {
			const d = Util.formatTime(date, "YYYY-MM-DD HH:mm:ss.SSSS", "MMM DD");
			return d;
		};

		return {
			isModalOpen,
			close,
			dateFormat,
		};
	},
};
</script>

<style lang="scss" scoped></style>
