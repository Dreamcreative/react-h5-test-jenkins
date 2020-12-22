export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        component: './home',
        title: '评价规则',
      },
      { path: '/404', component: '404' },
    ],
  },
];
