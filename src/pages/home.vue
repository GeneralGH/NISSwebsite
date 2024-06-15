<!--  -->
<template>
  <div ref="appContainer" id="appContainer" style="overflow-y: scroll;">
    <pageHeader />

    <div class="content-one">
      <div class="subtitle">
        To cultivate high-level talents integrating <br>
        Chinese and Western and connecting theory with practice
      </div>
      <div class="title">培养融贯中西、知行合一的<br>高层次人才</div>
      <div class="content-info">
        <div class="info-left">
          <img src="../../assets/home/contentOne.png" alt="">
        </div>
        <div class="info-right">
          <div class="info-item" v-for="(item, index) in infoList" @mouseover="isHovered = index"
            @mouseleave="isHovered = -1" @click="jump(item.path)">
            <div>
              <div class="info-title">
                <div>{{ item.title }}</div>
                <div class="info-line">
                  <div v-show="isHovered == index"></div>
                </div>
              </div>
              <div class="info-subTitle">{{ item.subTitle }}</div>
            </div>
            <div>
              <img v-show="isHovered == index" class="homeRightArrow" src="../../assets/home/homeRightArrow.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-two" ref="contentTwo">
      <div class="content-info">
        <div class="info-left">
          <div class="title">成为最具价值的终身学习平台</div>
          <div class="subTitle">To be an invaluable lifelong learning platform</div>
          <img src="../../assets/home/contentTwo.png" alt="">
        </div>
        <div class="info-right" id="contentTwoRight" ref="contentTwoRight">

          <div class="info-item"
            :style="'transition: opacity 1s ease-in-out;' + (item.isOpacity ? 'opacity: 0.1; ' : 'opacity: 1; ')"
            v-for="(item, index) in infoTwoList" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="subTitle">{{ item.subTitle }}</div>
          </div>
          <div class="fillDiv"></div>
        </div>
      </div>
    </div>

    <div class="content-three">
      <div class="title">校友寄语</div>
      <div class="subTitle">Their Stories</div>

      <div class="alumni-scroll">
        <vue-seamless-scroll :data="alumniList" :class-option="classOption">
          <div class="alumni-item" v-for="(item, index) in alumniList">
            <div v-show="index % 2 === 0" style="position: relative;">
              <img class="dialog-bg" src="../../assets/home/topDialog.png" alt="">
              <div class="dialog-content" style="padding-top: 50px">{{ item.content }}</div>
            </div>
            <div v-show="index % 2 !== 0">
              <div class="alumni-info">
                {{ item.name }}<br>
                {{ item.info }}
              </div>
              <div class="alumni-class">{{ item.class }}</div>
            </div>
            <img class="alumni-img" :src="item.imgPath" alt="">
            <div v-show="index % 2 === 0">
              <div class="alumni-info">
                {{ item.name }}<br>
                {{ item.info }}
              </div>
              <div class="alumni-class">{{ item.class }}</div>
            </div>
            <div v-show="index % 2 !== 0" style="position: relative;">
              <img class="dialog-bg" src="../../assets/home/buttonDialog.png" alt="">
              <div class="dialog-content" style="padding-top: 70px;">{{ item.content }}</div>
            </div>
          </div>
        </vue-seamless-scroll>
        <!-- <div class="alumni-item" v-for="(item, index) in alumniList">
            <div v-show="index % 2 === 0" style="position: relative;">
                <img class="dialog-bg" src="../../assets/home/topDialog.png" alt="">
                <div class="dialog-content" style="padding-top: 50px">{{ item.content }}</div>
            </div>
            <div v-show="index % 2 !== 0">
                <div class="alumni-info">
                    {{ item.name }}<br>
                    {{ item.info }}
                </div>
                <div class="alumni-class">{{ item.class }}</div>
            </div>
            <img class="alumni-img" :src="item.imgPath" alt="">
            <div v-show="index % 2 === 0">
                <div class="alumni-info">
                    {{ item.name }}<br>
                    {{ item.info }}
                </div>
                <div class="alumni-class">{{ item.class }}</div>
            </div>
            <div v-show="index % 2 !== 0" style="position: relative;">
                <img class="dialog-bg" src="../../assets/home/buttonDialog.png" alt="">
                <div class="dialog-content" style="padding-top: 70px;">{{ item.content }}</div>
            </div>
        </div> -->
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      infoList: [
        { title: 'MBA', subTitle: '暨南大学新加坡中文MBA项目', path: '/courseProjects' },
        { title: 'DBA', subTitle: '法国南特商学院新加坡DBA项目' },
        { title: '高等教育管理', subTitle: '企业定制化课程' }
      ],
      infoTwoList: [
        { title: '1个平台', subTitle: '终身学习平台', "isOpacity": false, },
        { title: '2证文凭', subTitle: '“211工程”大学 “双一流”建设高校', "isOpacity": false, },
        { title: '3冠认证', subTitle: 'AACSB认证 & AMBA认证 & B', "isOpacity": false, },
        { title: '9大体系', subTitle: '融合中国商业文化与现代管理智慧', "isOpacity": false, },
        { title: '百年名校', subTitle: '中国百年名校 华侨最高学府', "isOpacity": false, },
        { title: '1+1+N+2', subTitle: '全面赋能职业发展', "isOpacity": false, }
      ],
      alumniList: [
        {
          content: '认知高度是发展的天花板，我坚信MBA之旅，能让我成为更优秀的个体，实现自我价值，给两个孩子做好榜样。',
          name: '张亚男',
          info: 'LINKAGE HR PTE.LTD执行董事',
          class: '暨南大学新加坡MBA项目2024级春季班',
          imgPath: 'https://inews.gtimg.com/om_bt/OHyQqgC_5oi4Vm0tlH49XvJzqNBHo2Zryxx5F_be5N2cIAA/1000'
        },
        {
          content: '对我来说，这不仅是一次学术上的追求，更是个人成长和职业发展的重要跳板。实现自我超越。实现梦想的旅程。',
          name: '杨洋',
          info: '新加坡华文教研中心 业务发展主任',
          class: '暨南大学新加坡MBA项目2024级春季班',
          imgPath: 'https://inews.gtimg.com/om_bt/ORJxmJ_hryXf-hfuC7Sf214TDfWVPFfq6GZZ82VUUhpioAA/641'
        },
        {
          content: '认知高度是发展的天花板，我坚信MBA之旅，能让我成为更优秀的个体，实现自我价值，给两个孩子做好榜样。',
          name: '张亚男',
          info: 'LINKAGE HR PTE.LTD执行董事',
          class: '暨南大学新加坡MBA项目2024级春季班',
          imgPath: 'https://inews.gtimg.com/om_bt/OFuK1kztRd-zzktobCmipDb_VsuROWK19OklC1qTaTK_gAA/641'
        },
        {
          content: '认知高度是发展的天花板，我坚信MBA之旅，能让我成为更优秀的个体，实现自我价值，给两个孩子做好榜样。',
          name: '张亚男',
          info: 'LINKAGE HR PTE.LTD执行董事',
          class: '暨南大学新加坡MBA项目2024级春季班',
          imgPath: 'https://inews.gtimg.com/om_bt/OMvPDmiuH_X5Vq1YLNgbFEzD2h_-2dCfWQ7xZFcKFSEsAAA/641'
        }
      ],
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
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleWheel(event) {
      //滚动到顶部
      let topMix = this.$refs.contentTwo.getBoundingClientRect().top;

      const inner = document.getElementById('contentTwoRight');
      const outer = document.getElementById('appContainer');
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
        })
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

          console.log("beforeScrollTop", scrollTop)
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
        // console.log(currentHeight, scrollHeight,clientHeight, inner.scrollTop);
        // if (inner.scrollTop + clientHeight >= currentHeight) {
        //   this.infoTwoList[i].isOpacity = false;
        // } else {
        //   this.infoTwoList[i].isOpacity = true;
        // }
        if ((scrollTop + clientHeight) > (currentHeight - this.scollInv) && currentHeight > (scrollTop - this.scollInv)) {
          this.infoTwoList[i].isOpacity = false;
        } else {
          this.infoTwoList[i].isOpacity = true;
        }
      }

      if ((scrollHeight - (scrollTop + clientHeight)) / clientHeight <= 0.05 && inv > 0) {
        this.contentTwoRightMax = true;
      } else {
        this.contentTwoRightMax = false;
      }

      if (scrollTop == scrollHeight || scrollTop == 0) {
        this.contentTwoScrollTop = false;
      }
      // console.log(this.contentTwoRightMax, 'contentTwoRightMax');
      // console.log(this.contentTwoScrollTop, 'contentTwoScrollTop');
    },
    jump(path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    }
  }
  ,
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  }
  ,
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.addEventListener('mousewheel', this.handleWheel, { passive: false });
    const inner = document.getElementById('contentTwoRight');
    this.numberScorll = inner.clientHeight / 3;
    console.log(inner.scrollHeight, inner.scrollTop, inner.clientHeight)

  }
  ,
  beforeCreate() {
  }
  , //生命周期 - 创建之前
  beforeMount() {
  }
  , //生命周期 - 挂载之前
  beforeUpdate() {
  }
  , //生命周期 - 更新之前
  updated() {
  }
  , //生命周期 - 更新之后
  beforeDestroy() {
    window.removeEventListener('mousewheel', this.handleWheel, { passive: false })
  }
  , //生命周期 - 销毁之前
  destroyed() {
  }
  , //生命周期 - 销毁完成
  activated() {
  }
  , //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped lang="less">
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
    color: #E98225;
    text-align: center;
  }

  .title {
    font-weight: bold;
    font-size: 52px;
    color: #172C47;
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
      width: 523px;
      margin-left: 40px;
      border-top: 2px solid rgba(3, 73, 158, 0.11);

      .info-item {
        height: 136px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid rgba(3, 73, 158, 0.11);
        cursor: pointer;

        .info-title {
          font-weight: 600;
          font-size: 32px;
          color: #172C47;
          margin-bottom: 10px;
          width: fit-content;
          height: 44px;
        }

        .info-line {
          width: 100%;
          height: 6px;
        }

        .info-line div {
          width: 100%;
          height: 3px;
          background-color: #FF9C00;
          border-radius: 20px;
          margin-top: 2px;
        }

        .info-subTitle {
          font-weight: 300;
          font-size: 20px;
          color: #172C47;
          opacity: 50%;
        }

        .homeRightArrow {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}

.content-two {
  height: 950px;
  background: linear-gradient(180deg, #121212 0%, #1A3461 100%);
  padding-top: 130px;

  .content-info {
    display: flex;
    justify-content: center;

    .info-left {
      color: white;
      height: 330px;

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
      height: 45rem;
      overflow-y: scroll;

      .info-item {
        .title {
          font-size: 110px;
          font-weight: bold;
          background: linear-gradient(-90deg, #03499E 30%, #F9C99F 59%, #FF9C00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .subTitle {
          font-weight: 300;
          font-size: 20px;
          color: #FFFFFF;
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
    color: #172C47;
    margin-bottom: 15px;
  }

  .subTitle {
    font-weight: 300;
    font-size: 22px;
    color: #172C47;
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
        color: #172C47;
        position: absolute;
        width: 570px;
        height: 224px;
        white-space: break-spaces;
        left: 0%;
        top: 0%;
        padding: 0 50px;
        box-sizing: border-box;
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
      color: #172C47;
      line-height: 42px;
    }

    .alumni-class {
      margin-top: 25px;
      font-weight: 300;
      font-size: 20px;
      color: #172C47;
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