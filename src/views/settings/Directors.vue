<template>
	<div class="col-span-3">
		<div class="blacktext flex flex-col w-10/12">
			<h1 class="fw-500 fs-18 blacktext">Directors</h1>

			<!-- <div class="flex justify-end"> -->
			<div
				@click="openModal"
				style="background-color: #dedede; max-width: 120px"
				class="mt-4 cursor-pointer fs-14 fw-400 px-4 h-11 br-5 flex items-center justify-center"
			>
				<div class="flex items-center justify-center">
					<span class="">Add Director</span>
				</div>
			</div>
			<!-- </div> -->
		</div>
		<add-director @close="close" :open="open" />
	</div>
</template>

<script>
import { ref } from "vue";

import AddDirector from "@/views/modals/AddDirector.vue";
export default {
	name: "Directors",
	components: {
		AddDirector,
	},
	setup() {
		const open = ref(false);
		const openModal = () => {
			open.value = true;
		};
		const close = () => {
			open.value = false;
		};
		return {
			open,
			close,
			openModal,
		};
	},
};
</script>

<style lang="scss" scoped></style>
