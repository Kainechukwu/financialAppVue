<template>
	<div class="w-full pb-32">
		<div class="mx-auto mt-40" style="max-width: 71.25rem">
			<div class="mx-auto flex flex-col items-center justify-center" style="max-width: 55rem">
				<div class="inline relative mb-24">
					<span style="color: #1e2235" class="fs-36 fw-700 brFirmaBold"
						>Frequently Asked Questions</span
					>
				</div>
				<div
					class="w-full mb-6 flex flex-col items-center justify-between"
					v-for="question in questions"
					:key="question"
				>
					<Question :question="question.question" :answer="question.answer" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Question from "./Question.vue";
export default {
	name: "FAQ",
	components: {
		Question,
	},
	setup() {
		const questions = [
			{
				question: "Can I buy crypto on Suprbiz?",
				answer:
					"Absolutelyskefnwleknwledkfnwledknwlekfnwldkfnwld ekfnwleknfwleknfwlekfnwleknfwleknflweknflwekfnwlekfnek",
			},
			{
				question: "How is the yield generated?",
				answer:
					"Oval generates yield by supplying deposits to DeFi protocols such as Aave, Compound, and Anchor. These protocols aggregate and lend deposited funds to a decentralized pool of borrowers at prevailing interest rates. In order for borrowers to access loans, they must provide a significantly larger amount of liquid assets as collateral to secure the principal, often 150% of the loaned amount. Currently there is over $150B locked in these decentralized protocols.",
			},
		];
		return { questions };
	},
};
</script>

<style lang="scss" scoped></style>
