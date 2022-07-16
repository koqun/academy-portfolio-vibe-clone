<template>
  <div class="artist">
    <h2 class="title">아티스트</h2>
    <ul>
      <li v-for="(item, i) in artist" :key="i">
        <img src="" />
        <p>{{ name }}이름</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArtistComp",
};
</script>
