<template>
	<div class="flex justify-center pt-10">
		<div class="flex flex-col items-center w-96">
			<CreatePINSvg />
			<h4 class="mt-4 mb-7 inter fw-500 fs-12 blacktext">Setup your 6-digit authorization PIN</h4>
			<div class="mb-8 w-full">
				<label for="Create PIN" class="inter fs-14 fw-400 tx-666666">Create PIN</label>
				<input
					id="Create Pin"
					name="Create Pin"
					v-model="pin"
					type="text"
					autocomplete="off"
					required=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>
			<div class="mb-10 w-full">
				<label for="Confirm PIN" class="inter fs-14 fw-400 tx-666666">Confirm PIN</label>
				<input
					id="Confirm Pin"
					name="Confirm Pin"
					type="text"
					v-model="confirmPin"
					autocomplete="off"
					required=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>
			<div
				@click="createUserPIN"
				class="cursor-pointer greenButton inter fs-14 fw-500 w-52 h-14 br-5 flex items-center justify-center"
			>
				<span class="text-white">Create PIN</span>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ApiResource from "@/components/core/ApiResource";
import { Log } from "@/components/util";
import userActions from "@/services/userActions/userActions";
import CreatePINSvg from "@/components/svg/CreatePINSvg.vue";
export default {
	name: "Create PIN",
	components: {
		CreatePINSvg,
	},
	setup() {
		const userDetails = reactive({
			pin: "",
			confirmPin: "",
		});

		const createPin = ApiResource.create();

		const createUserPIN = () => {
			createPin.loading = true;
			Log.info("userDetails: " + JSON.stringify(userDetails));
			if (userDetails.pin === userDetails.confirmPin && userDetails.pin.length === 6) {
				userActions.createPIN(
					userDetails,
					(response) => {
						createPin.loading = false;
						Log.info("response:" + JSON.stringify(response));
					},
					(error) => {
						createPin.loading = false;
						Log.error("error: " + JSON.stringify(error));
					}
				);
			} else {
				Log.info("PINs must match");
			}
		};
		return {
			...toRefs(userDetails),
			createUserPIN,
		};
	},
};
</script>

<style lang="scss" scoped></style>
