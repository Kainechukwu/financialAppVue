/*eslint quote-props: ["error", "consistent-as-needed"]*/
<template>
	<div class="w-full px-10 pb-8">
		<CreatePin v-if="!hasPIN" />
		<div v-else class="grid grid-cols-5 mt-12">
			<div class="col-span-2">
				<div class="flex flex-col mr-12">
					<h1 class="blacktext fw-500 fs-18 inter mb-8">Authorization PIN</h1>
					<div class="">
						<p class="tx-666666 inter fs-14 fw-400 mb-8">
							Your 6-digit PIN would be used to authenticate all your transactions
						</p>
						<p class="tx-666666 inter fs-14 fw-400">
							Forgot your PIN?
							<span class="fw-500 blacktext">Reset it here</span>
						</p>
					</div>
				</div>
			</div>
			<div class="col-span-3">
				<div class="flex flex-col w-11/12">
					<Form
						@submit="updatePIN"
						:validation-schema="schema"
						v-slot="{ errors }"
						class="flex flex-col"
					>
						<div class="mb-8">
							<label for="Current Pin" class="inter fs-14 fw-400 tx-666666">Current PIN</label>
							<Field
								id="Current_Pin"
								name="currentPin"
								type="password"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.currentPin }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.currentPin }}</div>
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
							<label for="Confirm New Pin" class="inter fs-14 fw-400 tx-666666"
								>Confirm New PIN</label
							>
							<Field
								id="Confirm_New_Pin"
								name="confirmNewPin"
								type="password"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								:class="{ 'is-invalid': errors.confirmNewPin }"
							/>
							<div class="invalid-feedback text-red-500">{{ errors.confirmNewPin }}</div>
						</div>
						<button
							type="submit"
							:disabled="pinUpdateLoading"
							class="cursor-pointer greenButton inter fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
						>
							<div class="flex items-center justify-center">
								<span class="text-white">Update PIN</span>
								<div v-if="pinUpdateLoading" class="h-4 w-4 ml-4 rounded-md block">
									<div class="roundLoader opacity-50 mx-auto"></div>
								</div>
							</div>
						</button>
					</Form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import CreatePin from "./CreatePin.vue";
// import ApiResource from "@/components/core/ApiResource";
import { Log, Util } from "@/components/util";
import userActions from "@/services/userActions/userActions";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
	name: "PIN",
	components: {
		CreatePin,
		Form,
		Field,
	},
	setup() {
		onMounted(() => {
			preventLetterInput();
		});
		const store = useStore();

		const hasPIN = computed(() => store.getters["authToken/hasPin"]);

		const pinUpdateLoading = ref(false);

		const schema = Yup.object().shape({
			currentPin: Yup.string()
				.required("Current pin field is required")
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
			confirmNewPin: Yup.string()
				.test(
					"len",
					"Pin confirmation must be exactly 6 characters",
					(val) => val?.toString().length === 6
				)
				.matches(/^[0-9]+$/, "Pin confirmation must contain only numbers")

				.required("Pin confirmation is required")
				.oneOf([Yup.ref("newPin"), null], "Pins must match"),
		});

		const updatePIN = (values) => {
			pinUpdateLoading.value = true;
			// Log.info("userDetails: " + JSON.stringify(userDetails));
			userActions.changePIN(
				{
					currentPin: String(values.currentPin),
					newPin: String(values.newPin),
					confirmNewPin: String(values.confirmNewPin),
				},
				(response) => {
					pinUpdateLoading.value = false;
					Log.info("response:" + JSON.stringify(response));
					Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					pinUpdateLoading.value = false;
					Log.error("error: " + JSON.stringify(error));
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
		};

		const preventLetterInput = () => {
			document.getElementById("Current_Pin").addEventListener("keypress", function (evt) {
				if (evt.which < 48 || evt.which > 57) {
					evt.preventDefault();
				}
			});

			document.getElementById("New_Pin").addEventListener("keypress", function (evt) {
				if (evt.which < 48 || evt.which > 57) {
					evt.preventDefault();
				}
			});

			document.getElementById("Confirm_New_Pin").addEventListener("keypress", function (evt) {
				if (evt.which < 48 || evt.which > 57) {
					evt.preventDefault();
				}
			});
		};

		return {
			updatePIN,
			hasPIN,
			pinUpdateLoading,
			schema,
		};
	},
};
</script>

<style lang="scss" scoped></style>
