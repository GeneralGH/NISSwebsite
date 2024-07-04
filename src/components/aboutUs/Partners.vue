<!--  -->
<template>
  <div class="party">
    <div class="party-title">
      {{ userLanguage == "1" ? "合作院校" : "Partners" }}
    </div>
    <div class="party-line"></div>

    <div class="party-content">
        <div class="swiper-area">
            <t-swiper :duration="300" :interval="2000">
                <t-swiper-item v-for="(item, index) in schoolList" :key="index" class="swiper-item-area">
                    <div class="swiper-item">
                        <t-image class="swiper-img" :src="item.img" fit="cover" position="center" :lazy="true" />
                    </div>
                </t-swiper-item>
            </t-swiper>
        </div>
       <!--  <img v-for="item in schoolList" :src="item.img" alt=""> -->
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import oneImg from '../../../assets/home/one.jpg'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        schoolList: [
            { title: '暨南大学', subTitle: '暨南大学-百年名校 华侨最高学府', img: oneImg },
            { title: '法国里昂商学院', subTitle: '法国里昂商学院-欧洲最古老商学院之一', img: oneImg },
            { title: '名古屋商学院', subTitle: '名古屋商学院-AACSB国际认证', img: oneImg },
            { title: '南特高等商学院', subTitle: '南特高等商学院-欧洲顶级高等商学院', img: oneImg },
            { title: '萨兰托大学', subTitle: '萨兰托大学-意大利公立大学', img: oneImg },
        ]
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) {
    },
  },
  //方法集合
  methods: {},
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

.swiper-img, .swiper-area{
    width: 100%;
    height: 580px;
    border-radius: 30px !important;
}
</style>