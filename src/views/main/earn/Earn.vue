<template>
	<div class="main-page pb-8 px-12">
		<div class="w-full mx-auto mb-64">
			<div class="flex flex-col py-10">
				<div class="w-full greeting mb-3">
					<h1 class="inter fw-600 fs-24 blacktext mb-2.5">Earn</h1>
					<p class="inter fw-400 fs-14 tx-666666">Track your investment performance</p>
				</div>
				<div class="grid grid-cols-5">
					<div class="col-span-2"><BalanceCards /></div>
					<div class="col-span-3 flex flex-col">
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BalanceCards from "./BalanceCards.vue";
import { onMounted } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import { Log } from "@/components/util";
import { useStore } from "vuex";

export default {
	name: "Earn",
	components: {
		BalanceCards,
		// TransactionHistory,
		// InterestEarnedPlate,
		// StartSavingSvg,
	},

	setup() {
		onMounted(() => {
			UserActions.getCharges(
				(response) => {
					Log.info(response);
					const charges = response.data.data;

					store.commit();
				},
				(error) => {
					Log.error(error);
				}
			);
		});

		const store = useStore();
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
