import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '../layout/Admin.vue'
import Dashboard from '../views/Dashboard.vue'
import Estudiantes from '../views/Estudiantes.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'AdminLayout',
    component: AdminLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/estudiantes',
        name: 'Estudiantes',
        component: Estudiantes
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
