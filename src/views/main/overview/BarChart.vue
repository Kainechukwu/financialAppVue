<template>
	<div style="max-height: 320px" class="bg-white br-10 px-6 pt-5 pb-5">
		<div class="flex justify-between mb-8">
			<div class="flex flex-col justify-start">
				<span class="tx-999999 fs-10 fw-400">Total Balance</span>
				<h3 style="color: #0d3668" class="fw-700 fs-14">NGN 300,000.23</h3>
			</div>
			<div class="flex">
				<div
					style="background-color: #f2f6ff"
					class="mr-4 br-5 flex p-2 justify-between items-center"
				>
					<span class="blacktext mr-5 fw-400 fs-12">Today</span>
					<svg
						width="8"
						height="5"
						viewBox="0 0 8 5"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1L4.015 3.96622L7.03 1"
							stroke="#BFBFBF"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<div style="background-color: #f2f6ff" class="br-5 flex px-2 justify-between items-center">
					<span class="blacktext mr-5 fw-400 fs-12">Last 7 Days</span>
					<svg
						width="8"
						height="5"
						viewBox="0 0 8 5"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1L4.015 3.96622L7.03 1"
							stroke="#BFBFBF"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
		</div>
		<column-chart
			:colors="['#FFC999']"
			:min="'0'"
			:max="'70000'"
			:data="chartData"
			label="Value"
			thousands=","
			:round="10"
			width="100%"
			height="220px"
		></column-chart>
	</div>
</template>

<script>
// import { BarChart } from "vue-chart-3";
// import { ref, computed } from "vue";
// import { Chart, BarController, CategoryScale, LinearScale, BarElement } from "chart.js";

export default {
	name: "BarChart",
	components: {
		// BarChart,
	},
	setup() {
		const chartData = {
			"May 1": "40000",
			"May 2": "60000",
			"May 3": "20000",
			"May 4": "30000",
			"May 5": "20000",
			"May 6": "55000",
			"May 7": "40000",
			"May 8": "30000",
		};
		return {
			chartData,
		};
	},
};
</script>

<style lang="scss" scoped></style>
