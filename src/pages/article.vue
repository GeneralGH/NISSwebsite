<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">
      <div class="path-list" @click="backPage">
        <span class="upPath"
          >{{
            data.type == 1
              ? userLanguage == "1"
                ? "关于我们"
                : "About Us"
              : userLanguage == "1"
              ? "精英网络"
              : "Students"
          }}
          /
        </span>
        <span>{{
          data.type == 1
            ? userLanguage == "1"
              ? "学院新闻"
              : "College News"
            : userLanguage == "1"
            ? "校友动态"
            : "Alumni Updates"
        }}</span>
      </div>

      <div class="article-info">
        <div class="article-title">
          {{ userLanguage == "1" ? data.title : data.titleEn }}
        </div>
        <div class="article-author">
          作者：{{
            userLanguage == "1" ? data.author : data.authorEn
          }}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{{
            dateChange(data.createTime)
          }}
        </div>
      </div>

      <div class="article-area">
        <div class="article-content">
          <div
            v-html="userLanguage == '1' ? data.content : data.contentEn"
          ></div>
          <div class="more-article">
            <div
              class="more-article-itme"
              v-for="item in pcBottomList"
              :key="item.id"
              @click="toDetail(item)"
            >
              <img
                class="more-article-itmeImg"
                :src="userLanguage == '1' ? item.url : item.urlEn"
                alt=""
              />
              <div>{{ userLanguage == "1" ? item.title : item.titleEn }}</div>
            </div>
          </div>
        </div>
        <div class="other-article-list">
          <div class="other-article-list-title">
            {{ userLanguage == "1" ? "其他新闻" : "Other News" }}
          </div>
          <div
            class="other-article-item"
            v-for="item in list"
            :key="item.id"
            @click="toDetail(item)"
          >
            <div class="other-article-item-content">
              {{ userLanguage == "1" ? item.title : item.titleEn }}
            </div>
          </div>
          <div class="pagination">
            <t-pagination v-model="listQuery.current" :total="listData.totalPage" :page-size.sync="listQuery.size" :showPageSize="false" :totalContent="false" @change="pageChange" showPageNumber />
            <!-- <div style="display: flex;">
              <div class="pagination-item twoPagBtn firstBtn">首页</div>
              <div class="pagination-item onePagBtn">< 上一页</div>
            </div>
            <div style="display: flex;">
              <div class="pagination-item onePagBtn">下一页 ></div>
              <div class="pagination-item twoPagBtn endBtn">末页</div>
            </div> -->
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
import news from "../api/news";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      listQuery: {
        current: 1,
        size: 5,
        type: 1,  
      },
      data: {
        title: "",
        content: "",
      },
      list: [],
      pcBottomList: [],
      listData: ''
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
  filter: {},
  //方法集合
  methods: {
    echoData(id) {
      this.$request.get(news.getNewsByIdUrl + id).then((res) => {
        this.data = res.data.data;
      });
    },

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
          this.list = res.data.data.list;
          this.listData = res.data.data
          /* console.log(this.listData) */
        });

      this.$request
        .post(news.getNewsListPageUrl, {
          current: 1,
          size: 2,
          type: 1,
        })
        .then((res) => {
          res.data.data.list = res.data.data.list.map((item) => {
            return {
              ...item,
              url: JSON.parse(item.annex).url,
              urlEn: JSON.parse(item.annexEn).url,
            };
          });
          this.pcBottomList = res.data.data.list;
        });
    },
    
    pageChange(e) {
      this.listQuery.current = e.current
      this.initList()
    },

    toDetail(item) {
      window.scrollTo({
        top: 0,
        behavior: "instant", // 可选，使用平滑滚动效果
      });
      this.echoData(item.id);
    },

    dateChange(val) {
      const date = new Date(val);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}/${month}/${day}`;
    },

    backPage() {
      let path = this.data.type == 1 ? "/aboutUs" : "/alumniStyle";
      this.$router.replace({ path: path });
      window.scrollTo({
        top: 0,
        behavior: "instant", // 可选，使用平滑滚动效果
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (!id) {
      this.$router.push({ name: "home" });
    } else {
      this.echoData(id);
      this.initList();
    }
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
/deep/ video {
  width: 100% !important;
}
@media (max-width: 720px) {
  .page-area {
    .path-list {
      margin-top: 20px;
    }

    box-sizing: border-box;
    width: 100% !important;
    padding: 0 30px !important;

    .article-info {
      width: 100% !important;
    }

    .article-area {
      width: 100% !important;

      .article-content {
        width: 100% !important;
        color: #172c47;
        font-size: 20px !important;
      }
    }

    .other-article-item {
      width: 80vw !important;
      height: 70px !important;
    }
  }
  .article-content {
    line-height: 50px;
  }

  .more-article {
    display: none !important;
  }

  .article-area {
    flex-direction: column;
  }

  .other-article-list {
    margin-bottom: 100px;
  }

  .pagination {
    width: 80vw;
    display: block !important;
    font-size: 18px;
    color: #172c47;
    height: 66px;
    line-height: 66px;
    /* text-align: center;
    justify-content: space-between; */

    .pagination-item {
      border-radius: 4px;
      border: 1px solid rgba(23, 44, 71, 0.2);
    }

    .onePagBtn {
      width: 96px;
    }

    .twoPagBtn {
      width: 66px;
    }

    .threePagBtn {
      width: 54px;
    }

    .firstBtn {
      margin-right: 10px;
    }

    .endBtn {
      margin-left: 10px;
    }
  }
}

/deep/ .t-pagination__number.t-is-current {
  background-color: #172C47;
  border-color: #172C47;
  color: #FF9C00;
}

/deep/ .t-pagination__number {
  color: #172C47;
}

/deep/ .page-area {
  width: 2000px;
  margin: 0 auto;
  padding: 30px 0 160px 0;
}

.pagination {
  display: none;
}

.path-list {
  cursor: pointer;
  font-size: 20px;
  color: #172c47;
  height: 43px;
  line-height: 43px;
  margin-bottom: 38px;
}

.upPath {
  font-weight: bold;
}

.article-info {
  margin-bottom: 36px;
}

.article-title {
  font-weight: 600;
  font-size: 54px;
  color: #172c47;
  line-height: 76px;
}

.article-author {
  height: 97px;
  line-height: 97px;
  font-size: 20px;
  color: #172c47;
  font-weight: bold;
  border-bottom: 2px solid rgba(3, 73, 158, 0.11);
}

.article-area {
  display: flex;
  justify-content: space-between;
}

.article-content {
  width: 1300px;
}

.more-article {
  display: flex;
  justify-content: space-between;
  margin-top: 160px;
  margin-bottom: 160px;
}

.more-article-itme {
  width: 390px;
  font-weight: bold;
  font-size: 24px;
  color: #172c47;
  line-height: 38px;
  cursor: pointer;
}

.more-article-itme:hover {
  color: #03499e;
}

.more-article-itmeImg {
  width: 100%;
  height: 270px;
  border-radius: 24px;
  margin-bottom: 30px;
}

.other-article-list {
  width: 350px;
  font-weight: bold;
  font-size: 24px;
  color: #172c47;
  line-height: 40px;
}

.other-article-list-title {
  margin-bottom: 8px;
}

.other-article-item {
  width: 100%;
  height: 125px;
  border-radius: 8px;
  border: 1px solid rgba(23, 44, 71, 0.2);
  font-weight: bold;
  font-size: 18px;
  color: #172c47;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 15px 18px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #fff;
  position: relative;
}

.other-article-item:hover::before {
  content: "";
  position: absolute;
  top: -3.5px;
  left: -3px;
  right: -3px;
  bottom: -3.5px;
  z-index: -1;
  background-image: repeating-linear-gradient(
    125deg,
    #ff9c00,
    #ffcc9e,
    #74b6eb 80%,
    #68aaec,
    #04499f
  );
  border-radius: 8px;
  outline: 2px solid transparent;
  outline-offset: -2px;
}

.other-article-item-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /*省略几行写几*/
  -webkit-box-orient: vertical;
}
</style>