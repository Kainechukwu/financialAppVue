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
						<div class="flex flex-col h-full pb-6">
							<!-- <div class="flex-1 h-full flex flex-col"> -->
							<div
								style="border-bottom: 1px solid #efefef"
								class="px-6 flex items-center justify-between"
							>
								<div class="my-4 flex justify-between w-full">
									<h2 class="blacktext fw-600 fs-16">Delete Director</h2>
									<div @click="close" class="cursor-pointer">
										<svg
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
								</div>
							</div>
							<div style="max-height: 500px; overflow-y: scroll" class="flex flex-col p-6">
								<div class="flex justify-center mb-8">
									<h1 class="tx-666666 fw-500 fs-16">
										Are you sure you want to delete this director?
									</h1>
								</div>
								<div class="grid grid-cols-2 gap-4">
									<div @click="close" class="cursor-pointer br-5">
										<div
											style="border: 1px solid #f1f1f1"
											class="flex justify-center items-center h-12 br-5"
										>
											<span class="blacktext fs-16 fw-500">Cancel</span>
										</div>
									</div>

									<button @click="deleteDirector" class="br-5 bg-peach">
										<div class="flex cursor-pointer items-center justify-center h-12">
											<span class="fw-500 fs-16 text-white my-auto">Delete</span>
											<div v-if="loading" class="h-4 w-4 ml-4 rounded-md block">
												<div class="roundLoader opacity-50 mx-auto"></div>
											</div>
										</div>
									</button>
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
import { onMounted, ref, toRef } from "vue";
import UserActions from "@/services/userActions/userActions.js";

import { Log, Util } from "@/components/util";

export default {
	name: "DeleteDirector",
	props: {
		open: Boolean,
		directorId: Object,
	},
	components: {},
	setup(props, context) {
		onMounted(() => {
			Log.info("hello Edits");
		});

		// const store = useStore();
		const isModalOpen = toRef(props, "open");

		const loading = ref(false);

		const close = () => {
			context.emit("close");
		};

		const deleteDirector = () => {
			loading.value = true;
			UserActions.deleteDirector(
				props.directorId,
				(response) => {
					loading.value = false;
					Util.handleGlobalAlert(true, "success", response.data.message);

					Log.info(response);
					close();
				},
				(error) => {
					loading.value = false;
					// Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					close();
					Log.error(error);
				}
			);
		};

		return {
			isModalOpen,
			close,
			deleteDirector,

			loading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
