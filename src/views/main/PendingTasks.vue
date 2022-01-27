<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="mb-6">
				<h1 class="fw-600 fs-24 blacktext">Get Started</h1>
				<span class="tx-999999 fw-400 fs-14">You have 3 pending actions to complete</span>
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
						<CheckedSvg v-if="isProfileUpdated" />
						<GreenCheckedSvg v-else />
					</div>
					<div @click="goToProfileSettings" class="cursor-pointer flex px-6 py-4 justify-between">
						<div class="flex">
							<VerifyContactSvg />
							<p class="ml-4 my-auto inter fs-14 fw-400">Verify Phone Number</p>
						</div>
						<CheckedSvg v-if="isPhoneNumberVerified" />
						<GreenCheckedSvg v-else />
					</div>
					<div @click="goToCompliance" class="cursor-pointer flex px-6 py-4 justify-between">
						<div class="flex">
							<KycSvg />
							<p class="ml-4 my-auto inter fs-14 fw-400">KYC: Upload ID, Take selfie</p>
						</div>
						<CheckedSvg v-if="isKycDone" />
						<GreenCheckedSvg v-else />
					</div>
					<div @click="goToPinSettings" class="cursor-pointer flex px-6 py-4 justify-between">
						<div class="flex">
							<SetPinSvg />
							<p class="ml-4 my-auto inter fs-14 fw-400">Set authenticaton PIN</p>
						</div>
						<CheckedSvg v-if="hasPin" />
						<GreenCheckedSvg v-else />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompleteProfileDetailsSvg from "@/components/svg/CompleteProfileDetailsSvg.vue";
import VerifyContactSvg from "@/components/svg/VerifyContactSvg.vue";
import SetPinSvg from "@/components/svg/SetPinSvg.vue";
import CheckedSvg from "@/components/svg/CheckedSvg.vue";
import KycSvg from "@/components/svg/KycSvg.vue";
import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
	name: "Pending Tasks",
	components: {
		CompleteProfileDetailsSvg,
		GreenCheckedSvg,
		CheckedSvg,
		KycSvg,
		SetPinSvg,
		VerifyContactSvg,
	},
	setup() {
		const store = useStore();
		const hasPin = store.getters["authToken/hasPin"];
		const isProfileUpdated = store.getters["authToken/isProfileUpdated"];
		const isPhoneNumberVerified = store.getters["authToken/isPhoneNumberVerified"];
		const isKycDone = store.getters["authToken/isKycDone"];

		const router = useRouter();
		const goToProfileSettings = () => {
			router.push("/settings/profile");
		};
		const goToPinSettings = () => {
			router.push("/settings/pin");
		};
		const goToCompliance = () => {
			router.push("/settings/compliance");
		};
		return {
			goToProfileSettings,
			goToPinSettings,
			goToCompliance,
			hasPin,
			isProfileUpdated,
			isPhoneNumberVerified,
			isKycDone,
		};
	},
};
</script>

<style lang="scss" scoped></style>
