import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import CourseProjects from './pages/courseProjects.vue'
import TeachingStaff from './pages/teachingStaff.vue';
import AboutUs from './pages/aboutUs.vue'
import AlumniStyle from './pages/alumniStyle.vue'
import ConsultationForm from './pages/consultationForm.vue'
import Article from './pages/article.vue'
import HighEdu from './pages/highEdu.vue'
import Policy from './pages/policy.vue'
import ContactUs from './pages/contactUs.vue'
import MbaProfessors from './pages/mbaProfessors.vue'
import Vue from 'vue';

Vue.use(VueRouter)

const routes = [
    // 其他路由配置...
    {
        path: '/zh-hans',
        redirect: '/'
    },
    {
        path: '/zh-hans/who-we-are',
        redirect: '/aboutUs'
    },
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
    {
        name: 'article',
        path: '/article',
        component: Article
    },
    {
        name: 'highEdu',
        path: '/highEdu',
        component: HighEdu
    },
    {
        name: 'policy',
        path: '/policy',
        component: Policy
    },
    {
        name: 'contactUs',
        path: '/contactUs',
        component: ContactUs
    },
    {
        name: 'mbaProfessors',
        path: '/mbaProfessors',
        component: MbaProfessors
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes.map(route => {
        // 在每个路由配置中添加 beforeEnter 钩子函数
        route.beforeEnter = (to, from, next) => {
            // 判断路径字符串的最后一位是否为 '/'
            console.log(to.path)
            if (to.path.slice(-1) === '/' && to.path != '/') {
                // 重定向到 '*' 路径
                next({ path: '/zh-hans' })
            } else {
                next();
            }
        }
        return route;
    })
})

export default router
