<!--  -->
<template>
  <div id="container" :style="bgHeigth" class="header-area">
    <!-- <img v-if="currentPath == '/consultationForm'" id="image" ref="headerBg"
            src="../../assets/header/aboutUsHeaderBg.png" class="header-bg"> -->
    <div class="header-nav-area">
      <div class="header-mobile">
        <div class="logo">
          <img style="display: block" src="../../assets/header/logo.png" alt="" />
        </div>
        <div class="header-mobile-bread">
          <img class="menu-img" style="display: block" src="../../assets/menu.png" alt="" @click="showOverlay" />
          <!-- <t-image
            @click="showOverlay"
            class="menu-img"
            :src="menuPng"
            fit="cover"
            position="center"
            :lazy="true"
          /> -->
        </div>
      </div>
      <div class="header-content">
        <div class="logo">
          <img src="../../assets/header/logo.png" alt="" />
        </div>
        <div class="header-nav">
<<<<<<< HEAD
          <div v-for="(item, index) in navList" class="nav-item" @click="toPage(item)"
=======
          <div v-for="(item, index) in navList" class="nav-item" @click="toPage(item)" @mouseenter="classShow(item)"
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
            :style="currentPath == item.path ? `color: #FF9C00;` : ''">
            {{ userLanguage == "1" ? item.name : item.nameEn }}
          </div>
        </div>
        <div class="header-tools">
          <div class="header-language">
            <div class="flex" @click="languageChange({ value: userLanguage == '1' ? '2' : '1' })">
              <div class="langeContent">
                {{ userLanguage == "1" ? "English" : "中文" }}
              </div>
              <!-- <img
                :class="{ rotated: isRotated }"
                src="../../assets/header/downArrow.png"
                alt=""
              /> -->
            </div>
            <!-- <div class="lagTypes" v-show="isRotated">
              <div class="line"></div>
              <div
                :class="
                  userLanguage == item.value ? 'currentLangeItem' : 'langeItem'
                "
                v-for="item in lanageList"
                :key="item.value"
                @click="languageChange(item)"
              >
                {{ item.label }}
              </div>
            </div> -->
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <SuspendedWindow v-show="openWindow" />

=======
      <!-- <transition name="slide-down"> -->
        <div @mouseleave="openWindow = false" v-show="openWindow">
          <SuspendedWindow />
        </div>
        
     <!--  </transition> -->
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
      <Overlay :visible.sync="isOverlayVisible">
        <div style="color: #ffffff">
          <div class="menu-area">
            <div><img src="../../assets/mBack.png" alt="" @click="goBack"></div>
            <div><img src="../../assets/mClose.png" alt="" @click="hideOverlay"></div>
          </div>

          <div class="menu-content" v-if="showChildren === true"
            @click="handleClick({ children: [], path: '/', item: '首页' })">
            <div class="menu-one">{{ userLanguage == '1' ? '首页' : 'Home' }}</div>
          </div>
          <div class="menu-content" v-if="showChildren === true">
<<<<<<< HEAD
            <div class="menu-one" v-if="index === 0" v-for="(item, index) in displayMenu" :key="index"
=======
            <div class="menu-one" v-if="index == 0" v-for="(item, index) in displayMenu" :key="index"
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
              :class="{ 'overlay-color': currentPath == item.path }" @click="handleClick(item, index)">
              {{ userLanguage == "1" ? item.item : item.nameEn || item }}
            </div>
            <div :class="[currentPath == item.path ? 'overlay-color' : '']" class="menu-two" v-if="index !== 0"
              v-for="(item, index) in displayMenu" :key="index" @click="handleClick(item, index)">
              {{ userLanguage == "1" ? item.item.item : item.item.nameEn }}
            </div>
          </div>
          <div class="menu-three" v-else>
            <div class="menu-one" v-for="(item, index) in displayMenu" :key="index"
              :class="{ 'overlay-color': currentPath == item.path }" @click="handleClick(item, index)">
              {{ userLanguage == "1" ? item.item : item.nameEn || item }}
            </div>
          </div>
        </div>
      </Overlay>

      <!-- <div style="color: white;">
                {{ userLanguage }}
            </div> -->
    </div>
    <!-- 各个页面不同展示 -->
    <div class="articleHeader" v-if="isNoTopImgPages.includes(currentPath)"></div>
    <HomeHeader v-if="currentPath == '/'" />
    <CourseProjects :imgUrl="imgUrl" v-if="currentPath == '/jnumba'" />
    <DBAhader :imgUrl="imgUrl" v-if="currentPath == '/audenciadba'"/>
    <TeachingStaffHeader
      :imgUrl="userLanguage == '1' ? (isSmallScreen ? imgUrl.mUrl : imgUrl.url) : (isSmallScreen ? imgUrl.mUrlEn : imgUrl.urlEn)"
      v-if="currentPath == '/faculty'" />
    <AboutUsHeader
      :imgUrl="userLanguage == '1' ? (isSmallScreen ? imgUrl.mUrl : imgUrl.url) : (isSmallScreen ? imgUrl.mUrlEn : imgUrl.urlEn)"
      v-if="currentPath == '/aboutUs'" />
    <ConsultationFormHeader
      :imgUrl="userLanguage == '1' ? (isSmallScreen ? imgUrl.mUrl : imgUrl.url) : (isSmallScreen ? imgUrl.mUrlEn : imgUrl.urlEn)"
      v-if="currentPath == '/consultationForm'" />
    <AlumniStyleHeader
      :imgUrl="userLanguage == '1' ? (isSmallScreen ? imgUrl.mUrl : imgUrl.url) : (isSmallScreen ? imgUrl.mUrlEn : imgUrl.urlEn)"
      v-if="currentPath == '/alumni'" />
    <PromotionAmbassador
      :imgUrl="userLanguage == '1' ? (isSmallScreen ? imgUrl.mUrl : imgUrl.url) : (isSmallScreen ? imgUrl.mUrlEn : imgUrl.urlEn)"
      v-if="currentPath == '/Ambassador'" />

    <div class="sidebar" :class="{
      'sidebar-zh': userLanguage == '1',
      'sidebar-en': userLanguage !== '1',
    }">
      <div class="sidebar-item" v-for="(item, index) in sidebarList" @click="toPage({ path: item.path })"
        @mouseover="isHovered = index" @mouseleave="isHovered = -1" :key="index">
        <img :src="isHovered == index ? item.imgPath : item.unImgPath" alt="" />
        <div>{{ userLanguage == "1" ? item.name : item.nameEn }}</div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import HomeHeader from "./headerContent/homeHeader.vue";
import CourseProjects from "./headerContent/courseProjectsHeader.vue";
import DBAhader from "./headerContent/DBAhader.vue";
import TeachingStaffHeader from "./headerContent/teachingStaffHeader.vue";
import AboutUsHeader from "./headerContent/aboutUsHeader.vue";
import AlumniStyleHeader from "./headerContent/alumniStyleHeader.vue";
import ConsultationFormHeader from "./headerContent/consultationFormHeader.vue";
import PromotionAmbassador from "./headerContent/promotionAmbassador.vue";

import ApplyImg from "../../assets/header/silderIcon/Apply.png";
import ProjectImg from "../../assets/header/silderIcon/Project.png";
import ChatImg from "../../assets/header/silderIcon/Chat.png";

import unApplyImg from "../../assets/header/silderIcon/uncheckApply.png";
import unProjectImg from "../../assets/header/silderIcon/uncheckProject.png";
import unChatImg from "../../assets/header/silderIcon/uncheckSide.png";
import Overlay from "../components/Overlay.vue";
import router from "../router.js";
<<<<<<< HEAD

import SuspendedWindow from "./SuspendedWindow.vue";

=======
import WhatsappImg from "../../assets/header/silderIcon/Whatsapp.png"
import unWhatsappImg from "../../assets/header/silderIcon/ncheckWhatsapp.png"
import SuspendedWindow from "./SuspendedWindow.vue";
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Overlay,
    HomeHeader,
    CourseProjects,
    TeachingStaffHeader,
    AboutUsHeader,
    AlumniStyleHeader,
    ConsultationFormHeader,
<<<<<<< HEAD
    SuspendedWindow
=======
    PromotionAmbassador,
    SuspendedWindow,
    DBAhader
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
  },
  data() {
    //这里存放数据
    return {
      isOverlayVisible: false,
      currentItem: "",
      overlayMenu: [
        { item: "首页", nameEn: "Home", path: "/", children: [] },
        {
          item: "关于我们",
          nameEn: "About Us",
          path: "/aboutUs",
          children: [],
        },
        {
          item: "课程项目",
          nameEn: "Programmes",
          path: "/jnumba",
          children: [
            {
              item: "MBA",
              nameEn: "MBA",
            },
            {
              item: "南特工商管理博士",
              nameEn: "Doctor of Business Administration",
            }
          ],
        },
        {
          item: "师资力量",
          nameEn: "Faculty",
          path: "/faculty",
          children: [],
        },
        {
          item: "学员社区",
          nameEn: "Students",
          path: "/alumni",
          children: [],
        },
        {
          item: "语言",
          nameEn: "Language",
          children: [
            { item: "中文", nameEn: "中文" },
            { item: "English", nameEn: "English" },
          ],
        },
      ],
      displayMenu: [],
      breadcrumbs: [],
      showChildren: false,
      imageUrl: "",
      navList: [
        { name: "首页", nameEn: "Home", path: "/" },
        { name: "关于我们", nameEn: "About Us", path: "/aboutUs" },
        { name: "课程项目", nameEn: "Programmes", path: "/jnumba" },
        { name: "师资力量", nameEn: "Faculty", path: "/faculty" },
        { name: "学员社区", nameEn: "Students", path: "/alumni" },
      ],
      currentPath: "/",
      bgHeigth: "",
      sidebarList: [
        {
          name: "1对1咨询",
          nameEn: "Schedule an Info Session",
          path: "/consultationForm",
          imgPath: ChatImg,
          unImgPath: unChatImg,
        },
        /* {
          name: "项目导览",
          nameEn: "Program Overview",
          path: "",
          imgPath: ProjectImg,
          unImgPath: unProjectImg,
        }, */
        {
          name: "WhatsApp",
          nameEn: "WhatsApp",
          path: "/send?phone=6563203596",
          imgPath: WhatsappImg,
          unImgPath: unWhatsappImg,
        },
      ],
      isHovered: -1,
      imgUrl: "",
      isRotated: false,
      lanageList: [
        { label: "中文", value: "1" },
        { label: "En", value: "2" },
      ],
      isSmallScreen: false,
<<<<<<< HEAD
      isNoTopImgPages: ['/article', '/highEdu', '/policy', '/contactUs', '/mbaProfessors'],
=======
      isNoTopImgPages: ['/article', '/highEdu', '/policy', '/contactUs', '/mbaProfessors', '/Professors', '/AmbassadorDetail', '/student-code-of-conduct', '/contract', '/studenthandbook', '/fee-protection-scheme', '/privacypolicy', '/grievancepolicy', '/private-education-act'],
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
      openWindow: false
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) { },
<<<<<<< HEAD
=======
    'openWindow' (val) {
      const headerNavArea = document.querySelector(".header-nav-area")
      if (val) {
        headerNavArea.style.backgroundColor = `rgba(22, 58, 107, 1)`;
      } else {
        if (this.isNoTopImgPages.includes(this.currentPath)) {
          headerNavArea.style.backgroundColor = `rgba(22, 58, 107, 1)`;
        } else {
          const containerHeight = document.getElementById("container").offsetHeight;
          const scrollHeight = window.scrollY;
          const opacity = scrollHeight / containerHeight;

          headerNavArea.style.backgroundColor = `rgba(22, 58, 107, ${opacity})`;
        }
      }
    }
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
  },
  //方法集合
  methods: {
    mobileClick(item) {
      if (item.path) {
        router.push(item.path);
      }
    },
    handleClick(item, index) {
      const idMap = {
        项目概述: "options1",
        课程体系: "options2",
        招生信息: "options3",
      };
      const elementId = idMap[item.item.item];
      this.currentItem = item.item;
      if (item.children && item.children.length) {
        this.displayMenu = item.children.map((child) => ({
          item: child,
          children: [],
        }));
        this.displayMenu.unshift({
          item: item.item,
          nameEn: item.nameEn,
          children: [],
        });
        this.breadcrumbs.push(item.item);
        this.showChildren = true;
      } else if (elementId) {
        this.hideOverlay();
        router.push({ path: "/jnumba" });
      } else if (item.path) {
        this.hideOverlay();
        router.push(item.path);
        window.scrollTo({
          top: 0,
          behavior: "instant", // 可选，使用平滑滚动效果
        });
      } else {
        if (item.item.item == 'MBA' || item.item.item == '南特工商管理博士') {
          router.push({ path: item.item.item == 'MBA' ? "/jnumba" : "/audenciadba" })
          window.scrollTo({
            top: 0,
            behavior: "instant", // 可选，使用平滑滚动效果
          });
          return
        }
        if (item.item == '语言') {
          return
        }
        localStorage.setItem(
          "userLanguage",
          item.item.item == "中文" ? "1" : "2"
        );
        this.$store.dispatch(
          "setUserLanguage",
          item.item.item == "中文" ? "1" : "2"
        );
        this.hideOverlay();
      }
    },
    scrollToElement(id) {
      this.$nextTick(() => {
        const element = document.getElementById(id);
        if (element) {
          element.style.scrollMarginTop = "100px"; // 添加 scroll-margin-top 属性
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    goBack() {
      this.breadcrumbs.pop();
      if (this.breadcrumbs.length === 0) {
        this.displayMenu = this.overlayMenu;
        this.showChildren = false;
      } else {
        const parentItem = this.overlayMenu.find(
          (menuItem) =>
            menuItem.item === this.breadcrumbs[this.breadcrumbs.length - 1]
        );
        this.displayMenu = parentItem.children.map((child) => ({
          item: child,
          children: [],
        }));
      }
    },
    hideOverlay() {
      this.isOverlayVisible = false;
      // this.goBack();
    },
    showOverlay() {
      this.isOverlayVisible = true;
    },
    toPage(item) {
      if (!item.path) {
        return;
      }
<<<<<<< HEAD
      if (item.name == '课程项目') {
        this.openWindow = !this.openWindow
        return
      }
      this.$router.push(item.path);
=======
      // 判断是否展开课程项目
      if (item.name == '课程项目') {
        return
      }
      // 判断是否为外部链接
      if (item.path.includes("6563203596")) {
        const fullURL = `https://api.whatsapp.com${item.path}`;
        window.open(fullURL, "_blank"); // 新标签页打开外链
        return; // 跳过后续逻辑
      }
      // 判断跳转表单页带参
      if (item.path == '/consultationForm') {
        let params = { type: 0 }
        if (this.$route.name == 'jnumba') {
          params.type = 1
        }
        if (this.$route.name == 'audenciadba') {
          params.type = 2
        }
        this.$router.push({name: 'consultationForm', params: params})
        window.scrollTo({
          top: 0,
          behavior: "instant", // 可选，使用平滑滚动效果
        });
        return
      }
      this.$router.push(item.path)
      /* // 判断是否为内部路由
      if (item.path.startsWith("/")) {
        if (this.$route.fullPath !== item.path) {
          this.$router.push(item.path).catch((err) => {
            if (err.name !== "NavigationDuplicated") {
              console.error(err); // 捕获并忽略重复导航错误
            }
          });
        } else {
        }
      } */

      // 内部路由跳转后滚动到顶部
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
      window.scrollTo({
        top: 0,
        behavior: "instant", // 可选，使用平滑滚动效果
      });
    },

    async getPageHedaerImg() {
      let id = null;
      switch (this.currentPath) {
        case "/jnumba":
          id = 3;
          break;
        case "/faculty":
          id = 15;
          break;
        case "/aboutUs":
          id = 1;
          break;
        case "/alumni":
          id = 2;
          break;
        case "/consultationForm":
          id = 19;
          break;
        case "/Ambassador":
          id = 21
          break;
        case "/audenciadba":
          id = 23
          break;
      }
      if (id) {
        this.imgUrl = await this.$getPageContent(id);
      }
    },

    turnArrow() {
      this.isRotated = !this.isRotated;
    },

    languageChange(item) {
      localStorage.setItem("userLanguage", item.value);
      this.$store.dispatch("setUserLanguage", item.value);
      /* this.isRotated = !this.isRotated; */
    },

    classShow(item) {
      if (item.name == '课程项目') {
        this.openWindow = true
      } else {
        this.openWindow = false
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.isSmallScreen = window.innerWidth <= 720
    this.displayMenu = this.overlayMenu;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  async mounted() {
    this.currentPath = this.$route.path;
    if (this.currentPath !== "/") {
      this.getPageHedaerImg();
    }
    const headerNavArea = document.querySelector(".header-nav-area");
    const containerHeight = document.getElementById("container").offsetHeight;

    if (!this.isNoTopImgPages.includes(this.currentPath)) {
      window.addEventListener("scroll", () => {
        if (this.openWindow) {
          return
        }
        const scrollHeight = window.scrollY;
        const opacity = scrollHeight / containerHeight;

        headerNavArea.style.backgroundColor = `rgba(22, 58, 107, ${opacity})`;
      });
    } else {
      headerNavArea.style.backgroundColor = `rgba(22, 58, 107, 1)`;
    }
  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
<<<<<<< HEAD
  beforeUpdate() { }, //生命周期 - 更新之前
=======
  beforeUpdate() {}, //生命周期 - 更新之前
>>>>>>> e80d29b6bbc89b14d0abeb97d34c4f5941fa4960
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
@media (max-width: 720px) {
  .header-content {
    display: none;
  }

  .menu-area {
    margin: 36px auto;
    margin-bottom: 110px;
    width: 95%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    div {
      font-size: 23px;
    }

    img {
      width: 81px;
      height: 81px;
    }
  }

  .menu-content {
    margin: 60px auto;
    width: 85%;
  }
}

.overlay-color {
  color: #ff9c00 !important;
}

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
  z-index: 200;
  /* left: 50%;
    transform: translateX(-50%); */
}

.header-mobile .logo {
  display: none;
}

.header-mobile-bread {
  margin-right: 40px;
  display: none;

  .menu-img {
    background: transparent;
    width: 55px;
  }
}

@media (max-width: 720px) {
  .sidebar {
    width: 92px !important;
    /* 缩小宽度 */
    height: 200px !important;
    /* 高度保持自适应 */
    font-size: 14px !important;
    z-index: 200 !important;

    /* 字体缩小 */
    img {
      width: 48px !important;
      height: 48px !important;
    }
  }

  .header-nav {
    display: none !important;
  }

  .logo {
    display: none;
  }

  .logo img {
    width: 181px;
    height: 53px;
    margin-left: 40px;
  }

  .header-content {
    width: 100vw !important;
    height: 100px !important;
  }

  .header-tools {
    display: none !important;
  }

  .header-mobile {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #0b1420;
    justify-content: space-between;
  }

  .header-mobile .logo {
    display: block !important;
  }

  .header-mobile-bread {
    display: block !important;
  }
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
    height: 100%;

    .nav-item {
      cursor: pointer;
      user-select: none;
      height: 100%;
      display: flex;
      align-items: center;
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
      border: 3px solid #ffffff;
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
      width: 110px;
      min-height: 40px;
      border-radius: 20px;
      border: 3px solid #ffffff;
      font-weight: 500;
      font-size: 20px;
      color: #ffffff;

      .flex {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .langeContent {
        line-height: 40px;
        /* margin-left: 15px; */
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
        color: #ffffff;
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
        color: #ff9c00;
        line-height: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background: #172c47;
        border-radius: 20px;
      }

      .lagTypes {
        width: 100%;
        height: 105px;
      }
    }
  }
}

.sidebar-zh {
  width: 137px;
  height: 293px;
}

.sidebar-en {
  width: 137px;
  height: 293px;
}

.sidebar {
  position: fixed;
  background: #ff9c00;
  border-radius: 20px 0 0 20px;
  right: 0;
  bottom: 50%;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 110;
  box-shadow: 0 4px 16px rgba(17, 17, 26, 0.1),
    -20px 0 22px 5px rgba(135, 135, 135, 0.25);

  .sidebar-item {
    width: 100%;
    text-align: center;
    /* color: #172c47; */
    color: #fff;
    cursor: pointer;
  }

  .sidebar-item:hover {
    color: #172c47;
  }

  img {
    width: 68px;
    height: 68px;
  }
}

.menu-one {
  margin-top: 40px;
  font-size: 24px;
}

.menu-two {
  margin-left: 20px;
  margin-top: 40px;
}

.menu-three {
  margin: 60px auto;
  width: 85%;
  font-size: 24px;
}

/* 定义过渡效果的CSS */
// .slide-down-enter-active, .slide-down-leave-active {
//   transition: all 1s ease; 
// }
// .slide-down-enter {
//   transform: translateY(-30%); 
//   opacity: 0; 
// }
 
// .slide-down-leave-to /* 在Vue 2.1.8及以上版本中，使用.slide-down-leave-to */ {
//   transform: translateY(-30%); 
//   opacity: 0; 
// }
</style>