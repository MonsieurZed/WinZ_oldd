<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Winget from "@/controller/winget";

const winget = new Winget();
winget.InstallWinget();

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
