<template>
  <div class="ml-64 h-full">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Overview",
  components: {
    Header,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
