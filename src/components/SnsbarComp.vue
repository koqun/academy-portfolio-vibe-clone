<template>
  <div class="sns">
    <section class="fb">
      <font-awesome-icon class="icon" icon="fa-brands fa-facebook-square" />
    </section>

    <section class="ig">
      <font-awesome-icon class="icon" icon="fa-brands fa-instagram-square" />
    </section>

    <section class="tw">
      <font-awesome-icon class="icon" icon="fa-brands fa-twitter-square" />
    </section>
  </div>
</template>

<script>
export default {
  name: "SnsbarComp",
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
    margin: 20px;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.9);
  }
  .fb:hover {
    color: royalblue;
  }
  .ig:hover {
    color: deeppink;
  }
  .tw:hover {
    color: deepskyblue;
  }
}
</style>
