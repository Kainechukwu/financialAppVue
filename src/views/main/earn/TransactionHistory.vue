<template>
	<div class="br-10 bg-white ml-6">
		<div class="flex flex-col">
			<div class="flex mb-1 justify-between py-4 px-6 border-b-2 border-gray-200">
				<span class="inter fs-16 fw-600 blacktext">Transaction History</span>

				<span class="inter fs-12 tx-666666 fw-500">view more</span>
			</div>
			<div v-if="history.length === 0" class="flex flex-col p-20 items-center justify-center">
				<TransactionHistoryEmptySvg />
				<span style="color: #999999" class="fw-400 fs-18 pt-5">Nothing to see here</span>
			</div>
			<div v-else style="max-height: 30rem" class="w-full overflow-y-auto">
				<div v-for="transaction in history" :key="transaction.id" class="flex flex-col">
					<AccountFundingListItem
						v-if="transaction.transactionType === 'Credit'"
						:transaction="transaction"
					/>
					<WithdrawalListItem v-else :transaction="transaction" />
				</div>
			</div>

			<div class="flex px-6 py-4 justify-between"></div>
		</div>
	</div>
</template>

<script>
import UserInfo from "@/services/userInfo/userInfo.js";
import AccountFundingListItem from "./AccountFundingListItem";
import WithdrawalListItem from "./WithdrawalListItem";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import TransactionHistoryEmptySvg from "@/components/svg/TransactionHistoryEmptySvg.vue";
import { Log } from "@/components/util";
export default {
	name: "TransactionHistory",
	components: {
		AccountFundingListItem,
		WithdrawalListItem,
		TransactionHistoryEmptySvg,
	},
	setup() {
		onMounted(() => {
			UserInfo.transactionHistory(
				customerId,
				(response) => {
					Log.info(response.data.data);
					const historyData = response.data.data;
					history.value = historyData;
					historyLoading.value = false;
				},
				(error) => {
					Log.error(error);
					historyLoading.value = false;
				}
			);
		});

		const store = useStore();
		const customerId = store.getters["authToken/userId"];
		const history = ref([]);
		const historyLoading = ref(true);
		return {
			history,
			historyLoading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
