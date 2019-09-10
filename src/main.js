import Vue from "vue";
import VueOverlayScrollbars from "./index";
import App from "./demo/App.vue";

Vue.use(VueOverlayScrollbars);

new Vue({
  el: "body",
  render: h => h(App)
});
