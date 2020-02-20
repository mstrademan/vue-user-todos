import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/theme-style.scss";

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
