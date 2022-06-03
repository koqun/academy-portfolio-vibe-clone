<template>
  <div class="nav">
    <section class="logo">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png"
      />
    </section>

    <section class="nav-list">
      <div class="item" v-for="(item, i) in navlist" :key="i">
        <font-awesome-icon :icon="`${item.icon}`" />
        {{ item.title }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
  data() {
    return {
      navlist: [
        { icon: "fa-solid fa-newspaper", title: "투데이" },
        { icon: "fa-solid fa-chart-line", title: "차트" },
        { icon: "fa-solid fa-heart", title: "아티스트" },
        { icon: "fa-solid fa-bell", title: "최신 앨범" },
      ],
    };
  },
};
</script>

<style lang="scss">
/* 내비 */
.nav {
  position: fixed;
  width: 180px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 30px;
  padding: 30px;
  transition: 0.5s;
  &:hover {
    /* 배경의 투명도를 조절하려면 rgba로 색상설정. */
    /* a가 opacity(불투명도) 값 */
    background-color: rgba(255, 255, 255, 0.9);
  }
}

/* 내비 로고 */
.logo {
  display: flex;
  justify-content: center;
  img {
    width: 170px;
    height: 170px;
    transition: 0.5s;
    &:hover {
      width: 180px;
      height: 180px;
    }
  }
}

/* 내비 리스트 */
.nav-list {
  margin-top: 30px;
  .item {
    margin-bottom: 5px;
    font-size: 22px;
    color: black;
    opacity: 0.8;
    transition: 0.5s;
    &:hover {
      color: royalblue;
      font-size: 24px;
      opacity: 1;
    }
  }
}
</style>
