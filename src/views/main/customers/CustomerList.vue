<template>
	<!-- <div class="main-page p-8 h-full"> -->
	<div class="flex flex-col justify-start">
		<div class="mb-6">
			<!-- <h1 class="fw-600 fs-24 blacktext mb-4">Customers</h1> -->
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
					<option selected="" class="hidden rounded-md">Filter</option>
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
												Cust ID
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Customer Name
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Merch ID
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Email Address
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												Account No
											</th>

											<th
												scope="col"
												class="sr-only px-6 py-3 text-left fw-600 fs-14 blacktext tracking-wider"
											>
												View
											</th>
										</tr>
									</thead>

									<tbody class="bg-white divide-y divide-gray-100">
										<tr class="" v-for="(person, index) in people" :key="index">
											<td class="pr-6 pl-4 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ person.custId }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ person.custName }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ person.merchId }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ person.emailAddress }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap tx-666666 fs-14 fw-400">
												{{ person.accountNo }}
											</td>
											<td style="color: #1860b9" class="px-6 py-4 whitespace-nowrap fs-14 fw-500">
												view
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
	<!-- </div> -->
</template>

<script>
export default {
	name: "Customer List",
	setup() {
		const people = [
			{
				custId: "1",
				custName: "Jane Cooper",
				merchId: "1432",
				emailAddress: "user@gmail.com",
				accountNo: "Credit",
			},
			{
				custId: "2",
				custName: "Jane Cooper",
				merchId: "1432",
				emailAddress: "user@gmail.com",
				accountNo: "Credit",
			},
			{
				custId: "3",
				custName: "Jane Cooper",
				merchId: "1432",
				emailAddress: "user@gmail.com",
				accountNo: "Credit",
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
