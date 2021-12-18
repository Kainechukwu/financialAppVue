<template>
	<div class="vertical-menu h-full w-64 fixed py-5 px-6">
		<div class="full flex flex-col">
			<div class="br-5 bg-white flex flex-col px-5 py-4">
				<div>
					<span class="mb-1 fw-500 fs-16 blacktext">Bonfree Systems</span>
				</div>
				<div>
					<span class="tx-666666 fw-400 fs-14">Kaine Bismarck</span>
				</div>
			</div>
			<div class="mt-12 flex flex-col">
				<div class="pl-0 p-4 text-black-400 flex">
					<svg
						width="21"
						height="20"
						viewBox="0 0 21 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18.9577 9.23338V10C18.9567 11.7971 18.3748 13.5456 17.2988 14.9849C16.2228 16.4242 14.7104 17.4771 12.9871 17.9866C11.2639 18.4961 9.42207 18.435 7.73641 17.8122C6.05075 17.1894 4.61156 16.0385 3.63348 14.5309C2.6554 13.0234 2.19084 11.2401 2.30908 9.44697C2.42732 7.65385 3.12202 5.94698 4.28958 4.58094C5.45714 3.21489 7.035 2.26286 8.78784 1.86683C10.5407 1.4708 12.3746 1.65199 14.016 2.38338"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18.9578 3.33333L10.6245 11.675L8.12451 9.175"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span class="ml-3 text-white fw-400 fs-16">Pending Actions</span>
				</div>

				<!-- ----------- -->

				<!-- ----------- -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainSideBar",
	components: {
		// CheckedSvgOutlined,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
