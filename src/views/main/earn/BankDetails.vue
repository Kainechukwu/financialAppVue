<template>
	<div
		style="border: 1px solid #f1f1f1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)"
		class="ml-6 bg-white flex flex-col br-10 pt-4 pb-8"
	>
		<div class="flex px-4 pb-3 items-center justify-between border-b border-gray-100">
			<div class="flex">
				<div @click="goBack" class="cursor-pointer">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 12H5"
							stroke="#333333"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 19L5 12L12 5"
							stroke="#333333"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<span class="fw-600 fs-16 blacktext ml-3">Bank Details</span>
			</div>
			<div>
				<CancelSvg />
			</div>
		</div>
		<!-- --------------------- -->
		<div class="mt-6">
			<div class="px-4 flex flex-col">
				<div class="grid grid-cols-2 gap-5 mb-8">
					<div class="">
						<label for="Beneficiary Name" class="fs-14 tx-666666 fw-600">Beneficiary Name</label>
						<input
							id="Beneficiary Name"
							name="Beneficiary Name"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>
					<!-- ---------- -->
					<div class="">
						<label for="Beneficiary Account Number" class="fs-14 tx-666666 fw-600"
							>Beneficiary Account Number</label
						>
						<input
							id="Beneficiary Account Number"
							name="Beneficiary Account Number"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-5 mb-8">
					<div class="">
						<label for="Bank Name" class="fs-14 tx-666666 fw-600">Bank Name</label>
						<input
							id="Bank Name"
							name="Bank Name"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>
					<!-- ---------- -->
					<div class="">
						<label for="ABA Routing Number" class="fs-14 tx-666666 fw-600"
							>ABA Routing Number</label
						>
						<input
							id="ABA Routing Number"
							name="ABA Routing Number"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-5 mb-8">
					<div class="col-span-2">
						<label for="Bank Address" class="fs-14 tx-666666 fw-600">Bank Address</label>
						<input
							id="Bank Address"
							name="Bank Address"
							type="text"
							autocomplete="off"
							required=""
							class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>
				</div>

				<div
					style="background-color: #d2f9ed"
					class="br-5 grid grid-cols-2 mb-3 px-3 py-4 flex flex-col mt-3"
				>
					<div class="col-span-2">
						<h2 class="blacktext fw-500 fs-14">Instructions</h2>
						<ul class="list-disc mx-4 fs-12 fw-400">
							<li>
								If your withdrawal is returned by the receiving bank, the fund will take longer to
								be credited back to your Bornfree account. Transaction fee will be charged and
								deducted from the credited amount.
							</li>
							<li>
								The arrival of your withdrawal depends on the region of your receiving bank.
								Usually, it takes 2 to 4 business days.
							</li>
						</ul>
					</div>
				</div>

				<div class="col-span-2 flex">
					<input type="checkbox" class="mt-1.5 mr-3" />
					<span class="fs-12 fw-400">
						By proceeding, you agree that you understood the above instructions, and you are aware
						that if a transaction is made without following these instructions, it is not a valid
						transaction.
					</span>
				</div>
			</div>
			<div
				@click="goNext"
				style="background-color: #2b7ee4"
				class="mt-4 mx-auto flex items-center justify-center h-12 w-52 br-5"
			>
				<span class="fw-500 fs-16 text-white"> Continue</span>
			</div>
		</div>
		<!-- ------------------ -->
	</div>
</template>

<script>
import { useRouter } from "vue-router";
import CancelSvg from "./CancelSvg.vue";

export default {
	name: "Bank Details",
	components: {
		CancelSvg,
	},
	setup() {
		const router = useRouter();
		const goBack = () => {
			router.push("/withdraw");
		};

		const goNext = () => {
			router.push("/confirm_withdrawal");
		};

		return {
			goNext,
			goBack,
		};
	},
};
</script>

<style lang="scss" scoped></style>
