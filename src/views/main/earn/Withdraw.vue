<template>
	<div
		style="border: 1px solid #f1f1f1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
		class="ml-6 bg-white flex flex-col br-10 pt-4 pb-8"
	>
		<div class="flex px-4 pb-3 items-center justify-between border-b border-gray-100">
			<div>
				<span class="fw-600 fs-16 blacktext">Withdraw Funds</span>
			</div>
			<div>
				<CancelSvg />
			</div>
		</div>
		<!-- --------------------- -->
		<div class="mt-6">
			<div class="flex flex-col px-4">
				<span class="fw-400 fs-14 tx-666666 mb-3">How much would you like to withdraw</span>
				<div class="flex br-5 h-12">
					<Listbox as="div" v-model="selectedCurrency">
						<div class="h-full relative">
							<ListboxButton
								class="text-gray-400 h-full bg-gray-100 w-20 pr-2 pl-1 py-2 focus:outline-none sm:text-sm rounded-l-md"
							>
								<span class="block truncate">{{ selectedCurrency }}</span>
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
									class="absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-b-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
								>
									<ListboxOption
										as="template"
										v-for="currency in currencies"
										:key="currency"
										:value="currency"
										v-slot="{ active, selectedCurrency }"
									>
										<li
											:class="[
												active ? 'blacktext bg-gray-100' : 'blacktext',
												'cursor-default select-none relative py-2 pl-3 pr-9',
											]"
										>
											<span
												:class="[
													selectedCurrency ? 'font-semibold' : 'font-normal',
													'block truncate',
												]"
											>
												{{ currency }}
											</span>

											<span
												v-if="selectedCurrency"
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
					<input
						class="pl-3 w-full rounded-r-md border border-gray-100 text-gray-900 focus:outline-none sm:text-sm"
						type="text"
						placeholder="1000.00"
					/>
				</div>
				<span class="fs-12 fw-400 tx-666666 mt-3"
					>Available Balance: <span class="fs-12 fw-600 blacktext">$40,000</span></span
				>

				<span class="mt-6 mb-4">Payment Method</span>

				<div class="grid grid-cols-2 gap-4 mb-6">
					<div class="col-span-1">
						<div
							style="border: 1.5px solid #99b8ff; background-color: #f2f6ff"
							class="flex br-5 p-2.5"
						>
							<div class="mr-2">
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="30" height="30" rx="5" fill="#F2F2F2" />
									<g clip-path="url(#clip0_1582_16303)">
										<path
											opacity="0.4"
											d="M22.5625 8.8125H11.3125C11.3125 10.0562 10.3062 11.0625 9.0625 11.0625V15.5625C10.3062 15.5625 11.3125 16.5688 11.3125 17.8125H22.5625C22.5625 16.5688 23.5688 15.5625 24.8125 15.5625V11.0625C23.5688 11.0625 22.5625 10.0562 22.5625 8.8125ZM16.9369 16.6875C15.3836 16.6875 14.1244 15.1764 14.1244 13.3125C14.1244 11.4485 15.3836 9.9375 16.9369 9.9375C18.4902 9.9375 19.7494 11.4485 19.7494 13.3125C19.7494 15.1764 18.4903 16.6875 16.9369 16.6875ZM5.6875 20.0625V9.375C4.75551 9.375 4 10.1306 4 11.0625V20.625C4 21.8676 5.00737 22.875 6.25 22.875H21.4375C22.3695 22.875 23.125 22.1194 23.125 21.1875H6.8125C6.19115 21.1875 5.6875 20.6838 5.6875 20.0625Z"
											fill="#444444"
										/>
										<path
											d="M24.8125 7.125H9.0625C8.13058 7.125 7.375 7.88058 7.375 8.8125V17.8125C7.375 18.7444 8.13058 19.5 9.0625 19.5H24.8125C25.7446 19.5 26.5 18.7444 26.5 17.8125V8.8125C26.5 7.88058 25.7446 7.125 24.8125 7.125ZM24.8125 15.5625C23.5688 15.5625 22.5625 16.5688 22.5625 17.8125H11.3125C11.3125 16.5688 10.3062 15.5625 9.0625 15.5625V11.0625C10.3062 11.0625 11.3125 10.0562 11.3125 8.8125H22.5625C22.5625 10.0562 23.5688 11.0625 24.8125 11.0625V15.5625Z"
											fill="#444444"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1582_16303">
											<rect width="22.5" height="18" fill="white" transform="translate(4 6)" />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div class="flex flex-col w-full">
								<div class="flex justify-between">
									<span class="blacktext fw-600 fs-14">Bank Transfer</span>
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 6C0 2.67273 2.67273 0 6 0C9.32727 0 12 2.67273 12 6C12 9.32727 9.32727 12 6 12C2.67273 12 0 9.32727 0 6ZM5.1 8.64535L9.46364 4.11808C9.57273 4.00899 9.57273 3.84535 9.46364 3.76353L9.08182 3.38171C8.97273 3.27262 8.80909 3.27262 8.7 3.38171H8.67273L5.01818 7.17262C4.96364 7.22717 4.88182 7.22717 4.82727 7.17262L3.32727 5.56353L3.3 5.53626C3.19091 5.42717 3.02727 5.42717 2.91818 5.53626L2.53636 5.91808C2.48182 5.97262 2.45454 6.05444 2.45454 6.10899C2.45454 6.16353 2.48182 6.24535 2.53636 6.2999L2.59091 6.35444L4.71818 8.64535C4.74545 8.6999 4.82727 8.72717 4.90909 8.72717C4.99091 8.72717 5.04545 8.6999 5.1 8.64535Z"
											fill="#75A0FF"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 6C0 2.67273 2.67273 0 6 0C9.32727 0 12 2.67273 12 6C12 9.32727 9.32727 12 6 12C2.67273 12 0 9.32727 0 6ZM5.1 8.64535L9.46364 4.11808C9.57273 4.00899 9.57273 3.84535 9.46364 3.76353L9.08182 3.38171C8.97273 3.27262 8.80909 3.27262 8.7 3.38171H8.67273L5.01818 7.17262C4.96364 7.22717 4.88182 7.22717 4.82727 7.17262L3.32727 5.56353L3.3 5.53626C3.19091 5.42717 3.02727 5.42717 2.91818 5.53626L2.53636 5.91808C2.48182 5.97262 2.45454 6.05444 2.45454 6.10899C2.45454 6.16353 2.48182 6.24535 2.53636 6.2999L2.59091 6.35444L4.71818 8.64535C4.74545 8.6999 4.82727 8.72717 4.90909 8.72717C4.99091 8.72717 5.04545 8.6999 5.1 8.64535Z"
											fill="#75A0FF"
										/>
									</svg>
								</div>
								<span class="fw-400 fs-10 tx-666666">Charges: $5</span>
							</div>
						</div>
					</div>

					<!-- ------------ -->
				</div>

				<div class="flex flex-col mb-10">
					<span class="fs-14 fw-700 blacktext mb-2">Instructions</span>
					<span class="fs-14 fw-400 blacktext">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus diam mi adipiscing nisl
						velit. Id at enim sed cursus morbi aliquet eu blandit. A et cras molestie pellentesque.
					</span>
				</div>

				<div
					@click="goToBankDetails"
					style="background-color: #2b7ee4"
					class="mx-auto flex items-center justify-center h-12 w-52 br-5"
				>
					<span class="fw-500 fs-16 text-white"> Continue</span>
				</div>
			</div>
		</div>
		<!-- ------------------ -->
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import CancelSvg from "./CancelSvg.vue";
import { ref } from "vue";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";

export default {
	name: "Withdraw",
	components: {
		CancelSvg,
		Listbox,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
	},
	setup() {
		const router = useRouter();

		const goToBankDetails = () => {
			router.push("/bank_details");
		};
		const currencies = ["USD", "EURO"];
		const selectedCurrency = ref(currencies[0]);
		return {
			goToBankDetails,
			currencies,
			selectedCurrency,
		};
	},
};
</script>

<style lang="scss" scoped></style>
