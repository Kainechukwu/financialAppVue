<template>
	<div class="w-full px-10 pb-8 pt-10 grid grid-cols-2">
		<div class="col-span-1">
			<div class="grid grid-rows-3 gap-5 mb-10">
				<div class="">
					<label for="acceskey1" class="fs-14 fw-400 tx-666666">Live Key</label>
					<div class="relative">
						<input
							readonly
							style="background-color: #f8f8f8"
							id="acceskey1"
							name="acceskey1"
							type="text"
							autocomplete="off"
							:value="key1"
							required=""
							placeholder=""
							class="mt-1.5 br-5 h-12 appearance-none block w-full pl-3 pr-16 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
						<div
							@click="copyToClipboard('acceskey1')"
							class="cursor-pointer absolute right-0 top-0 bottom-0 flex items-center px-3 cursor-pointer"
						>
							<svg
								class=""
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
									stroke="#AAAAAA"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.1665 12.5H3.33317C2.89114 12.5 2.46722 12.3244 2.15466 12.0119C1.8421 11.6993 1.6665 11.2754 1.6665 10.8334V3.33335C1.6665 2.89133 1.8421 2.4674 2.15466 2.15484C2.46722 1.84228 2.89114 1.66669 3.33317 1.66669H10.8332C11.2752 1.66669 11.6991 1.84228 12.0117 2.15484C12.3242 2.4674 12.4998 2.89133 12.4998 3.33335V4.16669"
									stroke="#AAAAAA"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>

				<!-- ---------------- -->
				<div class="">
					<label for="acceskey2" class="fs-14 fw-400 tx-666666">Test Key</label>
					<div class="relative">
						<input
							readonly
							style="background-color: #f8f8f8"
							id="acceskey2"
							name="acceskey2"
							type="text"
							autocomplete="off"
							:value="key2"
							required=""
							placeholder=""
							class="mt-1.5 br-5 h-12 appearance-none block w-full pl-3 pr-16 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
						<div
							@click="copyToClipboard('acceskey2')"
							class="cursor-pointer absolute right-0 top-0 bottom-0 flex items-center px-3 cursor-pointer"
						>
							<svg
								class=""
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
									stroke="#AAAAAA"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.1665 12.5H3.33317C2.89114 12.5 2.46722 12.3244 2.15466 12.0119C1.8421 11.6993 1.6665 11.2754 1.6665 10.8334V3.33335C1.6665 2.89133 1.8421 2.4674 2.15466 2.15484C2.46722 1.84228 2.89114 1.66669 3.33317 1.66669H10.8332C11.2752 1.66669 11.6991 1.84228 12.0117 2.15484C12.3242 2.4674 12.4998 2.89133 12.4998 3.33335V4.16669"
									stroke="#AAAAAA"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>

				<!-- ------------- -->
				<!-- <div class="">
					<label for="acceskey3" class="fs-14 fw-400 tx-666666">Test Encryption Key</label>
					<div class="relative">
						<input
							readonly
							style="background-color: #f8f8f8"
							id="acceskey3"
							name="acceskey3"
							type="text"
							autocomplete="off"
							:value="key3"
							required=""
							placeholder=""
							class="mt-1.5 br-5 h-12 appearance-none block w-full pl-3 pr-16 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
						<div
							@click="copyToClipboard('acceskey3')"
							class="cursor-pointer absolute right-0 top-0 bottom-0 flex items-center px-3 cursor-pointer"
						>
							<svg
								class=""
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
									stroke="#AAAAAA"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M4.1665 12.5H3.33317C2.89114 12.5 2.46722 12.3244 2.15466 12.0119C1.8421 11.6993 1.6665 11.2754 1.6665 10.8334V3.33335C1.6665 2.89133 1.8421 2.4674 2.15466 2.15484C2.46722 1.84228 2.89114 1.66669 3.33317 1.66669H10.8332C11.2752 1.66669 11.6991 1.84228 12.0117 2.15484C12.3242 2.4674 12.4998 2.89133 12.4998 3.33335V4.16669"
									stroke="#AAAAAA"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div> -->
				<!-- ---------- -->
			</div>
			<div class="flex justify-start">
				<div
					@click="generateKeys"
					class="cursor-pointer greenButton fs-14 fw-500 w-full lg:w-3/4 xl:w-2/4 h-14 br-5 flex items-center justify-center"
				>
					<span class="text-white">Generate New Secret Keys</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import UserInfo from "@/services/userInfo/userInfo.js";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import { Log } from "@/components/util";
export default {
	name: "Access Key Settings",
	setup() {
		onMounted(() => {
			generateKeys();
		});

		const store = useStore();

		const accessKeys = reactive({
			key1: "",
			key2: "",
			key3: "",
		});
		const copyToClipboard = (id) => {
			var textBox = document.getElementById(id);
			textBox.select();
			document.execCommand("copy");
		};

		const generateKeys = () => {
			UserInfo.getClientKeys(
				(response) => {
					Log.info(response);
					const data = response.data.data;
					accessKeys.key1 = data.liveKey;
					accessKeys.key2 = data.testKey;
					store.commit("authToken/clientLiveKey", data.liveKey);
				},
				(error) => {
					Log.error(error);
				}
			);
		};
		return {
			...toRefs(accessKeys),
			copyToClipboard,
			generateKeys,
		};
	},
};
</script>

<style lang="scss" scoped></style>
