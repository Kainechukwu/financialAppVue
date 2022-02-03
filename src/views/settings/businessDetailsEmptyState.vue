<template>
	<div class="flex flex-col">
		<div class="mb-8">
			<label for="Company Name" class="fs-14 fw-400 tx-666666"></label>
			<input
				readonly
				id="Company Name"
				name="companyName"
				type="text"
				autocomplete="off"
				required=""
				placeholder="The Walt Disney Company"
				class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			/>
		</div>

		<!-- --------------- -->
		<div class="grid grid-cols-2 gap-4">
			<div class="mb-6 col-span-1">
				<label for="Country of Incorporation" class="fs-14 tx-666666 fw-600"></label>
				<div class="relative">
					<input
						readonly
						id="Country of Incorporation"
						name="country"
						type="text"
						autocomplete="off"
						required=""
						placeholder="1-50"
						class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>

			<div class="mb-6 col-span-1">
				<label for="State" class="fs-14 tx-666666 fw-600"></label>
				<div class="relative">
					<input
						readonly
						id="State"
						name="state"
						type="text"
						autocomplete="off"
						required=""
						placeholder="1-50"
						class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
		</div>

		<!-- -------------- -->

		<div class="grid grid-cols-2 gap-4">
			<div class="mb-6 col-span-1">
				<label for="Industry" class="fs-14 tx-666666 fw-600"></label>
				<div class="relative">
					<input
						readonly
						id="Industry"
						name="industry"
						type="text"
						autocomplete="off"
						required=""
						placeholder=""
						class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
			<div class="mb-6 col-span-1">
				<label for="Number of Staff" class="fs-14 tx-666666 fw-600"></label>
				<div class="relative">
					<input
						readonly
						id="Number of Staff"
						name="numberOfStaff"
						type="number"
						autocomplete="off"
						required=""
						placeholder=""
						class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
		</div>
		<!-- ---------------- -->
		<div class="mb-6">
			<label for="Website URL" class="fs-14 fw-400 tx-666666"></label>
			<input
				readonly
				id="Website URL"
				name="websiteUrl"
				type="text"
				autocomplete="off"
				required=""
				placeholder="http://"
				class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			/>
		</div>

		<!-- ---------------- -->
		<div class="mb-6">
			<label for="Company description" class="fs-14 fw-400 tx-666666"></label>
			<textarea
				readonly
				id="Company description"
				rows="5"
				name="Company description"
				type="text"
				autocomplete="off"
				required=""
				placeholder=""
				class="animate-pulse mt-1.5 br-5 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			></textarea>
		</div>

		<!-- ----------  -->

		<div class="flex justify-end">
			<button
				:disabled="true"
				class="animate-pulse greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
			>
				<div class="flex items-center justify-center">
					<span class="text-white"></span>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
import { toRefs, reactive } from "vue";

export default {
	name: "BusinessDetailsEmptyState",

	setup(props) {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
