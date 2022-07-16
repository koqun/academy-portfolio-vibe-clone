<template>
  <div class="today">
    <h2 class="title">매거진</h2>
    <div class="magazine">
      <div class="card" v-for="(m, i) in m" :key="i">
        <img class="mimg" :src="require(`@/assets/magazine/${m.img}`)" />
        <a :href="`${m.link}`">{{ m.title }}</a> <br />
        <a :href="`${m.link}`">매거진 보기</a>
      </div>
      <!-- <button class="btn">temp</button> -->
    </div>

    <h2 class="title">뉴스</h2>
    <div class="news">
      <div class="card" v-for="(n, i) in n" :key="i">
        <img class="nimg" :src="require(`@/assets/news/${n.img}`)" />
        <a :href="`${n.link}`">{{ n.title }}</a> <br />
        <a :href="`${n.link}`">뉴스 보기</a>
      </div>
      <!-- <button class="btn">temp</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayComp",
  data() {
    return {
      m: this.$store.state.data.magazine,
      n: this.$store.state.data.news,
    };
  },
};
</script>

<style lang="scss">
.today {
  .magazine {
    display: flex;
    :hover {
    }
  }
  .news {
    display: flex;
  }
}

.card {
  width: 285px;
  margin: 10px;

  a {
    /* text-decoration: none; */
    color: white;
    word-break: keep-all;
  }

  .mimg {
    width: 285px;
    height: 285px;
  }

  .nimg {
    width: 285px;
    height: 170px;
  }
}
</style>
