import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProfileView
    },    {
      path: '/luma44',
      name: 'luma44',
      component: ProfileView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/playergloves',
      name: 'playergloves',
      component: () => import('../views/PlayerGlovesView.vue')
    },
    {
      path: '/animalarcade',
      name: 'animalarcade',
      component: () => import('../views/AnimalArcadeView.vue')
    }
  ]
})

export default router
