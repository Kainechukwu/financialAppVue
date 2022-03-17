<template>
	<div class="col-span-3">
		<div class="blacktext flex flex-col w-8/12">
			<h1 class="fw-500 fs-18 blacktext">Directors</h1>

			<div v-if="directors.length > 0" class="flex flex-col mt-3 mb-4">
				<div
					v-for="director in directors"
					:key="director.id"
					style="background-color: #f5f8ff; border: 1px solid #e6edff"
					class="blacktext fs-14 fw-400 mb-2.5 flex items-center justify-between br-5 h-12 px-4"
				>
					<span>{{ director.firstName }} {{ director.lastName }}</span>
					<div class="flex items-center">
						<span @click="openEditModal(director)" class="cursor-pointer px-4">Edit</span>
						<span class="cursor-pointer px-4">Delete</span>
					</div>
				</div>
			</div>

			<!-- <div class="flex justify-end"> -->
			<div
				@click="openModal"
				style="background-color: #dedede; max-width: 120px"
				class="mt-4 mb-20 cursor-pointer fs-14 fw-400 px-4 h-11 br-5 flex items-center justify-center"
			>
				<div class="flex items-center justify-center">
					<span class="">Add Director</span>
				</div>
			</div>
			<!-- </div> -->
		</div>
		<add-director @close="close" :open="open" />
		<edit-director
			v-if="Object.keys(detailsToEdit).length > 0"
			@close="closeEdit"
			:details="detailsToEdit"
			:open="openEdit"
		/>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import UserActions from "@/services/userActions/userActions.js";
import { useStore } from "vuex";
import { Log, Util } from "@/components/util";
import EditDirector from "@/views/modals/EditDirector.vue";

import AddDirector from "@/views/modals/AddDirector.vue";
export default {
	name: "Directors",
	components: {
		AddDirector,
		EditDirector,
	},
	setup() {
		onMounted(() => {
			getDirectors();
		});
		const open = ref(false);
		const openEdit = ref(false);
		const detailsToEdit = ref({});
		const store = useStore();
		const directors = ref([]);
		const userId = store.getters["authToken/userId"];
		const getDirectors = () => {
			UserActions.getDirectors(
				userId,
				(response) => {
					Log.info("Directors:" + JSON.stringify(response.data.data));
					directors.value = response.data.data;
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const passInfo = (info) => {
			detailsToEdit.value = info;
		};

		const openModal = () => {
			open.value = true;
		};
		const close = () => {
			open.value = false;
		};

		const openEditModal = (info) => {
			passInfo(info);
			// Log.info("info" + JSON.stringify(info));
			// Log.info("passedInfo:" + JSON.stringify(detailsToEdit.value));
			Util.throttle({
				key: "Open Edit Modal",
				run: () => {
					openEdit.value = true;
				},
				time: 400,
			});
		};
		const closeEdit = () => {
			openEdit.value = false;
		};
		return {
			open,
			openEdit,
			openEditModal,
			closeEdit,
			close,
			openModal,
			directors,
			detailsToEdit,
		};
	},
};
</script>

<style lang="scss" scoped></style>
