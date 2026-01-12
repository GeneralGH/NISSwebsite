<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">

      <div class="article-info">
        <div class="article-title">
          {{ userLanguage == "1" ? '联系我们' : 'Contact Us' }}
        </div>
      </div>

      <!-- <div id="map" class="map-area"></div> -->

      <iframe
      class="map-area"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPPxEAU_t7roulHWxO6AaosCx8JC9ylz8&q=30+Orange+Grove+Rd,Singapore"
        allowfullscreen
      ></iframe>

      <div class="article-area">
        <div class="article-content">
          <div class="img-List">
            <div>
              <img src="../../assets/contractUs/location.png" alt="">
              <div class="commonText" style="margin-bottom: 0;">30 Orange Grove Road, #07-77</div>
              <div class="commonText">RELC Building, Singapore 258352</div>
            </div>
            <div>
              <img src="../../assets/contractUs/email.png" alt="">
              <div class="commonText">enquiry@niss.edu.sg</div>
            </div>
            <div>
              <img src="../../assets/contractUs/tel.png" alt="">
              <div class="commonText">+65 6592 0000</div>
            </div>
            <div>
              <img src="../../assets/contractUs/qrcode.jpg" alt="">
              <div class="commonText">{{ userLanguage == '1' ? '关注微信公众号' : 'Follow us on WeChat' }}</div>
            </div>
          </div>
        </div>

        <div class="article-content">
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
/* const loader = new Loader({
  apiKey: "AIzaSyDPPxEAU_t7roulHWxO6AaosCx8JC9ylz8",
  version: "weekly",
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  const map = new Map(document.getElementById("map"), {
    center: { lat: 1.3137775, lng: 103.8248919 },
    zoom: 15,
    language: 'en'
  });

  const marker = new Map.marker.AdvancedMarkerElement({
    map,
    position: { lat: 1.3137775, lng: 103.8248919 },
  });

  marker.addListener('click', ({domEvent, latLng}) => {
    const {target} = domEvent;
    // Handle the click event.
    // ...
  });
}); */
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Loader } from "@googlemaps/js-api-loader"

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
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 加载SEO
    const websiteSchema = { 
      "@context": "https://schema.org", 
      "@type": "WebSite", 
      "name": "Contact Us-Nanyang Institute of Social Science", 
      "description": "Connect with us to learn more about our programs, services, and opportunities. We're here to help with any questions or support you need!", 
      "url": "https://www.niss.edu.sg/contactUs" 
    }
    const script = document.createElement('script'); 
    script.type = 'application/ld+json'; 
    script.textContent = JSON.stringify(websiteSchema); 
    document.head.appendChild(script)

    const loader = new Loader({
      apiKey: "AIzaSyDPPxEAU_t7roulHWxO6AaosCx8JC9ylz8",
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 1.3137775, lng: 103.8248919 },
        zoom: 15,
        language: "en", // 设置地图语言为英文
        mapTypeControl: false, // 隐藏地图类型控件
        streetViewControl: false, // 隐藏街景视图控件
      });

      const marker = new google.maps.Marker({
        map: map,
        position: { lat: 1.3137775, lng: 103.8248919 },
      });
    });
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
/deep/ video {
  width: 100% !important;
}

.img-List {
  display: flex;
  justify-content: space-between;
  text-align: center;

  img {
    width: 80px;
    margin-bottom: 40px;
  }
}

@media (max-width: 720px) {
  .map-area {
    width: 100% !important;
  }
  .img-List {
    flex-direction: column;
  }

  .img-List>div {
    margin-bottom: 50px;
  }

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
  background-image: repeating-linear-gradient(125deg,
      #ff9c00,
      #ffcc9e,
      #74b6eb 80%,
      #68aaec,
      #04499f);
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
  span {
    font-size: 34px;
  }

  margin-bottom: 50px;
}

.article-content {
  margin-bottom: 150px;
}

.map-area {
  width: 1600px;
  height: 600px;
  margin: 0 auto;
  margin-bottom: 100px;
}
</style>