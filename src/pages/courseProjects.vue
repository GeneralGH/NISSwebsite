<!--  -->
<template>
    <div>
        <pageHeader />

        <div class="pageBody">
            <div class="content-body">
                <div style="width: 25%; position: relative;">
                    <div class="leftList" :class="{ sticky: isSticky, absot: isAbsot }">
                        <div class="title"> 暨南大学<br>新加坡MBA项目 </div>
                        <div class="optionsList">
                            <div class="list-line-area">
                                <!-- <div class="list-line-header"></div> -->
                                <div class="list-line"></div>
                            </div>
                            <div class="list-area">
                                <div class="option-item" v-for="item in optionsList">
                                    <div class="item-title"
                                        :style="{ color: currentTemplate == item.id ? '#FF9C00' : '#172C47' }"
                                        @click="scrollToAnchor(item.id)">
                                        <div class="list-line-header" v-show="currentTemplate == item.id"></div>
                                        {{ item.name }}
                                    </div>
                                    <div class="item-subTitle"
                                        :style="{ color: currentTemplate == child.id ? '#FF9C00' : '#172C47' }"
                                        v-for="(child, index) in item.list" @click="scrollToAnchor(child.id)">
                                        <div class="list-line-header" v-show="currentTemplate == child.id"></div>
                                        <div class="item-subTitle-name">
                                            {{ child.name }}
                                        </div>
                                    </div>
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
                </div>


                <div class="templateCss">
                    <t-space direction="vertical" size="large">
                        <AboutUs id="options1" />
                        <compulsoryModules id="options2" />
                        <enrollmentConditions id="options3" />
                        <uniqueValue id="options4" />
                    </t-space>
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
            currentTemplate: 'options1',
            optionsList: [
                {
                    name: '项目概述',
                    id: 'options1',
                    list: [
                        { name: '关于暨南大学', id: 'options1-1' },
                        { name: '项目介绍', id: 'options1-2' },
                        { name: '项目优势', id: 'options1-3' }
                    ]
                },
                {
                    name: '课程体系',
                    id: 'options2',
                    list: [
                        { name: '必修模块', id: 'options2-1', },
                        { name: '选修模块', id: 'options2-2', }
                    ]
                },
                {
                    name: '招生信息',
                    id: 'options3',
                    list: [
                        { name: '招生条件', id: 'options3-1' },
                        { name: '申请流程', id: 'options3-2' },
                        { name: '招生批次', id: 'options3-3' },
                        { name: '入学与毕业时间', id: 'options3-4' }
                    ]
                },
                {
                    name: '独特价值',
                    id: 'options4',
                    list: [
                        { name: '独特价值', id: 'options4-1' },
                        { name: '人脉资源', id: 'options4-2' }
                    ]
                }
            ],
            isSticky: false,
            isAbsot: false
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        scrollToAnchor(anchor) {
            const element = document.getElementById(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                this.currentTemplate = anchor
            }
        },

        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const contentBodyHeight = document.querySelector('.content-body').offsetHeight;
            console.log(scrollTop + windowHeight, contentBodyHeight + 1000)

            if (scrollTop + windowHeight >=  contentBodyHeight + 900) {
                // 当 leftList 到达 content-body 底部时停止跟随滚动
                this.isSticky = false;
                this.isAbsot = true
            } else if (scrollTop > 800) {
                // 滚动超过 800px 时，将 leftList 设置为 fixed
                this.isSticky = true;
                this.isAbsot = false
            } else {
                // 其他情况下，leftList 不是 fixed
                this.isSticky = false;
                this.isAbsot = false
            }
        }


    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { window.removeEventListener('scroll', this.handleScroll); }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped lang="less">
.leftList {
    /* width: 25%; */
}

.sticky {
    position: fixed;
    top: 20px;
    /* 其他样式 */
}

.absot {
    position: absolute;
    bottom: 0;
}

.list-line-area {
    width: 15px;
    position: relative;
}

.pageBody {
    padding: 70px 0 160px 0;
    box-sizing: border-box;

    .title {
        font-weight: bold;
        font-size: 32px;
        color: #172C47;
        margin-bottom: 40px;
    }

    .content-body {
        width: 1400px;
        display: flex;
        margin: 0 auto;
        margin-top: 50px;

        .optionsList {
            margin: 0 0 100px 0;
            display: flex;

            .list-line-header {
                width: 15px;
                height: 15px;
                background: #FF9C00;
                border-radius: 3px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: -32px;
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
                        cursor: pointer;
                        position: relative;
                    }

                    .item-subTitle {
                        font-weight: 500;
                        font-size: 20px;
                        color: #172C47;

                        cursor: pointer;
                        position: relative;

                        .item-subTitle-name {
                            margin-bottom: 15px;
                            margin-left: 27px;
                        }
                    }
                }
            }
        }
    }

}

.templateCss {
    margin-top: -20px;
    /* margin-left: 80px; */
    width: 70%;
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