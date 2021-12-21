<template>
	<div class="h-24 header w-full flex items-center px-8">
		<div class="flex w-full items-center justify-between">
			<div class="flex">
				<div class="flex items-center mr-4">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
							stroke="#999999"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20.9999 21L16.6499 16.65"
							stroke="#999999"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<input
					style="border: none"
					id="Search"
					name="Search"
					type="text"
					v-model="Search"
					autocomplete="off"
					required=""
					placeholder="Search payments, invoices and transactions"
					class="placeholder-gray-400 h-12 w-80 fw-400 fs-16 appearance-none relative block px-3 py-2 text-gray-900"
				/>
			</div>
			<div class="flex items-center">
				<div @click="toggle" class="mr-3 flex items-center space-x-3 justify-center">
					<span
						role="checkbox"
						tabindex="0"
						aria-checked="false"
						aria-labelledby="toggleLabel"
						:class="enabled ? 'bg-indigo-600' : 'bg-gray-200'"
						class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
					>
						<span
							aria-hidden="true"
							:class="enabled ? 'translate-x-5' : 'translate-x-0'"
							class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
						></span>
					</span>
				</div>
				<div class="greenButton mr-4 w-11 py-px br-6 flex justify-center h-6 items-center">
					<span class="fw-500 fs-10 text-white">Live</span>
				</div>
				<img
					class="inline-block h-12 w-12 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	name: "Header",
	setup() {
		const enabled = ref(false);
		const toggle = () => {
			enabled.value = !enabled.value;
		};
		return { enabled, toggle };
	},
};
</script>

<style lang="scss" scoped>
.header {
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
