<!--  -->
<template>
  <div class="alumni-list">
    <div class="alumni-item" v-for="item in list" :key="item.id">
      <div class="alumni-img" @mouseover="item.introductionShow = true" @mouseleave="item.introductionShow = false">
        <t-image class="alumni-cover" :src="item.url" fit="cover" position="center" :lazy="true" />
        <div class="alumni-title" :class="{ expanded: item.introductionShow }">
          <div class="alumni-content" v-show="!item.introductionShow">
            {{ userLanguage == "1" ? item.grade : item.gradeEn }}
          </div>
          <div class="alumni-content" v-show="item.introductionShow">
            {{ userLanguage == "1" ? item.introduction : item.introductionEn }}
          </div>
        </div>
      </div>
      <div class="alumni-name">
        {{ userLanguage == "1" ? item.name : item.nameEn }}
      </div>
      <div class="alumni-position">
        {{ userLanguage == "1" ? item.workPost : item.workPostEn }}
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import outstanding from "../../api/outstanding";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      listQuery: {
        current: 1,
        size: 6,
        language: "",
      },
      list: [],
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
        .post(outstanding.getOutstandingListPageUrl, this.listQuery)
        .then((res) => {
          res.data.data.list = res.data.data.list.map((item) => {
            return {
              ...item,
              url: JSON.parse(item.image).url,
              introductionShow: false,
            };
          });
          this.list = res.data.data.list;
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initList();
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
  .alumni-list {
    justify-content: space-between;
  }
  .alumni-item {
    width: 16.7rem !important;
  }

  .alumni-title {
    width: 106% !important;
  }
}

.expanded {
  height: 472px !important;
  border-radius: 24px 24px 24px 24px !important;
  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease;
    text-align: left;
    box-sizing: border-box;
    padding: 0 20px;
    line-height: 40px;
  }
}

.alumni-list {
  display: flex;
  flex-wrap: wrap;

  .alumni-item {
    flex-basis: calc(33.3% - 9px);
    /* 33.33% 是 100% 的三分之一，减去间距的宽度 */
    width: 354px;
    margin-bottom: 40px;

    .alumni-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 472px;
      position: relative;
      cursor: pointer;

      .alumni-cover {
        position: absolute;
        width: 354px;
        height: 472px;
        border-radius: 20px;
      }

      .alumni-title {
        position: absolute;
        bottom: 0;
        width: 354px;
        text-align: center;
        height: 60px;
        background: rgba(23, 44, 71, 0.86);
        border-radius: 0px 0px 24px 24px;
        font-weight: 500;
        font-size: 24px;
        color: #ffffff;
        line-height: 60px;
        z-index: 100;
        transition: height 0.5s ease;

        div {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .alumni-name {
      width: 354px;
      margin: 0 auto;
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;
      margin-top: 20px;
    }

    .alumni-position {
      width: 354px;
      margin: 0 auto;
      font-weight: 500;
      font-size: 24px;
      line-height: 42px;
      margin-top: 10px;
    }
  }
}
</style>