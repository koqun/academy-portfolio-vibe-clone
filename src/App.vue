<template>
  <div id="app">
    <nav-bar />
    <sns-bar />

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavbarComp.vue";
import SnsBar from "@/components/SnsbarComp.vue";

export default {
  name: "MainView",
  components: { NavBar, SnsBar },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: slategray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
