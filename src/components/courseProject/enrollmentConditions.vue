<!--  -->
<template>
    <div>
        <div class="content-item">
            <div class="title">招生条件</div>
            <div class="line"></div>
            <div class="info-content" style="margin-bottom: 40px;">
                <div class="info-title">学历与工作年限要求</div>
                <div class="info">
                    · 研究生毕业后，具有至少两年工作经验；<br>
                    · 大学本科毕业后，具有至少三年工作经验；<br>
                    · 大专学历毕业后，具有至少五年工作经验。<br>
                </div>
                <div class="ps">* 工作年限指从毕业获得证书(一般指每年的7月份)到被录取入学的时间</div>
            </div>
            <div class="info-content" style="margin-bottom: 40px;">
                <div class="info-title">申请人身份要求</div>
                <div class="info">
                    <div class="des-title">· 华侨申请人</div>
                    <div class="des">
                        已取得住在国长期或永久居留权，并已在住在国连续居留2年，两年内累计居留不少于18个月。
                    </div>
                    <div class="des">
                        未取得住在国长期或永久居留权者，但已取得住在国连续5年以上（含5年）合法居留资格，且5年内在住在国累计居留不少于30个月。出国留学和因公出国工作不能视为定居。
                    </div>
                </div>
                <div class="info">
                    <div class="des-title">· 外籍申请人</div>
                    <div class="des">
                        须是非中国籍的其他国家公民，持有效外国护照。
                    </div>
                </div>
                <div class="info">
                    <div class="des-title">· 港澳地区申请人</div>
                    <div class="des">
                        持有香港或澳门永久性居民身份证和《港澳居民来往内地通行证》或《港澳居民居住证》。
                    </div>
                </div>
                <div class="info">
                    <div class="des-title">· 台湾地区申请人</div>
                    <div class="des">
                        持《台湾居民来往大陆通行证》或《台湾居民居住证》。
                    </div>
                </div>
            </div>
        </div>

        <div class="content-item">
            <div class="title">申请流程</div>
            <div class="line"></div>
            <div style="margin-top: 60px;">
                <img style="width: 100%;" src="../../../assets/courseProjects/applys.png" alt="">
            </div>
        </div>

        <div class="content-item">
            <div class="title">招生批次</div>
            <div class="line"></div>
            <div style="margin-top: 60px;">
                <img style="width: 100%;" src="../../../assets/courseProjects/enrollmentBatch.png" alt="">
            </div>
        </div>

        <div class="content-item">
            <div class="title">入学与毕业时间</div>
            <div class="line"></div>
            <div style="margin-top: 60px;">
                <img style="width: 100%;" src="../../../assets/courseProjects/schoolDate.png" alt="">
            </div>
            <div class="des">
                以下举例说明： 
            </div>

            <div class="des">
                对于2022年9月（秋季入学）入学的学生，如已修满所有学分并通过论文答辩，将在2024年8月毕业。
            </div>

            <div class="ps">
                * 具体日期以校历为准。
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
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
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

.ps {
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
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