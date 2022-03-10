<template>
	<div class="w-full pb-8">
		<div class="grid grid-rows-1">
			<div class="px-10 pb-8 grid grid-cols-5 mt-12">
				<div class="col-span-2">
					<div class="flex flex-col">
						<div
							class="cursor-pointer mb-6 flex items-center"
							@click="changeView('BusinessDetails')"
						>
							<CheckedSvg />
							<!-- <GreenCheckedSvg v-else /> -->
							<h1
								:class="currentView === 'BusinessDetails' ? 'fw-700' : 'fw-400'"
								class="ml-3 tx-666666 fs-18"
							>
								Business Details
							</h1>
						</div>

						<div class="cursor-pointer mb-6 flex items-center" @click="changeView('BankAccount')">
							<CheckedSvg />
							<!-- <GreenCheckedSvg v-else /> -->
							<h1
								:class="currentView === 'BankAccount' ? 'fw-700' : 'fw-400'"
								class="ml-3 tx-666666 fs-18"
							>
								Bank Account
							</h1>
						</div>

						<div class="cursor-pointer flex items-center" @click="changeView('Directors')">
							<CheckedSvg />
							<!-- <GreenCheckedSvg v-else /> -->
							<h1
								:class="currentView === 'Directors' ? 'fw-700' : 'fw-400'"
								class="ml-3 tx-666666 fs-18"
							>
								Directors
							</h1>
						</div>
					</div>
				</div>
				<BusinessDetails v-if="currentView === 'BusinessDetails'" />
				<div v-else>dkjfnw</div>
			</div>
		</div>
	</div>
</template>

<script>
import CheckedSvg from "@/components/svg/CheckedSvg.vue";
// import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
import { ref, onMounted } from "vue";
// import { Log, Util } from "@/components/util";
// import { useStore } from "vuex";
// import UserActions from "@/services/userActions/userActions.js";
// import BusinessVerification from "./BusinessVerification.vue";
// import StaticCompliance from "./StaticCompliance.vue";
// import StaticBusinessVerification from "./StaticBusinessVerification.vue";
// import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";
// import { Form, Field } from "vee-validate";
// import { useRouter } from "vue-router";
// import * as Yup from "yup";
import BusinessDetails from "./BusinessDetails.vue";
// import {
// 	Listbox,
// 	ListboxButton,
// 	ListboxLabel,
// 	ListboxOption,
// 	ListboxOptions,
// } from "@headlessui/vue";
export default {
	name: "Compliance Settings",
	components: {
		// CheckedSvgOutlined,
		// Listbox,
		// ListboxButton,
		// ListboxLabel,
		// ListboxOption,
		// ListboxOptions,
		// BusinessVerification,
		BusinessDetails,
		// StaticBusinessVerification,
		// GreenCheckedSvg,
		CheckedSvg,
		// Form,
		// Field,
		// StaticCompliance,
	},
	setup() {
		onMounted(() => {
			// getBusinessVerificationDetails();
			// getPersonalComplianceDetails();
		});

		const currentView = ref("BusinessDetails");

		const changeView = (view) => {
			currentView.value = view;
		};

		return {
			currentView,
			changeView,
		};
	},
};
</script>

<style lang="scss" scoped></style>
