<!--  -->
<template>
    <div>
        <div class="content-item" id="options1-1">
            <div class="title">{{ userLanguage == '1' ? '关于暨南大学' : 'About Jinan University' }}</div>
            <div class="line"></div>
            <div class="info">
                · {{ userLanguage == '1' ? '百年名校，华侨最高学府' : "China's Centennial Prestigious University for Overseas Chinese" }}<br>
                · {{ userLanguage == '1' ? '211工程大学、双一流建设高校' : '"211 Project" and "Double First-Class" University' }}<br>
                · {{ userLanguage == '1' ? '全球商学院认证（AACSB、AMBA和BGA金牌认证）' : "Global Business School Accreditations (AACSB, AMBA, and BGA)" }}<br>
                · {{ userLanguage == '1' ? '工商管理位列中国一流学科前5%' : "Business Administration Degree ranks in the top 5% of China's first-class disciplines" }}<br>
                · {{ userLanguage == '1' ? '双证文凭全球认可' : "Dual-degree Diplomas Globally Recognized" }}
            </div>
            <div class="one-imgs">
                <img src="../../../assets/courseProjects/AACSB.png" alt="">
                <img src="../../../assets/courseProjects/AMBA.png" alt="">
                <img src="../../../assets/courseProjects/BGA.png" alt="">
            </div>
        </div>

        <div class="content-item" id="options1-2">
            <div class="title">{{ userLanguage == '1' ? '项目介绍' : 'Program Introduction' }}</div>
            <div class="line"></div>
            <div class="info-content p-space">
                {{ userLanguage == '1' ? '暨南大学新加坡MBA硕士学位项目（简称“暨南大学新加坡MBA项目”） 是暨南大学在新加坡的中文工商管理硕士（MBA）教学项目，由暨南大学管理学院与南洋社会科学学院合作举办。' : "Jinan University (JNU) is one of the first national institutions of higher education in China to develop business education" }}
            </div>
            <!-- <div class="info-content bigTitle p-space">
                {{ userLanguage == '1' ? '“始有暨南，便有商科”' : 'Business is also a strong discipline that JNU is proud of' }}
            </div> -->
            <div class="info-content p-space">
                {{ userLanguage == '1' ? '项目面向华侨、港澳台地区人士和外籍人士招生，采取“申请审核制”，即考生报名并提交学校规定的申请材料；材料审核合格者，无需参加笔试，可径直参加面试；学校择优录取。' : 'In 1993, JNU became the first institution in South China to offer an MBA education' }}
            </div>
            <div class="info-content p-space">
                {{ userLanguage == '1' ? '暨南大学新加坡中文MBA项目分春、秋两季招生，分别在每年3月、9月入学。项目在新加坡招生和授课，中文教学，2年学制，在职学习。毕业后授予暨南大学工商管理硕士学位证书和硕士研究生毕业证书，学历学位在中国及海外均被认可。' : 'JNU MBA Program aims to provide quality education on business management for young managers on the uptrend in their careers, and help them understand the culture of Chinese business, expand their developing space and improve their leadership and problem-solving capacity。JNU MBA Program was awarded “2014 China’s Most Valuable Part-time MBA Programme” by Forbes Chinese Edition。' }}
            </div>
            <div class="two-imgs">
                <div class="img-item">
                    <img src="../../../assets/courseProjects/one.png" alt="">
                    <div class="tow-title">{{ userLanguage == '1' ? '春季秋季' : 'Spring and Autumn' }}<br>{{ userLanguage == '1' ? '滚动招生' : 'Rolling Admissions' }}</div>
                </div>
                <div class="img-item">
                    <img src="../../../assets/courseProjects/two.png" alt="">
                    <div class="tow-title">{{ userLanguage == '1' ? '在新加坡' : 'In Singapore' }}<br>{{ userLanguage == '1' ? '中文授课' : 'Taught in Chinese' }}</div>
                </div>
                <div class="img-item">
                    <img src="../../../assets/courseProjects/three.png" alt="">
                    <div class="tow-title">{{ userLanguage == '1' ? '2年学制' : '2-Year Program' }}<br>{{ userLanguage == '1' ? '在职学习' : 'Part-Time Study' }}</div>
                </div>
            </div>
        </div>

        <div class="content-item" id="options1-3">
            <div class="title">{{ userLanguage == '1' ? '项目优势' : 'Program Introduction' }}</div>
            <div class="line"></div>
            <div class="info">
                · {{ userLanguage == '1' ? '中文教学' : 'Study in Singapore, Enjoy Special Application Policies for Hong Kong, Macau, Taiwan, and Overseas Chinese' }}<br>
                · {{ userLanguage == '1' ? '新加坡就读，享受港澳台华侨外特殊申请政策' : 'Study in Singapore, Enjoy Special Application Policies for Hong Kong, Macau, Taiwan, and Overseas Chinese' }}<br>
                · {{ userLanguage == '1' ? '免中国MBA联考' : 'No Chinese MBA Entrance Exam Required' }}<br>
                · {{ userLanguage == '1' ? '无英语入学要求' : 'No English Admission Requirements' }}<br>
                · {{ userLanguage == '1' ? '大专文凭可报考' : 'Associate Degree Holders Eligible to Apply' }}<br>
                · {{ userLanguage == '1' ? '时间灵活，集中授课' : 'Flexible and Intensive Course Schedule' }}<br>
                · {{ userLanguage == '1' ? '1+1+N+2全面赋能职业发展' : 'Gain Comprehensive Empowerment for Career Development with 1+1+N+2' }}
            </div>
            <div class="four-area">
                <img class="fourImg" src="../../../assets/courseProjects/four.png" alt="">
            </div>
        </div>

        <div class="content-item" id="options1-4">
            <div class="title">{{ userLanguage == '1' ? '海外模块' : '海外模块' }}</div>
            <div class="line"></div>
            <div class="info">
                国际深度交流学习项目。每年暨南大学MBA的学生们都有机会申请至海外合作高校开展3 – 6个月的学习交流，部分交流院校提供奖学金名额。
            </div>
        </div>

        <div class="content-item" id="options1-5">
            <div class="title">{{ userLanguage == '1' ? '学生画像' : '学生画像' }}</div>
            <div class="line"></div>
            <div class="info">
                · {{ userLanguage == '1' ? '平均年龄38.7岁' : '' }}<br>
                · {{ userLanguage == '1' ? '平均工作年限16.7年' : '' }}<br>
                · {{ userLanguage == '1' ? '来自20个不同专业' : '' }}<br>
                · {{ userLanguage == '1' ? '43%有跨多国工作经历' : '' }}<br>
                · {{ userLanguage == '1' ? '38%有技术、工程背景' : '' }}<br>
                · {{ userLanguage == '1' ? '80%任公司管理岗' : '' }}<br>
                · {{ userLanguage == '1' ? '52%拥有自己的企业' : '' }}
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
@import url('./index.css');

.bigTitle {
    font-size: 32px; text-align: center;
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
        margin-right: 20px;
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
        color: #172C47;
        margin-top: 15px;
    }
}

.fourImg {
    width: 100%;
}
</style>