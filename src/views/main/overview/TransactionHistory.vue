<template>
	<div class="br-10 bg-white ml-6">
		<div class="flex flex-col">
			<div class="flex mb-1 justify-between py-4 px-6 border-b-2 border-gray-200">
				<span class="inter fs-16 fw-600 blacktext">Transaction History</span>

				<span class="inter fs-12 tx-666666 fw-500">view more</span>
			</div>
			<AccountFundingListItem />
			<WithdrawalListItem />
			<AccountFundingListItem />
			<AccountFundingListItem />
			<AccountFundingListItem />
			<AccountFundingListItem />
			<!-- <AccountFundingListItem />
      <AccountFundingListItem />
      <AccountFundingListItem /> -->
			<div class="flex px-6 py-4 justify-between"></div>
		</div>
	</div>
</template>

<script>
import AccountFundingListItem from "./AccountFundingListItem";
import WithdrawalListItem from "./WithdrawalListItem";
export default {
	name: "TransactionHistory",
	components: {
		AccountFundingListItem,
		WithdrawalListItem,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
