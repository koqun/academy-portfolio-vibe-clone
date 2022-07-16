<template>
  <div id="app">
    <navbar-comp> </navbar-comp>
    <snsbar-comp />

    <router-view />
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import SnsbarComp from "@/components/SnsbarComp.vue";

export default {
  name: "MainView",
  components: { NavbarComp, SnsbarComp },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: black;
  color: white;
  margin: 0px 0px 0px 0px;
  margin-left: 280px;
}

/* #app {
  display: flex;
  justify-content: center;
} */
</style>
