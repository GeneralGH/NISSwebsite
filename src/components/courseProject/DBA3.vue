<!--  -->
<template>
  <div>
      <div class="content-item" id="options3-1">
          <div class="title">{{ userLanguage == '1' ? '招生对象' : 'Who Are We Looking For?' }}</div>
          <div class="line"></div>
          <div class="info-content space-one" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                  · {{ userLanguage == '1' ? '具有丰富的管理实践经验，在其所从事领域内拥有独到的感悟、见解、思想；' : 'Professionals with extensive management experience and unique insights into their fields' }}<br>
                  · {{ userLanguage == '1' ? '具有企业家精神，富有思想活力，期望贡献管理思想；' : 'Visionary leaders with entrepreneurial spirit and intellectual curiosity, aspiring to contribute to management thought' }}<br>
                  · {{ userLanguage == '1' ? '愿意挑战自我，接受严谨的学术研究训练；' : 'Individuals willing to embrace the rigor of academic research to challenge themselves' }}<br>
                  · {{ userLanguage == '1' ? '期望成为实践性学者，贡献管理思想，对所在行业发挥更大影响力的人才。' : 'Scholar-practitioners eager to make a significant impact on their industries through advanced research and practical application' }}
          </div>
      </div>

      <div class="content-item" id="options3-2">
          <div class="title">{{ userLanguage == '1' ? '申请条件' : 'Eligibility' }}</div>
          <div class="line"></div>
          <div class="info-content space-one">
                  · {{ userLanguage == '1' ? '硕士学位或同等学力' : `Obtained at least a pass at master's degree level or equivalent level with at least 5 years of work experience` }}<br>
                  · {{ userLanguage == '1' ? '五年以上工作经验' : 'Local students whose mother tongue language is not Chinese: At least a pass (180 points) at HSK Level 5' }}<br>
          </div>
      </div>

      <div class="content-item" id="options3-3">
          <div class="title">{{ userLanguage == '1' ? '申请流程' : 'Application Process' }}</div>
          <div class="line"></div>
          <div class="space-two">
              <t-image class="applyImg" style="width: 90%; background-color: transparent;" :src="userLanguage == '1' ? applyImg : applyImgEn" fit="cover" position="center" :lazy="true" />
          </div>
      </div>

      <div class="content-item" id="options3-4">
          <div class="title">{{ userLanguage == '1' ? '入学与毕业时间' : 'Commencement and Graduation' }}</div>
          <div class="line"></div>
          <div class="info-content space-one">
            <div class="space-two">
                <img class="schoolDateImg" style="width: 60%;" :src="userLanguage == '1' ? schoolDate : schoolDateEn" alt="">
            </div>
            <div class="info-content des">
                {{ userLanguage == '1' ? '以下举例说明：' : 'Here are some examples to illustrate:' }} 
            </div>

            <div class="info-content des">
                {{ userLanguage == '1' ? '对于2025年5月入学的学生，如已修满所有学分并通过论文答辩，将在2028年4月毕业。' : 'For example, for students who are enrolled in May 2025, they will graduate in April 2028, given that all the required credits have been obtained. The degree will be conferred by October 2028.' }}
            </div>

            <div class="ps last-ps">
                * {{ userLanguage == '1' ? '具体日期以校历为准。' : 'The actual dates will be based on the school calendar.' }}
            </div>
          </div>
      </div>

      <!-- <div class="content-item" id="options3-5">
          <div class="title">{{ userLanguage == '1' ? '学费及奖学金' : 'Tuition Fees and Scholarship' }}</div>
          <div class="line"></div>
          <div class="info-content space-one">
              · {{ userLanguage == '1' ? '申请费：S$800（Excluding GST）' : 'Application and interview fees: S$800 (Exclusive of GST)' }}<br>
              · {{ userLanguage == '1' ? '项目总学费：S$129,800（Excluding GST）' : 'Tuition fees: S$129,800 (Exclusive of GST)' }}
          </div>
      </div>  -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import schoolDate from '../../../assets/DBA/南特入学毕业时间.png'
import schoolDateEn from '../../../assets/DBA/南特入学毕业时间-en.png'
import applyImg from '../../../assets/DBA/南特申请流程图.png'
import applyImgEn from '../../../assets/DBA/南特申请流程图-en.png'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
      //这里存放数据
      return {
        schoolDate,
        schoolDateEn,
        applyImg,
        applyImgEn
      };
  },
  computed: {
      userLanguage() {
          return this.$store.state.userLanguage;
      }
  },
  watch: {
      userLanguage(newVal) {
      }
  },
  //方法集合
  methods: {
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped lang="less">
@import url('./index.css');
@media(max-width:720px) {
.title{
  margin-left: 30px;
}
.des{
    width: 90%;
    margin-bottom: 20px;
}
.space-two{
  width: 100%;
}
.applyImg {
  width: 100% !important;
}
.schoolDateImg {
  width: 80% !important;
}
}

.space-one {
  margin-bottom: 40px;
}

.space-two {
  margin-bottom: 40px;
}

.ps {
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 15px;
}

.last-ps {
  margin-top: 20px !important;
  padding: 0 30px;
}

.info-content {
  // font-size: 28px !important;
}

.info-title {
  font-weight: bold;
  margin-bottom: 20px;
}

.info {
  font-weight: 500;
  margin-bottom: 40px;
}

.des-title {
  margin-bottom: 10px;
}

.des {
  font-size: 20px;
  margin-left: 30px;
  line-height: 34px;
  margin-bottom: 20px;
}

.module-card-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}

.module-card {
  width: 398px;
  height: 350px;
  position: relative;
  border-radius: 20px;
  padding: 27px;
  background-color: #fff;
  border-radius: 17px;
  margin-right: 20px;
  margin-bottom: 20px;

  .card-name {
      text-align: center;
      font-weight: bold;
      font-size: 28px;
      color: #172C47;
      margin-bottom: 20px;
  }

  .card-info-list {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      font-size: 20px;
      color: #172C47;

      img {
          width: 36px;
          height: 36px;
      }
  }
}

.module-card::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  z-index: -1;
  background-image: linear-gradient(to left top, #04499F, #68AAEC, #FFCC9E, #FF9C00, #74B6EB);
  border-radius: 20px;
  outline: 2px solid transparent;
  outline-offset: -2px;
}

.item-footer {
  font-weight: 300;
  font-size: 16px;
  color: #172C47;
}

.text-Offset {
  padding-left: 18px;
}

.signOffset {
  display: inline;
  margin-left: -13px;
  margin-right: 15px;
}

.signEnOffset {
  display: inline;
  margin-left: 0px;
  margin-right: 15px;
}
</style>