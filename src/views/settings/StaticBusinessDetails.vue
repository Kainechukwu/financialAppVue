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
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
		</div>
		<!-- ---------------- -->
		<div class="mb-6">
			<label for="Operating Address" class="fs-14 fw-400 tx-666666">Operating Address</label>
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
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
			<div class="mb-6 col-span-1">
				<label for="RC Number" class="fs-14 tx-666666 fw-600">Registration Number</label>
				<div class="relative">
					<input
						readonly
						id="RC Number"
						name="reNumber"
						type="string"
						autocomplete="off"
						required=""
						v-model="rcNumber"
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
			<div class="relative">
				<input
					readonly
					id="Upload Incorporation Document"
					name="documentName"
					type="text"
					autocomplete="off"
					v-model="documentName"
					required=""
					class="bg-gray-100 pl-11 mt-1.5 br-5 h-14 appearance-none relative block w-full pr-3 pl-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 cursor-pointer sm:text-sm"
				/>
				<div class="absolute mx-3 inset-y-0 h-full flex items-center">
					<!-- <svg
						width="21"
						height="20"
						viewBox="0 0 21 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18.8337 9.23342V10.0001C18.8326 11.7971 18.2507 13.5457 17.1748 14.9849C16.0988 16.4242 14.5864 17.4772 12.8631 17.9867C11.1399 18.4962 9.29804 18.435 7.61238 17.8122C5.92673 17.1895 4.48754 16.0385 3.50946 14.531C2.53138 13.0235 2.06682 11.2401 2.18506 9.44702C2.30329 7.65389 2.998 5.94703 4.16556 4.58098C5.33312 3.21494 6.91098 2.26291 8.66382 1.86688C10.4167 1.47085 12.2505 1.65204 13.892 2.38342"
							stroke="#18AE81"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18.8333 3.33337L10.5 11.675L8 9.17504"
							stroke="#18AE81"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg> -->
					<GreenCheckedSvg />
				</div>
			</div>
		</div>

		<!-- --------------------- -->
		<div class="grid grid-cols-2 gap-4">
			<div class="mb-6 col-span-2">
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
			<!-- <div class="mb-6 col-span-1">
				<label for="Ultimate Beneficial Owners" class="fs-14 tx-666666 fw-600"
					>Ultimate Beneficial Owners</label
				>
				<div class="relative">
					<input
						readonly
						id="Ultimate Beneficial Owners"
						name="beneficiaryOwners"
						type="string"
						autocomplete="off"
						required=""
						v-model="beneficiaryOwners"
						class="mt-1.5 br-5 h-12 appearance-none relative block w-full border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-gray-400 focus:z-10 sm:text-sm"
					/>
				</div>
			</div> -->
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
import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";
import { Util } from "@/components/util";

export default {
	name: "StaticBusinessDetails",
	props: {
		details: Object,
	},
	components: {
		GreenCheckedSvg,
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
			registrationDate: props.details.registrationDate
				? Util.formatTime(props.details.registrationDate, "YYYY-MM-DD HH:mm:ss.SSSS", "YYYY-MM-DD")
				: "",
			documentName: props.details.documentName,
		});

		return {
			...toRefs(businessDetails),
		};
	},
};
</script>

<style lang="scss" scoped></style>
