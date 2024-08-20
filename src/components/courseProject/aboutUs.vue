<!--  -->
<template>
  <div>
    <div class="content-item" id="options1-1">
      <div class="title">
        {{ userLanguage == "1" ? "关于暨南大学" : "About Jinan University" }}
      </div>
      <div class="line"></div>
      <div class="info">
        ·
        {{
          userLanguage == "1"
            ? "百年名校，华侨最高学府"
            : "China's Centennial Prestigious University for Overseas Chinese"
        }}<br />
        ·
        {{
          userLanguage == "1"
            ? "211工程大学、双一流建设高校"
            : '"211 Project" and "Double First-Class" University'
        }}<br />
        ·
        {{
          userLanguage == "1"
            ? "全球商学院认证（AACSB、AMBA和BGA金牌认证）"
            : "Global Business School Accreditations (AACSB, AMBA, and BGA)"
        }}<br />
        ·
        {{
          userLanguage == "1"
            ? "工商管理位列中国一流学科前5%"
            : "Business Administration Degree ranks in the top 5% of China's first-class disciplines"
        }}<br />
        ·
        {{
          userLanguage == "1"
            ? "双证文凭全球认可"
            : "Dual-degree Diplomas Globally Recognized"
        }}
      </div>
      <div class="one-imgs">
        <img src="../../../assets/courseProjects/AACSB.png" alt="" />
        <img src="../../../assets/courseProjects/AMBA.png" alt="" />
        <img src="../../../assets/courseProjects/BGA.png" alt="" />
      </div>
    </div>

    <div class="content-item" id="options1-2">
      <div class="title">
        {{ userLanguage == "1" ? "项目介绍" : "Program Introduction" }}
      </div>
      <div class="line"></div>
      <div class="info-content p-space">
        {{
          userLanguage == "1"
            ? "暨南大学新加坡中文MBA硕士学位项目（简称“暨南大学新加坡中文MBA项目”） 由南洋社会科学学院与暨南大学管理学院合作举办，是在新加坡以中文教学的工商管理硕士（MBA）项目，毕业后授予暨南大学工商管理硕士学位证书和硕士研究生毕业证书。"
            : "Jinan University (JNU) is one of the first national institutions of higher education in China to develop business education. Business is also a strong discipline that JNU is proud of. In 1993, JNU became the first institution in South China to offer an MBA education."
        }}
      </div>
      <div class="info-content p-space">
        {{
          userLanguage == "1"
            ? "项目面向华侨、港澳台地区人士和非中国籍人士招生，采取“申请审核制”，无需参加笔试，通过面试择优录取。"
            : "JNU MBA Program aims to provide quality education on business management for young managers on the uptrend in their careers, and help them understand the culture of Chinese business, expand their developing space and improve their leadership and problem-solving capacity."
        }}
      </div>
      <div class="info-content p-space" v-show="userLanguage == '2'">
        JNU MBA Program was awarded “2014 China's Most Valuable Part-time MBA Programme” by Forbes Chinese Edition.
      </div>
      <div class="two-imgs">
        <div class="img-item">
          <img src="../../../assets/courseProjects/one.png" alt="" />
          <div class="tow-title">
            {{ userLanguage == "1" ? "春秋两季" : "Spring and Autumn" }}<br />{{
              userLanguage == "1" ? "滚动招生" : "Rolling Admissions"
            }}
          </div>
        </div>
        <div class="img-item">
          <img src="../../../assets/courseProjects/two.png" alt="" />
          <div class="tow-title">
            {{ userLanguage == "1" ? "在新加坡" : "In Singapore" }}<br />{{
              userLanguage == "1" ? "中文授课" : "Taught in Chinese"
            }}
          </div>
        </div>
        <div class="img-item">
          <img src="../../../assets/courseProjects/three.png" alt="" />
          <div class="tow-title">
            {{ userLanguage == "1" ? "2年学制" : "2-Year Program" }}<br />{{
              userLanguage == "1" ? "在职学习" : "Part-Time Study"
            }}
          </div>
        </div>
      </div>
    </div>

    <div class="content-item" id="options1-3">
      <div class="title">
        {{ userLanguage == "1" ? "项目优势" : "Program Introduction" }}
      </div>
      <div class="line"></div>
      <div class="info">
        · {{ userLanguage == "1" ? "申请优势：免联考、免英文成绩、大专及以上学历可申请" : "Integrate Chinese business culture and modern management wisdom" }}<br />
        ·
        {{
          userLanguage == "1"
            ? "语言优势：中文授课，高效学习"
            : "Professional system and valuable qualification"
        }}<br />
        ·
        {{
          userLanguage == "1"
            ? "时间优势：在职学习，集中授课"
            : "Develop a broad international perspective"
        }}<br />
        ·
        {{
          userLanguage == "1"
            ? "文凭优势：双证文凭，全球认可"
            : "No English Admission Requirements"
        }}
      </div>
      <div class="four-area" v-show="userLanguage == '1'">
        <img
          class="fourImg"
          src="../../../assets/courseProjects/four.png"
          alt=""
        />
      </div>
    </div>

    <div class="content-item" id="options1-5" v-if="userLanguage == '1'">
      <div class="title">
        {{ userLanguage == "1" ? "在读学生画像" : "Student Profile" }}
      </div>
      <div class="line"></div>
      <div class="info">
        <div class="networkingList">
          <div
            v-for="(item, index) in firstFour"
            :key="'first-' + index"
            class="networkItem"
          >
            <div class="netwoek-value">
              {{ userLanguage == "1" ? item.value : item.value }}
            </div>
            <div class="netwoek-title">
              {{ userLanguage == "1" ? item.name : item.nameEn }}
            </div>
          </div>
        </div>

        <div class="networkingList" style="justify-content: center;">
          <div
            v-for="(item, index) in lastThree"
            :key="'last-' + index" style="margin: 0;"
            :class="{'networkItem': index != 1, 'networkItemCenter': index == 1}"
          >
            <div class="netwoek-value">
              {{ userLanguage == "1" ? item.value : item.value }}
            </div>
            <div class="netwoek-title">
              {{ userLanguage == "1" ? item.name : item.nameEn }}
            </div>
          </div>
        </div>
        <!-- · {{ userLanguage == '1' ? '平均年龄38.7岁' : 'Average Age: 38.7 years' }}<br>
                · {{ userLanguage == '1' ? '平均工作年限16.7年' : 'Average Work Experience: 16.7 years' }}<br>
                · {{ userLanguage == '1' ? '来自20个不同专业' : 'Diverse Backgrounds: From 20 different professional fields' }}<br>
                · {{ userLanguage == '1' ? '43%有跨多国工作经历' : 'International Experience: 43% have worked in multiple countries' }}<br>
                · {{ userLanguage == '1' ? '38%有技术、工程背景' : 'Technical Background: 38% come from technology or engineering sectors' }}<br>
                · {{ userLanguage == '1' ? '80%任公司管理岗' : 'Management Roles: 80% hold managerial positions' }}<br>
                · {{ userLanguage == '1' ? '52%拥有自己的企业' : 'Entrepreneurial Spirit: 52% own their own businesses' }} -->
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
      StudentList: [
        {
          id: 4,
          name: "平均年龄/岁",
          nameEn: "Average Age",
          value: "38.7",
          valueEn: "",
        },
        {
          id: 5,
          name: "平均工作年限/年",
          nameEn: "Average Work Experience",
          value: "16.7",
          valueEn: "",
        },
        {
          id: 6,
          name: "不同行业",
          nameEn: "Diverse Backgrounds",
          value: "20+",
          valueEn: "",
        },
        {
          id: 7,
          name: "跨国工作经历",
          nameEn: "International Experience",
          value: "43%",
          valueEn: "",
        },
        {
          id: 10,
          name: "任各级管理岗位",
          nameEn: "Management Roles",
          value: "82%",
          valueEn: "",
        },
      ],
    };
  },
  computed: {
    userLanguage() {
      return this.$store.state.userLanguage;
    },
    firstFour() {
      return this.StudentList.slice(0, 3); // 获取前3个元素
    },
    lastThree() {
      return this.StudentList.slice(3); // 获取后2个元素
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
  .title{
    margin-left: 70px;
  }
  .one-imgs img{
    width: 10rem !important;
  }
  .content-item{
    width:100vw !important;
  }

  .networkingList {
    flex-wrap: nowrap !important;
  }
}
.networkingList {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 155px;

  .networkItem, .networkItemCenter {
    width: 205px;
    text-align: center;
    margin-bottom: 50px;

    .netwoek-value {
      font-size: 66px;
      line-height: 66px;
      font-weight: bold;
      background: linear-gradient(
        -90deg,
        #03499e 30%,
        #f9c99f 59%,
        #ff9c00 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .netwoek-title {
      font-weight: 500;
      font-size: 20px;
      color: #172c47;
    }
  }

  .networkItemCenter {
    margin: 0 60px !important;
  }
}

.outlearn {
  margin-bottom: 24px;
}

.bigTitle {
  font-size: 32px;
  text-align: center;
}

.p-space {
  margin-bottom: 40px;
}

.four-area {
  margin-bottom: 60px;
}

.one-imgs {
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding: 0 30px;

  img {
    width: 260px;
    height: 329px;
    margin-right: 60px;
  }
}

.two-imgs {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  box-sizing: border-box;
  padding: 0 40px;

  .img-item {
    width: 98px;
    text-align: center;
  }

  img {
    width: 98px;
    height: 98px;
    display: block;
  }

  .tow-title {
    font-weight: bold;
    font-size: 24px;
    color: #172c47;
    margin-top: 15px;
  }
}

.fourImg {
  width: 100%;
}
</style>