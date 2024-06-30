<!--  -->
<template>
    <div>
        <pageHeader />

        <div class="pageBody">
            <div class="content-body">
                <div class="leftSticky">
                    <div class="leftList">
                        <div class="title"> {{ userLanguage == '1' ? '暨南大学' : 'JNU' }}<br>{{ userLanguage == '1' ? '新加坡MBA项目' : 'MBA Program (Mandarin)' }} </div>
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
                                        {{ userLanguage == '1' ? item.name : item.nameEn }}
                                    </div>
                                    <div class="item-subTitle"
                                        :style="{ color: currentTemplate == child.id ? '#FF9C00' : '#172C47' }"
                                        v-for="(child, index) in item.list" @click="scrollToAnchor(child.id)">
                                        <div class="list-line-header" v-show="currentTemplate == child.id"></div>
                                        <div class="item-subTitle-name">
                                            {{ userLanguage == '1' ? child.name : child.nameEn }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn">
                            <div>{{ userLanguage == '1' ? '申请加入' : 'Apply Now' }}</div>
                            <img class="rightArrow" src="../../assets/header/rightArrow.png" alt="">
                        </div>
                        <div class="btn" style="background: #024A9C;">
                            <div>{{ userLanguage == '1' ? '联系我们' : 'Connect Us' }}</div>
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
                    nameEn: 'Program Overview',
                    id: 'options1',
                    list: [
                        { name: '关于暨南大学', nameEn: 'About Jinan University', id: 'options1-1' },
                        { name: '项目介绍', nameEn: 'Program Introduction', id: 'options1-2' },
                        { name: '项目优势', nameEn: 'Program Advantages', id: 'options1-3' }
                    ]
                },
                {
                    name: '课程体系',
                    nameEn: 'Curriculum System',
                    id: 'options2',
                    list: [
                        { name: '必修模块', nameEn: 'Core Modules', id: 'options2-1', },
                        { name: '选修模块', nameEn: 'Elective Modules', id: 'options2-2', }
                    ]
                },
                {
                    name: '招生信息',
                    nameEn: 'Admissions Information',
                    id: 'options3',
                    list: [
                        { name: '招生条件', nameEn: 'Admission Requirements', id: 'options3-1' },
                        { name: '申请流程', nameEn: 'Application Process', id: 'options3-2' },
                        { name: '招生批次', nameEn: 'Admission Rounds', id: 'options3-3' },
                        { name: '入学与毕业时间', nameEn: 'Enrollment and Graduation Dates', id: 'options3-4' }
                    ]
                },
                {
                    name: '独特价值',
                    id: 'options4',
                    nameEn: 'Unique Value',
                    list: [
                        { name: '独特价值', nameEn: 'Unique Value', id: 'options4-1' },
                        { name: '人脉资源', nameEn: 'Network Resources', id: 'options4-2' }
                    ]
                }
            ],
            isSticky: false,
            isAbsot: false
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
        scrollToAnchor(anchor) {
            const element = document.getElementById(anchor);
            if (element) {
                element.style.scrollMarginTop = "100px"; // 添加 scroll-margin-top 属性
                element.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    this.currentTemplate = anchor;
                }, 800);
            }
        },

        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const contentBodyHeight = document.querySelector('.content-body').offsetHeight;

            if (scrollTop + windowHeight >= contentBodyHeight + 900) {
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
        },

        fllowUpdate() {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const targetTop = entry.boundingClientRect.top;
                    const scrollThreshold = window.innerHeight * 0.1; // 定义滚动的顶部区域阈值为视口高度的30%

                    if (targetTop <= scrollThreshold) {
                        this.currentTemplate = entry.target.id;
                    }
                });
            });

            const elements = document.querySelectorAll('[id]');
            elements.forEach(element => {
                observer.observe(element);
            });

            window.addEventListener('floowscroll', () => {
                elements.forEach(element => {
                    const targetTop = element.getBoundingClientRect().top;
                    const scrollThreshold = window.innerHeight * 0.3; // 定义滚动的顶部区域阈值为视口高度的30%

                    if (targetTop <= scrollThreshold) {
                        this.currentTemplate = element.id;
                    }
                });
            });
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        if (this.$route.params.anchor) {
            let str = 'options' + this.$route.params.anchor
            const element = document.getElementById(str);
            element.style.scrollMarginTop = "350px"; // 添加 scroll-margin-top 属性
            element.scrollIntoView({ behavior: 'smooth' });
            this.currentTemplate = str;
        } else {
            this.fllowUpdate()
        }
        

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

.leftSticky {
    width: 25%;
    position: sticky;
    top: 150px;
    height: 1080px;
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