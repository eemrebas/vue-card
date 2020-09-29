import Vue from "vue";
import App from "./App.vue";
import "../assets/styles/main.css";

Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App),
}).$mount("#app");
