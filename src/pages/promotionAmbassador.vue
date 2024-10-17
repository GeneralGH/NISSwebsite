<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="page-area">
            <div class="article-info">
                <div class="article-title">
                    {{ userLanguage == "1" ? '宣传大使' : 'Contact Us' }}
                </div>
            </div>
            <div class="party-line"></div>
            <div class="party-content">
                <div class="list">
                    <div class="item">
                        <div style="display: flex; justify-content: space-between; height: 100%;">
                            <div class="left">
                                <div class="title">Ahamed Jameel</div>
                                <div class="content">
                                    在新国大获得电子工程学士学位后,我担任了9年的航空工程军官。我计划向私营部门转型，我需要找到能补充我技术背景的理学硕士课程，于是我发现了ISE理学硕士课程，该课程磨练了我的管理技能。从ISE理学硕士学位毕业后，我进入了航空航天和国防工业的管理岗位。
                                </div>
                                <div class="concact">联系方式：xxxxxxxxxxxxx</div>
                            </div>

                            <div style="display: flex; align-items: center;">
                                <t-image class="item-img"
                                    src="http://123.60.184.219:8060/profile/upload/2024/08/26/陈鹏-_20240826165711A041.jpg"
                                    shape="circle" fit="cover" />
                            </div>
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
                page: 1,
                size: 1000
            },
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
                    this.list = res.data.records
                })
        },
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
/deep/ .page-area {
    width: 1650px;
    margin: 0 auto;
    padding: 30px 0 160px 0;
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
    .item {
        border-radius: 20px;
        width: 1200px;
        height: 450px;
        background: #03499e;
        margin-bottom: 40px;
        padding: 30px 40px;
        box-sizing: border-box;
        color: white;
        margin: 0 auto;

        .title {
            font-size: 52px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        .content {
            font-size: 26px;
            text-align: justify;
        }

        .item-img {
            width: 300px;
            height: 300px;
            margin-left: 60px;
        }

        .left {
            position: relative;
        }

        .concact {
            position: absolute;
            bottom: 0;
            font-size: 24px;
        }
    }
}
</style>