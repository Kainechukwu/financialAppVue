<template>
	<div class="col-span-5 sm:col-span-3">
		<div class="flex flex-col lg:w-9/12">
			<div class="mb-8">A 6-digit verification code has been sent to your phone number</div>
			<Form
				@submit="resetPin"
				autocomplete="off"
				:validation-schema="schema"
				v-slot="{ errors }"
				class="flex flex-col"
			>
				<input autocomplete="false" name="hidden" type="text" style="display: none" />
				<div class="mb-8">
					<label for="OTP" class="inter fs-14 fw-400 tx-666666">OTP</label>
					<Field
						id="OTP"
						name="OTP"
						type="number"
						autocomplete="off"
						required=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						:class="{ 'is-invalid': errors.OTP }"
					/>
					<div class="invalid-feedback text-red-500">{{ errors.OTP }}</div>
				</div>

				<!-- -------------- -->
				<div class="mb-8">
					<label for="New Pin" class="inter fs-14 fw-400 tx-666666">New PIN</label>
					<Field
						id="New_Pin"
						name="newPin"
						type="password"
						autocomplete="off"
						required=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						:class="{ 'is-invalid': errors.newPin }"
					/>
					<div class="invalid-feedback text-red-500">{{ errors.newPin }}</div>
				</div>
				<!-- -------------- -->
				<div class="mb-8">
					<label for="Confirm New Pin" class="inter fs-14 fw-400 tx-666666">Confirm New PIN</label>
					<Field
						id="Confirm_New_Pin"
						name="confirmPin"
						type="password"
						autocomplete="off"
						required=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						:class="{ 'is-invalid': errors.confirmPin }"
					/>
					<div class="invalid-feedback text-red-500">{{ errors.confirmPin }}</div>
				</div>
				<button
					type="submit"
					:disabled="pinResetLoading"
					class="cursor-pointer greenButton inter fs-14 fw-500 w-3/4 sm:w-2/4 h-14 br-5 flex items-center justify-center"
				>
					<div class="flex items-center justify-center">
						<span class="text-white">Reset PIN</span>
						<div v-if="pinResetLoading" class="h-4 w-4 ml-4 rounded-md block">
							<div class="roundLoader opacity-50 mx-auto"></div>
						</div>
					</div>
				</button>
			</Form>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import UserActions from "@/services/userActions/userActions";
import { Form, Field } from "vee-validate";
import { Log, Util } from "@/components/util";

import * as Yup from "yup";
export default {
	name: "ResetPin",
	props: {},
	components: {
		Form,
		Field,
	},
	setup(props, context) {
		const pinResetLoading = ref(false);

		const schema = Yup.object().shape({
			OTP: Yup.string()
				.required("OTP field is required")
				.test(
					"len",
					"Current pin must be exactly 6 characters",
					(val) => val?.toString().length === 6
				)
				.matches(/^[0-9]+$/, "Current pin must contain only numbers"),
			newPin: Yup.string()
				.required("New pin field is required")
				.test("len", "New pin must be exactly 6 characters", (val) => val?.toString().length === 6)
				.matches(/^[0-9]+$/, "New pin must contain only numbers"),
			confirmPin: Yup.string()
				.test(
					"len",
					"Pin confirmation must be exactly 6 characters",
					(val) => val?.toString().length === 6
				)
				.matches(/^[0-9]+$/, "Pin confirmation must contain only numbers")

				.required("Pin confirmation is required")
				.oneOf([Yup.ref("newPin"), null], "Pins must match"),
		});

		const resetPin = (values) => {
			pinResetLoading.value = true;
			// Log.info("userDetails: " + JSON.stringify(userDetails));
			UserActions.resetPin(
				{
					newPin: String(values.newPin),
					confirmPin: String(values.confirmPin),
					code: String(values.OTP),
				},
				(response) => {
					pinResetLoading.value = false;
					Log.info("response:" + JSON.stringify(response));
					Util.handleGlobalAlert(true, "success", response.data.message);
					context.emit("close");
				},
				(error) => {
					pinResetLoading.value = false;
					Log.error("error: " + JSON.stringify(error));
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					// context.emit("close");
				}
			);
		};

		return {
			schema,
			resetPin,
			pinResetLoading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
