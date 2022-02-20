<template>
	<div class="main-page pb-8 px-8">
		<div class="w-full mx-auto mb-64">
			<!-- <EarnDeposit @rootPage="returnToRoot" v-if="page === 'Earn Deposit'" :page="'Earn Deposit'" /> -->
			<div class="flex flex-col py-10">
				<div class="flex justify-between">
					<div class="mb-3">
						<h1 class="inter fw-600 fs-24 blacktext mb-2.5">Earn</h1>
						<p class="inter fw-400 fs-14 tx-666666">Track your investment performance</p>
					</div>
					<div class="flex items-center mb-3">
						<div
							@click="goToDeposit"
							style="background-color: #18ae81"
							class="cursor-pointer br-3 px-4 flex mr-4 items-center justify-center h-10 text-white"
						>
							<span class="my-auto">Add Funds</span>
						</div>
						<div
							@click="goToWithdraw"
							style="background-color: #e6edff; border: 1px solid #bdd1ff"
							class="cursor-pointer br-3 px-4 flex items-center justify-center h-10 tx-666666"
						>
							<span class="my-auto">Withdraw</span>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-5">
					<!-- <div class="col-span-2"><BalanceCards /></div> -->
					<div class="col-span-5 flex flex-col">
						<router-view></router-view>
					</div>
				</div>
			</div>
			<!-- <Withdraw :page="Withdraw" @rootPage="returnToRoot" v-if="page === 'Withdraw'" /> -->
		</div>
	</div>
</template>

<script>
// import BalanceCards from "./BalanceCards.vue";
import { onMounted, ref } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import EarnDeposit from "./EarnDeposit.vue";
// import Withdraw from "./Withdraw.vue";

export default {
	name: "Earn",
	components: {
		// BalanceCards,
		// TransactionHistory,
		// InterestEarnedPlate,
		// StartSavingSvg,
		// EarnDeposit,
		// Withdraw,
	},

	setup() {
		onMounted(() => {
			UserActions.getCharges(
				(response) => {
					Log.info(response);
					const charges = response.data.data;

					store.commit("bankDetails/withdrawalFee", charges.withdrawalFee);
					Log.info(charges.withdrawalFee);
					store.commit("bankDetails/depositFee", charges.depositFee);
					Log.info(charges.depositFee);
				},
				(error) => {
					Log.error(error);
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		});
		const router = useRouter();
		const page = ref("Dashboard");

		const goToDeposit = () => {
			router.push("/deposit");
		};

		const goToWithdraw = () => {
			router.push("/withdraw");
		};

		const returnToRoot = () => {
			router.push("/earn/overview");
		};

		const store = useStore();
		return {
			goToDeposit,
			page,
			returnToRoot,
			goToWithdraw,
		};
	},
};
</script>

<style lang="scss" scoped></style>
