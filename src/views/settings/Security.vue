<template>
	<div class="w-full px-10 pb-8">
		<div class="grid grid-cols-5 gap-8 lg:gap-4 mt-12">
			<div class="col-span-5 sm:col-span-3 md:col-span-2">
				<div class="flex flex-col">
					<h1 class="blacktext fw-500 fs-18 mb-8">Change Password</h1>
					<div class="">
						<p class="tx-666666 fs-14 fw-400">
							Your password should be at least 8 characters and contain a uppercase, lowercase,
							number and special character
						</p>
					</div>
				</div>
			</div>
			<div class="col-span-5 sm:col-span-3">
				<Form
					@submit="changePassword"
					:validation-schema="schema"
					v-slot="{ errors }"
					class="flex flex-col lg:w-9/12"
				>
					<div class="flex flex-col">
						<div class="mb-8">
							<label for="Current Password" class="fs-14 fw-400 tx-666666">Current Password</label>
							<Field
								id="Current Password"
								name="currentPassword"
								type="password"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.currentPassword }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.currentPassword }}</div>
						</div>

						<!-- -------------- -->
						<div class="mb-8">
							<label for="New Password" class="fs-14 fw-400 tx-666666">New Password</label>
							<Field
								id="New Password"
								name="newPassword"
								type="password"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.newPassword }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.newPassword }}</div>
						</div>
						<!-- -------------- -->
						<div class="mb-8">
							<label for="Confirm New Password" class="fs-14 fw-400 tx-666666"
								>Confirm New Password</label
							>
							<Field
								id="Confirm New Password"
								name="confirmNewPassword"
								type="password"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.confirmNewPassword }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.confirmNewPassword }}</div>
						</div>
						<div class="flex justify-end">
							<button
								type="submit"
								:disabled="loading"
								class="cursor-pointer greenButton fs-14 fw-500 w-full sm:w-3/4 md:w-2/4 h-14 br-5 flex items-center justify-center"
							>
								<div class="flex items-center justify-center">
									<span class="text-white">Change Password</span>
									<div v-if="loading" class="h-4 w-4 ml-4 rounded-md block">
										<div class="roundLoader opacity-50 mx-auto"></div>
									</div>
								</div>
							</button>
						</div>
					</div>
				</Form>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { Log, Util } from "@/components/util";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import { Form, Field } from "vee-validate";
import UserActions from "@/services/userActions/userActions.js";
export default {
	name: "Change Password Settings",
	components: {
		Form,
		Field,
	},
	setup() {
		const store = useStore();
		const router = useRouter();
		const schema = Yup.object().shape({
			currentPassword: Yup.string().required("Current password is required"),
			newPassword: Yup.string()
				.required("New password is required")
				.min(8, "Pin must be at least 8 characters"),
			// .test("is-44444", "this isn't the number i want", (value) => {
			// 	value != 44444;
			// }),
			confirmNewPassword: Yup.string()
				.required("Confirm new password is required")
				.oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
		});

		const loading = ref(false);
		// schema.validateSync(44444);

		const changePassword = (values) => {
			loading.value = true;
			const passwords = {
				userId: store.getters["authToken/userId"],
				currentPassword: values.currentPassword,
				newPassword: values.newPassword,
				confirmNewPassword: values.confirmNewPassword,
			};

			UserActions.changePassword(
				passwords,
				(response) => {
					loading.value = false;
					Log.info(response);

					Util.handleGlobalAlert(true, "success", response.data.message);
					if (store.getters["authToken/hasPin"] === false) {
						router.push("/settings/pin");
					}
				},
				(error) => {
					Log.error(error);
					loading.value = false;
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};

		return {
			// ...toRefs(passwords),

			changePassword,
			schema,
			loading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
