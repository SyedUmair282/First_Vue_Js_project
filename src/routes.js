import Home from '../src/components/Home.vue';
import Signup from '../src/components/signup.vue';
import Login from '../src/components/login.vue';
import Add from '../src/components/add.vue';
import update from '../src/components/update.vue';
import { createWebHistory, createRouter } from 'vue-router';
const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}, {
    name: 'signup',
    path: '/signup',
    component: Signup
}, {
    name: 'login',
    path: '/login',
    component: Login
}, {
    name: 'add',
    path: '/add-restuarant',
    component: Add
}, {
    name: 'update',
    path: '/update-restuarant/:id',
    component: update
}];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;