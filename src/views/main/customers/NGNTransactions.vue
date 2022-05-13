<template>
	<!-- <div class="main-page p-8 h-full"> -->
	<div class="flex flex-col justify-start">
		<div class="mb-6">
			<!-- <h1 class="fw-600 fs-24 blacktext mb-4">Transactions</h1> -->
			<div class="flex">
				<!-- {{ selectedStatus }} {{ selectedOrigin }} -->
				<input
					style="border: none"
					id="Searrch"
					name="Search"
					type="text"
					autocomplete="off"
					v-model="searchText"
					required=""
					placeholder="Search"
					class="mt-1.5 mr-4 br-5 h-12 appearance-none relative block w-60 px-3 py-2 border-0 focus:outline-none focus:z-10 sm:text-sm"
				/>

				<!-- <div class=" flex"> -->
				<Popover class="relative">
					<PopoverButton
						id="filterMenu2"
						class="text-left text-gray-400 mt-1.5 br-5 h-12 bg-white w-36 pr-2 pl-3 py-2 border focus:outline-none sm:text-sm rounded-l-md"
					>
						<span>Filters</span>
						<!-- :class="[ open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5
					group-hover:text-gray-500', ]" -->
						<span
							aria-hidden="true"
							class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
						>
							<div class="h-5 my-auto flex items-center justify-center text-gray-400">
								<svg
									width="12"
									height="6"
									viewBox="0 0 12 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 1L5.73 5.2L10.46 1"
										stroke="#BFBFBF"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</span>
					</PopoverButton>

					<transition
						enter-active-class="transition ease-out duration-200"
						enter-from-class="opacity-0 translate-y-1"
						enter-to-class="opacity-100 translate-y-0"
						leave-active-class="transition ease-in duration-150"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 translate-y-1"
					>
						<PopoverPanel
							class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0"
						>
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-1 py-6 sm:gap-8 sm:p-8">
									<div>
										<Listbox as="div" v-model="selectedStatus">
											<ListboxLabel class="block text-sm font-medium text-gray-700">
												Status
											</ListboxLabel>
											<div class="mt-1 relative">
												<ListboxButton
													class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												>
													<span class="block truncate">{{ selectedStatus.name }}</span>
													<span
														class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
													>
														<div class="h-5 my-auto flex items-center justify-center text-gray-400">
															<svg
																width="12"
																height="6"
																viewBox="0 0 12 6"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M1 1L5.73 5.2L10.46 1"
																	stroke="#BFBFBF"
																	stroke-width="1.5"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>
													</span>
												</ListboxButton>

												<transition
													leave-active-class="transition ease-in duration-100"
													leave-from-class="opacity-100"
													leave-to-class="opacity-0"
												>
													<ListboxOptions
														class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
													>
														<ListboxOption
															as="template"
															v-for="status in statuses"
															:key="status.value"
															:value="status"
															v-slot="{ active, selectedStatus }"
														>
															<li
																:class="[
																	active ? 'text-white bg-indigo-600' : 'text-gray-900',
																	'cursor-default select-none relative py-2 pl-3 pr-9',
																]"
															>
																<span
																	:class="[
																		selectedStatus ? 'font-semibold' : 'font-normal',
																		'block truncate',
																	]"
																>
																	{{ status.name }}
																</span>

																<span
																	v-if="selectedStatus"
																	:class="[
																		active ? 'text-white' : 'text-indigo-600',
																		'absolute inset-y-0 right-0 flex items-center pr-4',
																	]"
																>
																</span>
															</li>
														</ListboxOption>
													</ListboxOptions>
												</transition>
											</div>
										</Listbox>
									</div>

									<div>
										<Listbox as="div" v-model="selectedOrigin">
											<ListboxLabel class="block text-sm font-medium text-gray-700">
												Origin
											</ListboxLabel>
											<div class="mt-1 relative">
												<ListboxButton
													class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												>
													<span class="block truncate">{{ selectedOrigin.name }}</span>
													<span
														class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
													>
														<div class="h-5 my-auto flex items-center justify-center text-gray-400">
															<svg
																width="12"
																height="6"
																viewBox="0 0 12 6"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M1 1L5.73 5.2L10.46 1"
																	stroke="#BFBFBF"
																	stroke-width="1.5"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>
													</span>
												</ListboxButton>

												<transition
													leave-active-class="transition ease-in duration-100"
													leave-from-class="opacity-100"
													leave-to-class="opacity-0"
												>
													<ListboxOptions
														class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-28 overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
													>
														<ListboxOption
															as="template"
															v-for="item in origin"
															:key="item.value"
															:value="item"
															v-slot="{ active, selectedOrigin }"
														>
															<li
																:class="[
																	active ? 'text-white bg-indigo-600' : 'text-gray-900',
																	'cursor-default select-none relative py-2 pl-3 pr-9',
																]"
															>
																<span
																	:class="[
																		selectedOrigin ? 'font-semibold' : 'font-normal',
																		'block truncate',
																	]"
																>
																	{{ item.name }}
																</span>

																<span
																	v-if="selectedOrigin"
																	:class="[
																		active ? 'text-white' : 'text-indigo-600',
																		'absolute inset-y-0 right-0 flex items-center pr-4',
																	]"
																>
																</span>
															</li>
														</ListboxOption>
													</ListboxOptions>
												</transition>
											</div>
										</Listbox>
									</div>

									<!-- //types -->
									<div>
										<Listbox as="div" v-model="selectedType">
											<ListboxLabel class="block text-sm font-medium text-gray-700">
												Type
											</ListboxLabel>
											<div class="mt-1 relative">
												<ListboxButton
													class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												>
													<span class="block truncate">{{ selectedType.name }}</span>
													<span
														class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
													>
														<div class="h-5 my-auto flex items-center justify-center text-gray-400">
															<svg
																width="12"
																height="6"
																viewBox="0 0 12 6"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M1 1L5.73 5.2L10.46 1"
																	stroke="#BFBFBF"
																	stroke-width="1.5"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>
													</span>
												</ListboxButton>

												<transition
													leave-active-class="transition ease-in duration-100"
													leave-from-class="opacity-100"
													leave-to-class="opacity-0"
												>
													<ListboxOptions
														class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
													>
														<ListboxOption
															as="template"
															v-for="type in types"
															:key="type.value"
															:value="type"
															v-slot="{ active, selectedType }"
														>
															<li
																:class="[
																	active ? 'text-white bg-indigo-600' : 'text-gray-900',
																	'cursor-default select-none relative py-2 pl-3 pr-9',
																]"
															>
																<span
																	:class="[
																		selectedType ? 'font-semibold' : 'font-normal',
																		'block truncate',
																	]"
																>
																	{{ type.name }}
																</span>

																<span
																	v-if="selectedType"
																	:class="[
																		active ? 'text-white' : 'text-indigo-600',
																		'absolute inset-y-0 right-0 flex items-center pr-4',
																	]"
																>
																</span>
															</li>
														</ListboxOption>
													</ListboxOptions>
												</transition>
											</div>
										</Listbox>
									</div>

									<!-- Source -->
									<!-- <div>
										<Listbox as="div" v-model="selectedSource">
											<ListboxLabel class="block text-sm font-medium text-gray-700">
												Source
											</ListboxLabel>
											<div class="mt-1 relative">
												<ListboxButton
													class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												>
													<span class="block truncate">{{ selectedSource.name }}</span>
													<span
														class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
													>
														<div class="h-5 my-auto flex items-center justify-center text-gray-400">
															<svg
																width="12"
																height="6"
																viewBox="0 0 12 6"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M1 1L5.73 5.2L10.46 1"
																	stroke="#BFBFBF"
																	stroke-width="1.5"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>
													</span>
												</ListboxButton>

												<transition
													leave-active-class="transition ease-in duration-100"
													leave-from-class="opacity-100"
													leave-to-class="opacity-0"
												>
													<ListboxOptions
														class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
													>
														<ListboxOption
															as="template"
															v-for="source in sources"
															:key="source.value"
															:value="source"
															v-slot="{ active, selectedSource }"
														>
															<li
																:class="[
																	active ? 'text-white bg-indigo-600' : 'text-gray-900',
																	'cursor-default select-none relative py-2 pl-3 pr-9',
																]"
															>
																<span
																	:class="[
																		selectedSource ? 'font-semibold' : 'font-normal',
																		'block truncate',
																	]"
																>
																	{{ source.name }}
																</span>

																<span
																	v-if="selectedSource"
																	:class="[
																		active ? 'text-white' : 'text-indigo-600',
																		'absolute inset-y-0 right-0 flex items-center pr-4',
																	]"
																>
																</span>
															</li>
														</ListboxOption>
													</ListboxOptions>
												</transition>
											</div>
										</Listbox>
									</div> -->
									<!-- <div class="flex flex-col mx-auto"> -->
									<div class="mb-1 w-full">
										<label for="Date of Birth" class="fs-14 fw-400 tx-666666">From</label>
										<input
											class="mt-1.5 br-5 h-10 w-full appearance-none relative block px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
											type="datetime-local"
											step="1"
											id="from"
											v-model="from"
										/>
									</div>
									<div class="mb-1 w-full">
										<label for="Date of Birth" class="fs-14 fw-400 tx-666666">To</label>
										<input
											class="mt-1.5 br-5 h-10 w-full appearance-none relative block px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
											type="datetime-local"
											step="1"
											id="to"
											v-model="to"
										/>
									</div>
									<!-- </div> -->
									<div class="flex justify-between items-center mt-2">
										<div @click="clear" class="px-6 py-2 br-5 cursor-pointer">Clear</div>
										<div
											@click="applyFilter"
											style="background-color: #268bd0"
											class="cursor-pointer px-6 py-2 br-5 text-white"
										>
											Filter
										</div>
									</div>
								</div>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>
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
												Description
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
												Reference
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Type
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
										<tr class="" v-for="(transaction, index) in transactions" :key="index">
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.narration }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.amount }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap blacktext fw-600 fs-14">
												{{ transaction.userTransactionRef }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ transaction.transactionType }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ dateFormat(transaction.transactionDate) }}
											</td>

											<td style="color: #18ae81" class="px-6 py-4 whitespace-nowrap fs-12 fw-600">
												<div
													:class="displayStyle(transaction.transactionStatus)"
													class="flex justify-center items-center h-8"
													style="border-radius: 100px; min-width: 93px"
												>
													{{ transaction.transactionStatus }}
												</div>
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
import { onMounted, ref, reactive, watch, toRefs } from "vue";
import { Log, Util } from "@/components/util";
// import { useRoute } from "vue-router";
import TableSkeleton from "@/components/skeletons/TableSkeletons.vue";
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

import TransactionHistoryEmptySvg from "@/components/svg/TransactionHistoryEmptySvg.vue";

export default {
	name: "NGNTransactions",
	components: {
		TransactionHistoryEmptySvg,
		TableSkeleton,
		Popover,
		PopoverButton,
		PopoverPanel,
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
	},
	setup() {
		onMounted(() => {
			getMerchantTransactions();
		});

		const transactions = ref([]);
		const loading = ref(false);
		const searchText = ref("");

		const statuses = [
			{
				name: "All",
				value: 1,
			},
			{
				name: "Pending",
				value: 2,
			},
			{
				name: "Successful",
				value: 3,
			},
			{
				name: "Processing",
				value: 4,
			},
			{
				name: "Declined",
				value: 5,
			},
			{
				name: "Expired",
				value: 6,
			},
			{
				name: "Failed",
				value: 7,
			},
		];

		const origin = [
			{
				name: "Principal",
				value: 1,
			},
			{
				name: "Interest",
				value: 2,
			},
		];
		const types = [
			{
				name: "All",
				value: 1,
			},
			{
				name: "Debit",
				value: 2,
			},
			{
				name: "Credit",
				value: 3,
			},
		];

		const sources = [
			{
				name: "Treasury",
				value: 0,
			},
			{
				name: "Local",
				value: 1,
			},
			{
				name: "USD",
				value: 2,
			},
		];

		const totalPages = ref(0);
		const state = reactive({
			pageNumber: 1,
			pageSize: 10,

			selectedStatus: statuses[0],
			selectedType: types[0],
			selectedOrigin: origin[0],
			selectedSource: sources[1],
			from: "",
			to: "",
		});

		const getMerchantTransactions = () => {
			loading.value = true;
			CustomerService.getMerchantTransactions(
				state.pageNumber,
				state.pageSize,
				state.selectedStatus.value,
				state.selectedType.value,
				state.selectedOrigin.value,
				state.selectedSource.value,
				state.from,
				state.to,

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

		const searchMerchantTransactions = () => {
			if (searchText.value.length > 0) {
				loading.value = true;
				CustomerService.searchMerchantTransactions(
					searchText.value,
					state.selectedSource.value,
					state.pageSize,
					state.pageNumber,
					(response) => {
						loading.value = false;
						Log.info(response);
						transactions.value = response.data.data;
						// totalPages.value = response.data.total;

						Log.info("query done");
					},
					(error) => {
						loading.value = false;
						Log.error(error);
					}
				);
			}
		};

		const checkPagesLeft = () => {
			const bool = Math.ceil(totalPages.value / state.pageSize) > state.pageNumber;
			return bool;
		};

		const prev = () => {
			if (state.pageNumber > 1) {
				// depositTransactions.value = [];
				state.pageNumber--;
			}
		};

		const next = () => {
			if (checkPagesLeft()) {
				// depositTransactions.value = [];
				state.pageNumber++;
			}
			// else {
			// 	state.pageNumber++;
			// }
		};

		const clear = () => {
			state.selectedStatus = statuses[0];
			state.selectedOrigin = origin[0];

			state.from = "";
			state.to = "";
		};

		const applyFilter = () => {
			// filterClicked.value = true;
			getMerchantTransactions();
			// filterClicked.value = false;
			const button = document.getElementById("filterMenu2");
			button.click();
		};

		const dateFormat = (date) => {
			const d = Util.formatTime(date, "YYYY-MM-DD HH:mm:ss.SSSS", "MMM DD ddd YYYY hh:mm a");
			return d;
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

		watch(
			() => state.pageNumber,
			(newValue) => {
				Log.info(newValue);
				getMerchantTransactions();
			}
		);

		watch(searchText, (newValue, oldValue) => {
			Log.info("newValue: " + newValue);
			Log.info("oldValue: " + oldValue);
			if (newValue.length < oldValue.length && newValue.length === 0) {
				Log.info("Do Query");
				getMerchantTransactions();
			} else {
				searchMerchantTransactions();
			}
		});
		return {
			transactions,
			prev,
			next,
			...toRefs(state),
			applyFilter,
			loading,
			origin,
			statuses,
			types,
			sources,
			clear,
			searchText,
			dateFormat,
			displayStyle,
		};
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
