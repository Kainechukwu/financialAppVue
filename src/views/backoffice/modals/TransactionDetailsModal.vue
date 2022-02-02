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
						<div class="flex flex-col h-full">
							<!-- <div class="flex-1 h-full flex flex-col"> -->
							<div
								style="border-bottom: 1px solid #efefef"
								class="px-6 flex items-center justify-between p-4"
							>
								<div class="">
									<h2 class="blacktext fw-600 fs-16">Account Details</h2>
								</div>

								<div @click="close">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M18 6L6 18"
											stroke="#999999"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M6 6L18 18"
											stroke="#999999"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
							<div class="p-6 flex flex-col">
								<div class="grid grid-cols-2 mb-3">
									<div class="flex flex-col">
										<span class="fw-400 fs-12 tx-666666">Account Holder:</span>
										<span class="fw-600 fs-12 blacktext">Bonfree LLC</span>
									</div>

									<div class="flex flex-col">
										<span class="fw-400 fs-12 tx-666666">Account Number:</span>
										<span class="fw-600 fs-12 blacktext">0123456789</span>
									</div>
								</div>

								<!-- --------------- -->
								<div class="grid grid-cols-2 mb-3">
									<div class="flex flex-col">
										<span class="fw-400 fs-12 tx-666666">Bank Name:</span>
										<span class="fw-600 fs-12 blacktext">Community Federal Savings Bank</span>
									</div>

									<div class="flex flex-col">
										<span class="fw-400 fs-12 tx-666666">Routing No:</span>
										<span class="fw-600 fs-12 blacktext">3627423120</span>
									</div>
								</div>

								<!-- --------------- -->
								<div class="grid grid-cols-2 mb-3">
									<div class="flex flex-col">
										<span class="fw-400 fs-12 tx-666666">Bank Address:</span>
										<span class="fw-600 fs-12 blacktext">12 Ajifoluke Lekki off silverbird</span>
									</div>
								</div>

								<!-- --------------- -->
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
	name: "TransactionDetailsModal",
	setup() {
		const store = useStore();

		const isModalOpen = computed(() => store.state.transactionDetailsModal);
		const close = () => {
			store.commit("setTransactionDetailsModal", false);
		};

		return {
			isModalOpen,
			close,
		};
	},
};
</script>

<style lang="scss" scoped></style>
