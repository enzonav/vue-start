import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

export const routes = [
  { path: '/', component: Home },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]
