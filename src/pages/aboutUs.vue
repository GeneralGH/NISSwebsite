<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="page-area">
            <div class="party">
                <div class="party-title">{{ userLanguage == '1' ? '学院介绍' : 'Who We Are' }}</div>
                <div class="party-line"></div>

                <div class="party-content">
                    <div>
                        {{ userLanguage == '1' ?
                        '南洋社会科学学院是新加坡教育部精深局批准注册的高等教育机构，致力于构筑融汇东西方优质高等教育资源的终身学习平台。学院与顶尖高校、杰出高等教育机构合作，解析和传播支撑中国成功高速发展的理论与经验，研究和传授西方社科领域教研的最新发展方向与成果，培养兼具东方智慧与全球视野的复合型人才。'
                        :
                        'Nanyang Institute of Social Sciences (NISS) is an institute of higher education registered with SkillsFuture Singapore (SSG) under the Ministry of Education of Singapore, aiming to create a lifelong learning platform that incorporates quality higher education resources from the East and the West.NISS cooperates with top universities and outstanding higher education institutions. It seeks to deconstruct and disseminate the theories and experiences that support China’s rapid economic development, share the cutting-edge research of western social sciences, and cultivate interdisciplinary talents with eastern wisdom and global vision.'
                        }}
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <div class="module-card">
                            <div class="title">{{ userLanguage == '1' ? '学院的愿景' : 'Our Vision' }}</div>
                            <div class="line"></div>
                            <div class="content">
                                {{ userLanguage == '1' ? '打造' : 'To be' }}
                                <br>
                                {{ userLanguage == '1' ? '最具价值的' : 'an invaluable' }}
                                <br>
                                {{ userLanguage == '1' ? '终身' : 'lifelong' }}
                                <br>
                                {{ userLanguage == '1' ? '学习平台' : 'learning platform' }}
                            </div>
                        </div>
                        <div class="module-card">
                            <div class="title">{{ userLanguage == '1' ? '学院的使命' : 'Our Mission' }}</div>
                            <div class="line"></div>
                            <div class="content">
                                {{ userLanguage == '1' ? '培养' : 'To cultivate' }}
                                <br>
                                {{ userLanguage == '1' ? '融贯中西' : 'high-level talents integrating' }}
                                <br>
                                {{ userLanguage == '1' ? '知行合一' : 'Chinese and Western and connecting' }}
                                <br>
                                {{ userLanguage == '1' ? '的高层次人才' : 'theory with practice' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="party">
                <div class="party-title">{{ userLanguage == '1' ? '学院新闻' : 'College News' }}</div>
                <div class="party-line"></div>

                <div class="party-content">
                    <News :list="list" @getMore="getMore" :isEnd="listQuery.current == totalPage" />
                </div>
            </div>
        </div>
        <PageFooter />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import News from '../components/common/news.vue'
import news from '../api/news';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { News },
    data() {
        //这里存放数据
        return {
            listQuery: {
                current: 1,
                size: 10,
                type: 1
            },
            list: [],
            totalPage: 1
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
        initList() {
            this.$request.post(news.getNewsListPageUrl, this.listQuery)
                .then(res => {
                    res.data.data.list = res.data.data.list.map((item) => {
                        return {
                            ...item,
                            url: JSON.parse(item.annex).url,
                            urlEn: JSON.parse(item.annexEn).url
                        }
                    })
                    this.list = this.list.length ? this.list.concat(res.data.data.list) : res.data.data.list
                    this.totalPage = res.data.data.totalPage
                })
        },

        getMore() {
            this.listQuery.current += 1
            this.initList()
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.initList()
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
/deep/.page-area {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0;

    .party {
        margin-bottom: 80px;
        color: #172C47;

        .party-title {
            font-weight: 600;
            font-size: 52px;
            margin-bottom: 22px;
        }

        .party-line {
            width: 100%;
            height: 1px;
            background-color: #03499E;
            opacity: 0.11;
            margin-bottom: 60px;
        }

        .party-content {
            box-sizing: border-box;
            padding: 0 40px;
            font-weight: 500;
            font-size: 24px;
            line-height: 43px;

            .module-card {
                width: 540px;
                height: 540px;
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
                    background-color: #FF9C00;
                    margin: 30px 0 70px 0;
                }

                .content {
                    font-weight: 600;
                    font-size: 62px;
                    line-height: 80px;
                }
            }
        }
    }
}
</style>