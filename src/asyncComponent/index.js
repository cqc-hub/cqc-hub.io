import {
  Button,
  message
} from 'ant-design-vue';

export default function installAsyncApp(app) {
  app.use(Button);

  app.config.globalProperties.$message = message;
}
