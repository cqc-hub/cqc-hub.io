const Layout = () => import('@/layout');

const layoutChildren = [

];

const routes = [
  {
    path: '/Layout',
    component: Layout,
    children: layoutChildren
  },

  {
    path: '/Login',
    component: () => import('@/views/Login')
  },

  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404')
  }
];

export default routes;
