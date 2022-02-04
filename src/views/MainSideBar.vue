<template>
	<div class="vertical-menu h-full w-64 fixed py-5 px-6 overflow-y-auto">
		<div class="full flex flex-col">
			<div @click="toggle" class="cursor-pointer br-5 bg-white flex flex-col px-5 py-4 relative">
				<div class="flex justify-between relative">
					<span class="mb-1 fw-500 fs-16 blacktext capitalize">{{ companyName }}</span>
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
				<div>
					<span class="tx-666666 fw-400 fs-14">{{ firstName }} {{ lastName }}</span>
				</div>
				<div
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
				</div>
			</div>

			<div class="mt-12 flex flex-col">
				<div v-for="item in navigation" :key="item.name">
					<div v-if="item.visible">
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
	</div>
</template>

<script>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { reactive, computed } from "vue";
// import {useStore} from "vuex";
import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
// import DashBoardSvg from "@/components/svg/DashboardSvg.vue";
import SettingsSvg from "@/components/svg/SettingsSvg";
import TransactionsSvg from "@/components/svg/TransactionsSvg.vue";
import PayoutsSvg from "@/components/svg/PayoutsSvg.vue";
// import CustomersSvg from "@/components/svg/CustomersSvg.vue";
// import PlansSvg from "@/components/svg/PlansSvg.vue";
import ConfigurationsSvg from "@/components/svg/ConfigurationsSvg";
import LoginService from "@/services/login/LoginService.js";
import MerchantsSvg from "@/components/svg/MerchantsSvg.vue";
import { Util, Constants } from "@/components/util";
import { useStore } from "vuex";
import AuditLogsSvg from "@/components/svg/AuditLogsSvg.vue";
export default {
	name: "MainSideBar",
	components: {
		CheckedSvgOutlined,
		// DashBoardSvg,
		SettingsSvg,
		TransactionsSvg,
		// CustomersSvg,
		ConfigurationsSvg,
		MerchantsSvg,
		AuditLogsSvg,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();
		const store = useStore();
		// const store = useRoute();
		const show = reactive({
			state: false,
		});

		// const authenticateLink = () => {

		// }

		const companyName = computed(() => store.getters["authToken/companyName"]);

		const toggle = () => {
			show.state = !show.state;
		};

		const goToProfileSettings = () => {
			show.state = false;
			router.push("/settings/profile");
		};

		const logout = () => {
			LoginService.handleLogout();
			show.state = false;
			router.push("/login");
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
			{
				name: "Transactions",
				href: "/backOffice/transactions",
				icon: TransactionsSvg,
				routeName: "Transactions",
				visible: Util.checkAuth(Constants.backOfficeAuth),
			},
			{
				name: "Earn",
				href: "/earn",
				icon: PayoutsSvg,
				routeName: "Earn",
				visible: Util.checkAuth(Constants.merchantAuth),
			},
			{
				name: "Merchants",
				href: "/backOffice/merchants",
				icon: MerchantsSvg,
				routeName: "Merchants",
				visible: Util.checkAuth(Constants.backOfficeAuth),
			},
			// {
			// 	name: "Customers",
			// 	href: "/customers",
			// 	icon: CustomersSvg,
			// 	routeName: "Customers",
			// },
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
			{
				name: "Configurations",
				href: "/configurations",
				icon: ConfigurationsSvg,
				routeName: "Configurations",
				visible: Util.checkAuth(Constants.backOfficeAuth),
			},
			{
				name: "AuditLogs",
				href: "/audit_logs",
				icon: AuditLogsSvg,
				routeName: "AuditLogs",
				visible: Util.checkAuth(Constants.merchantAuth) || Util.checkAuth(Constants.backOfficeAuth),
			},
		];
		return {
			navigation,
			route,
			show,
			toggle,
			logout,
			firstName,
			lastName,
			companyName,
			goToProfileSettings,
		};
	},
};
</script>

<style lang="scss" scoped></style>
