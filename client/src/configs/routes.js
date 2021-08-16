import Landing from 'pages/Landing';

export const ROUTERS = [
  {
    name: 'Landing',
    path: '/',
    exact: false,
    component: Landing,
  },
  {
    name: 'Home',
    path: '/home',
    exact: false,
    component: Landing,
  },
  {
    name: 'List Movie',
    path: '/list-movie',
    exact: false,
    component: Landing,
  },
  {
    name: 'Movie',
    path: '/movie',
    exact: false,
    component: Landing,
  },
  {
    name: 'Series',
    path: '/series',
    exact: false,
    component: Landing,
  },
  {
    name: 'Watch',
    path: '/watch',
    exact: false,
    component: Landing,
  },
];
