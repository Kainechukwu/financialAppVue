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
							<h1 class="fw-600 blacktext fs-20 my-3">Reject Transaction</h1>

							<div class="px-6 w-full flex flex-col">
								<div class="mb-6">
									<p class="fs-14 fw-400 tx-666666 text-center">
										Are you sure you want to reject this transaction. The status will be changed to
										<span class="fs-14 fw-600 blacktext">“Failed”</span>
									</p>
								</div>
								<div class="flex justify-end items-center mt-3">
									<div
										style="background-color: #ff7875"
										class="cursor-pointer fs-14 fw-500 w-full h-11 br-5 flex items-center justify-center"
									>
										<span class="text-white">Reject</span>
									</div>
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
import { computed } from "vue";
import { useStore } from "vuex";
import ConfirmOrRejectSvg from "@/components/svg/ConfirmOrRejectSvg.vue";
export default {
	name: "RejectTransactionModal",
	components: {
		ConfirmOrRejectSvg,
	},
	setup() {
		const store = useStore();
		const isModalOpen = computed(() => store.state.rejectTransaction);
		const close = () => {
			store.commit("setRejectTransaction", false);
		};
		return {
			isModalOpen,
			close,
		};
	},
};
</script>

<style lang="scss" scoped></style>
