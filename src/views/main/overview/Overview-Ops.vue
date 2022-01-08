<template>
	<div>
		<div class="flex flex-col">
			<div class="mb-4">
				<div class="br-10 flex justify-between items-center px-6 py-8 totalAssets nav-link-bg">
					<div>
						<p class="inter fw-500 fs-14 text-white mb-4">Total Assets</p>
						<h1 class="inter fw-600 fs-30 text-white">123,765.98 UST</h1>
					</div>
					<TotalAssetsSvg />
				</div>
			</div>
			<div class="br-10 bg-white mb-4">
				<div class="flex flex-col">
					<div class="py-4 px-6 border-b-2 border-gray-200">
						<span class="inter fs-12 blacktext">Pending Actions</span>
					</div>
					<div @click="goToProfileSettings" class="cursor-pointer flex px-6 py-4 justify-between">
						<div class="flex">
							<CompleteProfileDetailsSvg />
							<p class="ml-4 my-auto inter fs-14 fw-400">Complete profile details</p>
						</div>
						<CheckedSvg />
					</div>
					<div class="cursor-pointer flex px-6 py-4 justify-between">
						<div class="flex">
							<VerifyContactSvg />
							<p class="ml-4 my-auto inter fs-14 fw-400">Verify Phone Number</p>
						</div>
						<CheckedSvg />
					</div>
					<div class="cursor-pointer flex px-6 py-4 justify-between">
						<div class="flex">
							<KycSvg />
							<p class="ml-4 my-auto inter fs-14 fw-400">KYC: Upload ID, Take selfie</p>
						</div>
						<CheckedSvg />
					</div>
					<div class="cursor-pointer flex px-6 py-4 justify-between">
						<div class="flex">
							<SetPinSvg />
							<p class="ml-4 my-auto inter fs-14 fw-400">Set authenticaton PIN</p>
						</div>
						<CheckedSvg />
					</div>
				</div>
			</div>
			<div class="">
				<div
					style="background-color: #4ce6b7"
					class="br-10 flex items-center px-6 py-8 totalAssets"
				>
					<div class="pr-4">
						<h1 class="tp-color inter fw-700 fs-18">Track Performance</h1>
						<p class="inter tp-color fs-12 fw-400">
							Instant analytics display of investment performance and other details about your
							assets.
						</p>
					</div>
					<div><TransactionPerformanceSvg /></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompleteProfileDetailsSvg from "@/components/svg/CompleteProfileDetailsSvg.vue";
import TransactionPerformanceSvg from "@/components/svg/TransactionPerformanceSvg.vue";
import TotalAssetsSvg from "@/components/svg/TotalAssetsSvg.vue";
import CheckedSvg from "@/components/svg/CheckedSvg.vue";
import KycSvg from "@/components/svg/KycSvg.vue";
import SetPinSvg from "@/components/svg/SetPinSvg.vue";
import VerifyContactSvg from "@/components/svg/VerifyContactSvg.vue";
import { useRouter } from "vue-router";

export default {
	name: "OverviewOps",
	components: {
		CompleteProfileDetailsSvg,
		CheckedSvg,
		TransactionPerformanceSvg,
		TotalAssetsSvg,
		KycSvg,
		SetPinSvg,
		VerifyContactSvg,
	},
	setup() {
		const router = useRouter();

		const goToProfileSettings = () => {
			router.push({ name: "Settings" });
		};

		return {
			goToProfileSettings,
		};
	},
};
</script>

<style lang="scss" scoped>
.tp-color {
	color: #144d3b;
}
</style>
