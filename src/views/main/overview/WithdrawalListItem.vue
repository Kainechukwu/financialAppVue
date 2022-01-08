<template>
  <div class="py-4 px-6 flex items-center">
    <WithdrawalListItemSvg />
    <div class="flex flex-col w-full pl-6 pr-4">
      <div class="flex justify-between">
        <h1 class="inter fw-600 fs-14 thTypeListColor">Withdrawal</h1>
        <span class="th-peach inter fw-700 fs-12">N8,000</span>
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
import WithdrawalListItemSvg from '@/components/svg/WithdrawalListItemSvg.vue'
export default {
  name: 'WithdrawalListItem',
  components: {
    WithdrawalListItemSvg,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
