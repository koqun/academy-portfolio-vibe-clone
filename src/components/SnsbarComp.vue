<template>
  <div class="sns">
    <section class="gh">
      <font-awesome-icon icon="fa-brands fa-github-square" />
    </section>

    <section class="ig">
      <font-awesome-icon class="icon" icon="fa-brands fa-instagram-square" />
    </section>
  </div>
</template>

<script>
export default {
  name: "SnsbarComp",
  data() {
    return {
      link: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.sns {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 20px;
  transition: 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  section {
    margin: 15px;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.5);
  }
  .gh:hover {
    color: rgb(0, 0, 0);
  }
  .ig:hover {
    color: rgb(255, 0, 136);
  }
}
</style>
