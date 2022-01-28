<template>
	<div class="py-4 px-6 flex items-center">
		<WithdrawalListItemSvg />
		<div class="flex flex-col w-full pl-6 pr-4">
			<div class="flex justify-between">
				<h1 class="inter fw-600 fs-14 thTypeListColor">Withdrawal</h1>
				<span class="th-peach inter fw-700 fs-12">{{ curr }} {{ transaction.currency }}</span>
			</div>
			<div class="flex justify-between">
				<div class="flex justify-center items-center">
					<span class="inter fw-400 fs-10 th-dateColor">{{ date }}</span>
				</div>
				<div class="flex items-center flex-col">
					<div class="flex justify-start w-full">
						<span class="fw-400 fs-12 th-dateColor capitalize">Transaction Id:</span>
					</div>
					<span class="fw-400 fs-12 th-dateColor">{{ transaction.id }}</span>
				</div>
				<div
					v-if="
						transaction.transactionStatus === 'Successful' ||
						transaction.transactionStatus === 'Processed'
					"
					class="flex justify-center items-center h-7 text-white px-4"
					style="border-radius: 100px; background-color: #18ae81; min-width: 5.5rem"
				>
					{{ transaction.transactionStatus }}
				</div>
				<div
					v-else-if="
						transaction.transactionStatus === 'Failed' ||
						transaction.transactionStatus === 'Failed_01' ||
						transaction.transactionStatus === 'Failed_02' ||
						transaction.transactionStatus === 'Declined' ||
						transaction.transactionStatus === 'Expired'
					"
					class="flex justify-center items-center h-7 bg-failed px-4"
					style="border-radius: 100px; min-width: 5.5rem; background-color: #fe6c6d"
				>
					{{ transaction.transactionStatus }}
				</div>
				<div
					v-else-if="transaction.transactionStatus === 'Created'"
					class="flex justify-center items-center h-7 text-white bg-blue-400 px-4"
					style="border-radius: 100px; min-width: 5.5rem"
				>
					{{ transaction.transactionStatus }}
				</div>
				<div
					v-else-if="
						transaction.transactionStatus === 'Pending' ||
						transaction.transactionStatus === 'Processing'
					"
					class="flex justify-center items-center h-7 text-white px-4"
					style="border-radius: 100px; min-width: 5.5rem; background-color: #f2bc59"
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
import { Util } from "@/components/util";

import WithdrawalListItemSvg from "@/components/svg/WithdrawalListItemSvg.vue";
export default {
	name: "WithdrawalListItem",
	props: {
		transaction: Object,
	},
	components: {
		WithdrawalListItemSvg,
	},
	setup(props) {
		const date = Util.formatTime(
			props.transaction.transactionDate,
			"YYYY-MM-DD HH:mm:ss.SSSS",
			"MMM DD ddd YYYY HH:mm a"
		);
		const curr = Util.currencyFormatter(props.transaction.amount, "0,0.00000000");

		return { date, curr };
	},
};
</script>

<style lang="scss" scoped></style>
