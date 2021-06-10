import router from './router';
import utils from '@/utils';
import { config } from '@/config';

const { getToken } = utils;
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  const hasToken = getToken();
  const meta = to.meta;
  if (meta && meta.title) {
    document.title = meta.title || config.title;
  } else {
    document.title = config.title;
  }

  if (hasToken) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else if (whiteList.some(m => to.path.startsWith(m))) {
    next();
  } else { // 不在白名单且未登录
    next({
      path: '/login'
    });
  }
});
