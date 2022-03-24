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
				<div style="" class="flex flex-col">
					<div
						style="max-height: 100vh"
						class="w-full overflow-y-auto notice origin-top-right relative right-0 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<!-- <div v-if="notificationsItems.length === 0 && loading">
							<TableSkeleton />
						</div>
						<div class="p-3" v-else-if="notificationsItems.length === 0 && !loading">
							<span>No notificationsItems</span>
						</div> -->
						<div class="py-1" v-if="notificationsItems.length > 0">
							<div v-for="notification in notificationsItems" :key="notification.id">
								<div
									@click="openNotification(notification)"
									style="border-bottom: 1px solid #f1f1f1"
									class="cursor-pointer flex flex-col px-3 py-3"
								>
									<div class="flex">
										<div class="flex items-start mr-3 pt-2">
											<svg
												width="5"
												height="5"
												viewBox="0 0 5 5"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="2.5"
													cy="2.5"
													r="2.5"
													:fill="notification.isRead ? '#DFDFDF' : '#497FF9'"
												/>
											</svg>
										</div>
										<div class="flex flex-col">
											<div class="">
												<span class="blacktext fs-14 fw-700">{{ notification.title }}</span>
											</div>
											<span class="mt-1 fs-12 fw-400 blacktext">{{ notification.details }} </span>
											<span class="tx-666666 fs-12 fw-400 mt-2">{{
												dateFormat(notification.date)
											}}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- <div v-if="notificationsItems.length > 0 && loading">
							<TableSkeleton />
						</div> -->
					</div>
				</div>
				<!-- </div> -->
			</div>
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
// import TableSkeleton from "@/components/skeletons/TableSkeletons.vue";
import { Log, Util } from "@/components/util";
import {
	// ref,
	toRef,
	onMounted,
	// onUnmounted
} from "vue";

export default {
	name: "NotificationMobile",
	components: {
		// TableSkeleton,
	},
	props: {
		notifications: Array,
	},
	setup(props, context) {
		onMounted(() => {
			Log.info("mobileNotices:" + JSON.stringify(notificationsItems.value));
		});

		const notificationsItems = toRef(props, "notifications");

		const dateFormat = (date) => {
			const d = Util.formatTime(date, "YYYY-MM-DD HH:mm:ss.SSSS", "MMM DD ddd hh:mm a");
			return d;
		};

		const close = () => {
			context.emit("close");
		};

		const openNotification = (notification) => {
			context.emit("openNotification", notification);
		};

		return {
			close,
			dateFormat,
			openNotification,
			notificationsItems,
		};
	},
};
</script>

<style lang="scss" scoped></style>
