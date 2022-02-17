<template>
	<div class="flex flex-col mt-8">
		<span class="fw-500 fs-16 mb-4">Tranactions</span>
		<!-- -------Table-------- -->
		<div class="flex flex-col">
			<!-- style="min-width: 100%; max-width: 100%" -->
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div class="overflow-hidden border-b border-gray-100 sm:rounded-lg">
						<!-- <div
								v-if="transactions.length === 0"
								class="py-56 w-full bg-white flex flex-col items-center justify-center"
							>
								<div>
									<TransactionHistoryEmptySvg />
								</div>
								<span style="color: #999999" class="mt-6 fs-16 fw-400">Nothing to see</span>
							</div> -->
						<div class="px-4 bg-white py-2">
							<table class="min-w-full divide-y divide-gray-100">
								<thead class="bg-white">
									<tr>
										<th
											scope="col"
											class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
										>
											Description
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
										>
											Currency
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-right fw-600 fs-14 blacktext tracking-wider"
										>
											Amount
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
										>
											Reference
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
										>
											Type
										</th>
										<!-- <th
											scope="col"
											class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
										>
											Dep Ref
										</th> -->
										<th
											scope="col"
											class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
										>
											Date
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
										>
											Status
										</th>
									</tr>
								</thead>

								<tbody class="bg-white divide-y divide-gray-100">
									<tr
										class=""
										v-for="transaction in depositTransactions"
										:key="transaction.description"
									>
										<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
											{{ transaction.narration }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
											{{ transaction.currency }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
											<div class="flex justify-end">
												{{ formatCurrency(transaction.amount) }}
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap blacktext fw-600 fs-14">
											{{ transaction.userTransactionRef }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
											{{ transaction.transactionType }}
										</td>
										<!-- <td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
											{{ transaction.depRef }}
										</td> -->
										<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
											{{ dateFormat(transaction.transactionDate) }}
										</td>
										<td style="color: #18ae81" class="px-6 py-4 whitespace-nowrap fs-12 fw-600">
											<div
												:class="displayStyle(transaction.transactionStatus)"
												class="flex justify-center items-center h-8"
												style="border-radius: 100px; max-width: 93px"
											>
												{{ transaction.transactionStatus }}
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="px-6 h-16 sm:rounded-b-lg bg-white">
							<div class="px-1 h-full flex justify-between items-center">
								<div>
									<!-- <p class="my-auto hidden">Showing 1-15 of 300 entries</p> -->
								</div>

								<div class="flex">
									<div @click="prev" class="cursor-pointer">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<span class="mx-3.5"> Page {{ pageNumber }}</span>
									<div @click="next" class="cursor-pointer">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
												clip-rule="evenodd"
											/>
											<path
												fill-rule="evenodd"
												d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Log, Util, Constants } from "@/components/util";
import UserInfo from "@/services/userInfo/userInfo.js";
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
// import TransactionHistoryEmptySvg from "@/components/svg/TransactionHistoryEmptySvg.vue";

export default {
	name: "Recent Transactions",
	components: {
		// TransactionHistoryEmptySvg
	},
	setup() {
		onMounted(() => {
			getRecentHistory();
		});

		const store = useStore();
		const customerId = store.getters["authToken/userId"];
		const depositTransactions = ref([]);
		const pageNumber = ref(1);
		const pageSize = ref(10);
		const totalPages = ref(0);

		const historyLoading = ref(true);

		const dateFormat = (date) => {
			const d = Util.formatTime(date, "YYYY-MM-DD HH:mm:ss.SSSS", "MMM DD ddd YYYY hh:mm a");
			return d;
		};
		const getRecentHistory = () => {
			UserInfo.transactionHistory(
				customerId,
				pageNumber.value,
				pageSize.value,
				(response) => {
					Log.info(response.data.data);
					const historyData = response.data.data;
					depositTransactions.value = historyData;
					totalPages.value = response.data.total;

					historyLoading.value = false;
				},
				(error) => {
					Log.error(error);
					historyLoading.value = false;
				}
			);
		};

		const checkPagesLeft = () => {
			const bool = Math.ceil(totalPages.value / pageSize.value) > pageNumber.value;
			return bool;
		};

		const prev = () => {
			if (pageNumber.value > 1) {
				pageNumber.value--;
			}
		};

		const next = () => {
			if (checkPagesLeft()) {
				pageNumber.value++;
			}
			// else {
			// 	pageNumber.value++;
			// }
		};

		const formatCurrency = (curr) => {
			return Util.currencyFormatter(curr, Constants.currencyFormat);
		};

		const displayStyle = (status) => {
			Log.info("Status: " + status);
			if (status === "Successful") {
				return "bg-Approved";
			} else if (status === "Failed" || status === "Declined" || status === "Expired") {
				return "bg-Expired";
			} else if (status === "Pending") {
				return "bg-Pending";
			} else if (status === "Created") {
				return "bg-Created";
			}
		};

		watch(pageNumber, (newValue) => {
			Log.info(newValue);
			getRecentHistory();
		});

		return {
			depositTransactions,
			displayStyle,
			dateFormat,
			formatCurrency,
			prev,
			next,
			pageNumber,
		};
	},
};
</script>

<style lang="scss" scoped>
.bg-Approved {
	background-color: #d2f9ed;
	color: #18ae81;
}
.bg-Expired {
	background-color: #ffe8e5;
	color: #ff4d4f;
}
.bg-Pending {
	background-color: #fbecd0;
	color: #cc890f;
}

.bg-Created {
	background-color: #e6edff;
	color: #00267a;
}
</style>
