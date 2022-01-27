<template>
	<div class="bg-white flex flex-col br-10 pt-4 pb-8">
		<div class="flex px-4 pb-3 items-center justify-between">
			<div>
				<span class="animate-pulse fw-600 fs-16 animate-pulse blacktext"></span>
			</div>
			<div></div>
		</div>
		<!-- --------------------- -->
		<div class="mt-6">
			<div class="flex flex-col px-4">
				<span class="fw-400 fs-14 tx-666666 mb-3 animate-pulse"></span>
				<div class="flex br-5 h-12">
					<Listbox as="div">
						<div class="h-full relative">
							<ListboxButton
								class="animate-pulse text-gray-400 h-full bg-gray-100 w-20 pr-2 pl-1 py-2 focus:outline-none sm:text-sm rounded-l-md"
							>
								<span class="block truncate"></span>
								<span
									class="absolute inset-y-0 right-0 flex items-center justify-center pr-2 pointer-events-none"
								>
									<div
										class="animate-pulse h-5 my-auto flex items-center justify-center text-gray-400"
									></div>
								</span>
							</ListboxButton>

							<transition
								leave-active-class="transition ease-in duration-100"
								leave-from-class="opacity-100"
								leave-to-class="opacity-0"
							>
								<ListboxOptions
									class="animate-pulse absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-b-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
								>
									<ListboxOption as="template"> </ListboxOption>
								</ListboxOptions>
							</transition>
						</div>
					</Listbox>
					<div
						class="pl-3 w-full rounded-r-md border border-gray-100 text-gray-900 focus:outline-none sm:text-sm"
						type="number"
					></div>
				</div>
				<span class="fs-12 fw-400 tx-666666 mt-3">
					<span class="animate-pulse fs-12 fw-600 blacktext"></span
				></span>

				<span class="animate-pulse mt-6 mb-4"></span>

				<div class="grid grid-cols-2 gap-4 mb-6">
					<div class="col-span-1animate-pulse">
						<div
							style="border: 1.5px solid #99b8ff; background-color: #f2f6ff"
							class="flex br-5 p-2.5"
						>
							<div class="mr-2 animate-pulse"></div>
							<div class="flex flex-col w-full">
								<div class="animate-pulse flex justify-between">
									<span class="blacktext fw-600 fs-14"></span>
								</div>
								<span class="fw-400 fs-10 tx-666666"></span>
							</div>
						</div>
					</div>

					<!-- ------------ -->
				</div>

				<!-- <div class="flex flex-col mb-10">
					<span class="fs-14 fw-700 blacktext mb-2">Instructions</span>
					<span class="fs-14 fw-400 blacktext">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus diam mi adipiscing nisl
						velit. Id at enim sed cursus morbi aliquet eu blandit. A et cras molestie pellentesque.
					</span>
				</div> -->

				<div
					style="background-color: #2b7ee4"
					class="animate-pulse mx-auto cursor-pointer flex items-center justify-center h-12 w-52 br-5"
				>
					<span class="fw-500 fs-16 text-white"> </span>
				</div>
			</div>
		</div>
		<!-- ------------------ -->
	</div>
</template>

<script>
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";

export default {
	name: "Earn Deposit Loading",
	components: {
		Listbox,
		ListboxButton,
		ListboxOption,
		ListboxOptions,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
