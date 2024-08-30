import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'; // Update with the correct path
import VansView from '@/views/Dashboard/Vans/VansView.vue'
import manageAdmins from "@/views/ManageAdmins.vue";
import Fleet from '@/views/Fleet.vue'
import Booking from "@/views/Booking.vue";

const routes = [
  {
    path: '/Fleet',
    name: 'Fleet',
    component: Fleet
  },
  {
    path: '/Booking',
    name: '/Booking',
    component: Booking
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUsView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },

  {
    path: '/manage-admins',
    name: 'ManageAdmin',
    component: manageAdmins
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    // Add a meta field for route guards if needed
    meta: { requiresAuth: true }, // Optional: for route protection
  },
  {
    path: '/vans',
    name: 'vans',
    component: VansView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
