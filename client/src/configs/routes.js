import Landing from 'pages/Landing';
import SignUp from 'pages/SignUp';

export const ROUTERS = [
  {
    name: 'Landing',
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    name: 'SignUp',
    path: '/sign-up',
    exact: false,
    component: SignUp,
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
