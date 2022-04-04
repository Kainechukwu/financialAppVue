<template>
	<!-- style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05)" -->
	<div class="">
		<div style="border-bottom: 0.8px solid #f1f1f1" class="pb-4 px-6 flex">
			<div @click="close" class="flex mr-3 items-center">
				<svg
					width="24"
					height="19"
					viewBox="0 0 24 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 13L9 7L15 1"
						stroke="#333333"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			<span class="fw-600 fs-14 blacktext">Beneficiaries</span>
		</div>
		<div class="flex flex-col px-6 pt-10">
			<div v-for="beneficiary in beneficiaries" :key="beneficiary.id" class="mb-2">
				<div @click="selectBeneficiary(beneficiary)" class="flex cursor-pointer">
					<div class="flex items-center mr-3">
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="20" cy="20" r="20" fill="#F2F6FF" />
							<path
								d="M27.5003 18.3333C27.6098 18.3334 27.7181 18.3118 27.8193 18.27C27.9204 18.2281 28.0123 18.1667 28.0896 18.0893C28.167 18.0119 28.2284 17.9201 28.2703 17.8189C28.3122 17.7178 28.3337 17.6094 28.3337 17.5V15C28.3337 14.8251 28.2787 14.6547 28.1765 14.5129C28.0742 14.371 27.9299 14.265 27.764 14.2098L20.264 11.7098C20.0928 11.6528 19.9078 11.6528 19.7367 11.7098L12.2367 14.2098C12.0707 14.265 11.9264 14.371 11.8242 14.5129C11.7219 14.6547 11.6669 14.8251 11.667 15V17.5C11.667 17.6094 11.6885 17.7178 11.7304 17.8189C11.7722 17.9201 11.8336 18.0119 11.911 18.0893C11.9884 18.1667 12.0803 18.2281 12.1814 18.27C12.2825 18.3118 12.3909 18.3334 12.5003 18.3333H13.3337V24.3202C12.8476 24.4914 12.4265 24.8089 12.128 25.229C11.8296 25.6491 11.6686 26.1513 11.667 26.6667V28.3333C11.667 28.4428 11.6885 28.5512 11.7304 28.6523C11.7722 28.7534 11.8336 28.8453 11.911 28.9227C11.9884 29 12.0803 29.0614 12.1814 29.1033C12.2825 29.1452 12.3909 29.1667 12.5003 29.1667H27.5003C27.6098 29.1667 27.7181 29.1452 27.8193 29.1033C27.9204 29.0614 28.0123 29 28.0896 28.9227C28.167 28.8453 28.2284 28.7534 28.2703 28.6523C28.3122 28.5512 28.3337 28.4428 28.3337 28.3333V26.6667C28.3321 26.1513 28.171 25.6491 27.8726 25.229C27.5742 24.8089 27.153 24.4914 26.667 24.3202V18.3333H27.5003ZM26.667 27.5H13.3337V26.6667C13.3339 26.4457 13.4217 26.2339 13.578 26.0777C13.7342 25.9214 13.946 25.8336 14.167 25.8333H25.8337C26.0546 25.8336 26.2664 25.9214 26.4227 26.0777C26.5789 26.2339 26.6668 26.4457 26.667 26.6667V27.5ZM15.0003 24.1667V18.3333H16.667V24.1667H15.0003ZM18.3337 24.1667V18.3333H21.667V24.1667H18.3337ZM23.3337 24.1667V18.3333H25.0003V24.1667H23.3337ZM13.3337 16.6667V15.6006L20.0003 13.3781L26.667 15.6006V16.6667H13.3337Z"
								fill="#6B99FF"
							/>
						</svg>
					</div>
					<div class="flex flex-col">
						<span class="blacktext fs-14 fw-500">{{ beneficiary.accountName }}</span>
						<span class="fw-400 fs-14 tx-666666"
							>{{ beneficiary.accountNumber }} - {{ beneficiary.bankName }}</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- <ConfirmWithdrawal /> -->
	<!-- ------------------ -->
</template>

<script>
// import { useRouter } from "vue-router";
// import CancelSvg from "./CancelSvg.vue";
import { Log } from "@/components/util";
import {
	ref,
	onMounted,
	//  computed,
} from "vue";

export default {
	name: "NaijaWithdraw",

	components: {
		// CancelSvg,
	},
	props: {
		// page: String,
		beneficiaries: Array,
	},
	setup(props, context) {
		onMounted(() => {
			Log.info(props.beneficiaries);
		});

		const selectedBeneficiary = ref({});

		const selectBeneficiary = (beneficiary) => {
			selectedBeneficiary.value = beneficiary;
			close();
		};

		const close = () => {
			context.emit("close", selectedBeneficiary.value);
		};
		// watch(rate, (newValue) => {
		// 	Log.info(newValue);
		// 	youReceive.value =
		// });

		return {
			selectBeneficiary,
			close,
		};
	},
};
</script>

<style lang="scss" scoped>
.activeWallet {
	border: 1.5px solid #99b8ff;
	background-color: #f2f6ff;
}
</style>
