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
									<div class="flex items-center justify-center w-full">
										<h2 class="blacktext fw-500 fs-20">Fund Wallet</h2>
									</div>
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
							<div style="max-height: 500px" class="flex flex-col p-8">
								<span class="tx-666666 fs-14 fw-400 mb-4">
									Use this number to transfer funds to your wallet, just like any other bank number
									{{ bankDetails }}
								</span>

								<div
									class="p-4 flex flex-col"
									style="border: 1px dashed #999999; border-radius: 5px"
								>
									<div class="flex items-center justify-between mb-2">
										<span class="tx-666666 fs-14 fw-400">Account Number:</span>
										<span
											v-if="bankDetails?.accountNumber.length > 0"
											class="blackText fs-14 fw-500"
											>{{ bankDetails?.accountNumber }}</span
										>
										<span v-else class="blackText fs-14 fw-500">none</span>
									</div>

									<div class="flex items-center justify-between mb-2">
										<span class="tx-666666 fs-14 fw-400">Bank Name:</span>
										<span v-if="bankDetails?.bankName.length > 0" class="blackText fs-14 fw-500">{{
											bankDetails?.bankName
										}}</span>
										<span v-else class="blackText fs-14 fw-500">none</span>
									</div>

									<div class="flex items-center justify-between">
										<span class="tx-666666 fs-14 fw-400">Account Name:</span>
										<span
											v-if="bankDetails?.accountName.length > 0"
											class="blackText fs-14 fw-500"
											>{{ bankDetails?.accountName }}</span
										>
										<span v-else class="blackText fs-14 fw-500">none</span>
									</div>
								</div>

								<div class="flex items-center justify-center mt-5">
									<div
										@click="copy"
										style="border: 1px solid #d6e3ff; border-radius: 3px"
										class="flex items-center px-3 py-1 cursor-pointer"
									>
										<div class="mr-2">
											<svg
												width="15"
												height="15"
												viewBox="0 0 15 15"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M12.5 5.625H6.875C6.18464 5.625 5.625 6.18464 5.625 6.875V12.5C5.625 13.1904 6.18464 13.75 6.875 13.75H12.5C13.1904 13.75 13.75 13.1904 13.75 12.5V6.875C13.75 6.18464 13.1904 5.625 12.5 5.625Z"
													stroke="#666666"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M3.125 9.375H2.5C2.16848 9.375 1.85054 9.2433 1.61612 9.00888C1.3817 8.77446 1.25 8.45652 1.25 8.125V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H8.125C8.45652 1.25 8.77446 1.3817 9.00888 1.61612C9.2433 1.85054 9.375 2.16848 9.375 2.5V3.125"
													stroke="#666666"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</div>
										<span class="tx-666666 fs-12 fw-300"> Copy account details </span>
									</div>
								</div>
								<div
									style="color: #444444; background-color: #f2f6ff; border-radius: 5px"
									class="flex flex-col mt-5 p-3"
								>
									<span class="fs-12 fw-400"
										>Bank transfers from third party accounts will be applied to your account after
										24hrs. For instant transactions.</span
									>
									<span class="fs-12 fw-400">Please send funds from accounts owned by you.</span>
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
import { onMounted, toRef, computed } from "vue";
import { useStore } from "vuex";
// import UserActions from "@/services/userActions/userActions.js";
// import { Log, Util } from "@/components/util";

export default {
	name: "AddFundsNaija",
	props: {
		open: Boolean,
	},
	components: {},
	setup(props, context) {
		onMounted(() => {});

		const store = useStore();
		const isModalOpen = toRef(props, "open");
		// const valueToCopy = ref("Account Details");
		const bankDetails = computed(() => store.getters["bankDetails/naijaBankDetails"]);

		const close = () => {
			context.emit("close");
		};

		const getCopy = () => {
			return `Account Name: ${bankDetails.value.accountName}, Account Number: ${bankDetails.value.accountNumber}, Bank Name: ${bankDetails.value.bankName}`;
		};

		const copy = () => {
			navigator.clipboard.writeText(JSON.stringify(getCopy()));
		};

		return {
			isModalOpen,
			close,
			copy,
			bankDetails,
		};
	},
};
</script>

<style lang="scss" scoped></style>
