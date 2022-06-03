<template>
  <div class="today">
    <h2 class="title">매거진</h2>
    <ul class="">
      <li v-for="(item, i) in magazine" :key="i">
        <img class="mimg" :src="require(`@/assets/magazine/${item.img}`)" />
        <!-- :src="require(`@/assets/albumcover/${item.img}`)" -->
        <h3>
          <a>{{ item.title }}</a>
        </h3>
        <p><a class="link" :href="`${item.link}`">매거진 보기</a></p>
      </li>
    </ul>

    <h2 class="title">뉴스</h2>
    <ul>
      <li v-for="(item, i) in news" :key="i">
        <!-- <h2>{{item.img}}</h2> -->
        <img class="nimg" :src="require(`@/assets/news/${item.img}`)" />
        <h3>
          <a>{{ item.title }}</a>
        </h3>
        <p><a class="link" :href="`${item.link}`">뉴스 보기</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
import data from "../assets/data.json";

export default {
  name: "TodaySection",
  data() {
    return {
      magazine: data.magazine,
      news: data.news,
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  overflow-x: scroll;
  /* white-space: nowrap; */

  list-style-type: none;
}

ul li {
  /* width: 270px; */
  margin: 15px;
}

.mimg {
  width: 285px;
  height: 285px;
}

.nimg {
  width: 285px;
  height: 168px;
}
</style>
