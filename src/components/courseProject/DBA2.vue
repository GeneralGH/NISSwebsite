<!--  -->
<template>
    <div>
        <div class="content-item" id="options2-1">
            <div class="title">{{ userLanguage == '1' ? '课程设置' : 'Curriculum' }}</div>
            <div class="line"></div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{
                userLanguage == "1"
                    ? "南特高等商学院亚太中文工商管理博士项目坚持“管理精英通过研究解决商业问题”，在坚持严格的学术标准前提下，根据学员的实际情况及亚太区域的商业环境，采用课堂教学、论文工作坊、专家指导、学术研讨、研究进展汇报等多种方式相结合的综合培养体系。"
                    : `The Audencia Asia-Pacific Doctor of Business Administration Program (Mandarin) adheres to the principle of "solving business challenges through management research." While maintaining rigorous academic standards, the program incorporates participants' practical experiences and considers the Asia-Pacific business environment. The curriculum employs a blended approach, combining classroom lectures, research workshops, expert guidance, academic seminars, progress reviews, and more.`
                }}
            </div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{
                userLanguage == "1"
                    ? "项目课程设置包括研究基础模块、研究专题模块及研究实践模块(课题研究及博士论文撰写)。"
                    : `The program is structured into three types of modules: research foundation modules, specialized research topics, and research workshops.`
                }}
            </div>
        </div>

        <div class="content-item" id="options2-2">
            <div class="title">{{ userLanguage == '1' ? '研究基础模块' : 'Research Foundation Modules' }}</div>
            <div class="line"></div>
            <div class="info-content" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
              <div class="module-card-list">
                <div class="module-card small-card" v-for="(item, index) in oneCardList" :key="index">
                  <div v-for="(child, childIndex) in item.list" class="card-info-list" :key="childIndex">
                    <img src="../../../assets/courseProjects/right.png" alt="" />
                    <div>{{ userLanguage == "1" ? child.name : child.nameEn }}</div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="content-item" id="options2-3">
            <div class="title">{{ userLanguage == '1' ? '研究专题模块' : 'Specialized Research Topics' }}</div>
            <div class="line"></div>
            <div class="info-content" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
              <div class="module-card-list">
                <div class="module-card" v-for="(item, index) in twoCardList" :key="index">
                  <div v-for="(child, childIndex) in item.list" class="card-info-list" :key="childIndex">
                    <img src="../../../assets/courseProjects/right.png" alt="" />
                    <div>{{ userLanguage == "1" ? child.name : child.nameEn }}</div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="content-item" id="options2-4">
            <div class="title">{{ userLanguage == '1' ? '研究实践模块' : 'Research Workshops' }}</div>
            <div class="line"></div>
            <div class="info-content" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
              <div class="module-card-list">
                <div class="module-card small-card" v-for="(item, index) in threeCardList" :key="index">
                  <div v-for="(child, childIndex) in item.list" class="card-info-list" :key="childIndex">
                    <img src="../../../assets/courseProjects/right.png" alt="" />
                    <div>{{ userLanguage == "1" ? child.name : child.nameEn }}</div>
                  </div>
                </div>
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
              list: [
                { name: "管理研究方法", nameEn: "Management Research Methodology" },
              ],
            },
            {
              list: [
                { name: "定性研究方法", nameEn: "Qualitative Research Methods" },
                { name: "定量研究方法", nameEn: "Quantitative Research Methods" }
              ],
            }
          ],
          twoCardList: [
            {
              list: [
                { name: "管理心理与行为研究", nameEn: "Research in Management Psychology and Behavior" },
                { name: "环境、社会和治理和绿色金融", nameEn: "ESG and Green Finance" },
                { name: "全球化与管理研究", nameEn: "Globalization & Management Research" },
                { name: "可持续消费行为与市场研究", nameEn: "Sustainable Consumer Behavior and Market Research" },
                { name: "管理学理论发展趋势", nameEn: "Trend of Management Theory Development" },
              ],
            },
            {
              list: [
                { name: "商业研究实验方法", nameEn: "Experiments in Business Research" },
                { name: "现代营销挑战", nameEn: "Postmodern Marketing Challenges" },
                { name: "战略洞察：数据驱动的市场决策", nameEn: "Strategic Insights: Data-Driven Marketing Decisions" },
                { name: "AI时代塑造卓越客户体验的策略", nameEn: "Customer Experience Management in the AI Era" },
                { name: "第二曲线思维模型", nameEn: "The Second Curve Thinking Model" },
              ],
            }
          ],
          threeCardList: [
            {
              list: [
                { name: "论文工作坊I：研究计划书推进论文工作坊", nameEn: "Workshop1: Research Proposal Development Workshop" },
              ],
            },
            {
              list: [
                { name: "论文工作坊II：论文写作工作坊", nameEn: "Workshop2: Thesis Completion Workshop" }
              ],
            }
          ],
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
@import url("./index.css");
@media(max-width:720px){
  .module-card {
    width:16rem !important;
    margin-right: 0 !important;
    margin-left: 1rem !important;
    height: auto;
    padding-right: 20px !important;
  }
  .small-card {
    height: 200px !important;
  }
  .title{
    margin-left: 30px;
  }
  .one-imgs img{
    width: 10rem !important;
    margin-right: 45px !important;
  }
  .content-item{
    width:100vw !important;
  }

  .img-item {
    flex-basis: calc(45% - 9px) !important;
  }

  .networkingList {
    flex-wrap: nowrap !important;
    gap: 100px !important;
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
    /* margin: 0 60px !important; */
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
  /* align-items: center; */
  justify-content: space-around;
  text-align: center;
  box-sizing: border-box;
  padding: 0 40px;
  flex-wrap: wrap;

  .img-item, .img-item-one {
    flex-basis: calc(25% - 9px);
    /* width: 98px; */
    text-align: center;
    margin-bottom: 40px;
  }

  img {
    margin: 0 auto;
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

  .subTitle {
    font-size: 20px;
    font-weight: normal;
    margin-top: 10px;
  }
}

.fourImg {
  width: 100%;
}

.module-card-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}

.small-card {
  height: 150px;
}

.module-card {
  margin-right: 140px;
  margin-bottom: 60px;
  padding: 27px 27px 20px 0px;
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