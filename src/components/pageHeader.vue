<!--  -->
<template>
    <div id="container" :style="bgHeigth" class="header-area">
        <!-- <img v-if="currentPath == '/'" id="image" ref="headerBg" src="../../assets/header/homeHeaderBg.png"
            class="header-bg"> -->
        <img v-if="currentPath == '/courseProjects'" id="image" ref="headerBg"
            src="../../assets/header/courseProjectsHeaderBg.png" class="header-bg">
        <img v-if="currentPath == '/teachingStaff'" id="image" ref="headerBg"
            src="../../assets/header/teachingHeaderBg.png" class="header-bg">
        <img v-if="currentPath == '/aboutUs'" id="image" ref="headerBg" src="../../assets/header/aboutUsHeaderBg.png"
            class="header-bg">
        <img v-if="currentPath == '/alumniStyle'" id="image" ref="headerBg"
            src="../../assets/header/aboutUsHeaderBg.png" class="header-bg">
        <img v-if="currentPath == '/consultationForm'" id="image" ref="headerBg"
            src="../../assets/header/aboutUsHeaderBg.png" class="header-bg">
        <div class="header-nav-area">
            <div class="header-content">
                <div class="logo">
                    <img src="../../assets/header/logo.png" alt="">
                </div>
                <div class="header-nav">
                    <div v-for="(item, index) in navList" class="nav-item" @click="toPage(item)"
                        :style="currentPath == item.path ? `color: #FF9C00;` : ''">
                        {{ item.name }}
                    </div>
                </div>
                <div class="header-tools">
                    <div class="header-search">
                        <div></div>
                        <img class="search-img" src="../../assets/header/search.png" alt="">
                    </div>
                    <div class="header-language">
                        <div>中文</div>
                        <img src="../../assets/header/downArrow.png" alt="">
                    </div>
                </div>
            </div>

            <!-- 各个页面不同展示 -->
            <CourseProjects v-if="currentPath == '/courseProjects'" />
            <TeachingStaffHeader v-if="currentPath == '/teachingStaff'" />
            <AboutUsHeader v-if="currentPath == '/aboutUs'" />
            <AlumniStyleHeader v-if="currentPath == '/alumniStyle'" />
            <ConsultationFormHeader  v-if="currentPath == '/consultationForm'" />
        </div>
        <div class="articleHeader" v-if="currentPath == '/article'"></div>
        <HomeHeader v-if="currentPath == '/'" />

        <div class="sidebar">
            <div class="sidebar-item" v-for="(item, index) in sidebarList" @click="toPage({path: item.path})"  @mouseover="isHovered = index"
            @mouseleave="isHovered = -1">
                <img :src="isHovered == index ? item.imgPath : item.unImgPath" alt="">
                <div>{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import HomeHeader from './headerContent/homeHeader.vue'
import CourseProjects from './headerContent/courseProjectsHeader.vue'
import TeachingStaffHeader from './headerContent/teachingStaffHeader.vue'
import AboutUsHeader from './headerContent/aboutUsHeader.vue'
import AlumniStyleHeader from './headerContent/alumniStyleHeader.vue'
import ConsultationFormHeader from './headerContent/consultationFormHeader.vue'

import ApplyImg from '../../assets/header/silderIcon/Apply.png'
import ProjectImg from '../../assets/header/silderIcon/Project.png'
import ChatImg from '../../assets/header/silderIcon/Chat.png'

import unApplyImg from '../../assets/header/silderIcon/uncheckApply.png'
import unProjectImg from '../../assets/header/silderIcon/uncheckProject.png'
import unChatImg from '../../assets/header/silderIcon/uncheckSide.png'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { HomeHeader, CourseProjects, TeachingStaffHeader, AboutUsHeader, AlumniStyleHeader, ConsultationFormHeader },
    data() {
        //这里存放数据
        return {
            imageUrl: '',
            navList: [
                { name: '首页', path: '/' },
                { name: '关于我们', path: '/aboutUs' },
                { name: '课程项目', path: '/courseProjects' },
                { name: '师资力量', path: '/teachingStaff' },
                { name: '校友风采', path: '/alumniStyle' }
            ],
            currentPath: '/',
            bgHeigth: '',
            sidebarList: [
                { name: '立即申请', path: '', imgPath: ApplyImg, unImgPath: unApplyImg },
                { name: '项目导览', path: '', imgPath: ProjectImg, unImgPath: unProjectImg },
                { name: '1对1咨询', path: '/consultationForm', imgPath: ChatImg, unImgPath: unChatImg }
            ],
            isHovered: -1
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        toPage(item) {
            if (!item.path) {
                return
            }
            this.$router.push(item.path)
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {



    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.currentPath = this.$route.path

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped lang="less">
.articleHeader {
    width: 100%;
    height: 100px;
    background-color: #0B1420;
}

.header-nav-area {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 100;
}

.header-area {
    width: 100%;
    position: relative;

    .header-bg {
        width: 100%;
        z-index: -1;
    }

    .header-content {
        z-index: 10;
        padding: 0 87px 0 120px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo img {
            width: 181px;
            height: 53px;
        }
    }

    .header-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        margin: 0 150px;
        font-size: 20px;
        width: 920px;

        .nav-item {
            cursor: pointer;
        }
    }

    .header-tools {
        display: flex;

        .header-search {
            width: 172px;
            height: 40px;
            border-radius: 20px;
            border: 3px solid #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5px;
            margin-right: 30px;

            .search-img {
                width: 31px;
                height: 31px;
            }
        }

        .header-language {
            width: 108px;
            height: 40px;
            border-radius: 20px;
            border: 3px solid #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: space-around;

            div {
                font-weight: 500;
                font-size: 20px;
                color: #FFFFFF;
                line-height: 30px;
                margin-left: 15px;
            }

            img {
                width: 31px;
                height: 31px;
                display: block;
            }
        }
    }
}

.sidebar {
    position: fixed;
    width: 91px;
    height: 295px;
    background: #FFFFFF;
    border-radius: 20px 0px 0px 20px;
    right: 0;
    bottom: 50%;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 110;
    box-shadow:  0 4px 16px  rgba(17,17,26,0.1), -20px 0 22px 5px rgba(135, 135, 135, 0.25);

    .sidebar-item {
        width: 100%;
        text-align: center;
        color: #172C47;
        cursor: pointer;
    }

    img {
        width: 47px;
        height: 47px;
    }
}
</style>