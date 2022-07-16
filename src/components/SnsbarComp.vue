<template>
  <div class="sns">
    <a :href="`${link.gh}`" class="gh">
      <font-awesome-icon icon="fa-brands fa-github-square" />
    </a>

    <a :href="`${link.ig}`" class="ig">
      <font-awesome-icon class="icon" icon="fa-brands fa-instagram-square" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SnsbarComp",
  data() {
    return {
      link: {
        gh: "https://github.com/koqun",
        ig: "https://www.instagram.com/rnwkrud_/",
      },
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
  background-color: rgba(255, 255, 255, 0.8);
  margin: 20px;
  transition: 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  a {
    display: block;
    margin: 0px 10px 5px 10px;
    font-size: 40px;
    color: rgb(0, 0, 0, 0.7);
  }
  .gh:hover {
    color: rgb(0, 0, 0);
  }
  .ig:hover {
    color: rgb(255, 0, 136);
  }
}
</style>
