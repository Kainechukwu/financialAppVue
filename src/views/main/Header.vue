<template>
	<div style="height: 4.375rem" class="header w-full flex items-center px-8">
		<!-- <div class="block 900:hidden"> -->
		<MainMenuBtn />
		<!-- </div> -->
		<div class="flex 900:mr-0 w-full items-center justify-end">
			<div class="flex mr-8">
				<div class="md:hidden">
					<NotificationBell @click="openNoticeMobile" />
				</div>
				<Menu as="div" class="hidden relative md:inline-block text-left">
					<div>
						<MenuButton class="flex items-center text-gray-400 hover:text-gray-600">
							<span class="sr-only">Open options</span>
							<NotificationBell />
						</MenuButton>
					</div>

					<transition
						enter-active-class="transition ease-out duration-100"
						enter-from-class="transform opacity-0 scale-95"
						enter-to-class="transform opacity-100 scale-100"
						leave-active-class="transition ease-in duration-75"
						leave-from-class="transform opacity-100 scale-100"
						leave-to-class="transform opacity-0 scale-95"
					>
						<MenuItems
							style="max-height: 337px"
							ref="notificationScroll"
							class="z-40 overflow-y-auto notice origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							<div v-if="notifications.length === 0 && loading">
								<TableSkeleton />
							</div>
							<div class="p-3" v-else-if="notifications.length === 0 && !loading">
								<span>No notifications</span>
							</div>
							<div class="py-1" v-if="notifications.length > 0">
								<MenuItem
									v-for="notification in notifications"
									:key="notification.id"
									v-slot="{ active }"
								>
									<div
										id="notification"
										@click="openNotification(notification)"
										style="border-bottom: 1px solid #f1f1f1"
										class="cursor-pointer flex flex-col px-3 py-3"
										:class="[active ? 'bg-gray-100' : 'bg-white']"
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
								</MenuItem>
								<!-- <div v-if="notifications.length > 0 && loading">
									<TableSkeleton />
								</div> -->
							</div>
							<div v-if="notifications.length > 0 && loading">
								<TableSkeleton />
							</div>
						</MenuItems>
					</transition>
				</Menu>
				<!-- <div class="flex items-center mr-4">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
							stroke="#999999"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20.9999 21L16.6499 16.65"
							stroke="#999999"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<input
					style="border: none"
					id="Search"
					name="Search"
					type="text"
					v-model="Search"
					autocomplete="off"
					required=""
					placeholder="Search payments, invoices and transactions"
					class="placeholder-gray-400 h-12 w-80 fw-400 fs-16 appearance-none relative block px-3 py-2 text-gray-900"
				/> -->
			</div>
			<div class="flex items-center">
				<!-- <div @click="toggle" class="mr-3 flex items-center space-x-3 justify-center">
					<span
						role="checkbox"
						tabindex="0"
						aria-checked="false"
						aria-labelledby="toggleLabel"
						:class="enabled ? 'bg-indigo-600' : 'bg-gray-200'"
						class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
					>
						<span
							aria-hidden="true"
							:class="enabled ? 'translate-x-5' : 'translate-x-0'"
							class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
						></span>
					</span>
				</div>
				<div class="greenButton mr-4 w-11 py-px br-6 flex justify-center h-6 items-center">
					<span class="fw-500 fs-10 text-white">Live</span>
				</div> -->
				<!-- <img
					class="inline-block h-12 w-12 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/> -->
				<div class="bg-gray-100 flex items-center justify-center h-12 w-12 rounded-full">
					<h1 class="fw-600">{{ fInitial }}{{ lInitial }}</h1>
				</div>
			</div>
		</div>
		<notification-modal
			@close="closeNotification"
			:open="notificationOpen"
			:notification="clickedNotification"
		/>
		<NotificationMobile
			v-show="isNoticeMobileOpen"
			@close="closeNoticeMobile"
			:userId="userId"
			@openNotification="openNotification"
		/>

		<!-- :notifications="notifications" -->
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import NotificationModal from "@/views/modals/NotificationModal.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
// import { DotsVerticalIcon } from '@heroicons/vue/solid'
import TableSkeleton from "@/components/skeletons/TableSkeletons.vue";
import NotificationBell from "@/components/svg/NotificationBell.vue";
import UserActions from "@/services/userActions/userActions.js";
import { Log, Util } from "@/components/util";
import NotificationMobile from "./NotificationMobile.vue";
import MainMenuBtn from "@/components/svg/MainMenuBtn.vue";
import { useStore } from "vuex";
export default {
	name: "Header",
	components: {
		MainMenuBtn,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		TableSkeleton,
		NotificationBell,
		NotificationModal,
		NotificationMobile,

		// DotsVerticalIcon,
	},
	setup() {
		onMounted(() => {
			addEvent();
			getAllNotifications();
		});
		onUnmounted(() => {
			removeEvent();
		});
		const store = useStore();
		const isNoticeMobileOpen = ref(false);
		const notificationOpen = ref(false);
		const noticeKey = ref(0);
		const clickedNotification = ref({});
		const userId = store.getters["authToken/userId"];
		const fName = store.getters["authToken/firstName"];
		const lName = store.getters["authToken/lastName"];
		const fInitial = fName.slice(0, 1).toUpperCase();
		const lInitial = lName.slice(0, 1).toUpperCase();
		const enabled = ref(false);
		const notificationScroll = ref(null);
		const busy = ref(false);
		const notifications = ref([]);
		const pageNumber = ref(1);
		const totalPages = ref(0);
		const pageSize = ref(5);
		const loading = ref(false);

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

		const openNoticeMobile = () => {
			isNoticeMobileOpen.value = true;
		};

		const closeNoticeMobile = () => {
			isNoticeMobileOpen.value = false;
		};

		function markView(notifications, id) {
			notifications.forEach((notification) => {
				if (notification.id === id) {
					Log.info("before change:" + JSON.stringify(notification.isRead));
					notification.isRead = true;
					noticeKey.value++;

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
		const toggle = () => {
			enabled.value = !enabled.value;
		};

		const removeEvent = () => {
			// window.removeEventListener("scroll", onScroll);
		};

		const addEvent = () => {
			// window.addEventListener("scroll", onScroll);
		};

		// const loadMore = () => {
		// 	busy.value = true;
		// 	pageNumber.value += 1;

		// 	getAllNotifications();

		// 	busy.value = false;
		// };

		// const checkPagesLeft = () => {
		// 	const bool = Math.ceil(totalPages.value / pageSize.value) > pageNumber.value;
		// 	return bool;
		// };

		const dateFormat = (date) => {
			const d = Util.formatTime(date, "YYYY-MM-DD HH:mm:ss.SSSS", "MMM DD ddd hh:mm a");
			return d;
		};

		const getAllNotifications = () => {
			loading.value = true;
			UserActions.getAllNotifications(
				userId,
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

		// const onScroll = () => {
		// 	Util.throttle({
		// 		key: "Notifications-infinite-scroll",
		// 		run: () => {
		// 			if (busy.value) {
		// 				return;
		// 			}
		// 			let element = notificationScroll.value;
		// 			if (element === null) {
		// 				return;
		// 			}

		// 			if (element !== null && element.getBoundingClientRect().bottom < window.innerHeight) {
		// 				if (checkPagesLeft()) {
		// 					loadMore();
		// 				}
		// 			}
		// 		},
		// 		time: 100,
		// 	});
		// };
		return {
			enabled,
			toggle,
			dateFormat,
			fInitial,
			lInitial,
			notifications,
			loading,
			noticeKey,
			userId,
			busy,
			notificationScroll,
			openNotification,
			closeNotification,
			notificationOpen,
			clickedNotification,
			isNoticeMobileOpen,
			openNoticeMobile,
			closeNoticeMobile,
		};
	},
};
</script>

<style lang="scss" scoped>
.header {
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
