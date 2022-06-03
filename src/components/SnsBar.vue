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
  name: "SnsBar",
};
</script>

<style scoped>
section {
  position: fixed;
  display: flex;

  z-index: 1;

  margin: 30px;
  padding: 5px;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  transition: 0.5s;
}

section:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

section .icon {
  /* width: 20px; */
  font-size: 20px;
  opacity: 0.8;
}

.tw {
  bottom: 0%;
  right: 0%;
}
.tw:hover {
  color: steelblue;
  opacity: 1;
}

.ig {
  bottom: 5%;
  right: 0%;
}
.ig:hover {
  color: deeppink;
  opacity: 1;
}

.fb {
  bottom: 10%;
  right: 0%;
}
.fb:hover {
  color: royalblue;
  opacity: 1;
}
</style>
