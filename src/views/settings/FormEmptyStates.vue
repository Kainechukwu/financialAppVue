<template>
	<div>
		<div class="flex flex-col">
			<div class="mb-6">
				<label for="Company Name" class="fs-14 fw-400 tx-666666"></label>
				<input
					readonly
					id="Company Name"
					name="companyName"
					type="text"
					autocomplete="off"
					required=""
					placeholder=""
					class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>

			<!-- --------------- -->

			<!-- ---------------- -->
			<div class="mb-6">
				<label for="Opening Address" class="fs-14 fw-400 tx-666666"></label>
				<input
					readonly
					id="Opening Address"
					name="openingAddress"
					type="text"
					autocomplete="off"
					required=""
					class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				/>
			</div>

			<!-- ----------------------- -->
			<div class="grid grid-cols-2 sm:gap-4">
				<div class="mb-6 col-span-2 sm:col-span-1">
					<label for="Rc Number" class="fs-14 tx-666666 fw-600"></label>
					<div class="relative">
						<input
							readonly
							id="rcNumber"
							name="rcNumber"
							type="text"
							autocomplete="off"
							required=""
							class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>
				</div>
			</div>

			<!-- ---------------- -->
			<div class="grid grid-cols-2 xl:gap-4">
				<div class="mb-6 col-span-2 xl:col-span-1">
					<label for="Website URL" class="fs-14 fw-400 tx-666666"></label>
					<input
						readonly
						id="Website URL"
						name="websiteUrl"
						type="text"
						autocomplete="off"
						required=""
						class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
					/>
				</div>
				<!-- style="
								white-space: nowrap;
								width: 100%;
								overflow: hidden;
								text-overflow: ellipsis;
								display: inline-block;
							" -->
				<div class="mb-6 col-span-2 xl:col-span-1">
					<label for="Ultimate Beneficial Owners" class="fs-14 tx-666666 fw-600"></label>
					<div class="relative">
						<input
							readonly
							id="ultimateBeneficialOwners"
							name="ultimateBeneficialOwners"
							type="text"
							autocomplete="off"
							required=""
							class="animate-pulse mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						/>
					</div>
				</div>
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
					class="animate-pulse mt-1.5 br-5 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
				></textarea>
			</div>

			<!-- ----------  -->

			<div class="flex justify-end">
				<div
					type="submit"
					class="animate-pulse greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
				>
					<div class="flex items-center justify-center">
						<span class="text-white"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FormEmptyState",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
