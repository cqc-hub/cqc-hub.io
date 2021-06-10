import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/index.css';
import 'ant-design-vue/dist/antd.css';
import '@/style/index.less';
import './permission';
import animated from 'animate.css';
import installAsyncApp from '@/asyncComponent';

const app = createApp(App);
app.config.productionTip = false;
app.config.globalProperties.$router = router;

app
  .use(router)
  .use(animated)
  .mount('#app');

installAsyncApp(app);
