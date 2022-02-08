<template>
  <div class="home">
    <wz-menu></wz-menu>
    <wz-landing-page></wz-landing-page>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WzMenu from "@/components/WzMenu.vue";
import WzLandingPage from "@/components/WzLandingPage.vue";

export default Vue.extend({
  name: "Home",
  components: {
    WzMenu,
    WzLandingPage,
  },
});
</script>
