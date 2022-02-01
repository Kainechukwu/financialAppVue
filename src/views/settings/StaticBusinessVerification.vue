<template>
	<div class="px-10 pb-8 grid grid-cols-5 mt-12">
		<div class="col-span-2">
			<div class="flex flex-col">
				<h1 class="blacktext fw-500 fs-18 mb-8">Business Verification</h1>
			</div>
		</div>
		<div class="col-span-3">
			<div class="flex flex-col w-10/12">
				<div class="flex flex-col">
					<div class="mb-8">
						<label for="Company Name" class="fs-14 fw-400 tx-666666">Company Name </label>
						<input
							readonly
							id="Company Name"
							name="companyName"
							:value="companyName"
							type="text"
							autocomplete="off"
							required=""
							placeholder="Company name"
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>

					<!-- --------------- -->
					<div class="grid grid-cols-2 gap-4">
						<div class="mb-6 col-span-1">
							<div class="relative">
								<div class="mb-8">
									<label for="Country" class="fs-14 fw-400 tx-666666"
										>Country of Incorporation</label
									>
									<input
										readonly
										id="Country"
										name="country"
										v-model="country"
										type="text"
										autocomplete="off"
										required=""
										placeholder="country"
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									/>
								</div>
							</div>
						</div>

						<div class="mb-6 col-span-1">
							<label for="RC Number" class="fs-14 tx-666666 fw-600">RC Number</label>
							<div class="relative">
								<input
									readonly
									id="RC Number"
									name="rcNumber"
									type="text"
									autocomplete="off"
									required=""
									v-model="rcNumber"
									placeholder="RC132345"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>
					</div>

					<!-- -------------- -->

					<div class="grid grid-cols-2 gap-4">
						<div class="mb-6 col-span-2">
							<label for="Registration Type" class="fs-14 tx-666666 fw-600"
								>Registration Type</label
							>
							<div class="relative">
								<input
									readonly
									id="Registration Type"
									name="registrationType"
									type="text"
									autocomplete="off"
									required=""
									v-model="registrationType"
									placeholder="RC132345"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>
						<div class="mb-6 col-span-2">
							<label for="Address" class="fs-14 tx-666666 fw-600">Address</label>
							<div class="relative">
								<input
									readonly
									id="Address"
									name="address"
									type="text"
									autocomplete="off"
									required=""
									placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									v-model="address"
								/>
							</div>
						</div>
					</div>
					<!-- ---------------- -->
					<div class="mb-8">
						<label for="Upload ID" class="fs-14 fw-400 tx-666666"
							>Upload Incorporation Document</label
						>
						<div class="relative">
							<input
								readonly
								id="upload id"
								name="upload id"
								type="text"
								autocomplete="off"
								required=""
								:placeholder="documentName"
								class="bg-gray-100 mt-1.5 br-5 h-14 appearance-none relative block w-full pr-3 pl-11 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 cursor-pointer sm:text-sm"
							/>
							<div class="absolute mx-3 inset-y-0 h-full flex items-center">
								<GreenCheckedSvg />
							</div>
						</div>
					</div>

					<!-- ----------  -->

					<div class="flex justify-end">
						<button
							:disabled="true"
							type="submit"
							class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
						>
							<div class="flex items-center justify-center">
								<span class="text-white">Save</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
import { reactive, toRefs } from "vue";

import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";

export default {
	name: " Static Business Verification",
	props: {
		details: Object,
	},
	components: {
		GreenCheckedSvg,
	},
	setup(props) {
		// onMounted(() => {

		// });

		const verificationDetails = reactive({
			companyName: props.details.companyName,
			country: props.details.country,
			rcNumber: props.details.rcNumber,
			registrationType: props.details.registrationType,
			address: props.details.address,
			documentName: props.details.documentName,
			ownerId: props.details.ownerId,
		});

		return {
			...toRefs(verificationDetails),
		};
	},
};
</script>

<style lang="scss" scoped></style>
