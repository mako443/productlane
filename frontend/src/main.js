import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { init } from 'commandbar';
init('3ac34534');

const loggedInUserId = '12345'; // example
window.CommandBar.boot(loggedInUserId);

createApp(App).use(router).use(store).mount('#app')
