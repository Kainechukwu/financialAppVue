<template>
	<div class="vertical-menu h-full w-64 fixed py-5 px-6">
		<div class="full flex flex-col">
			<div class="br-5 bg-white flex flex-col px-5 py-4">
				<div class="flex justify-between">
					<span class="mb-1 fw-500 fs-16 blacktext">Bonfree Systems</span>
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
					<span class="tx-666666 fw-400 fs-14">Kaine Bismarck</span>
				</div>
			</div>
			<div class="mt-12 flex flex-col">
				<router-link
					:to="item.href"
					v-for="item in navigation"
					:key="item.name"
					class="pl-0 p-4 text-black-400 flex"
				>
					<component :is="item.icon"></component>
					<span
						:class="route.name.includes(item.routeName) ? 'fw-600' : 'fw-400'"
						class="ml-3 text-white fs-16"
						>{{ item.name }}</span
					>
				</router-link>
				<!-- </div> -->

				<!-- ----------- -->

				<!-- ----------- -->
			</div>
		</div>
	</div>
</template>

<script>
import { useRoute } from "vue-router";
// import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
import DashBoardSvg from "@/components/svg/DashboardSvg.vue";
import SettingsSvg from "@/components/svg/SettingsSvg";
import TransactionsSvg from "@/components/svg/TransactionsSvg.vue";
import PayoutsSvg from "@/components/svg/PayoutsSvg.vue";
import CustomersSvg from "@/components/svg/CustomersSvg.vue";
// import PlansSvg from "@/components/svg/PlansSvg.vue";
import ConfigurationsSvg from "@/components/svg/ConfigurationsSvg";
// import MerchantsSvg from "@/components/svg/MerchantsSvg.vue";
import AuditLogsSvg from "@/components/svg/AuditLogsSvg.vue";
export default {
	name: "MainSideBar",
	components: {
		// CheckedSvgOutlined,
		DashBoardSvg,
		SettingsSvg,
		TransactionsSvg,
		CustomersSvg,
		ConfigurationsSvg,
		// MerchantsSvg,
		AuditLogsSvg,
	},
	setup() {
		const route = useRoute();
		const navigation = [
			// {
			// 	name: "Pending Tasks",
			// 	href: "/pending_tasks",
			// 	icon: CheckedSvgOutlined,
			// 	routeName: "Pending Tasks",
			// },
			{ name: "Dashboard", href: "/overview", icon: DashBoardSvg, routeName: "Overview" },
			// {
			// 	name: "Transactions",
			// 	href: "/transactions",
			// 	icon: TransactionsSvg,
			// 	routeName: "Transactions",
			// },
			{
				name: "Earn",
				href: "/earn",
				icon: PayoutsSvg,
				routeName: "Earn",
			},
			// {
			// 	name: "Merchants",
			// 	href: "/merchants",
			// 	icon: MerchantsSvg,
			// 	routeName: "Merchants",
			// },
			{
				name: "Customers",
				href: "/customers",
				icon: CustomersSvg,
				routeName: "Customers",
			},
			// {
			// 	name: "Plans",
			// 	href: "/plans",
			// 	icon: PlansSvg,
			// 	routeName: "Plans",
			// },
			{ name: "Settings", href: "/settings", icon: SettingsSvg, routeName: "Settings" },
			{
				name: "Configurations",
				href: "/configurations",
				icon: ConfigurationsSvg,
				routeName: "Configurations",
			},
			{
				name: "AuditLogs",
				href: "/audit_logs",
				icon: AuditLogsSvg,
				routeName: "AuditLogs",
			},
		];
		return { navigation, route };
	},
};
</script>

<style lang="scss" scoped></style>
