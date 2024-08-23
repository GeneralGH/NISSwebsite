<template>
  <div class="party">
    <div class="party-title">
      {{ userLanguage == "1" ? "学院介绍" : "Who We Are" }}
    </div>
    <div class="party-line"></div>

    <div class="party-content">
      <div class="commonText" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
        {{
          userLanguage == "1"
            ? "南洋社会科学学院是在新加坡教育部SkillsFuture Singapore注册的高等教育机构，致力于构筑融汇东西方优质高等教育资源的终身学习平台。学院与顶尖高校、杰出高等教育机构合作，解析和传播支撑中国成功高速发展的理论与经验，研究和传授西方社科领域教研的最新发展方向与成果，培养兼具东方智慧与全球视野的复合型人才。"
            : "Nanyang Institute of Social Sciences (NISS) is an institute of higher education registered with SkillsFuture Singapore (SSG) under the Ministry of Education of Singapore, aiming to create a lifelong learning platform that incorporates quality higher education resources from the East and the West. NISS cooperates with top universities and outstanding higher education institutions. It seeks to deconstruct and disseminate the theories and experiences that support China's rapid economic development, share the cutting-edge research of western social sciences, and cultivate interdisciplinary talents with eastern wisdom and global vision."
        }}
      </div>
      <div class="card-container">
        <div class="module-card">
          <div class="title">
            {{ userLanguage == "1" ? "愿景" : "Vision" }}
          </div>
          <div class="line"></div>
          <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
            {{ userLanguage == "1" ? "打造最具价值的终身学习平台" : "To be an invaluable lifelong learning platform" }}
          </div>
        </div>
        <div class="module-card">
          <div class="title">
            {{ userLanguage == "1" ? "使命" : "Mission" }}
          </div>
          <div class="line"></div>
          <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
            {{ userLanguage == "1" ? "培养融贯中西知行合一的高层次人才" : "To cultivate high-level talents integrating Chinese and Western and connecting theory with practice" }}
          </div>
        </div>
      </div>
    </div>
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
    return {};
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) {},
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
@media (max-width: 720px) {

  .party-title{
    width: 400px !important;
    margin-left: 50px;
  }
  .card-container{
    display: flex;
    flex-direction: column;

    .module-card {
      width: 100% !important;
      min-height: 400px !important;
    }
  }
  .content{
    font-size: 40px !important;
  }
  .module-card{
    width: 320px !important;
  }
  .page-area{
    width: 100px !important;
  }
  .party-line{
    width: 300px !important;
  }



}

.module-card {
  width: 46% !important;
}

.card-container{
    display: flex;
    justify-content: space-between;
  }
</style>