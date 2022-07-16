<template>
  <div class="nav">
    <section class="logo">
      <!-- <img
        src="https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png"
      /> -->
      <img src="@/assets/logo.png" />
    </section>

    <section class="nav-list" v-for="(item, i) in navlist" :key="i">
      <div class="item">
        <font-awesome-icon class="i1" :icon="`${item.icon}`" />
        <router-link :to="`/${item.to}`"
          ><span class="i2">{{ item.title }}</span></router-link
        >
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
        { icon: "fa-solid fa-newspaper", title: "투데이", to: "" },
        { icon: "fa-solid fa-chart-line", title: "차트", to: "chart" },
        { icon: "fa-solid fa-heart", title: "아티스트", to: "artist" },
        { icon: "fa-solid fa-bell", title: "최신 앨범", to: "latest" },
      ],
    };
  },
};
</script>

<style lang="scss">
/* 내비 */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.7);
  transition: 0.5s;
  padding: 20px;
  margin: 20px;
  &:hover {
    /* 배경의 투명도를 조절하려면 rgba로 색상설정. */
    /* a가 opacity(불투명도) 값 */
    background-color: rgba(255, 255, 255, 0.9);
  }

  /* 내비 로고 */
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
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
    .item {
      font-size: 20px;
      opacity: 0.7;
      margin-top: 10px;
      transition: 0.5s;
      a {
        text-decoration: none;
      }
      .i1,
      .i2 {
        color: rgba(0, 0, 0, 0.9);
      }
      &:hover {
        font-size: 22px;
        opacity: 1;
        .i1,
        .i2 {
          color: royalblue;
        }
      }
    }
  }
}
</style>
