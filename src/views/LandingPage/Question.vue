<template>
	<div
		@click="toggle"
		:class="showAnswer ? 'activeNhoverShadow' : ''"
		class="p-6 cursor-pointer flex flex-col bg-white br-10 w-full md:w-8/12"
	>
		<div class="flex justify-between">
			<span :class="showAnswer ? 'brFirmaMD' : 'brFirmaReg'" class="fs-18 fw-400"
				>{{ question }}
			</span>

			<div v-if="!showAnswer" class="flex items-center cursor-pointer">
				<svg
					width="16"
					height="17"
					viewBox="0 0 16 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 7.36133H9V1.36133C9 1.09611 8.89464 0.841758 8.70711 0.654222C8.51957 0.466685 8.26522 0.361328 8 0.361328C7.73478 0.361328 7.48043 0.466685 7.29289 0.654222C7.10536 0.841758 7 1.09611 7 1.36133V7.36133H1C0.734784 7.36133 0.48043 7.46669 0.292893 7.65422C0.105357 7.84176 0 8.09611 0 8.36133C0 8.62654 0.105357 8.8809 0.292893 9.06843C0.48043 9.25597 0.734784 9.36133 1 9.36133H7V15.3613C7 15.6265 7.10536 15.8809 7.29289 16.0684C7.48043 16.256 7.73478 16.3613 8 16.3613C8.26522 16.3613 8.51957 16.256 8.70711 16.0684C8.89464 15.8809 9 15.6265 9 15.3613V9.36133H15C15.2652 9.36133 15.5196 9.25597 15.7071 9.06843C15.8946 8.8809 16 8.62654 16 8.36133C16 8.09611 15.8946 7.84176 15.7071 7.65422C15.5196 7.46669 15.2652 7.36133 15 7.36133Z"
						fill="#646464"
					/>
				</svg>
			</div>
			<div v-else class="flex items-center cursor-pointer">
				<svg
					width="16"
					height="3"
					viewBox="0 0 16 3"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15 0.361328H1C0.734784 0.361328 0.48043 0.466685 0.292893 0.654222C0.105357 0.841758 0 1.09611 0 1.36133C0 1.62654 0.105357 1.8809 0.292893 2.06843C0.48043 2.25597 0.734784 2.36133 1 2.36133H15C15.2652 2.36133 15.5196 2.25597 15.7071 2.06843C15.8946 1.8809 16 1.62654 16 1.36133C16 1.09611 15.8946 0.841758 15.7071 0.654222C15.5196 0.466685 15.2652 0.361328 15 0.361328Z"
						fill="#F7931A"
					/>
				</svg>
			</div>
		</div>
		<div v-if="showAnswer" class="">
			<p v-for="answer in answers" :key="answer" class="mt-6 brFirmaReg fw-400 fs-14">
				{{ answer }}
			</p>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	name: "Questions",
	props: {
		question: String,
		answers: Array,
	},
	setup() {
		const showAnswer = ref(false);
		const toggle = () => {
			showAnswer.value = !showAnswer.value;
		};
		return { toggle, showAnswer };
	},
};
</script>

<style lang="scss" scoped>
.expandable {
	//   background: #fff;
	//   overflow: hidden;
	//   color: #000;
	//   line-height: 50px;

	transition: all 0.5s ease-in-out;
	transform-origin: left top;
	transform: scaleY(0);
}

// .expandable:target {
// 	transform: scaleY(1);
// }
</style>
