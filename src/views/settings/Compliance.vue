<template>
	<div class="w-full pb-8">
		<div class="grid grid-rows-1">
			<div class="px-10 pb-8 grid grid-cols-5 gap-8 lg:gap-4 mt-12 relative">
				<div class="col-span-5 sm:col-span-3 md:col-span-2">
					<div class="flex flex-col">
						<div
							class="cursor-pointer mb-6 flex items-center"
							@click="changeView('BusinessDetails')"
						>
							<GreenCheckedSvg v-if="isBusinessDetailsApproved" />

							<CheckedSvg v-else />
							<h1
								:class="currentView === 'BusinessDetails' ? 'fw-700' : 'fw-400'"
								class="ml-3 tx-666666 fs-18"
							>
								Business Details
							</h1>
						</div>

						<div class="cursor-pointer mb-6 flex items-center" @click="changeView('BankAccount')">
							<GreenCheckedSvg v-if="isBankAccountApproved" />

							<CheckedSvg v-else />
							<h1
								:class="currentView === 'BankAccount' ? 'fw-700' : 'fw-400'"
								class="ml-3 tx-666666 fs-18"
							>
								Bank Account
							</h1>
						</div>

						<div class="cursor-pointer flex items-center" @click="changeView('Directors')">
							<GreenCheckedSvg v-if="allDirectorsApproved" />

							<CheckedSvg v-else />
							<h1
								:class="currentView === 'Directors' ? 'fw-700' : 'fw-400'"
								class="ml-3 tx-666666 fs-18"
							>
								Directors
							</h1>
						</div>
						<!-- <div>{{ businessDetailsLoading }}</div> -->
					</div>
				</div>

				<BusinessDetails
					v-if="currentView === 'BusinessDetails'"
					:details="businessDetailsData"
					:detailsLoading="businessDetailsLoading"
				/>
				<BankAccount v-if="currentView === 'BankAccount'" :details="bankAccountData" />

				<Directors
					v-if="currentView === 'Directors'"
					:directorList="directors"
					@refetch="getDirectors"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import CheckedSvg from "@/components/svg/CheckedSvg.vue";
// import CheckedSvgOutlined from "@/components/svg/CheckedSvgOutlined.vue";
import { ref, onMounted } from "vue";
import { Log } from "@/components/util";
import { useStore } from "vuex";
import UserActions from "@/services/userActions/userActions.js";
// import BusinessVerification from "./BusinessVerification.vue";
// import StaticCompliance from "./StaticCompliance.vue";
// import StaticBusinessVerification from "./StaticBusinessVerification.vue";
import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";
// import { Form, Field } from "vee-validate";
// import { useRouter } from "vue-router";
// import * as Yup from "yup";
import BusinessDetails from "./BusinessDetails.vue";
import BankAccount from "./BankAccount.vue";
import Directors from "./Directors.vue";

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
		BankAccount,
		Directors,
		// StaticBusinessVerification,
		GreenCheckedSvg,
		CheckedSvg,
		// Form,
		// Field,
		// StaticCompliance,
	},
	setup() {
		onMounted(() => {
			//get all compliance details
			buisnessDetailsGetter();
			getBankAccount();
			getDirectors();
		});
		const store = useStore();

		const userId = store.getters["authToken/userId"];
		const businessDetailsData = ref({});
		const businessDetailsLoading = ref(false);
		const bankAccountData = ref({});
		const allDirectorsApproved = ref(false);
		const isBankAccountApproved = ref(false);
		const directors = ref([]);
		const isBusinessDetailsApproved = ref(false);
		const currentView = ref("BusinessDetails");

		const prepareDetailsObject = () => {
			const obj = {
				about: "",
				address: "",
				approved: false,
				beneficiaryOwners: "",
				companyName: "",
				country: "",
				documentName: "",
				documentPath: "",

				industry: "",
				numberOfStaff: "",

				rcNumber: "",
				registrationDate: "",
				registrationType: "",
				state: "",
				verificationStatus: "",
				websiteUrl: "",
			};
			return obj;
		};

		const buisnessDetailsGetter = () => {
			businessDetailsLoading.value = true;
			UserActions.getBusinessDetails(
				userId,
				(response) => {
					businessDetailsLoading.value = false;

					businessDetailsData.value = response.data.data
						? response.data.data
						: prepareDetailsObject();
					isBusinessDetailsApproved.value = businessDetailsData.value.approved;

					Log.info(response);
				},
				(error) => {
					businessDetailsLoading.value = false;

					Log.info(error);
				}
			);
		};

		const getBankAccount = () => {
			UserActions.getBankAccount(
				userId,
				(response) => {
					bankAccountData.value = response.data.data;
					isBankAccountApproved.value = response.data.data.approved;
					Log.info("bankData:" + JSON.stringify(bankAccountData.value));
				},
				(error) => {
					Log.info(error);
				}
			);
		};

		const getDirectors = () => {
			UserActions.getDirectors(
				userId,
				(response) => {
					Log.info("Directors:" + JSON.stringify(response.data.data));
					directors.value = response.data.data;
					allDirectorsApproved.value =
						directors.value.length > 0
							? !directors.value.map((director) => director.approved).includes(false)
							: false;
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const changeView = (view) => {
			currentView.value = view;
		};

		return {
			currentView,
			changeView,
			isBusinessDetailsApproved,
			businessDetailsData,
			bankAccountData,
			isBankAccountApproved,
			directors,
			allDirectorsApproved,
			getDirectors,
			businessDetailsLoading,
		};
	},
};
</script>

<style lang="scss" scoped></style>
