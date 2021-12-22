<template>
  <div class="h-full">
    <MainSideBar />
    <router-view />
  </div>
</template>

<script>
import MainSideBar from "./MainSideBar.vue";
export default {
  name: "Dashboard",
  components: {
    MainSideBar,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
