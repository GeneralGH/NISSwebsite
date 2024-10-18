<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="page-area">
            <div class="article-info">
                <div class="article-title">
                    {{ userLanguage == "1" ? '项目宣传大使计划' : 'NISS JNU MBA Program Ambassador' }}
                </div>
            </div>
            <div class="party-line"></div>

            <div class="party-content">
                <div class="commonText" :style="{ textAlign: userLanguage == 1 ? 'justify' : 'left' }">
                    {{ userLanguage == "1" ? text : textEn }}
                </div>
                <!-- <div class="card-container">
                    <div class="module-card">
                        <div class="title">
                            {{ userLanguage == "1" ? "责任" : "Vision" }}
                        </div>
                        <div class="line"></div>
                        <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
                            {{ userLanguage == "1" ? "1、招生宣传" : "To be an invaluable lifelong learning platform" }}
                        </div>
                        <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
                            {{ userLanguage == "1" ? "2、品牌推广" : "To be an invaluable lifelong learning platform" }}
                        </div>
                        <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
                            {{ userLanguage == "1" ? "3、活动支持" : "To be an invaluable lifelong learning platform" }}
                        </div>
                        <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
                            {{ userLanguage == "1" ? "4、反馈建议" : "To be an invaluable lifelong learning platform" }}
                        </div>
                    </div>
                    <div class="module-card">
                        <div class="title">
                            {{ userLanguage == "1" ? "权益" : "Mission" }}
                        </div>
                        <div class="line"></div>
                        <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
                            {{ userLanguage == "1" ? "1、“骄傲传承”奖" : "ce" }}
                        </div>
                        <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
                            {{ userLanguage == "1" ? "2、年度联谊活动" : "Te" }}
                        </div>
                        <div :class="userLanguage == '1' ? 'content' : 'contentEn'">
                            {{ userLanguage == "1" ? "3、优先参与活动" : "Toce" }}
                        </div>
                    </div>
                </div> -->
            </div>


            <div class="article-info">
                <div class="article-title">
                    {{ userLanguage == "1" ? '项目宣传大使风采' : 'NISS JNU MBA Style Ambassador' }}
                </div>
            </div>
            <div class="party-line"></div>
            <div class="party-content">
                <div class="list">
                    <div class="item" v-for="(item, index) in list" :key="index">
                        <div>
                            <div class="top">
                                <div style="display: flex; justify-content: space-between;">
                                    <div>
                                        <div class="title">{{ userLanguage == '1' ? item.name : item.nameEn }}</div>
                                        <div class="class">班级：{{ userLanguage == '1' ? item.classes : item.classesEn }}</div>
                                        <div class="concact">邮箱：{{ userLanguage == '1' ? item.email : item.emailEn }}</div>
                                    </div>
                                    <div>
                                        <t-image class="item-img" :src="userLanguage == '1' ? item.url : item.urlEn" shape="circle" fit="cover" />
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                {{ userLanguage == '1' ? item.introduction : item.introductionEn }}
                            </div>
                        </div>
                        <div class="btn-img">
                            <img src="../../assets/xuanchuan/one.png" alt="">
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
import xuanchuan from '../api/xuanchuan'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            listQuery: {
                current: 1,
                size: 1000
            },
            text: '为在新加坡打造暨南大学中文MBA项目的良好生态环境，南洋社会科学学院特制定“NISS暨南大学中文MBA（新加坡班）项目宣传大使”计划。所有暨南大学校友、暨南大学中文MBA（新加坡班）校友和在读学生，均可向NISS校友支持办公室申请成为“项目宣传大使”。',
            textEn: 'To further enhance the quality of student intake and the social influence of the JNU MBA Program, and to foster a positive ecosystem for the program in Singapore, NISS has launched the "NISS JNU MBA Program Ambassador" initiative.',
            list: []
        };
    },
    computed: {
        userLanguage() {
            return this.$store.state.userLanguage;
        },
    },
    watch: {
        userLanguage(newVal) {
            document.title = newVal == "1" ? "宣传大使" : "Programmes"
        }
    },
    //方法集合
    methods: {
        initList() {
            this.$request
                .post(xuanchuan.getPromotionListPageUrl, this.listQuery)
                .then((res) => {
                    this.list = res.data.data.list.map((item) => {
                        return { 
                            ...item,
                            url: JSON.parse(item.image).url,
                            urlEn: JSON.parse(item.imageEn).url
                        }
                    })
                })
        },

        toDetail() {
            this.$router.push('/promotionAmbassadorDetail')
            window.scrollTo({
                top: 0,
                behavior: 'instant' // 可选，使用平滑滚动效果
            })
        }
    },

    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.initList();
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
.page-area {
    width: 1650px;
    margin: 0 auto;
    padding: 30px 0 160px 0;

    .party-title {
        font-weight: 600;
        font-size: 52px;
        margin-bottom: 22px;
    }

    .party-content {
        box-sizing: border-box;
        padding: 0 40px;
        font-weight: 500;
        font-size: 24px;
        line-height: 43px;
        margin-bottom: 100px;

        .module-card {
            width: calc(50% - 20px);
            min-height: 400px;
            height: auto;
            margin-top: 100px;
            box-sizing: border-box;
            padding: 40px;

            .title {
                font-weight: bold;
                font-size: 36px;
                line-height: 34px;
            }

            .line {
                width: 100px;
                height: 4px;
                background-color: #ff9c00;
                margin: 30px 0 30px 0;
            }

            .content {
                font-size: 28px;
                margin-bottom: 10px;
            }

            .contentEn {
                font-size: 28px;
                margin-bottom: 10px;
            }
        }
    }
}

.article-info {
    margin-bottom: 36px;
}

.article-title {
    font-weight: 600;
    font-size: 54px;
    color: #172c47;
    line-height: 76px;
}

.party-line {
    width: 100%;
    height: 1px;
    background-color: #03499e;
    opacity: 0.11;
    margin-bottom: 60px;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        border-radius: 20px;
        width: 600px;
        height: 600px;
        background: rgb(22, 58, 107);
        margin-bottom: 45px;
        padding: 30px 40px;
        box-sizing: border-box;
        color: white;
        width: calc(50% - 20px);
        position: relative;
        .title {
            font-size: 42px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .class,
        .concact {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .concact {
            /* margin-bottom: 50px; */
        }

        .content {
            font-size: 24px;
            text-align: justify;
            height: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            margin-top: 30px;
        }

        .item-img {
            width: 200px;
            height: 200px;
        }

        .btn-img {
            position: absolute;
            bottom: 20px;
            right: 20px;
            display: flex;

            img {
                width: 240px;
                cursor: pointer;
            }
        }
    }
}

@media (max-width: 720px) {
    .card-container {
        display: block !important;
    }
    .module-card {
        width: 100% !important;
    }
    .page-area {
        width: 100vw !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 0 20px !important;

        .party {
            width: 100% !important;
            margin: 0 !important;

            .party-title {
                margin-top: 50px;
            }

            .party-content {
                width: 100% !important;
                padding: 0 !important;

                .content-image {
                    width: 100% !important;
                    height: auto !important;
                }
            }
        }
    }

    .item {
        width: 100% !important;
    }
}


.card-container {
    display: flex;
    justify-content: space-between;
}
</style>