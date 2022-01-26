<template>
	<div class="py-4 px-6 flex items-center">
		<AccountFundingListItemSvg />
		<div class="flex flex-col w-full pl-6 pr-4">
			<div class="flex justify-between">
				<h1 class="inter fw-600 fs-14 thTypeListColor">Account Funding</h1>
				<span class="th-green inter fw-700 fs-12">{{ transaction.amount }}</span>
			</div>
			<div class="flex justify-between">
				<div class="flex justify-center items-center">
					<span class="inter fw-400 fs-10 th-dateColor">{{ transaction.transactionDate }}</span>
				</div>
				<div
					v-if="transaction.transactionStatus === 'Successful'"
					class="flex justify-center items-center h-7 text-white px-2"
					style="border-radius: 100px; background-color: #18ae81"
				>
					{{ transaction.transactionStatus }}
				</div>
				<div
					v-else-if="transaction.transactionStatus === 'failed'"
					class="flex justify-center items-center h-8 bg-failed"
					style="border-radius: 100px"
				>
					{{ transaction.transactionStatus }}
				</div>

				<!-- <span class="inter fw-400 fs-10 th-dateColor">Ref: 5iq10he7fg </span> -->
			</div>
			<div class="flex"></div>
		</div>
	</div>
</template>

<script>
// import { onMounted, ref } from "vue";
// import { Log } from "@/components/util";
// var moment = require("moment");
import AccountFundingListItemSvg from "@/components/svg/AccountFundingListItemSvg.vue";
export default {
	name: "AccountFundingListItem",
	props: {
		transaction: Object,
	},
	components: {
		AccountFundingListItemSvg,
	},
	setup() {
		// onMounted(() => {
		// 	moment(d.value).format("MMMM DD YYYY");

		// 	Log.info("date: " + d.value);
		// });

		// const d = ref("2022-01-21T08:23:47.576");
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
