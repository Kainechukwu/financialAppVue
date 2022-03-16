<template>
	<div class="flex flex-col">
		<!-- --------------- -->
		<div class="grid grid-cols-2 sm:gap-4">
			<div class="mb-6 col-span-2 sm:col-span-1">
				<label for="Bank Name" class="fs-14 fw-400 tx-666666">Bank Name</label>
				<input
					readonly
					id="Bank Name"
					name="bankName"
					v-model="bankName"
					type="text"
					autocomplete="off"
					required=""
					placeholder="Bank name"
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>

			<div class="mb-6 col-span-2 sm:col-span-1">
				<label for="Bank Officer" class="fs-14 fw-400 tx-666666">Bank Officer</label>
				<input
					readonly
					id="Bank Officer"
					name="bankOfficer"
					v-model="bankOfficer"
					type="text"
					autocomplete="off"
					required=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>
		</div>

		<!-- ---------------- -->
		<div class="mb-6">
			<label for="Bank Address" class="fs-14 fw-400 tx-666666">Bank Address</label>
			<input
				readonly
				id="Bank Address"
				name="bankAddress"
				v-model="bankAddress"
				type="text"
				autocomplete="off"
				required=""
				placeholder=""
				class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
			/>
		</div>

		<!-- -------------- -->

		<div class="grid grid-cols-2 md:gap-4">
			<div class="mb-6 col-span-2 md:col-span-1">
				<label for="Bank Phone Number" class="fs-14 fw-400 tx-666666">Bank Phone Number</label>
				<input
					readonly
					id="Bank Phone Number"
					name="bankPhoneNumber"
					v-model="bankPhoneNumber"
					type="text"
					autocomplete="off"
					required=""
					placeholder=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>

			<div class="mb-6 col-span-2 md:col-span-1">
				<label for="Account Name" class="fs-14 fw-400 tx-666666">Account Name</label>
				<input
					readonly
					id="Account Name"
					name="accountName"
					v-model="accountName"
					type="text"
					autocomplete="off"
					required=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>
		</div>

		<div class="grid grid-cols-2 sm:gap-4">
			<div class="mb-6 col-span-2 sm:col-span-1">
				<label for="Account Number" class="fs-14 fw-400 tx-666666">Account Number</label>
				<input
					readonly
					id="Account Number"
					name="accountNumber"
					v-model="accountNumber"
					type="text"
					autocomplete="off"
					required=""
					placeholder=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>

			<div class="mb-6 col-span-2 sm:col-span-1">
				<label for="Transfer Type" class="fs-14 fw-400 tx-666666">Transfer Type</label>
				<input
					readonly
					id="Transfer Type"
					name="transferType"
					v-model="transferType"
					type="text"
					autocomplete="off"
					required=""
					class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>
		</div>

		<!-- ----------  -->

		<div class="flex justify-end">
			<button
				class="opacity-25 cursor-pointer greenButton fs-14 fw-500 w-2/4 h-12 br-5 flex items-center justify-center"
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
	name: "StaticBankAccount",
	props: {
		details: Object,
	},
	setup(props) {
		const bankAccount = reactive({
			bankPhoneNumber: props.details.bankPhoneNumber,
			accountName: props.details.accountName,
			bankName: props.details.bankName,
			bankOfficer: props.details.bankOfficer,
			bankAddress: props.details.bankAddress,
			accountNumber: props.details.accountNumber,
			transferType: props.details.transferType,
		});

		return { ...toRefs(bankAccount) };
	},
};
</script>

<style lang="scss" scoped></style>
