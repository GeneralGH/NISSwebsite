<!--  -->
<template>
  <div ref="appContainer" id="appContainer">
    <pageHeader />

    <div class="content-one">
      <!-- <div class="subtitle">
        <div v-show="userLanguage == '1'">
          To cultivate high-level talents integrating <br>
          Chinese and Western and connecting theory with practice
        </div>
        <div v-show="userLanguage == '2'">
          培养融贯中西、知行合一的<br>高层次人才
        </div>
      </div>
      <div class="title">
        <div v-show="userLanguage == '2'">
          To cultivate high-level talents integrating <br>
          Chinese and Western and connecting theory with practice
        </div>
        <div v-show="userLanguage == '1'">
          培养融贯中西、知行合一的<br>高层次人才
        </div>
      </div> -->
      <div class="content-info">
        <!-- <div class="info-left">
          <img src="../../assets/home/contentOne.png" alt="">
        </div> -->
        <div class="info-right class-title">
          <div class="info-item module-card" v-for="(item, index) in infoList" @mouseover="isHovered = index"
            @mouseleave="isHovered = -1" @mouseenter="jump(item, index)" :class="{ 'is-hovered': isHovered == index }">
            <div style="width: 100%">
              <div class="info-title">
                <div>{{ userLanguage == "1" ? item.title : item.titleEn }}</div>
                <div class="info-line">
                  <div v-show="isHovered == index"></div>
                </div>
              </div>
              <div class="info-subTitle">
                <div v-for="str in item.subTitle" v-show="userLanguage == '1'">{{ str }}</div>
                <div v-for="str in item.subTitleEn" v-show="userLanguage == '2'">{{ str }}</div>
              </div>
              <div class="line" v-show="isHovered == index"></div>
            </div>
            <div class="homeRightArrow-area">
              <img v-show="isHovered == index" class="homeRightArrow" src="../../assets/home/homeRightArrow.png"
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-two" ref="contentTwo">
      <div class="content-info" id="content-info">
        <div class="info-left content-se">
          <div class="title" v-show="currentScroll == 0">
            {{
              userLanguage == "1"
                ? `暨南大学新加坡中文MBA项目`
                : "JNU MBA PROGRAM"
            }}
          </div>
          <!-- <div class="subTitle" v-show="currentScroll == 0">
            {{
              userLanguage == "2"
                ? "暨南大学新加坡MBA项目"
                : "JNU MBA PROGRAM"
            }}
          </div> -->

          <div class="title" v-show="currentScroll == 1">
            {{ userLanguage == "1" ? "高管教育" : "Executive Education" }}
          </div>
          <!-- <div class="subTitle" v-show="currentScroll == 2">
            {{ userLanguage == "2" ? "高级管理教育" : "Executive Education" }}
          </div> -->

          <img v-show="currentScroll == 0" src='../../assets/home/mba.png' alt="" />

          <img v-show="currentScroll == 1" src='../../assets/home/highEdu.png' alt="" />
        </div>
        <div class="info-right" id="contentTwoRight" ref="contentTwoRight">
          <div class="info-item" v-for="(item, index) in scrollList" :key="index">
            <div :class="userLanguage == '1' ? 'title' : 'titleEn'" style="width: 150%;">
              {{ userLanguage == "1" ? item.title : item.titleEn }}
            </div>
            <div class="titleEn" v-show="item.twoTitleEn && userLanguage == 2">
              {{ item.twoTitleEn }}
            </div>
            <div class="subTitle" style="width: 130%;">
              {{ userLanguage == "1" ? item.subTitle : item.subTitleEn }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-three">
      <div class="title">
        {{ userLanguage == "1" ? "校友寄语" : "Alumni Testimonials" }}
      </div>
      <!-- <div class="subTitle">Their Stories</div> -->

      <div class="alumni-scroll" id="alumni-scroll">
        <vue-seamless-scroll :data="alumniList" :class-option="classOption" id="vueSeamlessScroll"
          ref="vueSeamlessScroll">
          <div class="alumni-item" v-for="(item, index) in alumniList">
            <div v-show="index % 2 === 0" style="position: relative">
              <img class="dialog-bg" src="../../assets/home/topDialog.png" alt="" />
              <div class="dialog-content dialog-content-top">
                <div>{{ userLanguage == "1" ? item.wrote : item.wroteEn }}</div>
              </div>
            </div>
            <div v-show="index % 2 !== 0">
              <div class="alumni-info">
                {{ userLanguage == "1" ? item.name : item.nameEn }}<br />
                {{ (userLanguage == "1" ? item.company : item.companyEn) + ' ' + (userLanguage == "1" ? item.workPost :
                  item.workPostEn) }}
              </div>
              <div class="alumni-class">
                {{ userLanguage == "1" ? item.grade : item.gradeEn }}
              </div>
            </div>
            <t-image class="alumni-img" :src="item.imgPath" fit="cover" position="center">
              <template #loading>
                {{ "" }}
              </template>
            </t-image>
            <!-- <img class="alumni-img" :src="item.imgPath" alt=""> -->
            <div v-show="index % 2 === 0">
              <div class="alumni-info">
                {{ userLanguage == "1" ? item.name : item.nameEn }}<br />
                {{ (userLanguage == "1" ? item.company : item.companyEn) + ' ' + (userLanguage == "1" ? item.workPost :
                  item.workPostEn) }}
              </div>
              <div class="alumni-class">
                {{ userLanguage == "1" ? item.grade : item.gradeEn }}
              </div>
            </div>
            <div v-show="index % 2 !== 0" style="position: relative">
              <img class="dialog-bg" src="../../assets/home/buttonDialog.png" alt="" />
              <div class="dialog-content dialog-content-bottom">
                <div>{{ userLanguage == "1" ? item.wrote : item.wroteEn }}</div>
              </div>
            </div>
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Alumni from "../api/Alumni";

export default {
  //import引入的组件需要注入到对象中才能使用
  data() {
    //这里存放数据
    return {
      scrollList: [],
      currentScroll: 0,
      infoList: [
        {
          title: "MBA",
          titleEn: "MBA",
          subTitle: ['暨南大学', '新加坡', '中文MBA', '项目'],
          subTitleEn: ['JNU MBA Program', '(Mandarin)'],
          path: "/jnumba",
        },
        /* {
          title: "DBA",
          titleEn: "DBA",
          subTitle: ['南特高等商学院', '亚太中文DBA项目'],
          subTitleEn: ['Audencia Business School', 'Asia-Pacific DBA Program', '(Chinese)'],
        }, */
        {
          title: "EE",
          titleEn: "EE",
          subTitle: ["高管教育"],
          subTitleEn: ['Executive Education'],
        },
      ],
      infoTwoList: [
        {
          title: "华侨最高学府",
          titleEn: "Paramount University for ",
          twoTitleEn: 'Overseas Chinese',
          subTitle: "百年名校、211工程大学、双一流建设高校",
          subTitleEn: "A Century of Academic Excellence | Project-211 & Double First-Class University",
        },
        {
          title: "顶级认证",
          titleEn: "International Accreditations",
          subTitle: "AACSB、AMBA、BGA",
          subTitleEn: "AACSB、AMBA、BGA",
        },
        {
          title: "双证文凭",
          titleEn: "Dual Credentials",
          subTitle: "硕士学位证书和毕业证书，全球认可",
          subTitleEn: "Master’s Degree Certificate & Certificate of Graduation",
        },
        {
          title: "精英平台",
          titleEn: "Elite Platform",
          subTitle: "交良师、结益友、融资源的终身学习平台",
          subTitleEn: "Engaging with Inspiring Mentors | Connecting with Valuable Peers | Collaborating with Extensive Resources",
        }
      ],
      highEduList: [
        {
          title: "聚焦前沿",
          titleEn: "Cutting-Edge Focus",
          subTitle: "针对商业前沿和热点的模块化课程",
          subTitleEn: "Modular courses addressing the latest trends and key issues in business",
        },
        {
          title: "量身定制",
          titleEn: "Tailored Solutions",
          subTitle: "针对企业个性化需求，量身定制精品课程",
          subTitleEn: "Customized high-quality courses designed to meet the specific needs of businesses",
        },
        {
          title: "一流师资",
          titleEn: "Top-Tier Faculty",
          subTitle: "执教全球顶尖商学院经验的特聘教授团队",
          subTitleEn: "A distinguished team of professors with experience from leading global business schools",
        },
        {
          title: "国际平台",
          titleEn: "Global Platform",
          subTitle: "融贯中西的国际化终身学习平台",
          subTitleEn: "An integrated global lifelong learning platform bridging Eastern and Western perspectives",
        }
      ],
      alumniList: [],
      isHovered: -1,
      classOption: {
        limitMoveNum: 2,
        direction: 2,
      },

      contentTwoScrollTop: false,
      contentTwoRightMax: false,
      scollTop: 0,
      scollInv: 50,
      outerInv: 50,
      windowScreen: 0,
      outerScrollTop: 0,
      numberScorll: 0,
      moveFlag: false,
      downX: 0,
      scrollLeft: 0,
      vueSeamlessScroll: null,
      vueSeamlessScrollXPos: 0,
      listQuery: {
        current: 1,
        size: 20,
        language: "",
      },
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) {
      this.alumniList = [];
      this.initList();
      document.title = newVal == "1" ? "首页" : "Home";
    },
  },
  //方法集合
  methods: {
    handleWheel(event) {
      //滚动到顶部
      let topMix = this.$refs.contentTwo.getBoundingClientRect().top;

      const inner = document.getElementById("contentTwoRight");
      const outer = document.getElementById("appContainer");
      let scrollHeight = inner.scrollHeight;
      let scrollTop = inner.scrollTop;
      let clientHeight = inner.clientHeight;
      let inv = this.scollInv;
      let outerInv = this.outerInv;
      if (event.wheelDeltaY > 0) {
        inv = -inv;
        outerInv = -outerInv;
      }
      let outerScrollTop = document.documentElement.scrollTop;
      if (-50 <= topMix && topMix <= 50) {
        this.contentTwoScrollTop = true;
      } else {
        event.preventDefault();
        this.contentTwoScrollTop = false;
        outerScrollTop += outerInv;
        this.$nextTick(() => {
          document.documentElement.scrollTop = outerScrollTop;
        });
      }
      if (this.contentTwoScrollTop) {
        //向下滚动
        if (inv > 0 && !this.contentTwoRightMax) {
          //继续增加内层滚动距离，并阻止外层
          event.preventDefault();
          if (scrollTop + inv > scrollHeight) {
            scrollTop = scrollHeight;
          } else {
            scrollTop += inv;
          }
          inner.scrollTop = scrollTop;
        } else if (inv <= 0 && scrollTop > 0) {
          console.log("beforeScrollTop", scrollTop);
          //向上滚动
          event.preventDefault();
          if (scrollTop - inv <= 0) {
            scrollTop = 0;
          } else {
            scrollTop += inv;
          }
          inner.scrollTop = scrollTop;
        }
      }
      let currentHeight = 0;
      for (let i = 0; i < this.infoTwoList.length; i++) {
        currentHeight += this.numberScorll;
        if (
          scrollTop + clientHeight > currentHeight - this.scollInv &&
          currentHeight > scrollTop - this.scollInv
        ) {
          this.infoTwoList[i].isOpacity = false;
        } else {
          this.infoTwoList[i].isOpacity = true;
        }
      }

      if (
        (scrollHeight - (scrollTop + clientHeight)) / clientHeight <= 0.05 &&
        inv > 0
      ) {
        this.contentTwoRightMax = true;
      } else {
        this.contentTwoRightMax = false;
      }

      if (scrollTop == scrollHeight || scrollTop == 0) {
        this.contentTwoScrollTop = false;
      }
    },

    jump(item, index) {
      /* if (index == 1) {
        return;
      } */
      this.currentScroll = index;
      this.scrollList = index ? this.highEduList : this.infoTwoList;
    },

    initList() {
      this.$request
        .post(Alumni.getAlumniListPageUrl, this.listQuery)
        .then((res) => {
          this.alumniList = res.data.data.list.map((item) => {
            return { ...item, imgPath: JSON.parse(item.image).url };
          });
        });
    },

    getContainer() {
      return this.$refs.contentTwo;
    },

    scorllView() {
      let startY = 0;
      let isScrolling = false;
      let isAlumniScroll = false;

      const alumniScroll = document.getElementById('alumni-scroll');
      const bodyElement = document.querySelector('body');

      alumniScroll.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
        isScrolling = false;

        // 判断是否在 alumni-scroll 区域内
        const rect = alumniScroll.getBoundingClientRect();
        if (
          event.touches[0].clientY >= rect.top &&
          event.touches[0].clientY <= rect.bottom
        ) {
          isAlumniScroll = true;
        } else {
          isAlumniScroll = false;
        }
      });

      alumniScroll.addEventListener('touchmove', (event) => {
        if (isAlumniScroll) {
          // 在 alumni-scroll 区域内，阻止整个页面的滚动
          event.preventDefault();

          const diffY = event.touches[0].clientY - startY;

          // 在这里可以根据 diffY 的值来实现 alumni-scroll 区域的滚动逻辑
          // ...

          // 控制整个页面的滚动
          document.documentElement.scrollTop -= diffY;
          /* document.body.scrollTop -= diffY; */
        }

        startY = event.touches[0].clientY;
        isScrolling = true;
      });

      alumniScroll.addEventListener('touchend', () => {
        isScrolling = false;
        isAlumniScroll = false;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const windowHeight = window.innerHeight;
    const contentTwoElement = document.querySelector(".content-two");
    const infoRight = document.getElementById("content-info");
    // contentTwoElement.style.height = `${windowHeight}px`;
    // infoRight.style.height = `${windowHeight}px`;

    // window.addEventListener('mousewheel', this.handleWheel, { passive: false });

    const inner = document.getElementById("contentTwoRight");
    this.numberScorll = inner.clientHeight / 3;
    this.vueSeamlessScroll = document.getElementById("vueSeamlessScroll");
    let that = this;
    this.vueSeamlessScroll.addEventListener("mousedown", function (event) {
      that.moveFlag = true;
      that.downX = event.clientX; // 获取到点击的x下标
      that.scrollLeft = this.scrollLeft; // 获取当前元素滚动条的偏移量
      that.vueSeamlessScrollXPos = that.$refs.vueSeamlessScroll.xPos;
    });
    this.vueSeamlessScroll.addEventListener("mousemove", function (event) {
      if (that.moveFlag) {
        // 判断是否是鼠标按下滚动元素区域
        let moveX = event.clientX; // 获取移动的x轴
        let scrollX = moveX - that.downX; // 当前移动的x轴下标减去刚点击下去的x轴下标得到鼠标滑动距离
        let xPos = that.vueSeamlessScrollXPos + scrollX;

        if (Math.abs(xPos) > that.$refs.vueSeamlessScroll.realBoxWidth / 2) {
          xPos = that.$refs.vueSeamlessScroll.realBoxWidth / 2 + xPos;
        } else if (xPos > 0) {
          xPos = -(that.$refs.vueSeamlessScroll.realBoxWidth / 2) + xPos;
        } else {
          // that.$refs.vueSeamlessScroll.xPos  = xPos;
        }
        that.$refs.vueSeamlessScroll.xPos = xPos;
      }
    });
    // 鼠标抬起停止拖动
    this.vueSeamlessScroll.addEventListener("mouseup", function () {
      that.moveFlag = false;
    });
    // 鼠标离开元素停止拖动
    this.vueSeamlessScroll.addEventListener("mouseleave", function (event) {
      that.moveFlag = false;
    });

    this.scorllView()

    this.initList();

    document.title = this.userLanguage == "1" ? "首页" : "Home";

    this.scrollList = this.infoTwoList;
  },
  beforeCreate() {
  }, //生命周期 - 创建之前
  beforeMount() {
  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {
  }, //生命周期 - 更新之后
  beforeDestroy() {
    window.removeEventListener("mousewheel", this.handleWheel, {
      passive: false,
    });
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
/deep/ img {
  -webkit-user-drag: none;

  -moz-user-drag: none;

  -ms-user-drag: none;

  user-drag: none;
}

.module-card::before {
  background-image: repeating-linear-gradient(125deg, rgba(4, 74, 159, 0.2) 80%, rgba(4, 74, 159, 0.2));
}

.module-card.is-hovered::before {
  background-image: repeating-linear-gradient(125deg, #FF9C00, #FFCC9E, #74B6EB 80%, #68AAEC, #04499F);
}

@media (max-width: 720px) {
  .header-mobile {
    width: 100%;
    z-index: 99999 !important;
    overflow: hidden;
  }

  .homeRightArrow-area {
    bottom: 10px !important;
  }

  .class-title {
    .info-item {
      margin-left: 50px;
      padding-top: 20px !important;
    }
  }

  .content-one,
  .content-two,
  .content-three {
    position: relative;
    z-index: 1;
    padding-top: 60px;
  }

  .content-one {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
    margin-top: -100px;
  }

  .title {
    font-size: 70px !important;
    word-break: break-all;
  }

  .content-two {
    margin-top: 0px !important;

    .info-left {
      height: 28rem !important;

      .title {
        font-size: 42px !important;
      }
    }
  }

  .content-two .content-info .info-right .info-item .subTitle {
    margin-top: 10px !important;
    margin-bottom: 60px !important;
  }

  #appContainer {
    position: relative;
  }

  #contentTwoRight {
    .info-item {
      width: 500px !important;
      padding: 0 40px 0 40px !important;
    }


    .subTitle {
      width: 150% !important;
    }
  }

  .content-three {
    padding: 100px 0 0 50px !important;
    margin-bottom: 100px !important;

    .title {
      font-size: 50px !important;
    }
  }

  .content-se {
    display: flex;
    flex-direction: column;
    padding: 0 70px;
  }

  .content-two {
    margin-top: 230px;
  }

  .content-info {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    margin-top: 0 !important;
    padding: 0 !important;
  }

  .info-left {
    height: 35rem !important;
    overflow-y: hidden !important;

    .title {
      font-size: 50px !important;
    }
  }

  .info-left {
    position: absolute;
    top: 1% !important;
  }

  .class-title {
    height: 450px;
    align-items: center;

    .info-item {
      height: 350px !important;
    }
  }

  .info-right {
    width: 90vw !important;
    padding: 5px 10px !important;
    z-index: 999;
    overflow-y: hidden !important;
    margin: 0 auto !important;

    .info-item {
      display: flex;
      flex-direction: column;
      width: 500px !important;
      height: auto;
      /* 自适应高度 */
      word-wrap: initial;
      word-break: initial;
      margin-left: 0px;
      box-sizing: border-box;
      width: 190px !important;
      padding: 40px 20px 0 20px !important;
    }

    .info-title {
      font-size: 32px !important;
    }
  }

  .content-one {
    padding-top: 0 !important;
    margin-top: -180px;

    .content-info .info-right {
      /* align-items: baseline; */
      height: 550px;

      .info-item:hover {
        margin-top: -50px !important;
        background: #1f456a;

        div {
          color: white;
        }
      }
    }
  }

  .content-info {
    margin-top: -60px !important;
    height: auto;
    overflow-y: hidden !important;
  }
}


body {
  overflow-y: scroll;
}

.fillDiv {
  width: 100%;
  height: 300px;
}

.content-one {
  padding-bottom: 123px;
  position: relative;
  z-index: 150;

  .subtitle {
    font-weight: 300;
    font-size: 24px;
    color: #e98225;
    text-align: center;
  }

  .title {
    font-weight: bold;
    font-size: 52px;
    color: #172c47;
    text-align: center;
    margin-top: 20px;
  }

  .content-info {
    display: flex;
    align-items: center;
    margin-top: -50px;
    justify-content: center;

    .info-left {
      img {
        width: 636px;
        height: 410px;
      }
    }

    .info-right {
      /* width: 523px;
      margin-left: 40px;
      border-top: 2px solid rgba(3, 73, 158, 0.11); */
      display: flex;
      width: 1200px;
      margin: 0 auto;
      /* justify-content: space-between; */
      justify-content: space-around;

      .info-item {
        width: 385px;
        height: 334px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        padding: 40px 40px 0 40px;
        position: relative;
        transition: ease-in-out 0.5s;

        .line {
          position: absolute;
          width: 2px;
          height: 144px;
          background: #171717;
          bottom: -160px;
          left: 50%;
          transform: translateX(-50%);
        }

        .info-title {
          font-weight: 600;
          font-size: 50px;
          color: #172c47;
          margin-bottom: 10px;
          width: fit-content;
        }

        .info-line {
          width: 100%;
          height: 6px;
          position: relative;
        }

        .info-line div {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 3px;
          background-color: #ff9c00;
          border-radius: 20px;
          margin-top: 20px;
        }

        .info-subTitle {
          font-weight: 500;
          font-size: 24px;
          color: #172c47;
          margin-top: 40px;
        }

        .homeRightArrow-area {
          position: absolute;
          bottom: 24px;
        }

        .homeRightArrow {
          width: 60px;
          height: 60px;
          transform: rotate(90deg);
        }
      }

      .info-item:hover {
        margin-top: -25px;
        background: #1f456a;

        div {
          color: white;
        }
      }

      .info-item:not(:hover) {
        transition: ease-in-out 0.5s;
        margin-top: 0;
      }
    }
  }
}

.content-two {
  /* height: 950px; */
  background: linear-gradient(180deg, #121212 0%, #1a3461 100%);
  padding-top: 130px;

  .content-info {
    width: 2000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    /*height: 1740px;*/

    .info-left {
      color: white;
      height: 630px;
      position: sticky;
      top: 200px;
      /* flex: 1; */

      .title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 50px;
      }

      .subTitle {
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 60px;
      }

      img {
        width: 570px;
        height: 363px;
      }
    }

    .info-right {
      box-sizing: border-box;
      padding-left: 200px;
      margin-top: -30px;
      // height: 45rem;
      // overflow-y: scroll;
      /* overflow-y: hidden; */
      width: 50%;
      word-wrap: normal;
      word-break: break-all;

      .info-item {
        .title {
          font-size: 110px;
          font-weight: bold;
          background-image: linear-gradient(-90deg, #03499e 30%, #f9c99f 59%, #ff9c00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .titleEn {
          font-size: 65px;
          font-weight: bold;
          background-image: linear-gradient(-90deg, #03499e 30%, #f9c99f 59%, #ff9c00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .subTitle {
          font-weight: 300;
          font-size: 20px;
          color: #ffffff;
          margin: 20px 0 100px 0;
        }
      }
    }
  }
}

.content-three {
  padding: 140px 0 140px 360px;

  .title {
    font-weight: bold;
    font-size: 56px;
    color: #172c47;
    margin-bottom: 15px;
  }

  .subTitle {
    font-weight: 300;
    font-size: 22px;
    color: #172c47;
  }

  .alumni-scroll {
    user-select: none;
    /* 禁止元素内的文本选择 */
    -webkit-user-select: none;
    /* 兼容性处理：禁止元素内的文本选择 */
    -moz-user-select: none;
    /* 兼容性处理：禁止元素内的文本选择 */
    -ms-user-select: none;
    /* 兼容性处理：禁止元素内的文本选择 */
    width: 99%;
    overflow-x: hidden;
    white-space: nowrap;
    margin-top: 50px;

    img {
      pointer-events: none;
    }

    .alumni-item {
      display: inline-block;
      margin-right: 55px;

      .dialog-bg {
        width: 570px;
        height: 224px;
      }

      .dialog-content {
        font-weight: 500;
        font-size: 24px;
        color: #172c47;
        position: absolute;
        width: 570px;
        height: 224px;
        white-space: break-spaces;
        left: 0%;
        top: 0%;
        padding: 0 50px;
        box-sizing: border-box;

        div {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
        }
      }

      .dialog-content-top {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 15px;
      }

      .dialog-content-bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 15px;
      }
    }

    .alumni-img {
      width: 570px;
      height: 362px;
      display: block;
      margin: 20px 0;
      border-radius: 15px;
    }

    .alumni-info {
      font-weight: 500;
      font-size: 32px;
      color: #172c47;
      line-height: 42px;
    }

    .alumni-class {
      margin-top: 25px;
      font-weight: 300;
      font-size: 20px;
      color: #172c47;
    }
  }
}

.info-right::-webkit-scrollbar {
  display: none;
  /* 对于Webkit浏览器 */
}

.info-right {
  -ms-overflow-style: none;
  /* 对于IE和Edge */
  scrollbar-width: none;
  /* 对于Firefox */
}
</style>