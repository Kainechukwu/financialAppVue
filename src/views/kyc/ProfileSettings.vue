<template>
	<div class="w-full px-10 pb-8">
		<div class="grid grid-cols-5 mt-12">
			<div class="col-span-2">
				<div class="flex flex-col">
					<h1 class="blacktext fw-500 fs-18 mb-8">Personal Information</h1>
				</div>
			</div>
			<div class="col-span-3">
				<div class="flex flex-col w-11/12">
					<div class="flex flex-col">
						<div class="grid grid-cols-2 gap-4">
							<div class="mb-8">
								<label for="First Name" class="fs-14 fw-400 tx-666666">First Name</label>
								<input
									id="First Name"
									name="FirstName"
									type="text"
									autocomplete="off"
									required=""
									placeholder="John"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>

							<div class="mb-8">
								<label for="Last Name" class="fs-14 fw-400 tx-666666">Last Name</label>
								<input
									id="Last Name"
									name="LastName"
									type="text"
									autocomplete="off"
									required=""
									placeholder="Doe"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
						</div>

						<!-- -------------- -->
						<div class="mb-8">
							<label for="Email Address" class="fs-14 fw-400 tx-666666">Email Address</label>
							<input
								id="Email Address"
								name="Email Address"
								type="email"
								autocomplete="off"
								required=""
								placeholder="john.doe@gmail.com"
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>

						<!-- --------------- -->
						<div class="grid grid-cols-4 gap-4 mb-4">
							<div class="mb-6 col-span-1">
								<label for="Phone No" class="fs-14 tx-666666 fw-600">Phone No</label>
								<input
									readonly
									id="areaCode"
									name="areaCode"
									type="text"
									v-model="areaCode"
									autocomplete="off"
									required=""
									placeholder="+234"
									class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								/>
							</div>
							<div class="mb-6 col-span-3 flex flex-col justify-between">
								<div>
									<label for="Phone No" class="sr-only fs-14 tx-666666 fw-600">Phone No</label>
								</div>
								<div>
									<input
										id="Phone No"
										name="PhoneNo"
										type="text"
										v-model="phoneNo"
										autocomplete="off"
										required=""
										class="relative bottom-0 br-5 h-12 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									/>
								</div>
							</div>
						</div>
						<!-- ----------  -->

						<div class="flex justify-end">
							<div
								class="cursor-po greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
							>
								<span class="text-white">Submit</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileSettings",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
