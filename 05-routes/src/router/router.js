import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  { 
    path: '/home',
    name: 'home', 
    component: () => import (/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage'),
  },
  
  { 
    path: '/about', 
    name: 'about',
    component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage') 
  },

  { 
    path: '/pokemonid/:id', 
    name: 'pokemon-id',
    props: ( route ) => {
      const { id } = route.params;
      const number = Number(id);
      return isNaN (number) ? { id: 1 } : { id: number }
    },
    component: () => import (/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'), 
  },

  { 
    path: '/:pathMatch(.*)*', 
    // component: () => import (/* webpackChunkName: "NotFound" */ '../modules/shared/pages/NotFound'),
    redirect: 'home' 
  } // Cualquier URL que no haga match con las path definidas
]

const router = createRouter({
  history: createWebHashHistory(), // Cualquier ruta se escribe con un hash seguido de la ruta
  routes,
});

export default router;