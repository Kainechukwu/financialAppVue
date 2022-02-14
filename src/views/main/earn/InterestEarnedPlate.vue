<template>
	<div class="flex h-full flex-col bg-white br-10 px-4">
		<div class="flex flex-col my-4">
			<div class="flex justify-between h-6">
				<span class="tx-999999 fw-400 fs-12">Interest Earned</span>
				<!-- <div style="background-color: #f2f6ff" class="br-5 flex p-2 justify-between items-center">
				<span class="tx-666666 mr-5 fw-500 fs-10">Today</span>
				<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 1L4.015 3.96622L7.03 1"
						stroke="#BFBFBF"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div> -->
				<Listbox as="div" v-model="selected">
					<!-- <ListboxLabel class="hidden block fs-14 tx-666666 fw-600"> Currencies </ListboxLabel> -->
					<div class="h-full relative">
						<ListboxButton
							style="background-color: #f2f6ff; min-width: 5rem"
							class="br-5 flex p-2 h-6 justify-between items-center"
						>
							<span class="block tx-666666 mr-5 fw-500 fs-10">{{ selected.period }}</span>
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
								class="absolute right-0 z-10 w-28 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
							>
								<ListboxOption
									as="template"
									v-for="period in periods"
									:key="period.value"
									:value="period"
									v-slot="{ active, selected }"
								>
									<li
										:class="[
											active ? 'blacktext bg-gray-100' : 'blacktext',
											'cursor-default  select-none relative py-2 pl-3 pr-9',
										]"
									>
										<span class="fs-10" :class="[selected ? 'fw-700 ' : 'fw-500 ']">
											{{ period.period }}
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
			</div>
			<div class="flex flex-col justify-between mt-1">
				<span class="fw-400 fs-24 blacktext counter">${{ interest }}</span>
				<span class="fw-400 fs-14 tx-666666"
					>Here is an overview of your earnings from your investments.</span
				>
				<!-- <slot></slot> -->
			</div>
		</div>
	</div>
</template>

<script>
import counterUp from "counterup2";
import { onMounted, ref, watch } from "vue";
import { Log, Util, Constants } from "@/components/util";
import UserActions from "@/services/userActions/userActions.js";
import { useStore } from "vuex";

import {
	Listbox,
	ListboxButton,
	// ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
export default {
	name: "InterestEarnedPlate",
	components: {
		Listbox,
		ListboxButton,
		// ListboxLabel,
		ListboxOption,
		ListboxOptions,
	},
	setup() {
		onMounted(() => {
			getEarnings();
			counter();
		});
		const store = useStore();
		const userId = store.getters["authToken/userId"];
		const periods = [
			{ period: "Today", value: 1 },
			{ period: "Yesterday", value: 2 },
			{ period: "Last 7 days", value: 3 },
			{ period: "Last 30 days", value: 4 },
		];
		const selected = ref(periods[0]);

		const getEarnings = () => {
			UserActions.getEarnings(
				userId,
				selected.value.value,
				(response) => {
					Log.info(response);

					interest.value = Util.currencyFormatter(
						response.data.data.amountEarned,
						Constants.currencyFormat
					);
					// Util.handleGlobalAlert(true, "success", "fetched");
				},
				(error) => {
					Log.error(error);
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};

		const interest = ref(Util.currencyFormatter(0, Constants.currencyFormat));

		const counter = () => {
			const items = document.querySelectorAll(".counter");

			// Start counting, do this on DOM ready or with Waypoints.
			items.forEach((el) => {
				counterUp(el, {
					duration: 900,
					delay: 16,
				});
			});
		};

		watch(selected, (newValue) => {
			Log.info(newValue);
			getEarnings();
		});
		return { periods, selected, interest };
	},
};
</script>

<style lang="scss" scoped></style>
