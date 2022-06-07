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
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  display: flex;
  justify-content: center;
}

// nav {
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
