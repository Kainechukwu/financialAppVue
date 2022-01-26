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
					<div class="w-full h-full overflow-y-auto p-6">
						<div class="flex flex-col justify-center items-center">
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
							<div class="flex justify-center mb-4">
								<OtpNumberSvg />
							</div>
							<div class="w-10/12 flex justify-center">
								<span class="text-center"
									>A 6-digit verification code has been sent to your phone number</span
								>
							</div>
							<form class="mt-8" action="#" method="POST">
								<!-- <input type="hidden" name="remember" value="true" /> -->
								<div class="">
									<!-- --------------- -->

									<div class="mb-4 grid grid-cols-6 gap-2 h-12">
										<input
											@keyup="clickEvent('code1', 'code2')"
											id="code1"
											maxlength="1"
											name="code1"
											type="text"
											v-model="code1"
											autocomplete="off"
											required=""
											autofocus
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code2', 'code3')"
											id="code2"
											maxlength="1"
											name="code2"
											type="text"
											v-model="code2"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code3', 'code4')"
											id="code3"
											maxlength="1"
											name="code3"
											type="text"
											v-model="code3"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code4', 'code5')"
											id="code4"
											maxlength="1"
											name="code4"
											type="text"
											v-model="code4"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											@keyup="clickEvent('code5', 'code6')"
											id="code5"
											maxlength="1"
											name="code5"
											type="text"
											v-model="code5"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<input
											id="code6"
											name="code6"
											maxlength="1"
											type="text"
											v-model="code6"
											autocomplete="off"
											required=""
											class="text-center mt-1.5 br-5 h-full appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>
									</div>

									<!-- ------------ -->
								</div>

								<div class="mt-8">
									<div
										@click="submitCode"
										class="cursor-pointer mx-auto greenButton fs-14 fw-500 w-8/12 h-14 br-5 flex items-center justify-center"
									>
										<span class="text-white">Submit</span>
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
import OtpNumberSvg from "@/components/svg/OtpNumberSvg.vue";
import { computed, onMounted } from "vue";
import { reactive, toRefs } from "vue";
import { Log, Util } from "@/components/util";
import UserActions from "@/services/userActions/userActions.js";

export default {
	name: "Otp PhoneNumber",
	components: {
		OtpNumberSvg,
	},
	setup() {
		const store = useStore();
		onMounted(() => {
			Log.info("phoneNo:", phoneNo);
			// document.getElementById("code1").focus();
		});
		const codes = reactive({
			code1: "",
			code2: "",
			code3: "",
			code4: "",
			code5: "",
			code6: "",
		});

		const phoneNo = store.state.phoneNo;
		const isModalOpen = computed(() => store.state.otpPhoneNumberModal);

		function clickEvent(e, next) {
			// Log.info(String(curr) + " " + String(next));

			const curr = document.getElementById(e);
			if (curr.value.length > 0) {
				document.getElementById(next).focus();
			}
		}

		const prepareDetails = () => {
			const code =
				codes.code1 + codes.code2 + codes.code3 + codes.code4 + codes.code5 + codes.code6;
			return code;
		};

		const submitCode = () => {
			const userDetails = {
				phoneNumber: phoneNo,
				code: prepareDetails(),
			};
			Log.info(userDetails);
			UserActions.confirmPhoneNumber(
				userDetails,

				(response) => {
					Log.info("otp response" + String(response));
					store.commit("setOtpPhoneNumberModal", false);
					Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					Log.error("otp response" + String(error));
					store.commit("setOtpPhoneNumberModal", false);
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};
		const close = () => {
			store.commit("setOtpPhoneNumberModal", false);
		};

		return {
			close,
			isModalOpen,
			submitCode,
			...toRefs(codes),
			clickEvent,
		};
	},
};
</script>

<style lang="scss" scoped></style>
