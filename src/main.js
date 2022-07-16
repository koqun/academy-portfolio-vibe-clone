import Vue from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import {
  faMagnifyingGlass,
  faX,
  faNewspaper,
  faChartLine,
  faHeart,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* add icons to the library */
library.add(
  faMagnifyingGlass,
  faX,
  faNewspaper,
  faChartLine,
  faHeart,
  faBell,
  faBars,
  faGithubSquare,
  faInstagramSquare,
);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//  faFacebookSquare, faInstagramSquare, faTwitterSquare
