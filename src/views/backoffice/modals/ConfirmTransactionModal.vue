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
					class="main inline-block bg-white align-bottom br-5 shadow-xs text-left overflow-hidden transform transition-all max-w-md mx-auto sm:my-8 sm:align-middle sm:w-full"
				>
					<div class="w-full h-full overflow-y-auto">
						<div class="flex flex-col h-full py-10 justify-center items-center">
							<ConfirmOrRejectSvg @click="close" />
							<h1 class="fw-600 blacktext fs-20 my-3">Confirm Transaction</h1>

							<div class="px-6 w-full flex flex-col">
								<div class="mb-6">
									<label for="Plan Name" class="fs-14 fw-400 tx-666666"
										>Enter transaction reference found in bank statement</label
									>
									<input
										id="Plan Name"
										name="Plan Name"
										type="text"
										v-model="transactionRef"
										autocomplete="off"
										required=""
										placeholder=""
										class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									/>
								</div>
								<div class="flex justify-end items-center mt-3">
									<button
										@click="approveTransaction"
										:disabled="loading"
										class="cursor-pointer greenButton fs-14 fw-500 w-full h-11 br-5 flex items-center justify-center"
									>
										<div class="flex items-center justify-center">
											<span class="text-white">Confirm</span>
											<div v-if="loading" class="h-4 w-4 ml-4 rounded-md block">
												<div class="roundLoader opacity-50 mx-auto"></div>
											</div>
										</div>
									</button>
								</div>
								<div class="flex justify-end items-center mt-6">
									<div
										@click="close"
										class="cursor-pointer bg-transparent border border-gray-200 fs-14 fw-500 w-full h-11 br-5 flex items-center justify-center"
									>
										<span style="color: rgba(21, 25, 32, 0.5)" class="fs-14 fw-400">Cancel</span>
									</div>
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
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import ConfirmOrRejectSvg from "@/components/svg/ConfirmOrRejectSvg.vue";
import BackOfficeActions from "@/services/backOfficeActions/backOfficeActions.js";
import { Log, Util } from "@/components/util";
export default {
	name: "ConfirmTransactionModal",
	components: {
		ConfirmOrRejectSvg,
	},
	setup() {
		onMounted(() => {
			Log.info("vvvs" + confirmNo);
		});
		const store = useStore();
		const isModalOpen = computed(() => store.state.confirmTransaction);
		const close = () => {
			store.commit("setConfirmTransaction", false);
		};
		const loading = ref(false);

		const approveTransaction = () => {
			loading.value = true;
			BackOfficeActions.approveDeposit(
				{
					transactionReference: transactionRef.value,
					confirmationNumber: confirmNo,
				},
				(response) => {
					Log.info(response);
					loading.value = false;
					close();
					Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					Log.error(error);
					loading.value = false;
					close();
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};
		const transactionRef = ref("");
		const confirmNo = store.getters["backOffice/confirmNum"];
		return {
			isModalOpen,
			close,
			transactionRef,
			approveTransaction,
			loading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
