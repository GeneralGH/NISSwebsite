<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="teachingStaff-area">
      <OurTeachers />
      <!-- <EliteTeam /> -->
      <MoreTeachers />
      <div v-show="userLanguage == 2" class="commonText">Student-Teacher-Ratio = 3</div>
      <div v-show="userLanguage == 2" class="mba-professors commonText" @click="toMbaProfessors">The full list of our lecturers can be found here.</div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import OurTeachers from "../components/teachingStaff/ourTeachers.vue";
import EliteTeam from "../components/teachingStaff/EliteTeam.vue";
import MoreTeachers from "../components/teachingStaff/moreTeachers.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { OurTeachers, EliteTeam, MoreTeachers },
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
    userLanguage(newVal) {
      document.title = newVal == "1" ? "师资力量" : "Faculty";
    },
  },
  //方法集合
  methods: {
    toMbaProfessors() {
      this.$router.push('/Professors')
      window.scrollTo({
        top: 0
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 加载SEO
    const websiteSchema = { 
      "@context": "https://schema.org", 
      "@type": "WebSite", 
      "name": "NISS-JNU Chinese MBA in Singapore", 
      "description": "The Jinan University Chinese MBA program boasts an excellent faculty team. The professors possess a solid theoretical foundation and extensive practical experience, enabling them to combine the latest management concepts with real-world cases, providing high-quality education for students.", 
      "url": "https://www.niss.edu.sg/faculty" 
    }
    const script = document.createElement('script'); 
    script.type = 'application/ld+json'; 
    script.textContent = JSON.stringify(websiteSchema); 
    document.head.appendChild(script)

    document.title = this.userLanguage == "1" ? "师资力量" : "Faculty";
  },
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
@media(max-width:720px){
 .teachingStaff-area{
   width: 100% !important;
   padding: 0 20px !important;
   box-sizing: border-box;
 }
}
/deep/.teachingStaff-area {
  width: 1650px;
  margin: 0 auto;
  padding: 80px 0;

  .party {
    margin-bottom: 80px;
    color: #172c47;

    .party-title {
      font-weight: 600;
      font-size: 52px;
      margin-bottom: 22px;
    }

    .party-line {
      width: 100%;
      height: 1px;
      background-color: #03499e;
      opacity: 0.11;
      margin-bottom: 60px;
    }
  }
}

.mba-professors {
  margin-top: 30px;
  cursor: pointer;
  color: #0052d9;
}
</style>