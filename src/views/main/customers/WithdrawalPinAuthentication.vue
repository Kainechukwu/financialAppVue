<template>
	<transition name="fadeIn">
		<div v-if="isModalOpen" class="fixed z-50 inset-0 overflow-hidden modal-blur">
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div @click="close" class="absolute inset-0 bg-gray-800 bg-opacity-75 modal-blur"></div>
				</div>

				<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
				<section
					class="main inline-block bg-white align-bottom br-5 shadow-xs text-left overflow-hidden transform transition-all max-w-sm mx-auto sm:my-8 sm:align-middle sm:w-full"
				>
					<div class="w-full h-full overflow-y-auto flex flex-col">
						<div style="border: 1px solid #f4f4f4" class="flex items-center px-6 py-4">
							<div class="w-full flex justify-center">
								<span class="fw-500 fs-14 blacktext">Authentication Pin</span>
							</div>
							<div @click="close" class="ml-auto">
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
						<div class="flex flex-col justify-center items-center p-6">
							<div class="flex justify-center mb-4">
								<OtpNumberSvg />
							</div>
							<div class="w-10/12 flex justify-center">
								<span class="text-center">Enter your 6-digit transaction PIN</span>
							</div>
							<form class="mt-8" action="#">
								<!-- <input type="hidden" name="remember" value="true" /> -->
								<div class="">
									<!-- --------------- -->

									<div class="mb-4 grid grid-cols-6 gap-2 h-12">
										<input
											@keyup="clickEvent('code01', 'code02')"
											id="code01"
											maxlength="1"
											name="code01"
											type="text"
											v-model="code1"
											autocomplete="off"
											required=""
											autofocus
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code02', 'code03')"
											id="code02"
											maxlength="1"
											name="code02"
											type="text"
											v-model="code2"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code03', 'code04')"
											id="code03"
											maxlength="1"
											name="code03"
											type="text"
											v-model="code3"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code04', 'code05')"
											id="code04"
											maxlength="1"
											name="code04"
											type="text"
											v-model="code4"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code05', 'code06')"
											id="code05"
											maxlength="1"
											name="code05"
											type="text"
											v-model="code5"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											id="code06"
											name="code06"
											maxlength="1"
											type="text"
											v-model="code6"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>
									</div>

									<!-- ------------ -->
									<span class="text-red-500">{{ errorMessage }}</span>
								</div>

								<div class="mt-8">
									<!-- :disabled="submitLoading" -->
									<div
										@click="submitCode"
										class="cursor-pointer mx-auto greenButton fs-14 fw-500 w-8/12 h-14 br-5 flex items-center justify-center"
									>
										<div class="flex items-center justify-center">
											<span class="text-white">Authorize Transaction</span>
											<div v-if="submitLoading" class="h-4 w-4 ml-4 rounded-md block">
												<div class="roundLoader opacity-50 mx-auto"></div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		</div>
	</transition>
	<!-- <div>otp</div> -->
</template>

<script>
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
// import UserActions from "@/services/userActions/userActions.js";
import OtpNumberSvg from "@/components/svg/OtpNumberSvg.vue";
import { onMounted, watch, computed } from "vue";
import { reactive, toRefs, ref, toRef } from "vue";
import CustomerService from "@/services/userActions/customerService.js";

import { Log, Util } from "@/components/util";
// import { useRouter } from "vue-router";

export default {
	name: "WithdrawalPinAuthentication",
	components: {
		OtpNumberSvg,
	},
	// methods: {
	// 	forceUpdate() {
	// 		this.$forceUpdate();
	// 	},
	// },
	props: {
		open: Boolean,
	},
	setup(props, context) {
		onMounted(() => {
			// document.getElementById("code01").focus();
		});
		// const router = useRouter();

		const codes = reactive({
			code1: "",
			code2: "",
			code3: "",
			code4: "",
			code5: "",
			code6: "",
		});
		const store = useStore();
		const errorMessage = ref("");
		const submitLoading = ref(false);
		const isModalOpen = toRef(props, "open");
		const customerWithdrawalDetails = computed(() => store.getters["customer/transactionDetails"]);

		// const router = useRouter();
		function clickEvent(e, next) {
			// Log.info(String(curr) + " " + String(next));
			Log.info(e);

			const curr = document.getElementById(e);
			if (curr.value.length > 0) {
				document.getElementById(next).focus();
			}
		}
		// const getCodes
		const prepareDetails = () => {
			const code =
				codes.code1 + codes.code2 + codes.code3 + codes.code4 + codes.code5 + codes.code6;

			const obj = {
				customerId: store.getters["customer/customerId"],
				product: customerWithdrawalDetails.value.product,
				transactionRefCode: customerWithdrawalDetails.value.transactionRefCode,
				amount: customerWithdrawalDetails.value.amount,
				pin: code,
			};

			return obj;
		};

		const resetInput = () => {
			codes.code1 = "";
			codes.code2 = "";
			codes.code3 = "";
			codes.code4 = "";
			codes.code5 = "";
			codes.code6 = "";
		};

		const submitCode = () => {
			Log.info("pin: " + JSON.stringify(prepareDetails()));
			submitLoading.value = true;

			if (prepareDetails().pin.length < 6) {
				submitLoading.value = false;
				errorMessage.value = "All fields must be filled";
			} else {
				CustomerService.customerConfirmWithdrawal(
					prepareDetails(),
					(response) => {
						submitLoading.value = false;
						Log.info("transaction withdrawal response" + String(response));
						close();
						resetInput();
						context.emit("success");
					},
					(error) => {
						submitLoading.value = false;
						Log.error("naija withdrawal response " + String(error));
						// errorMessage.value = error.response.data.Message;
						// // store.commit("setNaijaTransactionSuccessfulModal", true);

						close();
						resetInput();

						Util.handleGlobalAlert(true, "failed", error.response.data.Message);

						// close();

						Log.info(store.state.naijaTransactionSuccessfulModal);
					}
				);
				Log.info(prepareDetails());
			}
		};
		const close = () => {
			context.emit("close");
			errorMessage.value = "";
		};

		watch(codes, (newValue) => {
			let inputCodes = prepareDetails().pin;
			if (inputCodes.length === 6) {
				errorMessage.value = "";
			}
			Log.info(newValue);
		});

		return {
			close,
			isModalOpen,
			submitCode,
			...toRefs(codes),
			clickEvent,
			errorMessage,
			submitLoading,
			// del,
		};
	},
};
</script>

<style lang="scss" scoped></style>
