<template>
    <div class="nav">
      <section class="logo">
          <img src="https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png">
      </section>

      <section class="list">
        <ul>
          <!-- <li v-for="(item, i) in navlist" :key="i">
            <a><font-awesome-icon icon="item.icon" />{{item.title}}</a>
          </li> -->
          <li v-for="(item, i) in navlist" :key="i">
            <a @click="first">
              <font-awesome-icon :icon="`${item.icon}`" /> 
              {{item.title}}
            </a>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
export default {
  name:'NavBar',
  data() {
    return {
      navlist:[
        {icon:'fa-solid fa-newspaper', title:'투데이'}, 
        {icon:'fa-solid fa-chart-line', title:'차트'},
        {icon:'fa-solid fa-heart', title:'아티스트'}, 
        {icon:'fa-solid fa-bell', title:'최신 앨범'}, 
        ],
    }
  },
  methods: {
    first:function(){
      
    },
  },
}
</script>

<style scoped>
/* 내비 */
.nav {
  top: 0;
  left: 0;
  position: fixed;

  width: 180px;

  z-index: 1;

  margin: 30px;
  padding: 30px;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;

  transition: 0.5s;
}

.nav:hover {
  /* 배경의 투명도를 조절하려면 rgba로 색상설정. */
  /* a가 opacity(불투명도) 값 */
  background-color: rgba(255, 255, 255, 0.8);
}

/* 내비 로고 */
.logo{
  display: flex;
  justify-content: center;
}

.logo img {
  width: 170px; height: 170px;
  border-radius: 5px;
  transition: 0.5s;
}

.logo img:hover {
  width: 180px; height: 180px;
}

/* 내비 리스트 */
.list ul {
  list-style-type: none;
  margin-top: 30px;
}

.list ul li {
  margin-bottom: 5px;
}

.list ul li a {
  text-decoration: none;
  color: black;

  font-size: 22px;
  /* font-weight: bold; */
  opacity: 0.8;
  transition: 0.5s;
}

.list ul li a:hover {
  color: royalblue;

  font-size: 24px;
  opacity: 1.0;
}
</style>