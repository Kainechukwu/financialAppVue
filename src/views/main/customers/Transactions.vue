<template>
	<!-- <div class="main-page p-8 h-full"> -->
	<div class="flex flex-col justify-start">
		<div class="mb-6">
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
		</div>

		<!-- --------Table--------- -->
		<div class="flex flex-col">
			<!-- -------Table-------- -->
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="overflow-hidden border-b border-gray-100 sm:rounded-lg">
							<div v-if="transactions.length === 0 && loading">
								<TableSkeleton />
							</div>
							<div
								v-else-if="transactions.length === 0 && !loading"
								class="py-56 w-full bg-white flex flex-col items-center justify-center"
							>
								<div>
									<TransactionHistoryEmptySvg />
								</div>
								<span style="color: #999999" class="mt-6 fs-16 fw-400">Nothing to see</span>
							</div>
							<div v-else class="px-4 bg-white py-2">
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
												Name
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Email
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Product Type
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Currency
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
												value
											</th>
										</tr>
									</thead>

									<tbody class="bg-white divide-y divide-gray-100">
										<tr class="" v-for="(transaction, index) in transactions" :key="index">
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.externalReference }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.customerName }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap blacktext fw-600 fs-14">
												{{ transaction.customerEmail }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.product }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.currency }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.amount }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.value }}
											</td>
										</tr>
									</tbody>
								</table>
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
		</div>
		<!-- ---------------------- -->
	</div>
	<!-- </div> -->
</template>

<script>
import CustomerService from "@/services/userActions/customerService.js";
import { onMounted, ref, watch } from "vue";
import { Log } from "@/components/util";
// import { useRoute } from "vue-router";
import TableSkeleton from "@/components/skeletons/TableSkeletons.vue";

import TransactionHistoryEmptySvg from "@/components/svg/TransactionHistoryEmptySvg.vue";

export default {
	name: "Transactions",
	components: {
		TransactionHistoryEmptySvg,
		TableSkeleton,
	},
	setup() {
		onMounted(() => {
			getCustomerTransactions();
		});

		// const route = useRoute();
		const pageNumber = ref(1);
		const pageSize = ref(10);
		const totalPages = ref(0);
		const loading = ref(false);
		const transactions = ref([]);

		const getCustomerTransactions = () => {
			loading.value = true;
			CustomerService.getCustomerTransactions(
				String(pageNumber.value),
				String(pageSize.value),
				(response) => {
					loading.value = false;
					Log.info(response);
					transactions.value = response.data.data;
					totalPages.value = response.data.total;

					Log.info("query done");
				},
				(error) => {
					loading.value = false;
					Log.error(error);
				}
			);
		};

		const checkPagesLeft = () => {
			const bool = Math.ceil(totalPages.value / pageSize.value) > pageNumber.value;
			return bool;
		};

		const prev = () => {
			if (pageNumber.value > 1) {
				// depositTransactions.value = [];
				pageNumber.value--;
			}
		};

		const next = () => {
			if (checkPagesLeft()) {
				// depositTransactions.value = [];
				pageNumber.value++;
			}
			// else {
			// 	pageNumber.value++;
			// }
		};

		watch(pageNumber, (newValue) => {
			Log.info(newValue);
			getCustomerTransactions();
		});

		return { transactions, prev, next, pageNumber, loading };
	},
};
</script>

<style lang="scss" scoped>
.bg-success {
	background-color: #d2f9ed;
	color: #18ae81;
}
.bg-failed {
	background-color: #ffe8e5;
	color: #ff4d4f;
}

.select {
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	appearance: none;
}
</style>
