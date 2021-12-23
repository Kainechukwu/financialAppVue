<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-6">
				<h1 class="fw-600 fs-24 blacktext mb-4">AuditLogs</h1>
				<div class="flex">
					<!-- <div class=" flex"> -->
					<select
						id="location"
						name="location"
						class="text-gray-400 block mt-1.5 h-12 w-56 pl-3 pr-10 py-2 focus:outline-none sm:text-sm rounded-md"
					>
						<option selected="" class="hidden">Filter</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
					<!-- </div> -->
				</div>
			</div>

			<!-- --------Table--------- -->
			<div class="flex flex-col">
				<!-- -------Table-------- -->
				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="overflow-hidden border-b border-gray-100 sm:rounded-lg">
								<div class="px-4 bg-white py-2">
									<table class="min-w-full divide-y divide-gray-100">
										<thead class="bg-white">
											<tr>
												<th
													scope="col"
													class="pr-6 pl-4 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Time
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													User
												</th>

												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Role
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													IP Address
												</th>

												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Activity
												</th>
											</tr>
										</thead>

										<tbody class="bg-white divide-y divide-gray-100">
											<tr class="" v-for="(person, index) in people" :key="index">
												<td class="pr-6 pl-4 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.time }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.user }}
												</td>

												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.role }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.ip_Address }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.activity }}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- ---------------------- -->
		</div>
	</div>
</template>

<script>
export default {
	name: "AuditLogs",
	setup() {
		const people = [
			{
				time: "7 Sep, 2021 - 15:09 pm",
				user: "Brooklyn Simmons",
				role: "Admin",
				ip_Address: "102.67.29.242",
				activity: "Wale uploaded new media to a product - files",
			},
			{
				time: "7 Sep, 2021 - 15:09 pm",
				user: "Brooklyn Simmons",
				role: "Admin",
				ip_Address: "102.67.29.242",
				activity: "Wale uploaded new media to a product - files",
			},
			{
				time: "7 Sep, 2021 - 15:09 pm",
				user: "Brooklyn Simmons",
				role: "Admin",
				ip_Address: "102.67.29.242",
				activity: "Wale uploaded new media to a product - files",
			},
			// More people...
		];
		return { people };
	},
};
</script>

<style lang="scss" scoped>
// select {
// -moz-appearance: none; /* Firefox */
// -webkit-appearance: none; /* Safari and Chrome */
// appearance: none;
// position: relative;
// right: 20px;
// }
</style>
