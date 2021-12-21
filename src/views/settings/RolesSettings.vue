<template>
	<div class="w-full px-10 pb-8">
		<div class="flex flex-col">
			<div class="flex justify-between items-center">
				<h1 class="mb-6 mt-7 fw-600 fs-18 blacktext">Team Members - 4</h1>

				<div
					class="cursor-pointer greenButton fs-14 fw-500 h-10 px-4 br-5 flex items-center justify-center"
				>
					<span class="text-white">Add User</span>
				</div>
			</div>
			<div class="">
				<table class="min-w-full">
					<thead class="bg-white divide-y divide-gray-100 border-b border-t border-gray-100">
						<tr>
							<th style="max-width: 26px" scope="col" class="pr-6 py-3 fw-600 fs-14 t">
								<div class="flex justify-start">Name</div>
							</th>

							<th style="max-width: 26px" scope="col" class="pr-6 py-3 fw-600 fs-14">
								<div class="flex justify-start">Email</div>
							</th>
							<th style="max-width: 26px" scope="col" class="pr-6 py-3 fw-600 fs-14">
								<div class="flex justify-start">Role</div>
							</th>
							<th style="max-width: 26px" scope="col" class="relative pr-6 py-3">
								<span class="sr-only">Menu</span>
							</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-100 border-b border-gray-100">
						<tr v-for="person in people" :key="person.email">
							<td class="pr-6 py-4 fw-400 fs-14 tx-666666">
								{{ person.name }}
							</td>

							<td style="max-width: 60px" class="pr-6 py-4 fw-400 fs-14 tx-666666">
								{{ person.email }}
							</td>
							<td class="pr-6 py-4 fw-400 fs-14 tx-666666">
								{{ person.role }}
							</td>
							<td class="pr-6 py-4">
								<div class="flex justify-center">
									<svg
										width="4"
										height="16"
										viewBox="0 0 4 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
											fill="#C5C7CD"
										/>
									</svg>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Roles Settings",
	setup() {
		const people = [
			{
				name: "Jane Cooper",
				title: "Regional Paradigm Technician",
				role: "Admin",
				email: "jane.cooper@example.com",
			},
			// More people...
		];
		return { people };
	},
};
</script>

<style lang="scss" scoped></style>
