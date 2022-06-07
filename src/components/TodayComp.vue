<template>
  <div class="today">
    <h2 class="title">매거진</h2>
    <div class="magazine">
      <div class="mcontainer" v-for="(m, i) in m" :key="i">
        <img class="mimg" :src="require(`@/assets/magazine/${m.img}`)" /><br />
        <a class="mt" :href="`${m.link}`">{{ m.title }}</a
        ><br />
        <a class="ml" :href="`${m.link}`">매거진 보기</a>
      </div>
    </div>

    <h2 class="title">뉴스</h2>
    <div class="news">
      <div class="ncontainer" v-for="(n, i) in n" :key="i">
        <!-- <h2>{{item.img}}</h2> -->
        <img class="nimg" :src="require(`@/assets/news/${n.img}`)" /><br />
        <a class="nt" :href="`${n.link}`">{{ n.title }}</a
        ><br />
        <a class="nl" :href="`${n.link}`">뉴스 보기</a>
      </div>
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
body::-webkit-scrollbar {
  display: none;
}

.today {
  left: 0%;
  width: 100%;
  height: 100%;
}

.magazine {
  top: 0%;
  display: flex;
  flex-wrap: wrap;
  .mcontainer {
    width: 300px;
    height: 300px;
  }

  .mimg {
    width: 285px;
    height: 285px;
  }
}

.news {
  top: 100%;
  display: flex;
  .ncontainer {
    width: 300px;
    height: 200px;
  }
  .nimg {
    width: 285px;
    height: 170px;
  }
}
</style>
