<!--  -->
<template>
    <div id="container" :style="bgHeigth" class="header-area">
        <!-- <img v-if="currentPath == '/consultationForm'" id="image" ref="headerBg"
            src="../../assets/header/aboutUsHeaderBg.png" class="header-bg"> -->
        <div class="header-nav-area">
            <div class="header-content">
                <div class="logo">
                    <img src="../../assets/header/logo.png" alt="">
                </div>
                <div class="header-nav">
                    <div v-for="(item, index) in navList" class="nav-item" @click="toPage(item)"
                        :style="currentPath == item.path ? `color: #FF9C00;` : ''">
                        {{ userLanguage == '1' ? item.name : item.nameEn }}
                    </div>
                </div>
                <div class="header-tools">
                    <div class="header-language">
                        <div class="flex" @click="turnArrow">
                            <div class="langeContent">{{ userLanguage == '1' ? '中文' : 'English' }}</div>
                            <img :class="{ rotated: isRotated }" src="../../assets/header/downArrow.png" alt="">
                        </div>
                        <div class="lagTypes" v-show="isRotated">
                            <div class="line"></div>
                            <div :class="userLanguage == item.value ? 'currentLangeItem' : 'langeItem'" v-for="item in lanageList" :key="item.value"
                                @click="languageChange(item)">
                                {{ item.label }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div style="color: white;">
                {{ userLanguage }}
            </div> -->
        </div>
        <!-- 各个页面不同展示 -->
        <div class="articleHeader" v-if="currentPath == '/article'"></div>
        <HomeHeader v-if="currentPath == '/'" />
        <CourseProjects :imgUrl="imgUrl" v-if="currentPath == '/courseProjects'" />
        <TeachingStaffHeader :imgUrl="userLanguage == '1' ?  imgUrl.url : imgUrl.urlEn" v-if="currentPath == '/teachingStaff'" />
        <AboutUsHeader :imgUrl="userLanguage == '1' ?  imgUrl.url : imgUrl.urlEn" v-if="currentPath == '/aboutUs'" />
        <ConsultationFormHeader :imgUrl="userLanguage == '1' ?  imgUrl.url : imgUrl.urlEn" v-if="currentPath == '/consultationForm'" />
        <AlumniStyleHeader :imgUrl="userLanguage == '1' ?  imgUrl.url : imgUrl.urlEn" v-if="currentPath == '/alumniStyle'" />

        <div class="sidebar">
            <div class="sidebar-item" v-for="(item, index) in sidebarList" @click="toPage({ path: item.path })"
                @mouseover="isHovered = index" @mouseleave="isHovered = -1">
                <img :src="isHovered == index ? item.imgPath : item.unImgPath" alt="">
                <div>{{ userLanguage == '1' ? item.name : item.nameEn }}</div>
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
                { name: '首页', nameEn: 'Home', path: '/' },
                { name: '关于我们', nameEn: 'About Us', path: '/aboutUs' },
                { name: '课程项目', nameEn: 'Programmes', path: '/courseProjects' },
                { name: '师资力量', nameEn: 'Faculty', path: '/teachingStaff' },
                { name: '校友风采', nameEn: 'Alumni', path: '/alumniStyle' }
            ],
            currentPath: '/',
            bgHeigth: '',
            sidebarList: [
                { name: '立即申请', nameEn: 'Apply Now', path: '', imgPath: ApplyImg, unImgPath: unApplyImg },
                { name: '项目导览', nameEn: 'Program Overview', path: '', imgPath: ProjectImg, unImgPath: unProjectImg },
                { name: '1对1咨询', nameEn: 'One-on-One Consultation', path: '/consultationForm', imgPath: ChatImg, unImgPath: unChatImg }
            ],
            isHovered: -1,
            imgUrl: '',
            isRotated: false,
            lanageList: [
                { label: '中文', value: '1' },
                { label: 'English', value: '2' }
            ]
        };
    },
    computed: {
        userLanguage() {
            return this.$store.state.userLanguage;
        }
    },
    watch: {
        userLanguage(newVal) {
        }
    },
    //方法集合
    methods: {
        toPage(item) {
            if (!item.path) {
                return
            }
            this.$router.push(item.path)
            window.scrollTo({
                top: 0,
                behavior: 'instant' // 可选，使用平滑滚动效果
            });
        },

        async getPageHedaerImg() {
            let id = null
            switch (this.currentPath) {
                case '/courseProjects':
                    id = 3
                    break
                case '/teachingStaff':
                    id = 15
                    break
                case '/aboutUs':
                    id = 1
                    break
                case '/alumniStyle':
                    id = 2
                    break
                case '/consultationForm':
                    id = 19
                    break
            }
            this.imgUrl = await this.$getPageContent(id)
        },

        turnArrow() {
            this.isRotated = !this.isRotated
        },

        languageChange(item) {
            localStorage.setItem('userLanguage', item.value);
            this.$store.dispatch('setUserLanguage', item.value);
            this.isRotated = !this.isRotated
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    async mounted() {
        this.currentPath = this.$route.path
        if (this.currentPath !== '/') {
            this.getPageHedaerImg()
        }
        const headerNavArea = document.querySelector('.header-nav-area');
        const containerHeight = document.getElementById('container').offsetHeight;

        if (this.currentPath !== '/article') {
            window.addEventListener('scroll', () => {
                const scrollHeight = window.scrollY;
                const opacity = scrollHeight / containerHeight;

                headerNavArea.style.backgroundColor = `rgba(11, 20, 32, ${opacity})`;
            });
        } else {
            headerNavArea.style.backgroundColor = `rgba(11, 20, 32, 1)`;
        }
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
}

.rotated {
    transform: rotate(180deg);
}

.solid-bg {
    background-color: rgba(11, 20, 32, 1);
}

.header-nav-area {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 110;
    /* left: 50%;
    transform: translateX(-50%); */
}

.header-area {
    width: 100%;
    position: relative;

    .header-bg {
        width: 100%;
        z-index: -1;
    }

    .header-content {
        width: 1920px;
        margin: 0 auto;
        z-index: 10;
        /* padding: 0 87px 0 120px; */
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
        /* margin: 0 150px; */
        font-size: 20px;
        width: 1060px;

        .nav-item {
            cursor: pointer;
        }
    }

    .header-tools {
        display: flex;
        width: 108px;
        height: 40px;
        position: relative;

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
            position: absolute;
            cursor: pointer;
            background-color: rgba(11, 20, 32, 1);
            width: 138px;
            min-height: 40px;
            border-radius: 20px;
            border: 3px solid #FFFFFF;
            font-weight: 500;
            font-size: 20px;
            color: #FFFFFF;


            .flex {
                display: flex;
                align-items: center;
                justify-content: space-around;
            }

            .langeContent {
                line-height: 40px;
                margin-left: 15px;
            }

            img {
                width: 31px;
                height: 31px;
                display: block;
                transition: transform 0.3s ease;
            }

            .line {
                background-color: white;
                width: 88px;
                height: 1px;
                margin: 0 auto;
                margin-bottom: 12px;
            }

            .langeItem {
                width: 90px;
                height: 40px;
                font-weight: 500;
                font-size: 18px;
                color: #FFFFFF;
                line-height: 27px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
            }

            .currentLangeItem {
                width: 90px;
                height: 40px;
                font-weight: 500;
                font-size: 18px;
                color: #FF9C00;
                line-height: 27px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                background: #172C47;
                border-radius: 20px;
            }

            .lagTypes {
                width: 100%;
                height: 105px;
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
    box-shadow: 0 4px 16px rgba(17, 17, 26, 0.1), -20px 0 22px 5px rgba(135, 135, 135, 0.25);

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