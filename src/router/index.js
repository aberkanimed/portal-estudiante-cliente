import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'
import AdminLayout from '../layout/Admin.vue'
import Dashboard from '../views/Dashboard.vue'
import EstudiantesIndex from '../views/estudiantes/index.vue'

const routes = [
  {
    path: '/',
    name: 'AdminLayout',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: '/estudiantes',
        name: 'Estudiantes',
        component: EstudiantesIndex,
        meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  const loggedIn = !localStorage.getItem('user') || !localStorage.getItem('token')

  if (to.matched.some(record => record.meta.requiresAuth) && loggedIn) {
    next('/login')
  }
  next()
})

export default router
