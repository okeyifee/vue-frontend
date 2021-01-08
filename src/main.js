import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// Vue.config.productionTip = false;

axios.defaults.baseURL= "https://hirng-x2021.glitch.me/api"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
