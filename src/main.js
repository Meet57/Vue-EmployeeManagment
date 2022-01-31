import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes.js";
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(store)

const router = new VueRouter({
    routes: Routes,
    mode: "history",
});

new Vue({
    render: (h) => h(App),
    router: router,
    store: store
}).$mount("#app");
