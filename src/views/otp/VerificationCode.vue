<template>
	<div class="h-full">
		<!-- <AccountCreated v-if="accountCreated" :userEmail="userEmail" /> -->
		<div
			class="min-h-full pt-10 register-page flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="mb-9">
				<SuprBizLogo />
			</div>
			<div class="register-form sm:mx-auto w-full sm:w-full max-w-md">
				<div class="">
					<div class="flex flex-col justify-center items-center">
						<h2 class="mb-2 fs-24 fw-600 font-extrabold blacktext">Verification Code</h2>
						<p class="tx-666666 fw-400 fs-14">
							Enter the 6-digit verification code sent to your email address
						</p>
					</div>

					<form class="mt-8" action="#" method="POST">
						<!-- <input type="hidden" name="remember" value="true" /> -->
						<div class="">
							<!-- --------------- -->

							<div class="mb-4 grid grid-cols-6 gap-2">
								<input
									@keyup="clickEvent('code1', 'code2')"
									id="code1"
									maxlength="1"
									name="code1"
									type="text"
									v-model="code1"
									autocomplete="off"
									required=""
									class="text-center mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
									class="text-center mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
									class="text-center mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
									class="text-center mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
									class="text-center mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>

								<input
									id="code6"
									name="code6"
									maxlength="1"
									type="text"
									v-model="code6"
									autocomplete="off"
									required=""
									class="text-center mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<!-- ------------ -->
						</div>

						<div class="mt-8 flex justify-center tx-666666 fw-400 fs-14">Resend Code</div>

						<div class="mt-8">
							<button
								@click.prevent="submitCode"
								type="submit"
								class="cursor-pointer bluebtn h-50px relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
							>
								<span class="fs-14 items-center text-white fw-400 my-auto"> submit </span>
							</button>
						</div>
					</form>
				</div>
				<!-- <div class="text-center tx-666666 fs-14 fw-400 mt-10">
          <span>
            By clicking "Create Account", you agree to bonfree’s terms of
            acceptable use</span
          >
        </div> -->
			</div>
			<div class="mt-11">
				<span @click="goToLogin" class="cursor-pointer fs-14 fw-400">Return to Login</span>
			</div>
		</div>
	</div>
</template>

<script>
import SuprBizLogo from "@/components/svg/SuprBizLogo.vue";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
// import ApiResource from "@/components/core/ApiResource";
// import LoginService from "@/services/login/LoginService.js";
import { Log } from "@/components/util";

export default {
	name: "Verification Code",
	components: {
		SuprBizLogo,
	},
	setup() {
		onMounted(() => {
			document.getElementById("code1").focus();
		});
		const router = useRouter();
		const codes = reactive({
			code1: "",
			code2: "",
			code3: "",
			code4: "",
			code5: "",
			code6: "",
		});

		function clickEvent(e, next) {
			// console.log(String(curr) + " " + String(next));

			const curr = document.getElementById(e);
			if (curr.value.length > 0) {
				document.getElementById(next).focus();
			}
		}
		const submitCode = () => {
			Log.info(codes);
		};

		const goToLogin = () => {
			router.push("/login");
		};
		return {
			submitCode,
			goToLogin,
			...toRefs(codes),
			clickEvent,
		};
	},
};
</script>

<style lang="scss" scoped>
@media (max-width: 430px) {
	.register-form {
		padding: 40px 20px;
	}
}
</style>
