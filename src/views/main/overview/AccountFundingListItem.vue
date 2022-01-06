<template>
  <div class="py-4 px-6 flex items-center">
    <AccountFundingListItemSvg />
    <div class="flex flex-col w-full pl-6 pr-4">
      <div class="flex justify-between">
        <h1 class="inter fw-600 fs-14 thTypeListColor">Account Funding</h1>
        <span class="th-green inter fw-700 fs-12">N8,000</span>
      </div>
      <div class="flex justify-between">
        <span class="inter fw-400 fs-10 th-dateColor">Nov 20, 2021</span>
        <span class="inter fw-400 fs-10 th-dateColor">Ref: 5iq10he7fg </span>
      </div>
      <div class="flex"></div>
    </div>
  </div>
</template>

<script>
import AccountFundingListItemSvg from '@/components/svg/AccountFundingListItemSvg.vue'
export default {
  name: 'AccountFundingListItem',
  components: {
    AccountFundingListItemSvg,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
