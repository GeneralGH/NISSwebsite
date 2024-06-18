<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="page-area">
            <div class="party">
                <div class="party-title">校友网络</div>
                <div class="party-line"></div>

                <div class="party-content">
                    <div class="content-title">暨南大学校友网络</div>
                    <div class="content-area">
                        <div><t-image class="content-image" src="../../assets/alumniStyle/JNUniversityNetwork.png" fit="cover" position="center" :lazy="true" /></div>
                        <div class="content-p">
                            <p>
                                作为杰出企业家 、商界精英、以及新生代经济颠覆力量的共同选择 ，暨南大学校友遍布世界各地、各行各业。目前，在五大洲共有132个校友组织 ，其中海外校友组织59个。
                            </p>
                            <p>
                                暨南校友网络恪守 “忠信笃敬” 的校训，互助共进，持续为学员、校友的事业长远发展和人生价值实现提供着强有力的支持与动力。
                            </p>
                            <p>
                                前中国国务院副总理吴学谦、李岚清，著名侨领、新加坡大学首任校长李光前，前泰国议会主席、副总理许敦茂，中国两院院士谭其骧、邓锡铭、侯芙生、曾毅，烈士江上青、陈镇和（华侨）、符保卢、符克（华侨），以及近年来内地和港澳台地区许多政府、工商及文教界知名人士均是暨南大学不同时期的杰出校友。
                            </p>
                            <div class="party-line content-line"></div>
                            <p>
                                《福布斯》（Forbes）杂志曾于2006年评选管理学院为“校友满意度最高的中国商学院”。
                            </p>
                            <div class="party-line content-line"></div>
                        </div>
                    </div>
                    <div class="content-title">新加坡校友会</div>
                    <div class="content-area">
                        <div><t-image class="content-image" src="../../assets/alumniStyle/SingapoUniversityNetwork.png" fit="cover" position="center" :lazy="true" /></div>
                        <div class="content-p">
                            <p>
                                新加坡暨南校友会早在 1941年4月已注册成立，是暨南大学成立较早、持续活动时间最长的校友会，也是新加坡最早成立的中国高校校友会。
                            </p>
                            <p>
                                李光前、刘抗、庄右铭、陈共存等诸多新马地区有名的政商学界名人均有在暨南大学求学的经历。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="party">
                <div class="party-title">杰出校友</div>
                <div class="party-line"></div>

                <div class="party-content">
                    <OutstandingAlumni />
                </div>
            </div>

            <div class="party">
                <div class="party-title">校友动态</div>
                <div class="party-line"></div>

                <div class="party-content">
                    <News :list="list" />
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
import OutstandingAlumni from '../components/alumniStyle/outstandingAlumni.vue'
import news from '../api/news';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { News, OutstandingAlumni },
    data() {
        //这里存放数据
        return {
            listQuery: {
                current: 1,
                size: 10,
                type: 2
            },
            list: []
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        initList() {
            this.$request.post(news.getNewsListPageUrl, this.listQuery)
                .then(res => {
                    res.data.data.list = res.data.data.list.map((item) => {
                        return {
                            ...item,
                            url: JSON.parse(item.annex).url
                        }
                    })
                    this.list = this.list.length ? this.list.concat(res.data.data.list) : res.data.data.list
                    // console.log(this.list)
                })
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
.content-area {
    display: flex;
    justify-content: space-between;

    .content-image {
        width: 444px;
        height: 254px;
        display: block;
        border-radius: 23px;
    }

    .content-p {
        width: 642px;
    }
}
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

        .content-line {
            margin: 30px 0 !important;
        }

        .party-content {
            box-sizing: border-box;
            padding: 0 40px;
            font-weight: 500;
            font-size: 24px;
            line-height: 43px;

            p {
                font-weight: 500;
                font-size: 24px;
                line-height: 43px;
                margin-top: 0;
            }

            .content-title {
                font-weight: bold;
                font-size: 28px;
                line-height: 34px;
                margin-top: 50px;
                margin-bottom: 30px;
            }
        }
    }
}
</style>