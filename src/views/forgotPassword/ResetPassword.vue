<template>
	<div class="h-full">
		<!-- <AccountCreated v-if="accountCreated" :userEmail="userEmail" /> -->
		<div
			class="min-h-full pt-10 register-page flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
		>
			<div class="mb-9">
				<SuprBizLogo />
			</div>
			<div style="max-width: 500px" class="register-form sm:mx-auto w-full sm:w-full">
				<div class="">
					<div class="flex flex-col justify-center items-center">
						<h2 class="mb-2 fs-24 fw-600 font-extrabold blacktext">Reset Password</h2>
						<p class="tx-666666 fw-400 fs-14">Enter the email associated with your account .</p>
					</div>

					<Form @submit="sendInstructions" :validation-schema="schema" v-slot="{ errors }">
						<!-- <input type="hidden" name="remember" value="true" /> -->
						<div class="">
							<!-- --------------- -->

							<div class="mb-6">
								<label for="email-address" class="fs-14 tx-666666 fw-600">Email address</label>
								<Field
									name="email"
									type="text"
									class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									:class="{ 'is-invalid': errors.email }"
								/>
								<div class="invalid-feedback text-red-500">{{ errors.email }}</div>
							</div>

							<!-- ------------ -->
						</div>

						<div class="">
							<button
								:class="[sentEmail.loading ? 'opacity-25' : 'opacity-100']"
								:disabled="sentEmail.loading"
								type="submit"
								class="bluebtn h-50px relative w-full py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
							>
								<div class="flex items-center justify-center">
									<span class="fs-14 items-center text-white fw-400 my-auto"> Reset Password </span>
									<div v-if="sentEmail.loading" class="h-4 w-4 ml-4 rounded-md block">
										<div class="roundLoader opacity-50 mx-auto"></div>
									</div>
								</div>
							</button>
						</div>
					</Form>
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import userActions from "@/services/userActions/userActions.js";
import { Log } from "@/components/util";

export default {
	name: "ResetPassword",
	components: {
		SuprBizLogo,
		Form,
		Field,
	},
	setup() {
		const router = useRouter();

		const sentEmail = reactive({
			loading: false,
		});

		const userEmail = ref("");
		// const isEmailSent = ref(false);

		const schema = Yup.object().shape({
			email: Yup.string().required("Email is required").email("Email is invalid"),
		});

		const sendInstructions = (values) => {
			sentEmail.loading = true;
			// Log.info(sentEmail.loading.value);
			Log.info("userEmail" + values.email);

			userActions.forgotPasswordApi(
				{
					email: values.email,
				},
				(response) => {
					sentEmail.loading = false;
					// isEmailSent.value = true;
					Log.info("response: " + JSON.stringify(response));
					Log.info("sentEmailLoading?" + String(sentEmail.loading));
				},
				(error) => {
					sentEmail.loading = false;
					Log.info("sentEmailLoading?" + String(sentEmail.loading));
					Log.error("error: " + JSON.stringify(error));
				}
			);
		};

		const goToLogin = () => {
			router.push("/login");
		};

		// const setNewPassword = () => {
		// 	router.push("/set_new_password");
		// };

		return {
			userEmail,
			sendInstructions,
			goToLogin,
			sentEmail,
			schema,
			// setNewPassword,
		};
	},
};
</script>

<style lang="scss" scoped></style>
