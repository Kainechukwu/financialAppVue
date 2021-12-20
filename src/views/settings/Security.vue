<template>
	<div class="w-full px-10 pb-8">
		<div class="grid grid-cols-5 mt-12">
			<div class="col-span-2">
				<div class="flex flex-col mr-12">
					<h1 class="blacktext fw-500 fs-18 mb-8">Change Password</h1>
					<div class="">
						<p class="tx-666666 fs-14 fw-400">
							Your password should be at least 8 characters and contain a uppercase, lowercase,
							number and special character
						</p>
					</div>
				</div>
			</div>
			<div class="col-span-3">
				<div class="flex flex-col w-9/12">
					<div class="flex flex-col">
						<div class="mb-8">
							<label for="Current Password" class="fs-14 fw-400 tx-666666">Current Password</label>
							<input
								id="Current Password"
								name="Current Password"
								type="text"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>

						<!-- -------------- -->
						<div class="mb-8">
							<label for="New Password" class="fs-14 fw-400 tx-666666">New Password</label>
							<input
								id="New Password"
								name="New Password"
								type="number"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
						<!-- -------------- -->
						<div class="mb-8">
							<label for="Confirm New Password" class="fs-14 fw-400 tx-666666"
								>Confirm New Password</label
							>
							<input
								id="Confirm New Password"
								name="Confirm New Password"
								type="number"
								autocomplete="off"
								required=""
								class="mt-1.5 br-5 h-12 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							/>
						</div>
						<div class="flex justify-end">
							<div
								class="cursor-pointer greenButton fs-14 fw-500 w-2/4 h-14 br-5 flex items-center justify-center"
							>
								<span class="text-white">Change Password</span>
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
	name: "Change Password Settings",
	components: {},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
