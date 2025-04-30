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
import Professors from './pages/Professors.vue'
import PromotionAmbassador from './pages/promotionAmbassador.vue'
import PromotionAmbassadorDetail from './pages/promotionAmbassadorDetail.vue'
import DBA from './pages/DBA.vue'
import Contract from './pages/contract.vue'
import studentCodeOfConduct from './pages/studentCodeOfConduct.vue'
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
        component: Home,
        meta: {
            description: '新加坡南洋社会科学院（NISS）提供中文MBA课程，携手暨南大学，融合东西方商业智慧，助力职业发展与跨文化领导力提升。'
        }
    },
    {
        name: 'jnumba',
        path: '/jnumba',
        component: CourseProjects,
        meta: {
            description: '暨南大学中文MBA（新加坡班），免联考、免英语，授课内容结合中国与西方管理知识，面向具备多年工作经验的专业人士开放申请。'
        }
    },
    {
        name: 'audenciadba',
        path: '/audenciadba',
        component: DBA
    },
    {
        name: 'faculty',
        path: '/faculty',
        component: TeachingStaff,
        meta: {
            description: '暨南大学中文MBA（新加坡班）名师团队覆盖管理、营销、运营等模块，帮助学生在系统学习中掌握实用的商业知识与领导力技能。'
        }
    },
    {
        name: 'aboutUs',
        path: '/aboutUs',
        component: AboutUs,
        meta: {
            description: '南洋社会科学学院携手知名高校，研究中西社科领域最新成果，为学员提供贯通东西方的终身学习机会，助力全球化职业发展。'
        }
    },
    {
        name: 'alumni',
        path: '/alumni',
        component: AlumniStyle,
        meta: {
            description: '暨南大学中文MBA（新加坡班）培养了众多行业精英，校友遍及海内外，丰富的校友网络为学生提供职业发展、跨行业交流与资源支持。'
        }
    },
    {
        name: 'consultationForm',
        path: '/consultationForm',
        component: ConsultationForm,
        meta: {
            description: '通过此表单提交您的需求或咨询问题，我们的顾问将尽快回复您，助您获得最佳学习和发展方案。'
        }
    },
    {
        name: 'article',
        path: '/article',
        component: Article,
        meta: {
            description: '探索南洋社会科学学院Blog，聚焦行业动态、校友成就和课程精华，为您带来全方位的学习与成长内容。'
        }
    },
    {
        name: 'highEdu',
        path: '/highEdu',
        component: HighEdu,
        meta: {
            description: '南洋社会科学学院提供定制化课程，为企业和机构量身打造符合其战略需求的培训方案，旨在提升管理理念与业务水平，实现长远发展。'
        }
    },
    {
        name: 'policy',
        path: '/policy',
        component: Policy
    },
    {
        name: 'contactUs',
        path: '/contactUs',
        component: ContactUs,
        meta: {
            description: '如需了解更多南洋社会科学学院课程信息或申请详情，欢迎访问我们的办公室，或发送邮件至enquiry@niss.edu.sg联系我们的团队。'
        }
    },
    /* {
        name: 'mbaProfessors',
        path: '/mbaProfessors',
        component: MbaProfessors
    }, */
    {
        name: 'Professors',
        path: '/Professors',
        component: Professors
    },
    {
        name: 'Ambassador',
        path: '/Ambassador',
        component: PromotionAmbassador,
        meta: {
            description: '为在新加坡打造暨南大学中文MBA项目的良好生态环境，南洋社会科学学院特制定“NISS暨南大学中文MBA（新加坡班）项目宣传大使”计划。'
        }
    },
    {
        name: 'AmbassadorDetail',
        path: '/AmbassadorDetail',
        component: PromotionAmbassadorDetail
    },
    {
        name: 'studentCodeOfConduct',
        path: '/student-code-of-conduct',
        component: studentCodeOfConduct
    },
    {
        name: 'contract',
        path: '/contract',
        component: Contract
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
