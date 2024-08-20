<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">

      <div class="article-info">
        <div class="article-title">
          {{ userLanguage == "1" ? '相关政策' : 'Privacy Policy' }}
        </div>
      </div>

      <div class="article-area">
        <div class="article-content">
          <div class="commonText">This Privacy Policy discloses the privacy practices for www.nibi.edu.sg, the main Nanyang International Business Institute website. By using this website, you are consenting to our collection and use of information in accordance with this Privacy Policy.</div>
          <div class="commonText subTitle">What information do we gather about you?</div>
        </div>

        <div class="article-content">
          <div class="commonText">We and our third-party vendors collect certain information regarding your use of www.nibi.edu.sg, such as your IP address and browser type. Your session and the pages you visit on www.nibi.edu.sg will be tracked, but you will remain anonymous. We may use your IP address to identify the general geographic area from which you are accessing www.nibi.edu.sg. We connect data from different systems but do not link IP addresses to any personal information. We may also collect other information as described in this policy.</div>
          <div class="commonText subTitle">What do we use your information for?</div>
        </div>

        <div class="article-content">
          <div class="commonText">We use the information we gather from you for systems administration purposes, abuse prevention, and to track user trends, and for the other purposes described in this policy. If you send us an email, the email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions. We will not share, sell, rent, swap, or authorize any third party to use your email address for commercial purposes without your permission.</div>
          <div class="commonText">User information may be shared with third-party vendors to the extent necessary to provide and improve web services or other communications to users. For example, we use third parties such as Chartbeat and Google Analytics to generate reports on site usage, web traffic, user behavior, and user interests in order to optimize our website for our visitors. We also use geographic, demographic, and interest-based reports of our website visitors to create custom audience lists. We prohibit any third parties who receive user information for this purpose from using or sharing user information for any purpose other than providing services for the benefit of our users.</div>
          <div class="commonText">We may also provide your information to third parties in circumstances where we believe that doing so is necessary or appropriate to satisfy any applicable law, regulation, legal process or governmental request; detect, prevent or otherwise address fraud, security, or technical issues; or protect our rights and safety and the rights and safety of our users or others.</div>
          <div class="commonText subTitle">How is this information collected and how can you opt out?</div>
        </div>

        <div class="article-content">
          <div class="commonText">Google and other third parties may use cookies, web beacons, and similar technologies to collect or receive information from this website and elsewhere on the Internet and use that information to provide measurement services and target ads. For more information on Google Analytics, consult their terms of use, privacy practices, and ads settings. You can opt out of the collection and use of this information through tools like the Network Advertising Initiative opt-out page.</div>
          <div class="commonText subTitle">Cookies</div>
        </div>

        <div class="article-content">
          <div class="commonText">Cookies are small files that are stored on your computer (unless you block them). We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. You may disable cookies through your individual browser options or you can opt out of the collection and use of this information through tools like the Network Advertising Initiative opt-out page.</div>
          <div class="commonText subTitle">Other Websites and Cookies</div>
        </div>

        <div class="article-content">
          <div class="commonText">This website may contain links to other websites. We are not responsible for the privacy practices or the content of such websites.</div>
          <div class="commonText">Cookies may be set by parties other than us. These “third-party cookies” may, for example, originate from websites such as YouTube, Twitter, Facebook, Soundcloud, or other social media services for which www.nibi.edu.sg has implemented “plug-ins”. Since the cookie policies of these sites change over time, you should determine their policies by visiting the privacy policy pages of these sites directly.</div>
          <div class="commonText subTitle">Information Protection</div>
        </div>

        <div class="article-content">
          <div class="commonText">This site has reasonable security measures in place to help protect against the loss, misuse, and alteration of the information under our control. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</div>
          <div class="commonText subTitle">Changes to this Policy</div>
        </div>

        <div class="article-content">
          <div class="commonText">This Privacy Policy may be amended from time to time. Any such changes will be posted on this page.</div>
          <div class="commonText"><em>(As of 13/5/2022)</em></div>
        </div>
        
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
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
  },
  filter: {},
  //方法集合
  methods: {
    
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
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
    width: 100%;
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
  width: 1650px;
  margin: 0 auto;
  padding: 30px 0 160px 0;
}

.pagination {
  /* display: none; */
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
  width: 100%;
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

.subTitle {
  font-weight: bold;
}

.article-content {
  margin-bottom: 30px;
}
</style>