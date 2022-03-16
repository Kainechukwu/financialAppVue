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
						name="country"
						type="text"
						autocomplete="off"
						required=""
						v-model="country"
						placeholder="1-50"
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>

			<div class="mb-6 col-span-1">
				<label for="Registration Date" class="fs-14 tx-666666 fw-600">Registration Date</label>
				<div class="relative">
					<input
						readonly
						id="Registration Date"
						name="Registration Date"
						type="text"
						autocomplete="off"
						required=""
						v-model="registrationDate"
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
			<label for="Oprning Address" class="fs-14 fw-400 tx-666666">Oprning Address</label>
			<input
				readonly
				id="Oprning Address"
				name="websiteUrl"
				type="text"
				autocomplete="off"
				required=""
				v-model="address"
				class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			/>
		</div>
		<!-- ---------------- -->

		<div class="grid grid-cols-2 gap-4">
			<div class="mb-6 col-span-1">
				<label for="Registration Type" class="fs-14 tx-666666 fw-600">Registration Type</label>
				<div class="relative">
					<input
						readonly
						id="Registration Type"
						name="Registration Type"
						type="text"
						autocomplete="off"
						required=""
						v-model="registrationType"
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
			<div class="mb-6 col-span-1">
				<label for="RC Number" class="fs-14 tx-666666 fw-600">RC Number</label>
				<div class="relative">
					<input
						readonly
						id="RC Number"
						name="reNumber"
						type="number"
						autocomplete="off"
						required=""
						v-model="rcNumber"
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
		</div>

		<!-- ------------------- -->

		<div class="mb-8">
			<label for="Upload Incorporation Document" class="fs-14 fw-400 tx-666666"
				>Upload Incorporation Document</label
			>
			<input
				readonly
				id="Upload Incorporation Document"
				name="documentName"
				type="text"
				autocomplete="off"
				v-model="documentName"
				required=""
				class="bg-gray-100 mt-1.5 br-5 h-14 appearance-none relative block w-full pr-3 pl-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 cursor-pointer sm:text-sm"
			/>
		</div>

		<!-- --------------------- -->
		<div class="grid grid-cols-2 gap-4">
			<div class="mb-6 col-span-1">
				<label for="Website Url" class="fs-14 tx-666666 fw-600">Website Url</label>
				<div class="relative">
					<input
						readonly
						id="Website Url"
						name="Website Url"
						type="text"
						autocomplete="off"
						required=""
						v-model="websiteUrl"
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
			<div class="mb-6 col-span-1">
				<label for="Ultimate Beneficial Owners" class="fs-14 tx-666666 fw-600"
					>Ultimate Beneficial Owners</label
				>
				<div class="relative">
					<input
						readonly
						id="Ultimate Beneficial Owners"
						name="beneficiaryOwners"
						type="number"
						autocomplete="off"
						required=""
						v-model="beneficiaryOwners"
						placeholder=""
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
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
				class="opacity-25 cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
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
			country: props.details.country,
			state: props.details.state,
			industry: props.details.industry,
			numberOfStaff: props.details.numberOfStaff,

			about: props.details.about,
			address: props.details.address,
			rcNumber: props.details.rcNumber,
			websiteUrl: props.details.websiteUrl,
			beneficiaryOwners: props.details.beneficiaryOwners,
			registrationType: props.details.registrationType,
			registrationDate: props.details.registrationDate,
			documentName: props.details.documentName,
		});

		// about: null
		// address: "aawdaws"
		// beneficiaryOwners: null
		// companyName: "ascascas"
		// country: "Germany"
		// documentName: "codepen snap.jpg"
		// documentPath: null
		// generatedFileName: null
		// id: "0cc3ef21-f61b-4299-95d6-d87536764b21"
		// industry: null
		// numberOfStaff: null
		// ownerId: "dce38ac5-4b38-467b-addf-cfad2ba9c223"
		// rcNumber: "ascasc"
		// registrationDate: "0001-01-01T00:00:00"
		// registrationType: "LLC"
		// state: null
		// websiteUrl: null

		return {
			...toRefs(businessDetails),
		};
	},
};
</script>

<style lang="scss" scoped></style>
