const getRoutes = () => [
  {
    path: '/split',
    component: (resolve) => require(['./split.vue'], resolve),
  },
];

export const routes = getRoutes();

export default routes;
