<template>
	<div class="flex flex-col">
		<div class="mb-8">
			<label for="Company Name" class="fs-14 fw-400 tx-666666">Company Name</label>
			<input
				readonly
				id="Company Name"
				name="companyName"
				type="text"
				autocomplete="off"
				v-model="companyName"
				required=""
				placeholder="The Walt Disney Company"
				class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			/>
		</div>

		<!-- --------------- -->
		<div class="grid grid-cols-2 gap-4">
			<div class="mb-6 col-span-1">
				<label for="Country of Incorporation" class="fs-14 tx-666666 fw-600"
					>Country of Incorporation</label
				>
				<div class="relative">
					<input
						readonly
						id="Country of Incorporation"
						name="countryId"
						type="text"
						autocomplete="off"
						required=""
						v-model="countryId"
						placeholder="1-50"
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>

			<div class="mb-6 col-span-1">
				<label for="State" class="fs-14 tx-666666 fw-600">State</label>
				<div class="relative">
					<input
						readonly
						id="State"
						name="stateId"
						type="text"
						autocomplete="off"
						required=""
						v-model="stateId"
						placeholder="1-50"
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
		</div>

		<!-- -------------- -->

		<div class="grid grid-cols-2 gap-4">
			<div class="mb-6 col-span-1">
				<label for="Industry" class="fs-14 tx-666666 fw-600">Industry</label>
				<div class="relative">
					<input
						readonly
						id="Industry"
						name="industry"
						type="text"
						autocomplete="off"
						required=""
						v-model="industry"
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
			<div class="mb-6 col-span-1">
				<label for="Number of Staff" class="fs-14 tx-666666 fw-600">Number of Staff</label>
				<div class="relative">
					<input
						readonly
						id="Number of Staff"
						name="numberOfStaff"
						type="number"
						autocomplete="off"
						required=""
						v-model="numberOfStaff"
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
		</div>
		<!-- ---------------- -->
		<div class="mb-6">
			<label for="Website URL" class="fs-14 fw-400 tx-666666">Website URL</label>
			<input
				readonly
				id="Website URL"
				name="websiteUrl"
				type="text"
				autocomplete="off"
				required=""
				v-model="websiteUrl"
				placeholder="http://"
				class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			/>
		</div>

		<!-- ---------------- -->
		<div class="mb-6">
			<label for="Company description" class="fs-14 fw-400 tx-666666"
				>Tell us about your company</label
			>
			<textarea
				readonly
				id="Company description"
				rows="5"
				name="Company description"
				type="text"
				v-model="about"
				autocomplete="off"
				required=""
				placeholder=""
				class="mt-1.5 br-5 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			></textarea>
		</div>

		<!-- ----------  -->

		<div class="flex justify-end">
			<button
				:disabled="true"
				class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
			>
				<div class="flex items-center justify-center">
					<span class="text-white">Save</span>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
import { toRefs, reactive } from "vue";

export default {
	name: "StaticBusinessDetails",
	props: {
		details: Object,
	},

	setup(props) {
		const businessDetails = reactive({
			companyName: props.details.companyName,
			countryId: props.details.countryId,
			stateId: props.details.stateId,
			industry: props.details.industry,
			numberOfStaff: props.details.numberOfStaff,
			websiteUrl: props.details.websiteUrl,
			about: props.details.about,
		});

		return {
			...toRefs(businessDetails),
		};
	},
};
</script>

<style lang="scss" scoped></style>
