import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";

// MOCK
//if (process.env.NODE_ENV === "development") {
console.log("development mode");
const { mockXHR } = require("../mock");
mockXHR();
//}

Vue.config.productionTip = false;
Vue.use(VueCookies);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
