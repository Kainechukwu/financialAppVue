<template>
	<!-- <div class="main-page p-8 h-full"> -->
	<div class="flex flex-col justify-start">
		<div class="mb-6 flex justify-between">
			<!-- <h1 class="fw-600 fs-24 blacktext mb-4">Transactions</h1> -->
			<div class="flex">
				<input
					style="border: none"
					id="Searrch"
					name="Search"
					type="text"
					autocomplete="off"
					required=""
					placeholder="Search"
					class="mt-1.5 mr-4 br-5 h-12 appearance-none relative block w-60 px-3 py-2 border-0 focus:outline-none focus:z-10 sm:text-sm"
				/>

				<!-- <div class=" flex"> -->
				<select
					id="location"
					name="location"
					class="text-gray-400 block mt-1.5 h-12 w-36 pl-3 pr-10 py-2 focus:outline-none sm:text-sm rounded-md"
				>
					<option selected="" class="hidden">Filter</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
				<!-- </div> -->
			</div>
			<div class="fw-500 fs-16 flex items-center justify-center mt-1.5">
				<div
					style="background: #c7d8ff; border-radius: 4px"
					class="h-12 px-5 flex items-center text-white justify-center"
				>
					<span>Apply Filters</span>
				</div>
				<div
					style="color: rgba(28, 46, 69, 0.6)"
					class="h-12 px-5 flex items-center justify-center"
				>
					Clear Filters
				</div>
			</div>
		</div>

		<!-- --------Table--------- -->
		<div class="flex flex-col">
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
												ID
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Customer
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Amount
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Tr Ref
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Dep Ref
											</th>
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
										<tr class="" v-for="transaction in depositTransactions" :key="transaction.id">
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.id }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.customer }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap blacktext fw-600 fs-14">
												{{ transaction.amount }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.trnxRef }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.depRef }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ dateFormat(transaction.date) }}
											</td>
											<td style="color: #18ae81" class="px-6 py-4 whitespace-nowrap fs-12 fw-600">
												<div
													:class="displayStyle(transaction.status)"
													class="flex justify-center items-center h-8"
													style="border-radius: 100px; max-width: 93px"
												>
													{{ transaction.status }}
												</div>
											</td>
											<td class="px-3 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												<TransactionsListRowMenu @click="commitDetails(transaction.depRef)" />
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- ---------------------- -->
	</div>
	<!-- </div> -->
</template>

<script>
// import UserActions from "@/services/userActions/userActions.js";
import { onMounted, ref, onBeforeUnmount } from "vue";
import { Log, Util } from "@/components/util";
// import { useRoute } from "vue-router";
import { useStore } from "vuex";
import BackOfficeActions from "@/services/backOfficeActions/backOfficeActions.js";

import TransactionsListRowMenu from "./TransactionsListRowMenu.vue";

// import TransactionHistoryEmptySvg from "@/components/svg/TransactionHistoryEmptySvg.vue";

export default {
	name: "DepositList",
	components: {
		// TransactionHistoryEmptySvg,
		TransactionsListRowMenu,
	},
	setup() {
		onMounted(() => {
			getDeposits();
			lazyLoad();
		});

		onBeforeUnmount(() => {
			window.removeEventListener("scroll", onScroll);
		});

		// const route = useRoute();
		const store = useStore();

		// const transactions = ref([]);

		const getDeposits = () => {
			BackOfficeActions.getBackOfficeDeposits(
				pageNumber.value,
				pageSize.value,
				(response) => {
					depositTransactions.value = response.data.data;
					Log.info(response);
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const lazyLoad = () => {
			window.addEventListener("scroll", onScroll);
		};

		const onScroll = () => {
			pageSize.value += 10;
		};

		const dateFormat = (date) => {
			const d = Util.formatTime(date, "YYYY-MM-DD HH:mm:ss.SSSS", "MMM DD ddd YYYY hh:mm a");
			return d;
		};

		const pageNumber = ref(1);
		const pageSize = ref(10);

		const depositTransactions = ref([]);

		const commitDetails = (confirmNum) => {
			// store.commit("backOffice/transRef", props.transRef);
			store.commit("backOffice/confirmNum", confirmNum);
			Log.info("confirmNos committed:" + store.getters["backOffice/confirmNum"]);
		};

		const displayStyle = (status) => {
			Log.info("Status: " + status);
			if (status === "Successful") {
				return "bg-Approved";
			} else if (status === "Failed") {
				return "bg-Expired";
			} else if (status === "Pending") {
				return "bg-Pending";
			} else if (status === "Created") {
				return "bg-Created";
			}
		};
		return { depositTransactions, displayStyle, commitDetails, dateFormat };
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

.select {
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	appearance: none;
}
</style>
