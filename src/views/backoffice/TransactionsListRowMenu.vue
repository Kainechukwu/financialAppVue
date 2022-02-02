<template>
	<Menu as="div" class="relative inline-block text-left">
		<div>
			<MenuButton
				class="rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
			>
				<span class="sr-only">Open options</span>
				<ListMenuSvg class="bg-transparent" aria-hidden="true" />
			</MenuButton>
		</div>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<MenuItems
				class="origin-top-right absolute z-10 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
			>
				<div class="py-1">
					<MenuItem
						v-if="route.name === 'Transactions Withdrawal List'"
						@click="openTransactionDetailsModal"
						class="border-b border-gray-200"
						v-slot="{ active }"
					>
						<a
							class="blacktext"
							href="#"
							:class="[
								active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								'block px-4 py-3 text-sm',
							]"
							>Account Details</a
						>
					</MenuItem>
					<MenuItem
						@click="openConfirmTransactionModal"
						class="border-b border-gray-200"
						v-slot="{ active }"
					>
						<a
							class="blacktext"
							href="#"
							:class="[
								active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								'block px-4 py-3 text-sm',
							]"
							>Confirm</a
						>
					</MenuItem>
					<MenuItem @click="openRejectTransactionModal" v-slot="{ active }">
						<a
							class="blacktext"
							href="#"
							:class="[
								active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								'block px-4 py-3 text-sm',
							]"
							>Reject</a
						>
					</MenuItem>

					<!-- <MenuItem v-slot="{ active }">
						<a
							href="#"
							:class="[
								active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
								'block px-4 py-2 text-sm',
							]"
							>License</a
						>
					</MenuItem> -->
					<!-- <form method="POST" action="#">
						<MenuItem v-slot="{ active }">
							<button
								type="submit"
								:class="[
									active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
									'block w-full text-left px-4 py-2 text-sm',
								]"
							>
								Sign out
							</button>
						</MenuItem>
					</form> -->
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import ListMenuSvg from "@/components/svg/ListMenuSvg.vue";
// import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

// import { DotsVerticalIcon } from "@heroicons/vue/solid";

export default {
	name: "TransactionsListRowMenu",
	components: {
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		ListMenuSvg,
		// DotsVerticalIcon,
	},
	setup() {
		const store = useStore();
		const route = useRoute();
		const openConfirmTransactionModal = () => {
			store.commit("setConfirmTransaction", true);
		};

		const openTransactionDetailsModal = () => {
			store.commit("setTransactionDetailsModal", true);
		};

		const openRejectTransactionModal = () => {
			store.commit("setRejectTransaction", true);
		};
		return {
			openConfirmTransactionModal,
			openTransactionDetailsModal,
			openRejectTransactionModal,
			route,
		};
	},
};
</script>
