<template>
	<div class="flex flex-col bg-white br-10 px-3.5 py-6">
		<div class="flex justify-between h-6">
			<span class="tx-999999 fw-400 fs-12">{{ props.title }}</span>
			<div style="background-color: #f2f6ff" class="br-5 flex p-2 justify-between items-center">
				<span class="tx-666666 mr-5 fw-500 fs-10">Today</span>
				<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 1L4.015 3.96622L7.03 1"
						stroke="#BFBFBF"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
		<div class="flex justify-between mt-4 h-7">
			<span class="blacktext fw-600 fs-22 counter">N{{ props.cash }}</span>
			<!-- <slot></slot> -->
			<div
				class="flex br-10 w-16 justify-between items-center px-2"
				:class="props.trend === 'trending-up' ? 'bg-green-100' : 'bg-red-100'"
			>
				<span>{{ props.percentage }}%</span>

				<div>
					<svg
						v-if="props.trend === 'trending-up'"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_516_2628)">
							<path
								d="M11.5 3L6.75 7.75L4.25 5.25L0.5 9"
								stroke="#138663"
								stroke-width="1.08333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M8.5 3H11.5V6"
								stroke="#138663"
								stroke-width="1.08333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_516_2628">
								<rect width="12" height="12" fill="white" />
							</clipPath>
						</defs>
					</svg>

					<svg
						v-else
						width="13"
						height="12"
						viewBox="0 0 13 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_516_2641)">
							<path
								d="M12.3818 9L7.63184 4.25L5.13184 6.75L1.38184 3"
								stroke="#FF4D4F"
								stroke-width="1.36808"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9.38177 9H12.3818V6"
								stroke="#FF4D4F"
								stroke-width="1.36808"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_516_2641">
								<rect width="12" height="12" fill="white" transform="translate(0.881836)" />
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import counterUp from "counterup2";
import { onMounted } from "vue";

export default {
	name: "CashInfoPlate",
	props: {
		trend: String,
		cash: String,
		percentage: String,
		title: String,
	},
	setup(props) {
		onMounted(() => {
			const items = document.querySelectorAll(".counter");

			// Start counting, do this on DOM ready or with Waypoints.
			items.forEach((el) => {
				counterUp(el, {
					duration: 900,
					delay: 16,
				});
			});
		});
		return {
			props,
		};
	},
};
</script>

<style lang="scss" scoped></style>
