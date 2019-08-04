import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Accueil from './views/Accueil.vue';
import Disciplines from './views/Disciplines.vue';
import Mma from './views/Mma.vue';
import BoxeThai from './views/BoxeThai.vue';
import Grappling from './views/Grappling.vue';
import Horaires from './views/Horaires.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/disciplines',
      name: 'disciplines',
      component: Disciplines,
    },
    {
      path: '/mma',
      name: 'mma',
      component: Mma,
    },
    {
      path: '/boxeThai',
      name: 'boxeThai',
      component: BoxeThai,
    },
    {
      path: '/grappling',
      name: 'grappling',
      component: Grappling,
    },
    {
      path: '/horaires',
      name: 'horaire',
      component: Horaires,
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Disciplines,
    }
  ],
});
