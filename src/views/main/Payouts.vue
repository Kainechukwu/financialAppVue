<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-6">
				<h1 class="fw-600 fs-24 blacktext mb-4">Payouts</h1>
				<div class="flex">
					<input
						style="border: none"
						id="Searrch"
						name="Search"
						type="text"
						autocomplete="off"
						required=""
						placeholder="Search"
						class="mt-1.5 mr-4 br-5 h-12 appearance-none relative block w-60 px-3 py-2 border-0 focus:outline-none focus:z-10 sm:text-sm"
					/>

					<!-- <div class=" flex"> -->
					<select
						id="location"
						name="location"
						class="text-gray-400 block mt-1.5 h-12 w-36 pl-3 pr-10 py-2 focus:outline-none sm:text-sm rounded-md"
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
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													ID
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Customer
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Amount
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Reference
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Type
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Date
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
												>
													Status
												</th>
											</tr>
										</thead>

										<tbody class="bg-white divide-y divide-gray-100">
											<tr class="" v-for="(person, index) in people" :key="index">
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.id }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.customer }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap blacktext fw-600 fs-14">
													{{ person.amount }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.reference }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.type }}
												</td>
												<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
													{{ person.date }}
												</td>
												<td style="color: #18ae81" class="px-6 py-4 whitespace-nowrap fs-12 fw-600">
													<div
														class="flex justify-center items-center h-8"
														:class="person.status === 'Success' ? 'bg-success' : 'bg-failed'"
														style="border-radius: 100px; max-width: 93px"
													>
														{{ person.status }}
													</div>
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
	name: "Payouts",
	setup() {
		const people = [
			{
				id: "1",
				customer: "Jane Cooper",
				amount: "NGN 12,000.00",
				reference: "5iq10he7fg",
				type: "Credit",
				date: "April 28, 2016",
				status: "Success",
			},
			{
				id: "2",
				customer: "Jane Cooper",
				amount: "NGN 12,000.00",
				reference: "5iq10he7fg",
				type: "Credit",
				date: "April 28, 2016",
				status: "Failed",
			},
			{
				id: "3",
				customer: "Jane Cooper",
				amount: "NGN 12,000.00",
				reference: "5iq10he7fg",
				type: "Credit",
				date: "April 28, 2016",
				status: "Success",
			},
			{
				id: "4",
				customer: "Jane Cooper",
				amount: "NGN 12,000.00",
				reference: "5iq10he7fg",
				type: "Credit",
				date: "April 28, 2016",
				status: "Success",
			},
			{
				id: "5",
				customer: "Jane Cooper",
				amount: "NGN 12,000.00",
				reference: "5iq10he7fg",
				type: "Credit",
				date: "April 28, 2016",
				status: "Failed",
			},
			{
				id: "6",
				customer: "Jane Cooper",
				amount: "NGN 12,000.00",
				reference: "5iq10he7fg",
				type: "Credit",
				date: "April 28, 2016",
				status: "Success",
			},
			// More people...
		];
		return { people };
	},
};
</script>

<style lang="scss" scoped>
.bg-success {
	background-color: #d2f9ed;
	color: #18ae81;
}
.bg-failed {
	background-color: #ffe8e5;
	color: #ff4d4f;
}

.select {
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	appearance: none;
}
</style>
