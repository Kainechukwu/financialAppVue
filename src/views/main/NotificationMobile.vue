<template>
	<!-- <div> -->
	<div
		style="top: 0; left: 0; min-width: 100%; min-height: 100%"
		class="z-40 overflow-hidden fixed h-screen w-screen bg-white text-left overflow-hidden transform transition-all"
	>
		<div class="w-full h-full overflow-hidden">
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
						class="w-full overflow-y-auto pb-20 notice origin-top-right relative right-0 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<!-- <div v-if="notifications.length === 0 && loading">
							<TableSkeleton />
						</div>
						<div class="p-3" v-else-if="notifications.length === 0 && !loading">
							<span>No notifications</span>
						</div> -->
						<div ref="notificationScroll" class="py-1" v-if="notifications.length > 0">
							<div v-for="notification in notifications" :key="notification.id">
								<div
									@click="openNotification(notification)"
									style="border-bottom: 1px solid #f1f1f1"
									class="cursor-pointer flex flex-col px-6 py-3"
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
						<!-- <div v-if="notifications.length > 0 && loading">
							<TableSkeleton />
						</div> -->
					</div>
				</div>
				<!-- </div> -->
			</div>
		</div>

		<notification-modal
			@close="closeNotification"
			:open="notificationOpen"
			:notification="clickedNotification"
		/>
	</div>
	<!-- </div> -->
</template>

<script>
// import TableSkeleton from "@/components/skeletons/TableSkeletons.vue";
import { Log, Util } from "@/components/util";
import UserActions from "@/services/userActions/userActions.js";
import NotificationModal from "@/views/modals/NotificationModal.vue";
import { ref, toRef, onMounted, onUnmounted } from "vue";

export default {
	name: "NotificationMobile",
	components: {
		// TableSkeleton,
		NotificationModal,
	},
	props: {
		userId: String,
	},
	setup(props, context) {
		onMounted(() => {
			addEvent();
			getAllNotifications();
			// Log.info("mobileNotices:" + JSON.stringify(notifications.value));
		});

		onUnmounted(() => {
			removeEvent();
		});

		const notifications = ref([]);
		const userId = toRef(props, "userId");
		const notificationScroll = ref(null);
		const pageNumber = ref(1);
		const totalPages = ref(0);
		const pageSize = ref(6);
		const busy = ref(false);
		const notificationOpen = ref(false);
		const clickedNotification = ref({});

		const loading = ref(false);

		const removeEvent = () => {
			window.removeEventListener("scroll", onScroll);
		};

		const addEvent = () => {
			window.addEventListener("scroll", onScroll);
		};

		const loadMore = () => {
			busy.value = true;
			pageNumber.value += 1;

			getAllNotifications();

			busy.value = false;
		};

		const checkPagesLeft = () => {
			const bool = Math.ceil(totalPages.value / pageSize.value) > pageNumber.value;
			return bool;
		};

		const getAllNotifications = () => {
			loading.value = true;
			UserActions.getAllNotifications(
				userId.value,
				pageSize.value,
				pageNumber.value,
				(response) => {
					loading.value = false;
					notifications.value.push(...response.data.data);
					totalPages.value = response.data.total;
					Log.info(response);
				},
				(error) => {
					loading.value = false;
					Log.error(error);
				}
			);
		};

		const onScroll = () => {
			if (busy.value) {
				return;
			}
			let element = notificationScroll.value;

			if (element.getBoundingClientRect().bottom < window.innerHeight) {
				if (checkPagesLeft()) {
					loadMore();
				}
			}
			// Util.throttle({
			// 	key: "Notifications-infinite-scroll",
			// 	run: () => {
			// 		if (busy.value) {
			// 			return;
			// 		}
			// 		let element = notificationScroll.value;

			// 		if (element.getBoundingClientRect().bottom < window.innerHeight) {
			// 			if (checkPagesLeft()) {
			// 				loadMore();
			// 			}
			// 		}
			// 	},
			// 	time: 100,
			// });
		};

		const passNotificationInfo = (info) => {
			clickedNotification.value = info;
		};

		const openNotification = (info) => {
			passNotificationInfo(info);
			Log.info("clicked:" + JSON.stringify(clickedNotification.value));
			Util.throttle({
				key: "Open-Notification",
				run: () => {
					notificationOpen.value = true;
				},
				time: 400,
			});
		};

		function markView(notifications, id) {
			notifications.forEach((notification) => {
				if (notification.id === id) {
					Log.info("before change:" + JSON.stringify(notification.isRead));
					notification.isRead = true;
					// noticeKey.value++;

					Log.info("after change:" + JSON.stringify(notification.isRead));
					Log.info("notification:" + JSON.stringify(notification));
					Log.info("notifications:" + JSON.stringify(notifications));
				}
			});

			return notifications;
		}

		const markReadNotification = (id) => {
			UserActions.markReadNotification(
				id,
				(response) => {
					Log.info("oldNotification:" + JSON.stringify(notifications.value));
					Log.info(id);
					notifications.value = markView(notifications.value, id);
					Log.info("newNotification:" + JSON.stringify(notifications.value));

					Log.info(response);
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const closeNotification = (id) => {
			notificationOpen.value = false;

			clickedNotification.value = {};
			markReadNotification(id);
		};

		const dateFormat = (date) => {
			const d = Util.formatTime(date, "YYYY-MM-DD HH:mm:ss.SSSS", "MMM DD ddd hh:mm a");
			return d;
		};

		const close = () => {
			context.emit("close");
		};

		return {
			close,
			dateFormat,
			openNotification,
			notifications,
			loading,
			busy,
			notificationScroll,

			closeNotification,
			notificationOpen,
			clickedNotification,
		};
	},
};
</script>

<style lang="scss" scoped></style>
