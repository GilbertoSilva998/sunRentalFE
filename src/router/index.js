import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUpView from '../views/SignUpView.vue';
import LoginView from '../views/LoginView.vue';
import ContactUsView from '@/views/ContactUsView.vue';
import DashboardView from '@/views/Dashboard/DashboardView.vue';
import AdminDashboard from '@/components/AdminDashboard.vue'; // Update with the correct path
import VansView from '@/views/Dashboard/Vans/VansView.vue';
import manageAdmins from "@/views/ManageAdmins.vue";
import Fleet from '@/views/Fleet.vue';
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
    meta: { requiresAuth: true } // Route protection added here
  },
  {
    path: '/vans',
    name: 'vans',
    component: VansView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Route guard to protect routes requiring authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const token = localStorage.getItem('jwtToken');

  if (requiresAuth && !token) {
    // If the route requires authentication and there's no token, redirect to login page
    next('/login');
  } else {
    // Otherwise, allow the navigation to proceed
    next();
  }
});

export default router;

