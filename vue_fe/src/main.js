import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import Store from './store';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
// import VueAxios from 'vue-axios'


// import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';


const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(router);
app.use(Store);
app.use(VueSweetalert2);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');