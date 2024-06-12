import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Project from '../components/Project.vue';
import Contact from '../components/Contact.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/project',
    component: Project
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
  
});

export default router;
