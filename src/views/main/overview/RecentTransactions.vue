<template>
	<div class="flex flex-col">
		<h3 class="mb-2.5 fw-600 blacktext fs-16">Recent Transactions</h3>
		<!-- -------Table-------- -->
		<div class="flex flex-col">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div class="overflow-hidden border-b border-gray-100 sm:rounded-lg">
						<table class="min-w-full divide-y divide-gray-100">
							<thead class="bg-white">
								<tr>
									<th scope="col" class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider">
										Customer
									</th>
									<th scope="col" class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider">
										Amount
									</th>
									<th scope="col" class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider">
										Reference
									</th>
									<th scope="col" class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider">
										Type
									</th>
									<th scope="col" class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider">
										Date
									</th>
									<th scope="col" class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider">
										Status
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="(person, index) in people" :key="index">
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
											class="flex justify-center items-center h-7"
											style="background-color: #d2f9ed; border-radius: 100px; max-width: 93px"
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
</template>

<script>
export default {
	name: "RecentTransactions",
	setup() {
		const people = [
			{
				customer: "Jane Cooper",
				amount: "NGN 12,000.00",
				reference: "5iq10he7fg",
				type: "Credit",
				date: "April 28, 2016",
				status: "Success",
			},
			{
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

<style lang="scss" scoped></style>
