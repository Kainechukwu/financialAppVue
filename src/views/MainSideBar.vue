<template>
	<!-- <div class="hidden 900:block vertical-menu h-full w-64 fixed py-5 px-6 overflow-y-auto"> -->
	<div class="full flex flex-col">
		<Menu as="div" class="relative inline-block text-left">
			<MenuButton class="cursor-pointer br-5 bg-white flex flex-col px-5 py-4 relative w-full">
				<div class="flex justify-between relative w-full">
					<span class="mb-1 fw-500 fs-16 blacktext capitalize whitespace-nowrap truncate"
						>{{ companyName }}
					</span>
					<div class="flex items-center justify-center">
						<svg
							width="10"
							height="6"
							viewBox="0 0 10 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 1L4.71003 4.65L8.42005 1"
								stroke="#BFBFBF"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
				<div class="w-full text-left flex">
					<span class="tx-666666 fw-400 fs-14 whitespace-nowrap truncate"
						>{{ firstName }} {{ lastName }}</span
					>
				</div>
				<!-- <div
				style="margin-top: 60px"
				class="absolute blacktext fw-400 fs-14 inset-x-0 bg-white rounded-b-md left-0 w-full border-t border-gray-100 flex flex-col"
				v-if="show.state"
			>
				<div @click="goToProfileSettings" class="px-5 py-3 cursor-pointer hover:bg-gray-50">
					Profile Settings
				</div>
				<div @click="logout" class="px-5 py-3 cursor-pointer hover:bg-gray-50 rounded-b-md">
					Logout
				</div>
			</div> -->
			</MenuButton>

			<transition
				enter-active-class="transition ease-out duration-100"
				enter-from-class="transform opacity-0 scale-95"
				enter-to-class="transform opacity-100 scale-100"
				leave-active-class="transition ease-in duration-75"
				leave-from-class="transform opacity-100 scale-100"
				leave-to-class="transform opacity-0 scale-95"
			>
				<MenuItems
					style="border-bottom-left-radius: 5px; border-bottom-right-radius: 5px"
					class="z-30 origin-top-right absolute right-0 left-0 -mt-1.5 border-t border-gray-100 menuBoxShadow bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
					<div class="py-1">
						<MenuItem v-slot="{ active }">
							<span
								@click="goToProfileSettings"
								class="cursor-pointer"
								:class="[
									active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									'block px-4 py-2 fs-14 fw-400 blacktext',
								]"
								>Profile Settings</span
							>
						</MenuItem>

						<MenuItem v-slot="{ active }">
							<span
								@click="logout"
								class="cursor-pointer"
								:class="[
									active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									'block px-4 py-2 fs-14 fw-400 blacktext',
								]"
								>Logout</span
							>
						</MenuItem>
					</div>
				</MenuItems>
			</transition>
		</Menu>

		<div class="mt-12 flex flex-col">
			<div v-for="item in navigation" :key="item.name">
				<div @mouseup="closeSidebar" v-if="item.visible">
					<router-link :to="item.href" class="pl-0 p-4 text-black-400 flex">
						<component :is="item.icon"></component>
						<span
							:class="route.name.includes(item.routeName) ? 'fw-600' : 'fw-300'"
							class="ml-3 text-white fs-16"
							>{{ item.name }}</span
						>
					</router-link>
				</div>
			</div>
			<!-- </div> -->

			<!-- ----------- -->

			<!-- ----------- -->
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { computed } from "vue";
// import {useStore} from "vuex";
import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
// import DashBoardSvg from "@/components/svg/DashboardSvg.vue";
import SettingsSvg from "@/components/svg/SettingsSvg";
import TransactionsSvg from "@/components/svg/TransactionsSvg.vue";
import PayoutsSvg from "@/components/svg/PayoutsSvg.vue";
import CustomersSvg from "@/components/svg/CustomersSvg.vue";
// import PlansSvg from "@/components/svg/PlansSvg.vue";
import ConfigurationsSvg from "@/components/svg/ConfigurationsSvg";
import LoginService from "@/services/login/LoginService.js";
import MerchantsSvg from "@/components/svg/MerchantsSvg.vue";
import { Util, Constants } from "@/components/util";
import { useStore } from "vuex";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

// import AuditLogsSvg from "@/components/svg/AuditLogsSvg.vue";
export default {
	name: "MainSideBar",
	components: {
		CheckedSvgOutlined,
		// DashBoardSvg,
		SettingsSvg,
		TransactionsSvg,
		// CustomersSvg,
		ConfigurationsSvg,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		MerchantsSvg,
		// AuditLogsSvg,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();
		const store = useStore();

		const companyName = computed(() => store.getters["authToken/companyName"]);

		const goToProfileSettings = () => {
			closeSidebar();
			router.push("/settings/profile");
		};

		const closeSidebar = () => {
			store.commit("setOpenSideBar", false);
		};

		const logout = () => {
			LoginService.handleLogout();
			// closeSidebar();
			// router.push("/login");
		};
		const firstName = store.getters["authToken/firstName"];
		const lastName = store.getters["authToken/lastName"];

		const navigation = [
			{
				name: "Get Started",
				href: "/get_started",
				icon: CheckedSvgOutlined,
				routeName: "Get Started",
				visible: Util.checkAuth(Constants.merchantAuth),
			},
			// {
			// 	name: "Dashboard",
			// 	href: "/overview",
			// 	icon: DashBoardSvg,
			// 	routeName: "Overview",
			// 	visible: Util.checkAuth(Constants.backOfficeAuth),
			// },
			// {
			// 	name: "Transactions",
			// 	href: "/backOffice/transactions",
			// 	icon: TransactionsSvg,
			// 	routeName: "Transactions",
			// 	visible: Util.checkAuth(Constants.backOfficeAuth),
			// },
			{
				name: "Earn",
				href: "/earn",
				icon: PayoutsSvg,
				routeName: "Earn",
				visible: Util.checkAuth(Constants.merchantAuth),
			},
			// {
			// 	name: "Merchants",
			// 	href: "/backOffice/merchants",
			// 	icon: MerchantsSvg,
			// 	routeName: "Merchants",
			// 	visible: Util.checkAuth(Constants.backOfficeAuth),
			// },
			{
				name: "Customers",
				href: "/customers",
				icon: CustomersSvg,
				routeName: "Customers",
				visible: Util.checkAuth(Constants.merchantAuth),
			},
			// {
			// 	name: "Plans",
			// 	href: "/plans",
			// 	icon: PlansSvg,
			// 	routeName: "Plans",
			// },
			{
				name: "Settings",
				href: "/settings",
				icon: SettingsSvg,
				routeName: "Settings",
				visible: Util.checkAuth(Constants.merchantAuth),
			},
			// {
			// 	name: "Configurations",
			// 	href: "/configurations",
			// 	icon: ConfigurationsSvg,
			// 	routeName: "Configurations",
			// 	visible: Util.checkAuth(Constants.backOfficeAuth),
			// },
			// {
			// 	name: "AuditLogs",
			// 	href: "/audit_logs",
			// 	icon: AuditLogsSvg,
			// 	routeName: "AuditLogs",
			// 	visible: Util.checkAuth(Constants.merchantAuth) || Util.checkAuth(Constants.backOfficeAuth),
			// },
		];
		return {
			navigation,
			route,

			logout,
			firstName,
			lastName,
			companyName,
			goToProfileSettings,
			closeSidebar,
		};
	},
};
</script>

<style lang="scss" scoped></style>
