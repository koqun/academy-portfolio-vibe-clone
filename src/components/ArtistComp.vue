<template>
  <div class="artist">
    <h2 class="title">아티스트</h2>
    <div class="aWrap">
      <div class="aDiv" v-for="(artist, i) in data" :key="i">
        <img :src="artist.img" />
        <!-- <font-awesome-icon icon="fa-solid fa-heart" /> -->
        <p>{{ artist.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistComp",
  data() {
    return {
      data: this.$store.state.data.artist,
    };
  },
};
</script>

<style lang="scss">
.aWrap {
  display: flex;
  flex-wrap: wrap;
}
.aDiv {
  display: block;
  margin: 20px;
  img {
    border-radius: 50%;
  }
  p {
    text-align: center;
  }
}
</style>
