<template>
	<!-- <div class="main-page p-8 h-full"> -->
	<div class="flex flex-col justify-start">
		<div class="mb-6">
			<!-- <h1 class="fw-600 fs-24 blacktext mb-4">Customers</h1> -->
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
					<option selected="" class="hidden rounded-md">Filter</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
				<!-- </div> -->
				<!-- <div class="relative">
					<Listbox as="div" v-model="selected">
					
						<div class="mt-1 relative">
							<ListboxButton
								class="bg-white h-12 mt-1 relative w-full border border-gray-200 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
							>
								<span class="block truncate">{{ selected }}</span>
								<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
									<div class="h-5 w-5 text-gray-400">
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
									class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
								>
									<ListboxOption
										as="template"
										v-for="item in items"
										:key="item"
										:value="item"
										v-slot="{ active, selected }"
									>
									
										<li
											:class="[
												active ? 'blacktext bg-gray-100' : 'blacktext',
												'cursor-default select-none relative py-2 pl-3 pr-9',
											]"
										>
											<span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
												{{ item }}
											</span>

											<span
												v-if="selected"
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
			</div>
		</div>

		<!-- --------Table--------- -->
		<div class="flex flex-col">
			<!-- -------Table-------- -->
			<div class="flex flex-col">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div class="overflow-hidden border-b border-gray-100 sm:rounded-lg">
							<div
								v-if="customers.length === 0"
								class="py-56 w-full bg-white flex flex-col items-center justify-center"
							>
								<div>
									<svg
										width="109"
										height="109"
										viewBox="0 0 109 109"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M77.2082 95.375V86.2917C77.2082 81.4736 75.2942 76.8528 71.8873 73.4459C68.4804 70.039 63.8596 68.125 59.0415 68.125H22.7082C17.8901 68.125 13.2693 70.039 9.8624 73.4459C6.45549 76.8528 4.5415 81.4736 4.5415 86.2917V95.375"
											stroke="#999999"
											stroke-width="8"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M40.8752 49.9583C50.9083 49.9583 59.0418 41.8248 59.0418 31.7917C59.0418 21.7585 50.9083 13.625 40.8752 13.625C30.842 13.625 22.7085 21.7585 22.7085 31.7917C22.7085 41.8248 30.842 49.9583 40.8752 49.9583Z"
											stroke="#999999"
											stroke-width="8"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M104.458 95.3749V86.2916C104.455 82.2664 103.116 78.3563 100.649 75.175C98.1834 71.9938 94.7306 69.7216 90.8333 68.7153"
											stroke="#999999"
											stroke-width="8"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M72.6667 14.2153C76.5745 15.2159 80.038 17.4885 82.5114 20.675C84.9848 23.8615 86.3274 27.7805 86.3274 31.8143C86.3274 35.8481 84.9848 39.7671 82.5114 42.9536C80.038 46.1401 76.5745 48.4127 72.6667 49.4133"
											stroke="#999999"
											stroke-width="8"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<span style="color: #999999" class="mt-6 fs-16 fw-400"
									>No customers have been added</span
								>
							</div>

							<div v-else class="px-4 bg-white py-2">
								<table class="min-w-full divide-y divide-gray-100">
									<thead class="bg-white">
										<tr>
											<th
												scope="col"
												class="pr-6 pl-4 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Cust ID
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Customer Name
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Merch ID
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Email Address
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Account No
											</th>

											<th
												scope="col"
												class="sr-only px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												View
											</th>
										</tr>
									</thead>

									<tbody class="bg-white divide-y divide-gray-100">
										<tr class="" v-for="customer in customers" :key="customer.customerId">
											<td class="pr-6 pl-4 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ customer.customerId }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ customer.customerName }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ customer.merchantId }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ customer.emailAddress }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ customer.accountNumber }}
											</td>
											<td
												style="color: #1860b9"
												class="px-6 py-4 cursor-pointer whitespace-nowrap fs-14 fw-500"
											>
												<router-link :to="`/customers/transactions/${customer.merchantId}`"
													>view</router-link
												>
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
import UserActions from "@/services/userActions/userActions.js";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { Log } from "@/components/util";
// import {
// 	Listbox,
// 	ListboxButton,
// 	// ListboxLabel,
// 	ListboxOption,
// 	ListboxOptions,
// } from "@headlessui/vue";

export default {
	name: "Customer List",
	components: {
		// Listbox,
		// ListboxButton,
		// ListboxOption,
		// ListboxOptions,
		// CheckIcon,
		// SelectorIcon,
	},
	setup() {
		onMounted(() => {
			UserActions.getCustomers(
				merchantId,
				(response) => {
					Log.info(response);
					customers.value = response.data.data;
				},
				(error) => {
					Log.info(error);
				}
			);
		});
		const store = useStore();
		// const router = useRouter();
		const merchantId = store.getters["authToken/userId"];
		const customers = ref([]);
		// const goToUserTransactions = (merchantId) => {
		// 	router.push(`/customers/transactions/${merchantId}`);
		// };
		// const items = ["1", "2", "3", "4"];
		// const selected = ref(items.value[0]);

		return {
			customers,
			// goToUserTransactions,
			// items,
			// selected
		};
	},
};
</script>

<style lang="scss" scoped>
// select {
// -moz-appearance: none; /* Firefox */
// -webkit-appearance: none; /* Safari and Chrome */
// appearance: none;
// position: relative;
// right: 20px;
// }
</style>
