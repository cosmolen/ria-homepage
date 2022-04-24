import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import TwitchPage from '../views/TwitchPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/twitch',
    name: 'TwitchPage',
    component: TwitchPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router