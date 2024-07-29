<!--  -->
<template>
  <div class="content-area">
    <t-swiper :duration="300" :interval="2000" :navigation="{ size: 'large' }">
      <t-swiper-item v-for="item in list" :key="item.id">
        <div class="swiper-item" @click="jump(item)">
          <t-image class="swiper-img" :src="userLanguage == '1' ? item.previewImgUrl : item.previewImgUrlEn
            " fit="cover" position="center" :lazy="true" />
        </div>
      </t-swiper-item>
    </t-swiper>
    <div class="cover-textarea">
      <div class="cover-text">
        {{ userLanguage == '1' ? '成为最具价值的终身学习平台' : 'To be an invaluable lifelong learning platform' }}
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import banner from "../../api/banner";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      list: [],
      listQuery: {
        current: 1,
        size: 50,
        isShow: 1,
      },
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) { },
  },
  //方法集合
  methods: {
    initList() {
      this.$request
        .post(banner.getBannerListPageUrl, this.listQuery)
        .then((res) => {
          this.list = res.data.data.list.map((item) => {
            return {
              ...item,
              delShow: false,
              imgViewShow: false,
              previewImgUrl: JSON.parse(item.imageUrl).url,
              previewImgUrlEn: JSON.parse(item.imageUrlEn).url,
            };
          });
          // console.log(this.list)
        });
    },

    jump(item) {
      let targetUrl = JSON.parse(item.targetUrl);
      if (targetUrl.type == 1) {
        this.$router.push(targetUrl.value);
      }
      if (targetUrl.type == 2) {
        this.$router.push({
          name: "courseProjects",
          params: { anchor: targetUrl.value },
        });
      }
      if (targetUrl.type == 3) {
        this.$router.push({ path: `/article?id=${targetUrl.value}` });
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (this.$route.path == "/") {
      this.initList();
    }
  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
@media (max-width: 720px) {
  .homeRightArrow-area {
    bottom: 100px !important;
  }

  .content-area {
    height: 666px !important;
  }

  .cover-textarea {
    height: 613px !important;
    width: 100vw;
    top: -40px !important;

    .cover-text {
      width: 450px;
      font-size: 62px;
      bottom: 60px !important;
    }
  }

  .cover-text:before {
    top: 170px !important;
    /* display: none; */
  }

  .cover-textarea:before {
    /* display: none;  */
    top: 155px !important;
    animation: heroTopLinePhone 0.4s linear forwards !important;
    animation-delay: 1s !important;
    /* height: 50px !important; */
  }

  .swiper-img {
    height: 666px !important;
  }

  /deep/.t-swiper__arrow {
    display: none;
  }
}

/deep/.t-swiper__navigation {
  display: none;
}

.content-area {
  height: 900px;
  margin: 0 auto;
  position: relative;
}

.cover-textarea {
  position: absolute;
  width: 100%;
  top: -130px;
  height: 900px;
  z-index: 50;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-textarea:before {
  content: "";
  top: 240px;
  animation: heroTopLine 1s linear forwards;
  animation-delay: 1s;
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 2px;
  background: white;
  z-index: 1;
}

.cover-text {
  font-size: 36px;
  font-weight: bold;
  color: white;
  animation: fade-in 1s ease-in-out;
  font-weight: bold;
  font-size: 52px;
  height: 60px;
  z-index: 600;
  position: relative;
}

.cover-text:before {
  content: "";
  top: 100px;
  animation: heroBottomLine 1.3s linear forwards;
  animation-delay: 2.2s;
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 2px;
  background: white;
  z-index: 1;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes heroTopLine {
  0% {
    height: 0;
  }

  100% {
    height: 160px;
  }
}

@keyframes heroTopLinePhone {
  0% {
    height: 0;
  }

  100% {
    height: 50px;
  }
}

@keyframes heroBottomLine {
  0% {
    height: 0;
  }

  100% {
    height: 380px;
  }
}

.swiper-img {
  height: 900px;
}

.title {
  font-size: 78px;
  font-weight: bold;
  color: white;
}

.sub-title {
  font-size: 29px;
  color: #ff9c00;
  margin-top: 30px;
}

.btn {
  margin-top: 100px;
  width: 174px;
  height: 52px;
  background: #ff9c00;
  border-radius: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  padding-left: 40px;
  box-sizing: border-box;
}

.rightArrow {
  width: 21px;
  height: 21px;
}

.swiper-item {
  cursor: pointer;
}
</style>