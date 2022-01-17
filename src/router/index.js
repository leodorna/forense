import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/admin',
        name: 'Admin',
        meta: {
          is_superuser: true
        },
        component: Admin,
        children: [
          {
            path: 'usuarios/:id',
            name: 'ListCategories',
            meta: {
              is_superuser: true
            }
          },
          {
            path: 'usuarios/:id/:categories',
            name: 'Category',
            meta: {
              is_superuser: true
            }
          }
        ]
      },
      {
        path: '/perfil',
        name: 'Profile'
      },
      {
        path: '/fenotipo',
        name: 'Phenotype'
      },
      {
        path: '/fenotipo/:category',
        name: 'OwnCategory'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('user'))
  if (to.matched.some(record => record.meta.is_superuser)){
    if(user.is_superuser){
      next()
    } else {
      next({name: 'profile'})
    }
  } else {
    next()
  }
})

export default router
