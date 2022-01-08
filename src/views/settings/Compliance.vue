<template>
	<div class="w-full pb-8">
		<div class="grid grid-rows-2">
			<div style="border-bottom: 1px solid #efefef" class="px-10 pb-8 grid grid-cols-5 mt-12">
				<div class="col-span-2">
					<div class="flex flex-col">
						<h1 class="blacktext fw-500 fs-18 mb-8">Personal KYC</h1>
					</div>
				</div>
				<div class="col-span-3">
					<div class="flex flex-col w-9/12">
						<div class="flex flex-col">
							<div class="grid grid-cols-2 gap-4">
								<div class="mb-8">
									<label for="Country" class="fs-14 fw-400 tx-666666">Country</label>
									<input
										id="Country"
										name="country"
										type="text"
										autocomplete="off"
										required=""
										placeholder="United States of America"
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									/>
								</div>

								<div class="mb-8">
									<label for="State" class="fs-14 fw-400 tx-666666">State</label>
									<input
										id="State"
										name="state"
										type="text"
										autocomplete="off"
										required=""
										placeholder="Texas"
										class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									/>
								</div>
							</div>

							<!-- -------------- -->
							<div class="mb-8">
								<label for="Address" class="fs-14 fw-400 tx-666666">Address</label>
								<input
									id="Address"
									name="Address"
									type="text"
									autocomplete="off"
									required=""
									placeholder="6391 Elgin St. Celina, Delaware 10299"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<!-- --------------- -->
							<div class="grid grid-cols-2 gap-4 mb-4">
								<div class="mb-6 col-span-1">
									<label for="Identification Type" class="fs-14 tx-666666 fw-600"
										>Identification Type</label
									>
									<div class="relative">
										<input
											id="Identification Type"
											name="Identification Type"
											type="text"
											autocomplete="off"
											required=""
											placeholder="Driver's License"
											class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>

										<div class="absolute mx-3 inset-y-0 h-full flex items-center right-0">
											<svg
												width="12"
												height="6"
												viewBox="0 0 12 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 1L5.73 5.2L10.46 1"
													stroke="#BFBFBF"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</div>
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
											id="Identification Number"
											name="Identification Number"
											type="text"
											autocomplete="off"
											required=""
											placeholder="LSDAA0023456"
											class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										/>
									</div>
								</div>
							</div>

							<div class="mb-8">
								<label for="Upload ID" class="fs-14 fw-400 tx-666666">Upload ID</label>
								<div class="relative">
									<input
										readonly
										id="upload id"
										name="upload id"
										type="number"
										autocomplete="off"
										required=""
										placeholder="No document uploaded"
										class="bg-gray-100 mt-1.5 br-5 h-14 appearance-none relative block w-full pr-3 pl-11 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									/>
									<div class="absolute mx-3 inset-y-0 h-full flex items-center">
										<svg
											width="21"
											height="20"
											viewBox="0 0 21 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M18.8337 9.23342V10.0001C18.8326 11.7971 18.2507 13.5457 17.1748 14.9849C16.0988 16.4242 14.5864 17.4772 12.8631 17.9867C11.1399 18.4962 9.29804 18.435 7.61238 17.8122C5.92673 17.1895 4.48754 16.0385 3.50946 14.531C2.53138 13.0235 2.06682 11.2401 2.18506 9.44702C2.30329 7.65389 2.998 5.94703 4.16556 4.58098C5.33312 3.21494 6.91098 2.26291 8.66382 1.86688C10.4167 1.47085 12.2505 1.65204 13.892 2.38342"
												stroke="#CBCBCB"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M18.8333 3.33337L10.5 11.675L8 9.17504"
												stroke="#CBCBCB"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</div>
							</div>
							<!-- ----------  -->

							<div class="flex justify-end">
								<div
									class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
								>
									<span class="text-white">Save</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<BusinessVerification />
		</div>
	</div>
</template>

<script>
// import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
import BusinessVerification from "./BusinessVerification.vue";
export default {
	name: "Compliance Settings",
	components: {
		// CheckedSvgOutlined,
		BusinessVerification,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
