<template>
	<div
		@click="toggleSidebar"
		style=""
		class="mainMenuBtn 900:ml-0 px-5 py-2 mr-3 br-5 border border-blue-200"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-blue-200"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import { Log } from "@/components/util";

export default {
	name: "MainMenuBtn",
	setup() {
		const store = useStore();
		const isOpen = ref(store.state.openSideBar);
		const toggle = () => {
			isOpen.value = !isOpen.value;
		};
		const toggleSidebar = () => {
			Log.info("before: " + String(isOpen.value));
			toggle();
			Log.info("after: " + String(isOpen.value));

			store.commit("setOpenSideBar", isOpen.value);
		};
		return { toggleSidebar };
	},
};
</script>

<style lang="scss" scoped></style>
