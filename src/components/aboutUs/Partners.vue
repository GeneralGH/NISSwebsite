<!--  -->
<template>
  <div class="party">
    <div class="party-title">
      {{ userLanguage == "1" ? "合作院校" : "Partners" }}
    </div>
    <div class="party-line"></div>

    <div class="party-content">
      <div class="swiper-area">
        <t-swiper :duration="300" :interval="2000" :current="current" :onChange="onChange">
          <t-swiper-item
            v-for="(item, index) in schoolList"
            :key="index" 
            class="swiper-item-area"
          >
            <div class="swiper-item">
              <t-image
                class="swiper-img"
                :src="item.img"
                fit="cover"
                position="center"
                :lazy="true"
              />
              <div class="school-subtitle">{{ item.subTitle }}</div>
            </div>
          </t-swiper-item>
        </t-swiper>
      </div>
      <div class="bottom-list">
        <div
          v-for="(item, index) in schoolList"
          :key="index" @click="current = index"
          style="cursor: pointer; position: relative"
        >
          <t-image
            class="list-img"
            :src="item.img"
            fit="cover"
            position="center"
            :lazy="true"
          />
          <div v-show="current != index" class="item-cover-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import oneImg from "../../../assets/home/one.jpg";
import twoImg from "../../../assets/home/two.jpg";
import threeImg from "../../../assets/home/three.jpg";
import fourImg from "../../../assets/home/four.jpg";
import fiveImg from "../../../assets/home/five.jpg";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      schoolList: [
        {
          title: "暨南大学",
          subTitle: "暨南大学-百年名校 华侨最高学府",
          img: oneImg,
        },
        {
          title: "法国里昂商学院",
          subTitle: "法国里昂商学院-欧洲最古老商学院之一",
          img: twoImg,
        },
        {
          title: "名古屋商学院",
          subTitle: "名古屋商学院-AACSB国际认证",
          img: threeImg,
        },
        {
          title: "南特高等商学院",
          subTitle: "南特高等商学院-欧洲顶级高等商学院",
          img: fourImg,
        },
        {
          title: "萨兰托大学",
          subTitle: "萨兰托大学-意大利公立大学",
          img: fiveImg,
        },
      ],
      current: 0
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) {},
    /* current(val) {
      console.log(val)
    } */
  },
  //方法集合
  methods: {
    onChange(e) {
      console.log(e)
      this.current = e
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
/deep/.t-swiper__navigation {
  display: none;
}

/deep/.t-swiper__arrow--default .t-swiper__arrow-left,
/deep/.t-swiper__arrow--default .t-swiper__arrow-right {
  width: 60px;
  height: 60px;
  background-color: rgba(23, 44, 71, 0.7);
  border-radius: 50%;
}

/deep/.t-swiper__arrow--default .t-swiper__arrow-left {
  left: 32px;
}

/deep/.t-swiper__arrow--default .t-swiper__arrow-right {
  right: 32px;
}

/deep/.t-swiper__arrow svg.t-icon {
  width: 40px;
  height: 40px;
}

.swiper-img,
.swiper-area {
  width: 100%;
  height: 580px;
  border-radius: 30px !important;
}

/deep/.t-swiper__content {
  border-radius: 30px !important;
}

.swiper-item {
  position: relative;
}

.school-subtitle {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 66px;
  background: #172c47;
  z-index: 10;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  line-height: 66px;
  text-align: center;
}

.bottom-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}

.list-img {
  width: 208px;
  height: 156px;
  border-radius: 30px;
}

.item-cover-title {
  position: absolute;
  width: 208px;
  height: 156px;
  border-radius: 30px;
  z-index: 10;
  background: rgba(23, 44, 71, 0.7);
  border-radius: 24px;
  top: 0;
  color: #ffffff;
  text-align: center;
  line-height: 156px;
  font-weight: 400;
  font-size: 18px;
}
</style>