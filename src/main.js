import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import Vuex from "vuex";

import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(Vuex);


const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
