<template>
	<div class="flex justify-center pt-10">
		<Form
			@submit="createUserPIN"
			:validation-schema="schema"
			v-slot="{ errors }"
			class="flex flex-col items-center w-96"
		>
			<CreatePINSvg />
			<h4 class="mt-4 mb-7 inter fw-500 fs-12 blacktext">Setup your 6-digit authorization PIN</h4>
			<div class="mb-8 w-full">
				<label for="Create PIN" class="inter fs-14 fw-400 tx-666666">Create PIN</label>
				<Field
					id="Create Pin"
					name="pin"
					type="number"
					autocomplete="off"
					required=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
					:class="{ 'is-invalid': errors.pin }"
				/>
				<div class="invalid-feedback text-red-500">{{ errors.pin }}</div>
			</div>
			<div class="mb-10 w-full">
				<label for="Confirm PIN" class="inter fs-14 fw-400 tx-666666">Confirm PIN</label>
				<Field
					id="Confirm Pin"
					name="confirmPin"
					type="number"
					autocomplete="off"
					required=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
					:class="{ 'is-invalid': errors.confirmPin }"
				/>
				<div class="invalid-feedback text-red-500">{{ errors.confirmPin }}</div>
			</div>
			<button
				:disabled="createPinLoading"
				type="submit"
				class="cursor-pointer greenButton inter fs-14 fw-500 w-52 h-14 br-5 flex items-center justify-center"
			>
				<div class="flex items-center justify-center">
					<span class="fs-14 items-center text-white fw-400 my-auto"> Create PIN </span>
					<div v-if="createPinLoading" class="h-4 w-4 ml-4 rounded-md block">
						<div class="roundLoader opacity-50 mx-auto"></div>
					</div>
				</div>
			</button>
		</Form>
	</div>
</template>

<script>
import {
	// reactive,
	//  toRefs,
	ref,
} from "vue";
// import ApiResource from "@/components/core/ApiResource";
import { Log, Util } from "@/components/util";
import UserActions from "@/services/userActions/userActions";
import CreatePINSvg from "@/components/svg/CreatePINSvg.vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useStore } from "vuex";
export default {
	name: "Create PIN",
	components: {
		CreatePINSvg,
		Form,
		Field,
	},
	setup() {
		// const userDetails = reactive({
		// 	pin: "",
		// 	confirmPin: "",
		// });
		const schema = Yup.object().shape({
			pin: Yup.string().required("Pin is required").min(6, "Pin must be at least 6 characters"),
			confirmPin: Yup.string()
				.required("Pin confirmation is required")
				.oneOf([Yup.ref("pin"), null], "Pins must match"),
		});
		const store = useStore();
		const createPinLoading = ref(false);

		const createUserPIN = (values) => {
			createPinLoading.value = true;

			// Log.info("userDetails: " + JSON.stringify(userDetails));
			// if (userDetails.pin === userDetails.confirmPin && userDetails.pin.length === 6) {
			UserActions.createPIN(
				{
					pin: String(values.pin),
					confirmPin: String(values.confirmPin),
				},
				(response) => {
					createPinLoading.value = false;
					Util.handleGlobalAlert(true, "success", response.data.message);
					store.commit("authToken/hasPin", true);
					Log.info("response:" + JSON.stringify(response));
				},
				(error) => {
					createPinLoading.value = false;
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);

					Log.error("error: " + JSON.stringify(error));
				}
			);
			// } else {
			// 	Log.info("PINs must match");
			// }
		};
		return {
			// ...toRefs(userDetails),
			schema,
			createUserPIN,
			createPinLoading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
