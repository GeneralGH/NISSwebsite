<!--  -->
<template>
  <div class="party">
    <!-- <div class="party-title">
      {{ userLanguage == "1" ? "我们的教师群体" : "Faculty" }}
    </div>
    <div class="party-line"></div> -->

    <div>
      <div class="module-card-list">
        <div class="module-card" v-for="item in ourTeachersInfo">
          <div>
            <span class="item-value">{{
              userLanguage == "1" ? item.value : item.valueEn
            }}</span>
            <span class="item-unit">{{
              userLanguage == "1" ? item.unit : item.unitEn
            }}</span>
          </div>
          <div class="item-name">
            {{ userLanguage == "1" ? item.name : item.nameEn }}
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="party-info">
      <div
        v-html="
          userLanguage == '1' ? htmlContent.content : htmlContent.contentEn
        "
      ></div>
    </div> -->

    <!-- <div class="party-info">
            <div style="flex: 1;">
                · 专职教师{{ ourTeachersInfo[0].value }}{{ ourTeachersInfo[0].unit }}<br><br>
                · {{ ourTeachersInfo[1].value }}{{ ourTeachersInfo[1].unit }}拥有博士学位
            </div>
            <div style="flex: 1;">
                · 教授、副教授{{ ourTeachersInfo[2].value }}{{ ourTeachersInfo[2].unit }}<br><br>
                · 博士生导师{{ ourTeachersInfo[3].value }}{{ ourTeachersInfo[3].unit }}
            </div>
        </div> -->

    <!-- <div class="party-slogan">
      <div class="party-slogan-line"></div>
      <div>
        {{
          userLanguage == "1"
            ? "高理论 ｜ 强实践 ｜ 精华商 ｜ 通国际"
            : "Highly theoretical | Strong practical | Expert in business essentials | Globally connected"
        }}
      </div>
      <div class="party-slogan-line"></div>
    </div> -->
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
      ourTeachersInfo: [
        { name: "专职教师", value: "140", unit: "位", id: 10 },
        { name: "博士学位教师", value: "92", unit: "%", id: 11 },
        { name: "教授、副教授", value: "114", unit: "位", id: 12 },
      ],
      htmlContent: {
        content: "",
        contentEn: "",
      },
    };
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
  methods: {
    async initData() {
      this.ourTeachersInfo.forEach((item) => {
        this.$getPageContent(item.id).then((res) => {
          item.name = res.title;
          item.value = res.content;
          item.unit = res.unit;
          item.nameEn = res.titleEn;
          item.valueEn = res.contentEn;
          item.unitEn = res.unitEn;
        });
      });
      this.htmlContent = await this.$getPageContent(14);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initData();
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
@media (max-width: 720px) {
  .module-card-list {
    width: 100%;
    display: flex;
    justify-content: space-around !important;
    /* flex-wrap: wrap !important; */
    margin-top: 40px;
    gap: 20px !important; /* 可以根据需要调整间距 */
    .module-card {
      width: 300px;
      box-sizing: border-box;
      text-align: center;
      padding: 20px;
      border: 1px solid #ccc; /* 示例样式，可以去掉 */
      border-radius: 16px; /* 示例样式，可以去掉 */
      margin-bottom: 20px;
    }
    .module-card::before {
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
    }
  }
  .party-slogan {
    width: 700px !important;
  }
  .party-slogan-line {
    width: 60px !important;
  }
  .item-name {
    font-size: 30px !important;
  }
  .party-title {
    margin-top: 100px !important;
  }
  .party-info {
    display: none !important;
  }
}
.module-card-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 250px;
}
.module-card {
  width: 266px;
  height: 312px;
  margin: 0;
  padding: 60px 0 0 0;
  text-align: center;
}

.item-value {
  font-size: 90px;
  font-weight: bold;
}

.item-unit {
  font-size: 32px;
  font-weight: 600;
}

.item-name {
  margin-top: 40px;
  font-weight: 500;
  font-size: 20px;
}

.party-info {
  margin-top: 50px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
}

.party-slogan {
  font-weight: bold;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  text-align: center;
}

.party-slogan-line {
  width: 400px;
  height: 1px;
  background-color: #172c47;
  margin: 0 auto;
}
</style>