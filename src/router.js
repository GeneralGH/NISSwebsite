import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import CourseProjects from './pages/courseProjects.vue'
import TeachingStaff from './pages/teachingStaff.vue';
import AboutUs from './pages/aboutUs.vue'
import AlumniStyle from './pages/alumniStyle.vue'
import ConsultationForm from './pages/consultationForm.vue'
import Vue from 'vue';

Vue.use(VueRouter)

const routes = [
    // 其他路由配置...
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'courseProjects',
        path: '/courseProjects',
        component: CourseProjects
    },
    {
        name: 'teachingStaff',
        path: '/teachingStaff',
        component: TeachingStaff
    },
    {
        name: 'aboutUs',
        path: '/aboutUs',
        component: AboutUs
    },
    {
        name: 'alumniStyle',
        path: '/alumniStyle',
        component: AlumniStyle
    },
    {
        name: 'consultationForm',
        path: '/consultationForm',
        component: ConsultationForm
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
