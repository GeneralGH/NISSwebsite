<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">
      <WhoWeAre />
      <Partners />
      <div class="party">
        <div class="party-title">
          {{ userLanguage == "1" ? "学院新闻" : "News" }}
        </div>
        <div class="party-line"></div>

        <div class="party-content">
          <News :list="list" />
          <div class="pagination">
            <t-pagination v-model="listQuery.current" :total="totalPage" :page-size.sync="listQuery.size"
              :showPageSize="false" :totalContent="false" @change="pageChange" showPageNumber />
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import News from "../components/common/news.vue";
import news from "../api/news";
import WhoWeAre from "../components/aboutUs/WhoWeAre.vue";
import Partners from "../components/aboutUs/Partners.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { News, WhoWeAre, Partners },
  data() {
    //这里存放数据
    return {
      listQuery: {
        current: 1,
        size: 2,
        type: 1,
      },
      list: [],
      totalPage: 1,
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) {
      document.title = newVal == "1" ? "关于我们" : "About US";
    },
  },
  //方法集合
  methods: {
    initList() {
      this.$request
        .post(news.getNewsListPageUrl, this.listQuery)
        .then((res) => {
          res.data.data.list = res.data.data.list.map((item) => {
            return {
              ...item,
              url: JSON.parse(item.annex).url,
              urlEn: JSON.parse(item.annexEn).url,
            };
          });
          this.list = res.data.data.list
          this.totalPage = res.data.data.totalCount;
        });
    },

    pageChange(e) {
      this.listQuery.current = e.current
      this.initList()
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initList();
    document.title = this.userLanguage == "1" ? "关于我们" : "About US";
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
  .pagination {
    width: 80vw;
    display: block !important;
    font-size: 18px;
    color: #172c47;
    height: 66px;
    line-height: 66px;
  }

  /deep/.t-pagination {
    right: 170px !important;
    bottom: 60px;
  }

  /deep/.page-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 !important;
    width: 100% !important;

    .party-content {
      width: 100% !important;
      padding: 0 40px !important;
    }

    .party {
      width: 100%;
      margin: 0 !important;
    }

    .party-line {
      width: 675px !important;
      margin: 0 auto;
    }

    .party-title {
      margin-top: 60px;
      margin-left: 40px;
    }

    .module-card {
      margin: 50px 0 !important;

      .content {
        line-height: 60px !important;
      }
    }
  }

}

/deep/.t-swiper__container__item,
/deep/.t-swiper__container {
  border-radius: 30px !important;
}

/deep/.page-area {
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

    .party-content {
      box-sizing: border-box;
      padding: 0 40px;
      font-weight: 500;
      font-size: 24px;
      line-height: 43px;

      .module-card {
        width: 540px;
        min-height: 540px;
        height: auto;
        margin-top: 100px;
        box-sizing: border-box;
        padding: 40px;

        .title {
          font-weight: bold;
          font-size: 36px;
          line-height: 34px;
        }

        .line {
          width: 100px;
          height: 4px;
          background-color: #ff9c00;
          margin: 30px 0 70px 0;
        }

        .content {
          font-weight: 600;
          font-size: 62px;
          line-height: 80px;
        }

        .contentEn {
          font-weight: 600;
          font-size: 42px;
          line-height: 80px;
        }
      }
    }
  }
}

.pagination {
  position: relative;
  width: 100%;
}

/deep/ .t-pagination {
  position: absolute;
  transform: scale(1.5);
  right: 500px;
}

/deep/ .t-pagination__number.t-is-current {
  background-color: #172C47;
  border-color: #172C47;
  color: #FF9C00;
}

/deep/ .t-pagination__number {
  color: #172C47;
}
</style>