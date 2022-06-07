<template>
  <div class="today">
    <div class="magazine">
      <h2 class="title">매거진</h2>
      <span v-for="(item, i) in magazine" :key="i">
        <img class="mimg" :src="require(`@/assets/magazine/${item.img}`)" />
      </span>
      <span>
        {{ item.title }}
      </span>
      <span>
        <router-linlk :to="`${item.link}`">매거진 보기</router-linlk>
      </span>
    </div>

    <div class="news">
      <h2 class="title">뉴스</h2>
      <div v-for="(item, i) in news" :key="i">
        <!-- <h2>{{item.img}}</h2> -->
        <img class="nimg" :src="require(`@/assets/news/${item.img}`)" />
        <span>
          <router-link :to="`${item.link}`">{{ item.title }}</router-link>
        </span>
        <span>
          <router-link :to="`${item.link}`">뉴스 보기</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/assets/data.json";

export default {
  name: "TodayComp",
  data() {
    return {
      magazine: data.magazine,
      news: data.news,
    };
  },
};
</script>

<style scoped>
.mimg {
  width: 285px;
  height: 285px;
}

.nimg {
  width: 285px;
  height: 168px;
}
</style>
