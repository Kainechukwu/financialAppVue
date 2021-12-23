<template>
	<transition name="fadeIn">
		<div v-if="isModalOpen" class="fixed z-50 inset-0 overflow-hidden modal-blur">
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div @click="close" class="absolute inset-0 bg-gray-600 bg-opacity-75 modal-blur"></div>
				</div>

				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
				<section
					class="main inline-block bg-white align-bottom br-5 shadow-xs text-left overflow-hidden transform transition-all max-w-sm mx-auto sm:my-8 sm:align-middle sm:w-full"
				>
					<div class="w-full h-full overflow-y-auto">
						<div class="flex flex-col h-full p-6">
							<!-- <div class="flex-1 h-full flex flex-col"> -->
							<div class="flex flex-col mt-2">
								<div class="flex justify-end">
									<svg
										class="cursor-pointer"
										@click="close"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="12" cy="12" r="12" fill="#E3EEFD" />
										<path
											d="M15.5 8.5L8.5 15.5"
											stroke="#2B7EE4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M8.5 8.5L15.5 15.5"
											stroke="#2B7EE4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<span style="color: #022b69" class="mb-4 fw-600 fs-18">Plan Name</span>
								<span class="tx-666666 fw-400 fs-12 mb-4">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
									officia consequat duis enim velit mollit.
								</span>
								<span class="fs-12 fw-400 tx-666666 mb-4">
									Country:
									<span class="fw-600 blacktext">Nigeria</span>
								</span>
								<div class="flex justify-between">
									<div class="flex flex-col">
										<span class="fs-12 fw-400 tx-666666"> Customer Rate: </span>
										<span class="fw-600 blacktext fs-12">15%</span>
									</div>
									<div class="flex flex-col">
										<span class="fs-12 fw-400 tx-666666"> Selling Rate: </span>
										<span class="fw-600 blacktext fs-12">15%</span>
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
import { useStore } from "vuex";
import { computed } from "vue";

export default {
	name: "ThisPlanModal",
	setup() {
		const store = useStore();
		const isModalOpen = computed(() => store.state.thisPlanModal);
		const close = () => {
			store.commit("setThisPlanModal", false);
		};

		return {
			isModalOpen,
			close,
		};
	},
};
</script>

<style lang="scss" scoped></style>
