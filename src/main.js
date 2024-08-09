import { createApp } from "vue";
import App from "./App.vue";
import store from "./share/store/store.js";
import router from "./share/router/router.js";
import elementPlus from "element-plus";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(elementPlus);
app.mount("#app");
