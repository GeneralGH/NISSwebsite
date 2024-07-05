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
        <div class="info-right">
          <div class="info-item module-card" v-for="(item, index) in infoList" @mouseover="isHovered = index"
            @mouseleave="isHovered = -1" @click="jump(item, index)">
            <div style="width: 100%">
              <div class="info-title">
                <div>{{ userLanguage == "1" ? item.title : item.titleEn }}</div>
                <div class="info-line">
                  <div v-show="isHovered == index"></div>
                </div>
              </div>
              <div class="info-subTitle" v-html="userLanguage == '1'
                  ? item.subTitle.replace('\n', '<br/>')
                  : item.subTitleEn.replace('\n', '<br/>')
                ">
                <!-- {{ userLanguage == '1' ? item.subTitle : item.subTitleEn }} -->
              </div>
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
        <!-- <t-affix> -->
        <div class="info-left">
          <div class="title">
            {{
              userLanguage == "1"
                ? "成为最具价值的终身学习平台"
                : "To be an invaluable lifelong learning platform"
            }}
          </div>
          <div class="subTitle">
            {{ userLanguage == '2' ? '成为最具价值的终身学习平台' : 'To be an invaluable lifelong learning platform' }}
          </div>
          <img src="../../assets/home/contentTwo.png" alt="" />
        </div>
        <!-- </t-affix> -->
        <div class="info-right" id="contentTwoRight" ref="contentTwoRight">
          <!-- <div class="info-item"
            :style="'transition: opacity 1s ease-in-out;' + (item.isOpacity ? 'opacity: 0.1; ' : 'opacity: 1; ')"
            v-for="(item, index) in infoTwoList" :key="index"> -->
          <div class="info-item" v-for="(item, index) in infoTwoList" :key="index">
            <div class="title">
              {{ userLanguage == "1" ? item.title : item.titleEn }}
            </div>
            <div class="subTitle">
              {{ userLanguage == "1" ? item.subTitle : item.subTitleEn }}
            </div>
          </div>
          <!-- <div class="fillDiv"></div> -->
        </div>
      </div>
    </div>

    <div class="content-three">
      <div class="title">
        {{ userLanguage == "1" ? "校友寄语" : "Alumni Testimonials" }}
      </div>
      <div class="subTitle">Their Stories</div>

      <div class="alumni-scroll">
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
                {{ userLanguage == "1" ? item.company : item.companyEn }}<br />
                {{ userLanguage == "1" ? item.workPost : item.workPostEn }}
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
                {{ userLanguage == "1" ? item.company : item.companyEn }}<br />
                {{ userLanguage == "1" ? item.workPost : item.workPostEn }}
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
      infoList: [
        {
          title: "MBA",
          titleEn: "MBA",
          subTitle: "暨南大学新加坡\n中文MBA项目",
          subTitleEn: "JNU MBA Program (Mandarin)",
          path: "/courseProjects",
        },
        {
          title: "DBA",
          titleEn: "DBA",
          subTitle: "法国南特商学院新加\n坡DBA项目",
          subTitleEn: "Audencia DBA Program",
        },
        {
          title: "高等教育管理",
          titleEn: "Executive Education",
          subTitle: "企业定制化课程",
          subTitleEn: "Customized Corporate Courses",
        },
      ],
      infoTwoList: [
        {
          title: "1个平台",
          titleEn: "A Platform",
          subTitle: "终身学习平台",
          subTitleEn: "Lifelong Learning Platform",
        },
        {
          title: "2证文凭",
          titleEn: "Dual Diplomas",
          subTitle: "“211工程”大学 “双一流”建设高校",
          subTitleEn:
            "“211 Project” University “Double First-Class” Construction University",
        },
        {
          title: "3冠认证",
          titleEn: "Triple Crown Accreditation",
          subTitle: "AACSB认证 & AMBA认证 & B",
          subTitleEn: "AACSB Accredited & AMBA Accredited & BGA",
        },
        {
          title: "9大体系",
          titleEn: "Nine Systems",
          subTitle: "融合中国商业文化与现代管理智慧",
          subTitleEn:
            "Integrating Chinese Business Culture with Modern Management Wisdom",
        },
        {
          title: "百年名校",
          titleEn: "Century-old Prestigious School",
          subTitle: "中国百年名校 华侨最高学府",
          subTitleEn: "The Highest Institution for Overseas Chinese",
        },
        {
          title: "1+1+N+2",
          titleEn: "1+1+N+2",
          subTitle: "全面赋能职业发展",
          subTitleEn: "Comprehensive Empowerment for Career Development",
        },
      ],
      highEduList: [
        {
          title: "1个平台",
          titleEn: "A Platform",
          subTitle: "国际化的高管教育运作平台",
          subTitleEn: "Lifelong Learning Platform",
        },
        {
          title: "2重优势",
          titleEn: "Dual Diplomas",
          subTitle: "汇聚国际雄厚师资，优秀管理团队",
          subTitleEn:
            "“211 Project” University “Double First-Class” Construction University",
        },
        {
          title: "3大灵活性",
          titleEn: "Triple Crown Accreditation",
          subTitle: "灵活教学方式、授课时间地点及师资匹配",
          subTitleEn: "AACSB Accredited & AMBA Accredited & BGA",
        },
        {
          title: "多维课程",
          titleEn: "Nine Systems",
          subTitle: "定制化课程设计，满足企业战略需求",
          subTitleEn:
            "Integrating Chinese Business Culture with Modern Management Wisdom",
        },
        {
          title: "一站式服务",
          titleEn: "Century-old Prestigious School",
          subTitle: "全方位参与",
          subTitleEn: "The Highest Institution for Overseas Chinese",
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
      console.log(item)
      if (index == 2) {
        return
      }
      /* if (!path) {
        return;
      }
      this.$router.push(path);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 可选，使用平滑滚动效果
      }); */
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
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
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

    this.initList();

    document.title = this.userLanguage == "1" ? "首页" : "Home";
  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() {
    window.removeEventListener("mousewheel", this.handleWheel, {
      passive: false,
    });
  }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
/deep/img {
  -webkit-user-drag: none;

  -moz-user-drag: none;

  -ms-user-drag: none;

  user-drag: none;
}

body {
  overflow-y: scroll;
}

.fillDiv {
  width: 100%;
  height: 300px;
}

.content-one {
  padding-top: 100px;
  padding-bottom: 123px;

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
    margin-top: 120px;
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
      justify-content: space-between;

      .info-item {
        width: 385px !important;
        height: 334px !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
        padding: 40px 40px 0 40px;
        position: relative;
        transition: ease-in-out 0.5s;

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
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 1740px;

    .info-left {
      color: white;
      height: 630px;
      position: sticky;
      top: 200px;

      .title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 15px;
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
      margin-left: 150px;
      margin-top: -30px;
      // height: 45rem;
      // overflow-y: scroll;
      overflow-y: hidden;

      .info-item {
        .title {
          font-size: 110px;
          font-weight: bold;
          background: linear-gradient(-90deg,
              #03499e 30%,
              #f9c99f 59%,
              #ff9c00 100%);
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
          word-break: break-all;
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