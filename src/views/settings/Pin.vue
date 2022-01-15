/*eslint quote-props: ["error", "consistent-as-needed"]*/
<template>
	<div class="w-full px-10 pb-8">
		<CreatePin v-if="hasPIN" />
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
					<div class="flex flex-col">
						<div class="mb-8">
							<label for="Current Pin" class="inter fs-14 fw-400 tx-666666">Current PIN</label>
							<input
								id="Current Pin"
								name="Current Pin"
								type="text"
								v-model="currentPin"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>

						<!-- -------------- -->
						<div class="mb-8">
							<label for="New Pin" class="inter fs-14 fw-400 tx-666666">New PIN</label>
							<input
								id="New Pin"
								name="New Pin"
								v-model="newPin"
								type="number"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
						<!-- -------------- -->
						<div class="mb-8">
							<label for="Confirm New Pin" class="inter fs-14 fw-400 tx-666666"
								>Confirm New PIN</label
							>
							<input
								id="Confirm New Pin"
								name="Confirm New Pin"
								v-model="confirmNewPin"
								type="number"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
						<div
							@click="updatePIN"
							class="cursor-pointer greenButton inter fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
						>
							<span class="text-white">Update PIN</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import CreatePin from "./CreatePin.vue";
import ApiResource from "@/components/core/ApiResource";
import { Log } from "@/components/util";
import userActions from "@/services/userActions/userActions";
export default {
	name: "PIN",
	components: {
		CreatePin,
	},
	setup() {
		const store = useStore();
		const userDetails = reactive({
			currentPin: "",
			newPin: "",
			confirmNewPin: "",
		});

		const hasPIN = store.getters["authToken/hasPin"];

		const pinUpdate = ApiResource.create();

		const updatePIN = () => {
			pinUpdate.loading = true;
			Log.info("userDetails: " + JSON.stringify(userDetails));
			userActions.changePIN(
				userDetails,
				(response) => {
					pinUpdate.loading = false;
					Log.info("response:" + JSON.stringify(response));
				},
				(error) => {
					pinUpdate.loading = false;
					Log.error("error: " + JSON.stringify(error));
				}
			);
		};

		return {
			...toRefs(userDetails),
			updatePIN,
			hasPIN,
		};
	},
};
</script>

<style lang="scss" scoped></style>
