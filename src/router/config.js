const Layout = () => import('@/layout');

const layoutChildren = [
  {
    path: '/Layout/Home',
    component: () => import('@/views/home')
  }
];

const routes = [
  {
    path: '/',
    redirect: '/Layout'
  },

  {
    path: '/Layout',
    redirect: '/Layout/Home',
    component: Layout,
    children: layoutChildren
  },

  {
    path: '/Home',
    component: () => import('@/views/home')
  },

  {
    path: '/Login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/views/Login')
  },

  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404')
  }
];

export default routes;
