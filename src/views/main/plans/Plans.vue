<template>
	<div class="main-page p-8 h-full">
		<div class="flex flex-col justify-start">
			<div class="flex justify-between mb-6">
				<div class="">
					<h1 class="fw-600 fs-24 blacktext">Plans</h1>
					<span class="tx-999999 fw-400 fs-14"
						>Create and customize plans tailored for your customers</span
					>
				</div>
				<div class="flex justify-center items-center">
					<div style="background-color: #1860b9" class="px-6 py-3 br-10">
						<span class="fs-14 text-white fw-600"> Create a Plan </span>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-4 max-w-6xl">
				<PlansCardFrame>
					<div @click="turnOnThisProductModal" class="cursor-pointer">
						<div class="flex justify-between">
							<div>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="20" cy="20" r="20" fill="#D2F9ED" />
									<path
										d="M9.29119 27H11.6626V22.5767H14.1683C17.1918 22.5767 18.8153 20.7614 18.8153 18.2429C18.8153 15.7436 17.2109 13.9091 14.2003 13.9091H9.29119V27ZM11.6626 20.6271V15.8906H13.8359C15.6129 15.8906 16.3991 16.8494 16.3991 18.2429C16.3991 19.6364 15.6129 20.6271 13.8487 20.6271H11.6626ZM31.633 13.9091H29.2743V22.8324H29.1593L22.9973 13.9091H20.8752V27H23.2466V18.0831H23.3553L29.5236 27H31.633V13.9091Z"
										fill="#18AE81"
									/>
								</svg>
							</div>
							<div class="flex items-center">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 6C11.1 6 12 5.1 12 4C12 2.9 11.1 2 10 2C8.9 2 8 2.9 8 4C8 5.1 8.9 6 10 6ZM10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8ZM10 14C8.9 14 8 14.9 8 16C8 17.1 8.9 18 10 18C11.1 18 12 17.1 12 16C12 14.9 11.1 14 10 14Z"
										fill="#999999"
									/>
								</svg>
							</div>
						</div>
						<div class="flex flex-col mt-4">
							<span style="color: #022b69" class="mb-2 fw-600 fs-14">Plan Name</span>
							<span class="tx-666666 fw-400 fs-12 mb-3">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
								officia consequat duis enim velit mollit.
							</span>
							<span class="fs-12 fw-400 tx-666666">
								Rate
								<span class="fw-600 blacktext">15%</span>
							</span>
						</div>
					</div>
				</PlansCardFrame>
				<PlansCardFrame>
					<div class="w-full flex items-center justify-center flex-col">
						<div @click="turnOnAddProductModal">
							<svg
								width="60"
								height="60"
								viewBox="0 0 60 60"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="30" cy="30" r="30" fill="#E8F1FC" />
								<path
									d="M30.4905 18.9634V39.9634"
									stroke="#1860B9"
									stroke-width="3.47826"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M19.9905 29.4629H40.9905"
									stroke="#1860B9"
									stroke-width="3.47826"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<span class="mt-5 fw-600 fs-16 tx-666666">Create New Plan</span>
					</div>
				</PlansCardFrame>
			</div>
		</div>
		<add-product-modal />
	</div>
</template>

<script>
import { useStore } from "vuex";
import PlansCardFrame from "./PlansCardFrame.vue";

import AddProductModal from "@/views/modals/AddProductModal.vue";
export default {
	name: "Plans",
	components: {
		PlansCardFrame,
		AddProductModal,
	},
	setup() {
		const store = useStore();
		const turnOnAddProductModal = () => {
			store.commit("setAddProductModal", true);
		};

		const turnOnThisProductModal = () => {
			store.commit("setThisProductModal", true);
		};

		// const closeModal = () => {
		// 	store.commit("setThisProductModal", false);
		// }
		return {
			turnOnAddProductModal,
			turnOnThisProductModal,
		};
	},
};
</script>

<style lang="scss" scoped>
.productCard {
	width: 330px;
}
</style>
