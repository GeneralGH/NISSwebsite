<!--  -->
<template>
  <div>
    <pageHeader />
    <div class="page-area">
      <div class="party">
        <!-- <div class="party-title" id="school">
          {{ userLanguage == "1" ? "精英网络" : "Alumni Network" }}
        </div>
        <div class="party-line"></div>

        <div class="party-content">
          <div>
            <img class="content-image" :src="JNUniversityNetwork" alt="" />
            <div class="content-p">
              {{ userLanguage == '1' ? '自南洋社会科学学院成立以来，每年有来自超过20多个行业的学生选择加入我们。我们的校友网络遍布世界各地，超过大半的校友在大型跨国公司任职，超过20%的校友创立了自己的企业。他们秉承着学院的价值观念，不断追求卓越，在各个经济领域展现出卓越才能，创造价值并服务社会。' : "Since its inception, the Nanyang School of Social Sciences has attracted students from over 20 industries each year. Our alumni network spans the globe, with more than half working in large multinational corporations and over 20% founding their own businesses. They uphold the school's values, continuously striving for excellence, showcasing their talents in various economic sectors, creating value, and serving society." }}
            </div>
          </div>
        </div> -->

        <!-- <div class="party-content">
                    <div class="content-title">{{ userLanguage == '1' ? '暨南大学校友网络' : 'Jinan University Alumni Network' }}</div>
                    <div class="content-area">
                        <div><t-image class="content-image" :src="JNUniversityNetwork" fit="cover" position="center" :lazy="true" /></div>
                        <div class="content-p">
                            <p>
                                {{ userLanguage == '1' ? textOne.text : textOne.textEn }}
                            </p>
                            <p>
                                {{ userLanguage == '1' ? textTwo.text : textTwo.textEn }}
                            </p>
                            <p v-show="userLanguage == '1'">
                                前中国国务院副总理吴学谦、李岚清，著名侨领、新加坡大学首任校长李光前，前泰国议会主席、副总理许敦茂，中国两院院士谭其骧、邓锡铭、侯芙生、曾毅，烈士江上青、陈镇和（华侨）、符保卢、符克（华侨），以及近年来内地和港澳台地区许多政府、工商及文教界知名人士均是暨南大学不同时期的杰出校友。
                            </p>
                            <div class="party-line content-line"></div>
                            <p>
                                {{ userLanguage == '1' ? '《福布斯》（Forbes）杂志曾于2006年评选管理学院为“校友满意度最高的中国商学院”。' : 'In 2006, Forbes magazine rated the management school as "the Chinese business school with the highest alumni satisfaction."' }}
                            </p>
                            <div class="party-line content-line"></div>
                        </div>
                    </div>
                    <div class="content-title">{{ userLanguage == '1' ? '新加坡校友会' : 'Singapore Alumni Association' }}</div>
                    <div class="content-area">
                        <div><t-image class="content-image" :src="SingapoUniversityNetwork" fit="cover" position="center" :lazy="true" /></div>
                        <div class="content-p">
                            <p>
                                {{ userLanguage == '1' ? 
                                '新加坡暨南校友会早在 1941年4月已注册成立，是暨南大学成立较早、持续活动时间最长的校友会，也是新加坡最早成立的中国高校校友会。' :
                                'The Jinan University Alumni Association in Singapore was registered as early as April 1941, making it one of the earliest established and longest-running alumni associations of Jinan University and the first Chinese university alumni association in Singapore.' }}
                            </p>
                            <p>
                                {{ userLanguage == '1' ? 
                                 '李光前、刘抗、庄右铭、陈共存等诸多新马地区有名的政商学界名人均有在暨南大学求学的经历。' :
                                 'Many well-known figures in the political, business, and academic sectors of Singapore and Malaysia, such as Li Guangqian, Liu Kang, Zhuang Youming, and Chen Gongcun, have studied at Jinan University.'
                                }}
                            </p>
                        </div>
                    </div>
                </div> -->
      </div>

      <div class="party">
        <div class="party-title">
          {{ userLanguage == "1" ? "他们说" : "They say" }}
        </div>
        <div class="party-line"></div>

        <div class="party-content">
          <OutstandingAlumni />
        </div>
      </div>

      <!-- <div class="party">
        <div class="party-title">
          {{ userLanguage == "1" ? "宣传大使" : "They say" }}
        </div>
        <div class="party-line"></div>

        <div class="party-content">
          <OutstandingAlumni />
        </div>
      </div> -->

      <div class="party">
        <div class="party-title">
          {{ userLanguage == "1" ? "遇见他们" : "Meet them" }}
        </div>
        <div class="party-line"></div>

        <div>
          <t-image class="freeImg" :src="userLanguage == '1' ? freeImg.url : freeImg.urlEn" fit="cover" position="center" :lazy="true" style="width: 100%;" />
        </div>

        <div class="party-content">
          <News
            :list="list"
          />
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
import OutstandingAlumni from "../components/alumniStyle/outstandingAlumni.vue";
import news from "../api/news";
import JNUniversityNetwork from "../../assets/alumniStyle/JNUniversityNetwork.png";
import SingapoUniversityNetwork from "../../assets/alumniStyle/SingapoUniversityNetwork.png";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { News, OutstandingAlumni },
  data() {
    //这里存放数据
    return {
      listQuery: {
        current: 1,
        size: 2,
        type: 2,
      },
      list: [],
      JNUniversityNetwork,
      SingapoUniversityNetwork,
      totalPage: 1,
      textOne: {
        text: "作为杰出企业家 、商界精英、以及新生代经济颠覆力量的共同选择 ，暨南大学校友遍布世界各地、各行各业。目前，在五大洲共有132个校友组织 ，其中海外校友组织59个。",
        textEn:
          "As a common choice for outstanding entrepreneurs, business elites, and the emerging forces of economic disruption, Jinan University alumni are spread across the globe and across various industries. Currently, there are 132 alumni organizations on five continents, including 59 overseas alumni organizations.",
      },
      textTwo: {
        text: "暨南校友网络恪守 “忠信笃敬” 的校训，互助共进，持续为学员、校友的事业长远发展和人生价值实现提供着强有力的支持与动力。",
        textEn:
          'Adhering to the motto of "Loyalty, Integrity, Courtesy," Jinan University alumni network supports and empowers each other, continuously contributing strong support and motivation for the long-term career development and life values realization of students and alumni.',
      },
      freeImg: {
        url: '',
        urlEn: ''
      }
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
  },
  watch: {
    userLanguage(newVal) {
      document.title = newVal == "1" ? "校友风采" : "Students";
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
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initList();
    this.$getPageContent(20).then((res) => {
      this.freeImg = res
    });
    document.title = this.userLanguage == "1" ? "校友风采" : "Alumni";
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
  .freeImg {
    margin-bottom: 60px;
  }
  .pagination {
    padding-top: 60px;
  }
  /deep/.t-pagination {
    right: 170px !important;
    bottom: 60px;
  }
  .page-area{
    width: 100vw !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 20px !important;
    .party{
      width: 100% !important;
      margin:  0 !important;
      .party-title{
        margin-top: 50px;
      }
      .party-content{
        width: 100% !important;
        padding: 0 !important;
        .content-image{
          width: 100% !important;
          height: auto !important;
        }
      }
    }
  }
}
.freeImg {
  margin-bottom: 100px;
}
.content-area {
  display: flex;
  justify-content: space-between;

  .content-p {
    width: 642px;
  }
}
.content-image {
  width: 1120px;
  height: 634px;
  display: block;
  margin-bottom: 30px;
  border-radius: 16px;
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

    .content-line {
      margin: 30px 0 !important;
    }

    .party-content {
      box-sizing: border-box;
      padding: 0 40px;
      font-weight: 500;
      font-size: 24px;
      line-height: 43px;

      p {
        font-weight: 500;
        font-size: 24px;
        line-height: 43px;
        margin-top: 0;
      }

      .content-title {
        font-weight: bold;
        font-size: 28px;
        line-height: 34px;
        margin-top: 50px;
        margin-bottom: 30px;
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