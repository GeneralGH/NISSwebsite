<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">

      <div class="article-info">
        <div class="article-title">
          {{ userLanguage == "1" ? '高管教育' : 'Executive Education' }}
        </div>
      </div>

      <div class="article-area">
        <div class="article-content">
          <div class="subTitle">
            <t-divider align="center"><span>{{ userLanguage == '1' ? '项目简介' : 'Overview' }}</span></t-divider>
          </div>
          <div class="commonText" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">{{ userLanguage == '1' ? text_1.zh : text_1.en }}</div>
          <div class="commonText" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">{{ userLanguage == '1' ? text_2.zh : text_2.en }}</div>
        </div>

        <div class="article-content">
          <div class="subTitle">
            <t-divider align="center"><span>{{ userLanguage == '1' ? '课程设计' : 'Our Methodology' }}</span></t-divider>
          </div>
          <div class="commonText" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">{{ userLanguage == '1' ? text_3.zh : text_3.en }}</div>
        </div>

        <div class="article-content" style="text-align: center;">
          <img v-show="userLanguage == '2'" src="../../assets/highEdu.png" alt="" style="width: 70%;">
          <img v-show="userLanguage == '1'" src="../../assets/Graphics.jpg" alt="" style="width: 70%;">
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
      text_1: {
        zh: '南洋社会科学学院为企业和机构开发定制化的课程体系。课程设计团队从每个企业和机构的发展战略、愿景、文化和面临的挑战出发，针对个性化的需求，提供量身定制的课程方案，旨在满足企业和机构的战略需求，全面提升学员的管理理念和业务水平。',
        en: 'NISS designs and delivers Custom Programs based on clients’specific needs. Targeting to fulfilling our clients’strategic needs, our Custom Program Team closely examines our clients’corporate strategy, vision, and corporate culture, as well as the challenges they face, and designs executive education programs customized to these specific environments and requirements, and to raise the overall management skills and operational know-how of our students.'
      },
      text_2: {
        zh: '我们的定制课程依托于自身国际化的运作平台、雄厚的师资力量、优秀的管理团队、专业的教学管理以及一流的设施，基于对课程需求的全方位深入了解，安排灵活、时间适中、专业程度高、实用性和针对性强，力求为企业和机构打造个性化的精品课程，帮助学员在较短时间内完善知识体系，扩大业务视野，提高管理和领导能力，助力企业和机构的长远发展。',
        en: 'Having an outstanding team of faculty members and management team, on top of excellent training facilities, our Custom program is highly internationalized and of the highest quality. We ensure that we understand in-depth the clients’specific needs, and design a program that is of suitable duration, of professional standard, and is highly practical and relevant. Such programs are instrumental in helping students quickly upgrade their knowledge, expand their horizons, improve their leadership and management skills, and in turn, help push their businesses and organizations to greater heights.'
      },
      text_3: {
        zh: '我们的课程设计团队会同您深度合作，为您量身打造个性化的课程。相对于公开课程，定制课程的设置更加多样，我们提供从单模块的专题课程到多模块的综合课程的各种方案。同时，定制课程的师资选用、教学方式以及授课时间和地点也更加灵活，注重传授思考和解决问题的方法，确保您的企业和机构达成学习目的，并带给学员最高质量的学习体验。',
        en: 'Our Custom Program Team will consult and work with you in designing and structuring your program. As compared to Open Program, Custom Program enjoys a much higher degree of flexibility and versatility, offering unique course combinations ranging from single-module to multi-module programs. The selection of faculty, pedagogy, delivery venue, and time is highly flexible. Mode of delivery ranges from lectures, case studies, experiential exercises, and group projects to cross-cultural sharing, etc., targeting to help you and your organization achieve your training objectives, and provide students with the highest standard of the learning experience.'
      }
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
    // 加载SEO
    const websiteSchema = { 
        "@context": "https://schema.org", 
        "@type": "WebSite", 
        "name": "NISS-Executive Education", 
        "description": "NISS creates custom programs tailored to clients' unique needs, aligning with their strategy, vision, and culture. Our team designs executive education to enhance management skills and operational expertise.", 
        "url": "https://www.niss.edu.sg/highEdu" 
    }
    const script = document.createElement('script'); 
    script.type = 'application/ld+json'; 
    script.textContent = JSON.stringify(websiteSchema); 
    document.head.appendChild(script)
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
  span {
    font-size: 34px;
  }
  margin-bottom: 50px;
}

.article-content {
  margin-bottom: 150px;
}
</style>