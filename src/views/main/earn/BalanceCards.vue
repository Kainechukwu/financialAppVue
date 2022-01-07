<template>
	<div class="flex flex-col">
		<div class="mb-2.5">
			<div
				style="background-color: #ed713c"
				class="br-10 flex flex-col items-start px-6 py-8 totalAssets"
			>
				<div class="mb-3.5">
					<h1 class="text-white inter fw-400 fs-12 mb-2">Principal Balance</h1>
					<p class="inter text-white fs-18 fw-600">5,750,20 UST</p>
				</div>
				<div class="relative flex items-center justify-between w-full">
					<div class="flex">
						<div @click="goToDeposit" class="br-3 h-6 bg-white mr-3 px-3.5">
							<span class="fw-400 fs-10"> Add Funds </span>
						</div>
						<div style="border: 1px solid #ffffff" class="br-3 h-6 px-3.5 bg-transparent">
							<span class="fw-400 fs-10 text-white"> Withdraw </span>
						</div>
					</div>
					<div
						style="background-color: rgba(255, 255, 255, 0.38); height: 1.688rem"
						class="flex items-center br-24 px-4"
					>
						<svg
							width="8"
							height="9"
							viewBox="0 0 8 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.98134 8.13164C6.17505 8.13164 7.9534 6.52929 7.9534 4.5527C7.9534 2.5761 6.17505 0.973755 3.98134 0.973755C1.78763 0.973755 0.00927734 2.5761 0.00927734 4.5527C0.00927734 6.52929 1.78763 8.13164 3.98134 8.13164Z"
								fill="#7ED321"
							/>
						</svg>

						<span class="fw-500 fs-10 text-white ml-2"> Selected </span>
					</div>
				</div>
			</div>
		</div>
		<div class="">
			<div
				style="background-color: #4ce6b7"
				class="br-10 flex flex-col items-start px-6 py-8 totalAssets"
			>
				<div class="mb-3.5">
					<h1 class="text-white inter fw-400 fs-12 mb-2">Principal Balance</h1>
					<p class="inter text-white fs-18 fw-600">5,750,20 UST</p>
				</div>
				<div class="relative flex items-center justify-between w-full">
					<div class="flex">
						<div class="br-3 h-6 bg-white px-3.5">
							<span class="fw-400 fs-10"> Withdraw</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
	name: "BalanceCards",
	setup() {
		const router = useRouter();
		const goToDeposit = () => {
			router.push("/earn/deposit");
		};
		return {
			goToDeposit,
		};
	},
};
</script>

<style lang="scss" scoped></style>
