import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AdminLayout from '../layout/Admin.vue'
import Dashboard from '../views/Dashboard.vue'
import EstudiantesIndex from '../views/estudiantes/index.vue'

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
        component: EstudiantesIndex
      },
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
