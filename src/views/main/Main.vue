<template>
	<div class="900:ml-64">
		<Header />
		<transition name="slideOut">
			<div
				v-if="isOpen"
				class="mainMenuBtn z-40 vertical-menu h-full w-64 fixed py-5 px-6 overflow-y-auto"
			>
				<MainSidebar />
			</div>
		</transition>
		<AutoLogout />
		<RefreshToken />
		<div class="900:px-0 900:mx-0">
			<router-view />
		</div>
	</div>
</template>

<script>
import Header from "./Header.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import AutoLogout from "@/views/AutoLogout.vue";
import MainSidebar from "@/views/MainSideBar.vue";
import RefreshToken from "@/views/RefreshToken.vue";

export default {
	name: "Overview",
	components: {
		Header,
		MainSidebar,
		AutoLogout,
		RefreshToken,
	},
	setup() {
		const store = useStore();
		const isOpen = computed(() => store.state.openSideBar);

		return { isOpen };
	},
};
</script>

<style lang="scss" scoped>
.slideOut-enter-active,
.slideOut-leave-active {
	transition: all 0.2s ease-out;
}
.slideOut-leave-to,
.slideOut-enter-from {
	opacity: 0;
	transform: translateX(-100%);
}
</style>
