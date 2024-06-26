<!--  -->
<template>
    <div>
        <div class="content-item" id="options4-1">
            <div class="title">独特价值</div>
            <div class="line"></div>
            <div class="info-content" style="margin-bottom: 40px;">
                <div class="info">
                    · 融合中华商业文化和现代管理智慧<br>
                    · 构建职业发展和互动交流平台<br>
                    · 完善专业的培养体系<br>
                    · 培养开阔的国际视野<br>
                    · 全球视野 交流学习
                </div>
                <div class="info">
                    <div class="schoolItem" v-for="item in schoolList">
                        <div class="schoolItem-img">
                            <img :src="item.img" alt="">
                            <div>{{ item.name }}</div>
                        </div>
                        <div class="schools">
                            <div v-for="child in item.list">{{ child }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-item" id="options4-2">
            <div class="title">人脉优势</div>
            <div class="line"></div>
            <div class="info-content space-one">
                <div class="info">
                    <div class="networkingList">
                        <div class="networkItem" v-for="item in networkingList">
                            <div class="netwoek-value">{{ item.value }}</div>
                            <div class="netwoek-title">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div v-html="htmlContent.content"></div>
                    <!-- · 31岁-40岁是主力年龄<br>
                    · 58%的学生位于企业中高级管理岗 31%的学生是企业主<br>
                    · 平均工作年限15.6年<br>
                    · 来自30余个细分行业 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import France from "../../../assets/courseProjects/France.png";
import Finland from "../../../assets/courseProjects/Finland.png";
import Italy from "../../../assets/courseProjects/Italy.png";
import Japan from "../../../assets/courseProjects/Japan.png";
import Korea from "../../../assets/courseProjects/Korea.png";
import Thailand from "../../../assets/courseProjects/Thailand.png";
import Greece from "../../../assets/courseProjects/Greece.png";
import Chile from "../../../assets/courseProjects/Chile.png";

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            schoolList: [
                { img: France, name: '法国', list: ['北方高等商学院 EDHEC Business school', '里昂商学院 EM Lyon Business School', '蒙彼利埃商学院 Montpellier Business School'] },
                { img: Finland, name: '芬兰', list: ['瓦萨大学 University of Vaasa'] },
                { img: Italy, name: '意大利', list: ['萨兰托大学 University del Salento'] },
                { img: Japan, name: '日本', list: ['名古屋商学院 Nagoya University of Commerce and Business'] },
                { img: Korea, name: '韩国', list: ['仁荷大学 Inha University'] },
                { img: Thailand, name: '泰国', list: ['国立法证大学 Thammasat University Business School'] },
                { img: Greece, name: '希腊', list: ['阿尔巴商学院 Alba Graduate Business School'] },
                { img: Chile, name: '智利', list: ['智利大学 University of Chile'] },
            ],
            networkingList: [
                { id: 4, name: '主力年龄', value: '31-40' },
                { id: 5, name: '学生是高级管理岗', value: '58%' },
                { id: 6, name: '学生是企业主', value: '31%' },
                { id: 7, name: '平均工作年限', value: '15.6' },
                { id: 8, name: '细分行业', value: '30+' }
            ],
            htmlContent: {
                content: '',
                contentEn: ''
            }
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        async initData() {
            for (let network of this.networkingList) {
                let obj = await this.$getPageContent(network.id)
                network.name = obj.title
                network.value = obj.content
            }
            this.htmlContent = await this.$getPageContent(9)
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

.space-one {
    margin-bottom: 40px;
}

.schoolItem {
    display: flex;
    align-items: start;
    margin-bottom: 20px;

    .schoolItem-img {
        display: flex;
        align-items: center;
        width: 20%;

        img {
            width: 45px;
            height: 30px;
            vertical-align: bottom;
            margin-right: 25px;
        }
    }
}

.networkingList {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    .networkItem {
        width: 205px;
        text-align: center;
        width: 33.33%;
        margin-bottom: 50px;

        .netwoek-value {
            font-size: 66px;
            line-height: 66px;
            font-weight: bold;
            background: linear-gradient(-90deg, #03499E 30%, #F9C99F 59%, #FF9C00 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .netwoek-title {
            font-weight: 500;
            font-size: 20px;
            color: #172C47;
        }
    }
}

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

.item-footer {
    font-weight: 300;
    font-size: 16px;
    color: #172C47;
}
</style>