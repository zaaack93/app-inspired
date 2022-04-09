import {createRouter, createWebHistory} from "vue-router";

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

const routes = [
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
