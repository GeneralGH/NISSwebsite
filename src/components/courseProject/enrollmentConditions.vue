<!--  -->
<template>
    <div>
        <div class="content-item" id="options3-1">
            <div class="title">{{ userLanguage == '1' ? '招生条件' : 'Admission Requirements' }}</div>
            <div class="line"></div>
            <div class="info-content space-one">
                <div class="info-title">{{ userLanguage == '1' ? '学历与工作年限要求' : 'Admission Requirements' }}</div>
                <div class="info">
                    · {{ userLanguage == '1' ? '研究生毕业后，具有至少两年工作经验；' : 'postgraduate degree level with at least 2 years of working experience' }}<br>
                    · {{ userLanguage == '1' ? '大学本科毕业后，具有至少三年工作经验；' : 'degree level with at least 3 years of working experience' }}<br>
                    · {{ userLanguage == '1' ? '大专学历毕业后，具有至少五年工作经验。' : 'diploma level with at least 8 years of working experience, at least 30 years old' }}<br>
                </div>
                <div class="ps">* {{ userLanguage == '1' ? '工作年限指从毕业获得证书(一般指每年的7月份)到被录取入学的时间' : 'Work experience refers to the period from the date of graduation and certificate issuance (usually in July each year) to the time of admission.' }}</div>
            </div>
            <div class="info-content space-one">
                <div class="info-title">{{ userLanguage == '1' ? '申请人身份要求:' : 'Applicant Identity Requirements:' }}</div>
                <div class="info">
                    <div class="des-title">· {{ userLanguage == '1' ? '华侨申请人' : 'For Overseas Chinese Applicants' }}</div>
                    <div class="des">
                        {{ userLanguage == '1' ? '已取得住在国长期或永久居留权，并已在住在国连续居留2年，两年内累计居留不少于18个月。' : 'Must have obtained long-term or permanent residency in the residing country and have continuously resided there for at least two years, accumulating no less than 18 months within the two-year period.' }}
                    </div>
                    <div class="des">
                        {{ userLanguage == '1' ? '未取得住在国长期或永久居留权者，但已取得住在国连续5年以上（含5年）合法居留资格，且5年内在住在国累计居留不少于30个月。出国留学和因公出国工作不能视为定居。' : 'For individuals who have not obtained long-term or permanent residency in the residing country but have legally resided continuously for at least five years (including the fifth year), they must also have accumulated no less than 30 months of residence within the five-year period in the residing country. Studying abroad or working abroad for official reasons cannot be considered as settlement.' }}
                    </div>
                </div>
                <div class="info">
                    <div class="des-title">· {{ userLanguage == '1' ? '外籍申请人' : 'For Non-Overseas Chinese Applicants:' }}</div>
                    <div class="des">
                        {{ userLanguage == '1' ? '须是非中国籍的其他国家公民，持有效外国护照。' : 'Must be citizens of countries other than China, holding valid foreign passports.' }}
                    </div>
                </div>
                <div class="info">
                    <div class="des-title">· {{ userLanguage == '1' ? '港澳地区申请人' : 'For Applicants from Hong Kong and Macau:' }}</div>
                    <div class="des">
                        {{ userLanguage == '1' ? '持有香港或澳门永久性居民身份证和《港澳居民来往内地通行证》或《港澳居民居住证》。:' : 'Must hold permanent resident identity cards of Hong Kong or Macau and either a "Mainland Travel Permit for Hong Kong and Macau Residents" or a "Residence Permit for Hong Kong and Macau Residents."' }}
                    </div>
                </div>
                <div class="info">
                    <div class="des-title">· {{ userLanguage == '1' ? '台湾地区申请人' : 'For Applicants from Taiwan:' }}</div>
                    <div class="des">
                        {{ userLanguage == '1' ? '持《台湾居民来往大陆通行证》或《台湾居民居住证》。' : 'Must hold a "Mainland Travel Permit for Taiwan Residents" or a "Residence Permit for Taiwan Residents."' }}
                    </div>
                </div>
            </div>
        </div>

        <div class="content-item" id="options3-2">
            <div class="title">{{ userLanguage == '1' ? '申请流程' : 'Application Process' }}</div>
            <div class="line"></div>
            <div class="space-two">
                <t-image style="width: 100%; background-color: transparent;" :src="userLanguage == '1' ? applyImg.url : applyImg.urlEn" fit="cover" position="center" :lazy="true" />
            </div>
        </div>

        <!-- <div class="content-item" id="options3-3">
            <div class="title">{{ userLanguage == '1' ? '招生批次' : 'Admission Rounds' }}</div>
            <div class="line"></div>
            <div class="space-two">
                <t-image style="width: 100%; background-color: transparent;" :src="userLanguage == '1' ? enrollmentBatchImg.url : enrollmentBatchImg.urlEn" fit="cover" position="center" :lazy="true" />
            </div>
        </div> -->

        <div class="content-item" id="options3-4">
            <div class="title">{{ userLanguage == '1' ? '入学与毕业时间' : 'Enrollment and Graduation Dates' }}</div>
            <div class="line"></div>
            <div class="space-two">
                <img style="width: 100%;" src="../../../assets/courseProjects/schoolDate.png" alt="">
            </div>
            <div class="des">
                {{ userLanguage == '1' ? '以下举例说明：' : 'Here are some examples to illustrate:' }} 
            </div>

            <div class="des">
                {{ userLanguage == '1' ? '对于2022年9月（秋季入学）入学的学生，如已修满所有学分并通过论文答辩，将在2024年8月毕业。' : 'For example, for students who are enrolled in September 2022 (Fall intake), they will graduate in August 2024, given that all the required credits have been obtained. The degree will be conferred by January 2025.' }}
            </div>

            <div class="ps last-ps">
                * {{ userLanguage == '1' ? '具体日期以校历为准。' : 'The actual dates will be based on the school calendar.' }}
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
            applyImg: '',
            enrollmentBatchImg: ''
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
        async initData() {
            this.applyImg = await this.$getPageContent(16)
            this.enrollmentBatchImg = await this.$getPageContent(17)
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.initData()
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
    margin-left: 70px;
  }
  .des{
      width: 90%;
  }
  .space-two{
    width: 100%;
  }
}

.space-one {
    margin-bottom: 40px;
}

.space-two {
    margin-bottom: 40px;
}

.ps {
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
    margin-top: -35px;
}

.last-ps {
    margin-top: 20px !important;
}

.info-content {
    font-size: 28px !important;
}

.info-title {
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
    margin-bottom: 10px;
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
</style>