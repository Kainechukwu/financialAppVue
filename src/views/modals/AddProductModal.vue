<template>
	<transition name="fadeIn">
		<div v-if="isModalOpen" class="fixed z-50 inset-0 overflow-hidden modal-blur">
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div @click="close" class="absolute inset-0 bg-gray-800 bg-opacity-75 modal-blur"></div>
				</div>

				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
				<section
					class="main inline-block bg-white align-bottom br-5 shadow-xs text-left overflow-hidden transform transition-all max-w-lg mx-auto sm:my-8 sm:align-middle sm:w-full"
				>
					<div class="w-full h-full overflow-y-auto">
						<div class="flex flex-col h-full py-6">
							<!-- <div class="flex-1 h-full flex flex-col"> -->
							<div
								style="border-bottom: 1px solid #efefef"
								class="px-6 flex items-center justify-between mb-4"
							>
								<div class="">
									<h2 class="blacktext fw-600 fs-16">Add Product</h2>
								</div>
							</div>
							<div style="border-bottom: 1px solid #efefef" class="p-6 flex flex-col">
								<div class="mb-6">
									<label for="Product Name" class="fs-14 fw-400 tx-666666">Product Name</label>
									<input
										id="Product Name"
										name="Product Name"
										type="text"
										autocomplete="off"
										required=""
										placeholder=""
										class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:z-10 sm:text-sm"
									/>
								</div>
								<div class="mb-6">
									<label for="Description" class="fs-14 fw-400 tx-666666">Description</label>
									<input
										id="Description"
										name="Description"
										type="text"
										autocomplete="off"
										required=""
										placeholder=""
										class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:z-10 sm:text-sm"
									/>
								</div>
								<div class="grid grid-cols-2 mb-6 gap-4">
									<div class="">
										<label for="Customer's Rate" class="fs-14 fw-400 tx-666666"
											>Customer's Rate</label
										>
										<input
											id="Customer's Rate"
											name="Customer's Rate"
											type="text"
											autocomplete="off"
											required=""
											placeholder="12%"
											class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:z-10 sm:text-sm"
										/>
									</div>
									<div class="">
										<label for="Selling Rate" class="fs-14 fw-400 tx-666666">Selling Rate</label>
										<input
											id="Selling Rate"
											name="Selling Rate"
											type="text"
											autocomplete="off"
											required=""
											placeholder="12%"
											class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:z-10 sm:text-sm"
										/>
									</div>
								</div>
								<div class="mb-4">
									<label for="Country" class="fs-14 fw-400 tx-666666">Country</label>
									<select
										id="Country"
										name="Country"
										class="mt-1.5 text-gray-400 br-5 h-11 relative block w-full px-3 py-2 border border-gray-200 focus:z-10 sm:text-sm focus:outline-none"
									>
										<option>United States</option>
										<option selected="">Nigeria</option>
										<option>Mexico</option>
									</select>
								</div>
							</div>
							<div class="flex justify-end items-center mt-6 px-6">
								<div
									class="cursor-pointer greenButton fs-14 fw-500 w-2/5 h-11 br-5 flex items-center justify-center"
								>
									<span class="text-white">Add Product</span>
								</div>
							</div>
							<!-- </div> -->
						</div>
					</div>
				</section>
			</div>
		</div>
	</transition>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
	name: "AddProductModal",
	setup() {
		const store = useStore();
		const isModalOpen = computed(() => store.state.addProductModal);
		const close = () => {
			store.commit("setAddProductModal", false);
		};

		return {
			isModalOpen,
			close,
		};
	},
};
</script>

<style lang="scss" scoped></style>
