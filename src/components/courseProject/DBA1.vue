<!--  -->
<template>
    <div>
        <div class="content-item" id="options1-1">
            <div class="title">{{ userLanguage == '1' ? '关于南特高等商学院' : 'About Audencia Business School' }}</div>
            <div class="line"></div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{
                userLanguage == "1"
                    ? "法国南特高等商学院1900年成立于法国南特市，是拥有超过120年历史的欧洲一流商学院。"
                    : "Founded in 1900 in Nantes, France, Audencia Business School is a leading European business school with over 120 years of history."
                }}
            </div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{
                userLanguage == "1"
                    ? "法国南特高等商学院是法国最早获得国际权威商学院三项认证（EQUIS、AACSB、AMBA）的精英商学院之一（全球仅1%的商学院同时获得以上三项认证），同时也是久负盛名的法国精英教育大学校联盟（CGE）成员以及法国顶级高商五校联盟SAI成员。学院在英国《金融时报》（Financial Times）、《经济学人》（The Economist）排名中常念位列法国十大商学院之列，在法国、欧洲乃至全球均享有很高的声誉。"
                    : `Audencia Business School is one of the first elite French business schools to achieve the "triple crown" accreditation (EQUIS, AACSB, and AMBA), a distinction held by only 1% of business schools worldwide. Audencia is also a member of the Conférence des Grandes Écoles (CGE) and the SAI consortium of France’s top five business schools. Regularly ranked among the top 10 business schools in France by Financial Times and The Economist, Audencia has an excellent reputation in France, Europe, and globally.`
                }}
            </div>
        </div>

        <div class="content-item" id="options1-2">
            <div class="title">{{ userLanguage == '1' ? '项目介绍' : 'Program Overview' }}</div>
            <div class="line"></div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{
                userLanguage == "1"
                    ? "面对世界政经格局巨变、新技术推动下的全球商业变革以及产业格局重塑，各行业领导者均面临以新的方法论以及更系统的智识架构前瞻性地指导其实践探索。南洋社会科学学院基于学院愿景与使命，依托学院在商学领域的办学实践，与法国南特高等商学院在新加坡合作举办南特高等商学院亚太中文工商管理博士项目，旨在贡献商业新知，成就学者型管理精英。"
                    : "To tackle the challenges of rapid global political and economic shifts, technological advancements, and industrial transformation, leaders across industries are increasingly tasked with employing innovative methodologies and systemic intellectual frameworks to guide their practices. To address these challenges, Nanyang Institute of Social Sciences (NISS) collaborates with Audencia Business School to launch the Audencia Asia-Pacific Doctor of Business Administration Program (Mandarin) in Singapore."
                }}
            </div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{
                userLanguage == "1"
                    ? "学员将管理前沿理论学习、管理研究方法学习与自身的行业实践相结合，聚焦于研究并解决自己所处行业或组织内部的核心问题，探索前沿实践，推动智识升级，引领商业变革，创造属于自己的商业影响与价值，成为管理研究与管理应用相结合的学者型管理精英。"
                    : `This program is designed to advance cutting-edge business knowledge and cultivate scholar-practitioner leaders. Participants integrate theoretical insights, research methodologies, and professional experiences to tackle critical issues within their industries or organizations. Through exploring innovative practices, upgrading intellectual capabilities, and leading transformative business initiatives, participants create meaningful impacts and establish themselves as scholar-practitioner leaders who bridge research and application.`
                }}
            </div>

            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{ userLanguage == "1" ? "学制：3年（最长可延期至5年）" : `Duration: 3 years (extendable up to 5 years)` }}
            </div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{ userLanguage == "1" ? "学习语言：中文（法国教授授课语言为英文，提供中文翻译）" : `Language of Instruction: Chinese (Lectures by French professors are delivered in English with Chinese interpretation)` }}
            </div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{ userLanguage == "1" ? "学习形式：在职学习" : `Mode of Delivery: Part-time` }}
            </div>
            <div class="info-content p-space" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                {{ userLanguage == "1" ? "证书授予：南特高等商学院工商管理博士学位证书" : `Degree Awarded: Doctor of Business Administration from Audencia Business School` }}
            </div>
        </div>

        <div class="content-item" id="options1-3">
            <div class="title">{{ userLanguage == '1' ? '项目优势' : 'Program Features' }}</div>
            <div class="line"></div>
            <div class="info-content" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                · {{ userLanguage == "1" ? "中文授课：高效学习，深入研究" : "Instructed in Chinese: High efficiency in learning and profound depth in research" }}<br />
                ·
                {{
                userLanguage == "1"
                    ? "卓越师资：全球名师，融汇中西"
                    : "World-class Faculty: Renowned professors worldwide integrating Chinese and Western "
                }}<br />
                ·
                {{
                userLanguage == "1"
                    ? "博士学位：最高学位，欧洲一流"
                    : "Doctoral Degree: The pinnacle of academic achievement from a leading European business school"
                }}
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
</style>