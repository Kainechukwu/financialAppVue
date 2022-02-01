<template>
	<div class="col-span-3">
		<div class="flex flex-col w-9/12">
			<div class="flex flex-col">
				<!-- -------------- -->

				<!-- --------------- -->
				<div class="grid grid-cols-2 gap-4 mb-4">
					<div class="mb-6 col-span-1 flex flex-col justify-between">
						<div>
							<label for="Identification Type" class="fs-14 tx-666666 fw-600"
								>Identification Type</label
							>
						</div>
						<div>
							<input
								readonly
								id="Identification Type"
								name="idType"
								type="text"
								v-model="type"
								autocomplete="off"
								required=""
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
					<div class="mb-6 col-span-1 flex flex-col justify-between">
						<div>
							<label for="Identification Number" class="fs-14 tx-666666 fw-600"
								>Identification Number</label
							>
						</div>
						<div>
							<input
								readonly
								id="Identification Number"
								name="idNumber"
								type="text"
								autocomplete="off"
								required=""
								v-model="idNumber"
								class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
					</div>
				</div>

				<div class="mb-8">
					<label for="Upload ID" class="fs-14 fw-400 tx-666666">Upload ID</label>
					<div @click="chooseFiles" class="relative">
						<input
							readonly
							id="upload id"
							name="upload id"
							type="text"
							autocomplete="off"
							required=""
							:placeholder="fileName"
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
</template>

<script>
import { reactive, toRefs } from "vue";
import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";

export default {
	name: "Static compliance",
	props: {
		details: Object,
	},
	components: {
		GreenCheckedSvg,
	},
	setup(props) {
		const personalComplianceDetails = reactive({
			fileName: props.details.fileName,
			type: props.details.type,
			idNumber: props.details.idNumber,
		});

		return {
			...toRefs(personalComplianceDetails),
		};
	},
};
</script>

<style lang="scss" scoped></style>
