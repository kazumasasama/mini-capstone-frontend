import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue"
import LogoutView from "@/views/LogoutView.vue"
import SignupView from "@/views/SignupView.vue"
import ProductsIndex from "@/views/ProductsIndex.vue"
import ProductShow from "@/views/ProductShow.vue"
import ProductNew from "@/views/ProductNew.vue"
import ProductEdit from "@/views/ProductEdit.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsIndex
  },
  {
    path: '/products/new',
    name: 'productNEW',
    component: ProductNew
  },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductShow
  },
  {
    path: '/products/:id/edit',
    name: 'productEdit',
    component: ProductEdit
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
