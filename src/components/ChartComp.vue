<template>
  <div class="chart">
    <section>
      <h2 class="title">국내 Top 10</h2>
      <ul>
        <li v-for="(item, i) in local" :key="i">
          <img class="img" :src="require(`@/assets/albumcover/${item.img}`)" />
          <h3 class="rank">{{ item.rank }}</h3>
          <p>
            {{ item.title }}
            <br />
            <span>{{ item.group }}</span>
          </p>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="title">billboard Top 10</h2>
      <ul>
        <li v-for="(item, i) in foreign" :key="i">
          <img class="img" :src="require(`@/assets/albumcover/${item.img}`)" />
          <h3 class="rank">{{ item.rank }}</h3>
          <p>
            {{ item.title }}
            <br />
            <span>{{ item.group }}</span>
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "ChartComp",
  data() {
    return {
      data: this.$store.state.data,
      local: this.$store.state.data.local,
      foreign: this.$store.state.data.foreign,
    };
  },
};
</script>

<style scoped>
.chart {
  display: flex;
}

ul {
  list-style-type: none;

  width: 450px;
}

ul li {
  margin: 10px;
  display: flex;
  word-break: break-all;
}

.img {
  width: 64px;
  height: 64px;
  background-color: grey;
}

.rank,
.title {
  margin: 15px;
}
</style>
