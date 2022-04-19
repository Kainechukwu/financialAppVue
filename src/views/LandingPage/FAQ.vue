<template>
	<div class="relative w-full">
		<div id="faqSection" class="absolute inset-x-0 -mt-20 mx-auto faqBg"></div>

		<div class="mt-24 md:mt-56 relative mx-auto" style="max-width: 71.25rem">
			<!-- <div class="absolute inset-x-0 w-9/12 mx-auto faqBg"></div> -->

			<div
				class="mx-auto px-4 md:px-12 lg:px-12 xl:p-0 flex flex-col items-center justify-center"
				style="max-width: 55rem"
			>
				<div class="inline relative mb-12">
					<!-- <div class="absolute inset-x-0 w-9/12 mx-auto faqBg"></div> -->

					<p class="navyColor text-center fs-36 fw-700 brFirmaSB">Frequently Asked Questions</p>
				</div>
				<div
					class="w-full mb-6 flex flex-col items-center justify-between"
					v-for="question in questions"
					:key="question"
				>
					<Question :question="question.question" :answers="question.answers" />
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
				question: "How is the yield generated?",
				answers: [
					"All yield is generated through Anchor Protocol. Anchor’s yield is backed by:",
					"Interest from borrowers—Anchor implements a money market wherein depositors lend UST to borrowers and receive interest in return.",
					"Staking rewards—to borrow through Anchor, a certain amount of collateral must be locked up. For example, to borrow $100, you would lock up about $200 worth of collateral. Collateral on Anchor comes in the form of staked tokens on proof-of-stake blockchains. These tokens generate yield for depositors.",
					"A yield reserve—when there is a surplus of yield, the extra funds are transferred to Anchor’s yield reserve. Conversely, when there is a shortage of yield, funds are taken from the reserve to maintain a stable interest rate for depositors.",
				],
			},
			{
				question: "What is the minimum deposit size?",
				answers: [
					"For treasury managers using Suprbiz’s treasury product, the minimum deposit is $50,000 USD.",
					"For fintechs, please contact us for details on minimum requirements and pricing information.",
				],
			},
			{
				question: "Is there a lockup period?",
				answers: ["No. You can withdraw finalized funds in your account whenever you like."],
			},
		];
		return { questions };
	},
};
</script>

<style lang="scss" scoped>
.faqBg {
	background-image: url("FAQ.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	// margin-top: 5rem;
	width: 325px;
	height: 135px;
}
</style>
