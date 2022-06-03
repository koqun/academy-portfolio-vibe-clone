<template>
  <div class="tool">
    <section class="search">
      <div class="input" v-if="input">
        <input type="text" />
        <font-awesome-icon icon="fa-solid fa-x" @click="input = false" />
      </div>
      <font-awesome-icon
        class="icon"
        icon="fa-solid fa-magnifying-glass"
        v-else
        @click="input = true"
      />
    </section>

    <section class="about">
      <div class="modal" v-if="modal"></div>
      <font-awesome-icon
        class="icon"
        icon="fa-solid fa-bars"
        @click="modal = true"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "ToolbarComp",
  data() {
    return {
      input: false,
      modal: false,
    };
  },
};
</script>

<style scoped>
section {
  position: fixed;

  z-index: 1;

  margin: 30px;
  padding: 5px;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  transition: 0.5s;
}

section .icon {
  width: 30px;
  font-size: 24px;

  opacity: 0.8;
  transition: 0.5s;
}
section .icon:hover {
  opacity: 1;
}

/* section .icon:hover {
    width: 34px;
    font-size: 26px;
} */

.search {
  top: 0%;
  right: 0%;
}

.search input {
  margin-right: 5px;
}

.about {
  top: 5%;
  right: 0%;
}

.search:hover,
.about:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
