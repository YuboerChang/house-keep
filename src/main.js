import { createApp } from 'vue'
import App from './App.vue'
import store from './share/store/store.js'
import router from './share/router/router.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')