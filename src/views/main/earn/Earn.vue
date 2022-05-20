<template>
	<div class="main-page pb-8 px-8">
		<div class="w-full mb-64 appSpread">
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
							style="background-color: #18ae81; min-width: 102px"
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
			<add-funds-naija :open="isAddFundsNaijaOpen" @close="closeAddFundsNaija" />
			<!-- <Withdraw :page="Withdraw" @rootPage="returnToRoot" v-if="page === 'Withdraw'" /> -->
		</div>
	</div>
</template>

<script>
// import BalanceCards from "./BalanceCards.vue";
import AddFundsNaija from "@/views/modals/AddFundsNaija.vue";
import { onMounted, ref } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import { Log } from "@/components/util";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import UserInfo from "@/services/userInfo/userInfo.js";
import { inject } from "vue";
// import EarnDeposit from "./EarnDeposit.vue";
// import Withdraw from "./Withdraw.vue";
import { askForPermissioToReceiveNotifications } from "@/push-notification";

export default {
	name: "Earn",
	components: {
		AddFundsNaija,
		// BalanceCards,
		// TransactionHistory,
		// InterestEarnedPlate,
		// StartSavingSvg,
		// EarnDeposit,
		// Withdraw,
	},

	setup() {
		onMounted(() => {
			store.commit("bankDetails/transType", 0);
			// const messaging = inject("messaging");

			console.log("Firebase cloud messaging object", messaging);
			// Util.handleNotification(
			// 	true,
			// 	"Success",
			// 	"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
			// );
			getCharges();
			askForPermissioToReceiveNotifications();

			getNaijaBankAccountDetails();
			Log.info("transType:" + store.getters["bankDetails/transType"]);
		});

		const messaging = inject("messaging");
		const store = useStore();
		const isNigerian = UserInfo.isNigerian();
		const userId = store.getters["authToken/userId"];
		const router = useRouter();
		const page = ref("Dashboard");
		const isAddFundsNaijaOpen = ref(false);

		const getNaijaBankAccountDetails = () => {
			if (isNigerian) {
				UserActions.getNaijaBankAccountDetails(
					userId,
					0,
					(response) => {
						Log.info("responseNaijaBank:" + JSON.stringify(response));
						// const fakeData = {
						// 	accountNumber: "111",
						// 	accountName: "kaine",
						// 	bankName: "Access",
						// };
						store.commit(
							"bankDetails/naijaBankDetails",
							// fakeData
							response.data.data
						);
					},
					(error) => {
						Log.error(error);
					}
				);
			}
		};
		const goToDeposit = () => {
			if (isNigerian) {
				openAddFundsNaija();
			} else {
				router.push("/deposit");
			}
		};

		const openAddFundsNaija = () => {
			isAddFundsNaijaOpen.value = true;
		};

		const closeAddFundsNaija = () => {
			isAddFundsNaijaOpen.value = false;
		};

		const getCharges = () => {
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
					// Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};

		const goToWithdraw = () => {
			if (isNigerian) {
				router.push("/withdraw-n");
			} else {
				router.push("/withdraw");
			}
		};

		const returnToRoot = () => {
			router.push("/earn/overview");
		};

		return {
			goToDeposit,
			page,
			returnToRoot,
			goToWithdraw,
			openAddFundsNaija,
			isAddFundsNaijaOpen,
			closeAddFundsNaija,
			isNigerian,
		};
	},
};
</script>

<style lang="scss" scoped></style>
