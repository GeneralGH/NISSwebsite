<!--  -->
<template>
    <div>
        <pageHeader />

        <div class="pageBody">
            <div class="title"> 暨南大学<br>新加坡MBA项目 </div>
            <div class="content-body">
                <div>
                    <div class="optionsList">
                        <div style="position: relative; width: 15px;">
                            <div class="list-line-header"></div>
                            <div class="list-line"></div>
                        </div>
                        <div class="list-area">
                            <div class="option-item" v-for="item in optionsList">
                                <div class="item-title">{{ item.name }}</div>
                                <div class="item-subTitle" :style="{ color: currentTemplate == child.id ? '#FF9C00' : '#172C47' }" v-for="(child, index) in item.list" @click="currentTemplate = child.id">{{ child.name }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <div>申请加入</div>
                        <img class="rightArrow" src="../../assets/header/rightArrow.png" alt="">
                    </div>
                    <div class="btn" style="background: #024A9C;">
                        <div>联系我们</div>
                        <img class="rightArrow" src="../../assets/header/rightArrow.png" alt="">
                    </div>
                </div>

                <div class="templateCss">
                    <AboutUs v-if="currentTemplate == 1" />
                    <compulsoryModules v-if="currentTemplate == 4" />
                    <enrollmentConditions v-if="currentTemplate == 6" />
                    <uniqueValue v-if="currentTemplate == 10" />
                </div>
            </div>
        </div>

        <PageFooter />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import AboutUs from '../components/courseProject/aboutUs.vue'
import compulsoryModules from '../components/courseProject/compulsoryModules.vue';
import enrollmentConditions from '../components/courseProject/enrollmentConditions.vue';
import uniqueValue from '../components/courseProject/uniqueValue.vue';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { AboutUs, compulsoryModules, enrollmentConditions, uniqueValue },
    data() {
        //这里存放数据
        return {
            currentTemplate: 1,
            optionsList: [
                {
                    name: '项目概述',
                    list: [
                        { name: '关于暨南大学', id: 1 },
                        { name: '项目介绍', id: 2 },
                        { name: '项目优势', id: 3 }
                    ]
                },
                {
                    name: '课程体系',
                    list: [
                        { name: '必修模块', id: 4 },
                        { name: '选修模块', id: 5 }
                    ]
                },
                {
                    name: '招生信息',
                    list: [
                        { name: '招生条件', id: 6 },
                        { name: '申请流程', id: 7 },
                        { name: '招生批次', id: 8 },
                        { name: '入学与毕业时间', id: 9 }
                    ]
                },
                {
                    name: '独特价值',
                    list: [
                        { name: '独特价值', id: 10 },
                        { name: '人脉资源', id: 11 }
                    ]
                }
            ]
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
.pageBody {
    padding: 70px 360px 160px 360px;
    box-sizing: border-box;

    .title {
        font-weight: bold;
        font-size: 32px;
        color: #172C47;
    }

    .content-body {
        display: flex;
        margin-top: 50px;

        .optionsList {
            margin: 0 0 100px 0;
            display: flex;

            .list-line-header {
                width: 15px;
                height: 15px;
                background: #FF9C00;
                border-radius: 3px;
            }

            .list-line {
                width: 2px;
                min-height: 720px;
                background-color: #03499E;
                opacity: 0.11;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }

            .list-area {
                margin-left: 17px;
                margin-top: -10px;

                .option-item {
                    margin-bottom: 30px;

                    .item-title {
                        margin-bottom: 20px;
                        font-weight: bold;
                        font-size: 24px;
                        color: #172C47;
                    }

                    .item-subTitle {
                        font-weight: 500;
                        font-size: 20px;
                        color: #172C47;
                        margin-bottom: 15px;
                        margin-left: 27px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

}

.templateCss {
    margin-top: -20px;
    width: 77%;
    margin-left: 80px;
}

.btn {
    margin-top: 20px;
    width: 174px;
    height: 52px;
    background: #FF9C00;
    border-radius: 26px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    padding-left: 40px;
    box-sizing: border-box;
}

.rightArrow {
    width: 21px;
    height: 21px;
    display: block;
}
</style>