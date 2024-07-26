<!--  -->
<template>
  <div>
    <div class="content-item" id="options2-1">
      <div class="title">
        {{ userLanguage == "1" ? "必修模块" : "sCore Modules" }}
      </div>
      <div class="line"></div>
      <div class="info-content">
        <div>
          {{
            userLanguage == "1"
              ? "暨南大学新加坡MBA项目必修课分为职能模块、分析模块、领导力模块、综合模块、中国模块和学位论文六个模块，帮助学生从六大主要维度，奠定坚实的工商管理知识、理论与技能基础。学生须修满30个必修课学分。"
              : "The core courses of Jinan University's Singapore MBA program are divided into six modules: Functional, Analytical, Leadership, Integrated, China, and Thesis modules. These modules help students establish a solid foundation in business administration knowledge, theory, and skills across six major dimensions. Students are required to complete 30 core course credits."
          }}
        </div>
        <div class="module-card-list">
          <div class="module-card" v-for="item in oneCardList">
            <div class="card-name">
              {{ userLanguage == "1" ? item.name : item.nameEn }}
            </div>
            <div v-for="child in item.list" class="card-info-list">
              <img src="../../../assets/courseProjects/right.png" alt="" />
              <div>{{ userLanguage == "1" ? child.name : child.nameEn }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-item" id="options2-2">
      <div class="title">
        {{ userLanguage == "1" ? "选修模块" : "Elective Modules" }}
      </div>
      <div class="line"></div>
      <div class="info-content">
        <div>
          {{
            userLanguage == "1"
              ? "暨南大学新加坡MBA项目选修课分为综合管理模块、创新创业模块、资本运营模块、营销管理模块、运营管理模块、整合实践模块六个方向，助力拓宽和加深学生在特定领域的认知。学生须修满12个选修课学分。"
              : "The optional courses of Jinan University's Singapore MBA program are divided into six modules: Comprehensive Management, Innovation and Entrepreneurship, Capital Operations, Marketing Management, Operations Management, and Integrated Practice. These modules help broaden and deepen students' understanding in specific areas. Students are required to complete 12 elective course credits."
          }}
        </div>
        <div class="module-card-list">
          <div class="module-card" v-for="item in twoCardList">
            <div class="card-name">
              {{ userLanguage == "1" ? item.name : item.nameEn }}
            </div>
            <div v-for="child in item.list" class="card-info-list">
              <img src="../../../assets/courseProjects/right.png" alt="" />
              <!-- <div>{{ userLanguage == "1" ? child.name : child.nameEn }}</div> -->
              <div  v-html=" userLanguage == '1'
                    ? child.name.replace('\n', '<br/>')
                    : child.nameEn.replace('\n', '<br/>')
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="item-footer">
          {{
            userLanguage == "1"
              ? "* 课程可调整，以实际课程安排为准"
              : "* Courses may be adjusted according to the actual course schedule."
          }}
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
    return {
      oneCardList: [
        {
          name: "职能模块",
          nameEn: "Management Fundamentals",
          list: [
            { name: "营销管理", nameEn: "Marketing Management" },
            { name: "人力资源管理与开发", nameEn: "Human Resource Management" },
            { name: "运营管理", nameEn: "Operation Management" },
            { name: "公司理财", nameEn: "Corporate Finance" },
          ],
        },
        {
          name: "分析模块",
          nameEn: "Analytical Fundamentals",
          list: [
            { name: "管理经济学", nameEn: "Managerial Economics" },
            { name: "会计学", nameEn: "Accounting" },
            {
              name: "数据模型与决策",
              nameEn: "Data Modeling and Decision Making",
            },
            {
              name: "论文写作与学术规范",
              nameEn: "Thesis Writing and Academic Standards",
            },
          ],
        },
        {
          name: "领导力模块",
          nameEn: "Leadership Fundamentals",
          list: [
            { name: "企业伦理", nameEn: "Business Ethics" },
            { name: "组织行为学", nameEn: "Organizational Behavior" },
            { name: "战略管理", nameEn: "Strategic Management" },
            { name: "公司治理", nameEn: "Corporate Governance" },
          ],
        },
        {
          name: "中国情景模块",
          nameEn: "Foundation of Chinese Business",
          list: [
            { name: "中国概况", nameEn: "General Introduction to China" },
            {
              name: "中国的法律与制度环境",
              nameEn: "China Business Environment",
            },
          ],
        },
        {
          name: "综合模块",
          nameEn: "Comprehensive Module",
          list: [
            { name: "入学导向培训", nameEn: "Orientation Training" },
            { name: "四海讲堂", nameEn: "Global Lecture Series" },
            { name: "商务英语", nameEn: "Business English" },
          ],
        },
        {
          name: "学位论文",
          nameEn: "Dissertation",
          list: [{ name: "学位论文", nameEn: "Dissertation" }],
        },
      ],
      twoCardList: [
        {
          name: "综合管理模块",
          nameEn: "Integrated Management Module",
          list: [
            {
              name: "领导力与组织行为",
              nameEn: "Leadership and Organizational Behavior",
            },
            { name: "管理咨询", nameEn: "Management Consulting" },
            { name: "决策模拟", nameEn: "Decision Simulation" },
            { name: "商业谈判", nameEn: "Business Negotiation" },
            { name: "管理沟通", nameEn: "Management Communication" },
          ],
        },
        {
          name: "创新创业模块",
          nameEn: "Innovation and Entrepreneurship Module",
          list: [
            { name: "创业融资", nameEn: "Entrepreneurial Finance" },
            {
              name: "新创企业成长战略",
              nameEn: "Growth Strategies for Startups",
            },
            {
              name: "商业模式与企业设计",
              nameEn: "Business Models and Enterprise Design",
            },
            { name: "商业诊断实践", nameEn: "Business Diagnosis Practice" },
            {
              name: "创业团队沟通",
              nameEn: "Entrepreneurship Management",
            },
          ],
        },
        {
          name: "资本运营模块",
          nameEn: "Capital Operation Module",
          list: [
            { name: "股权激励与设计", nameEn: "Equity Incentives and Design" },
            {
              name: "中国金融市场与投资策略",
              nameEn: "Chinese Financial Markets and Investment Strategies",
            },
            { name: "风险投资管理", nameEn: "Venture Capital Management" },
            {
              name: "公司兼并收购与重组",
              nameEn: "Mergers, Acquisitions, \nand Restructuring",
            },
          ],
        },
        {
          name: "营销管理模块",
          nameEn: "Marketing Management Module",
          list: [
            {
              name: "电子商务与零售策略",
              nameEn: "E-commerce and Retail Strategies",
            },
            { name: "战略品牌管理", nameEn: "Strategic Brand Management" },
            { name: "市场研究", nameEn: "Market Research" },
            { name: "服务营销", nameEn: "Service Marketing" },
            {
              name: "营销模拟与诊断",
              nameEn: "Marketing Simulation and Diagnosis",
            },
          ],
        },
        {
          name: "运营管理模块",
          nameEn: "Operations Management Module",
          list: [
            {
              name: "国际贸易与全球供应链管理",
              nameEn: "International Trade and Global Supply Chain Management",
            },
            { name: "项目管理", nameEn: "Project Management" },
            { name: "质量管理", nameEn: "Quality Management" },
            { name: "采购管理", nameEn: "Procurement Management" },
            { name: "收益管理", nameEn: "Revenue Management" },
          ],
        },
        {
          name: "整合实践模块",
          nameEn: "Integrated Practice Module",
          list: [
            {
              name: "产业升级与创新",
              nameEn: "Industrial Upgrading and Innovation",
            },
            {
              name: "人工智能商业应用",
              nameEn: "Business Applications of \nArtificial Intelligence",
            },
            {
              name: "科技金融",
              nameEn: "Fintech Big Data Analysis \nand Predictive",
            },
            { name: "大数据分析与预测决策", nameEn: "Decision Making" },
          ],
        },
      ],
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
@import url("./index.css");
@media(max-width:720px){
  .module-card {
    width:16rem !important;
   margin-right: 0 !important;
    margin-left: 1rem !important;
    height: auto;
  }
  .info-content >p {
    line-height: 20px !important;
  }
  .title {
    margin-left: 70px;
  }
}
.module-card-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}

.info-content {
  margin-top: 45px;
}

.item-footer {
  font-weight: 300;
  font-size: 16px;
  color: #172c47;
}

.module-card {
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 27px 0px 20px 0px;
}

.card-name {
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  color: #172c47;
  margin-bottom: 30px;
  line-height: 30px;
}

.card-info-list {
  display: flex;
  /* align-items: baseline; */
  margin-bottom: 22px;
  font-size: 20px;
  color: #172c47;
  position: relative;
  padding-left: 46px;
  line-height: 26px;

  img {
    position: absolute;
    width: 36px;
    height: 36px;
    left: 10px;
    top: -5px;
  }
}
</style>