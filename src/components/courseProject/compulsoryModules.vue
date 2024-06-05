<!--  -->
<template>
    <div>
        <div class="content-item">
            <div class="title">必修模块</div>
            <div class="line"></div>
            <div class="info-content" style="margin-top: 60px;">
                <div>必修模块的课程在第一学年完成，包括方法论基础、管理核心课程和中国国情课程等。</div>
                <div class="module-card-list">
                    <div class="module-card" v-for="item in oneCardList">
                        <div class="card-name">{{ item.name }}</div>
                        <div v-for="child in item.list" class="card-info-list">
                            <img src="../../../assets/courseProjects/right.png" alt="">
                            <div>{{ child }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-item">
            <div class="title">选修模块</div>
            <div class="line"></div>
            <div class="info-content" style="margin-top: 60px;">
                <div>6大模块，28门选修课，学生可以根据自己的兴趣进行深入研究，探索更多领域的知识。</div>
                <div class="module-card-list">
                    <div class="module-card" v-for="item in twoCardList">
                        <div class="card-name">{{ item.name }}</div>
                        <div v-for="child in item.list" class="card-info-list">
                            <img src="../../../assets/courseProjects/right.png" alt="">
                            <div>{{ child }}</div>
                        </div>
                    </div>
                </div>
                <div class="item-footer">* 课程可调整，以实际课程安排为准</div>
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
            oneCardList: [
                {
                    name: '职能模块',
                    list: ['营销管理', '人力资源管理与开发', '运营管理', '公司理财', '商务英语']
                },
                {
                    name: '分析模块',
                    list: ['管理经济学', '会计学', '数据模型与决策', '论文写作与学术规范']
                },
                {
                    name: '领导力模块',
                    list: ['企业伦理', '组织行为学', '战略管理', '公司治理', '四海讲堂']
                },
                {
                    name: '中国情景模块',
                    list: ['中国概况', '中国的法律与制度环境']
                }
            ],
            twoCardList: [
                {
                    name: '综合管理模块',
                    list: ['领导力与组织行为', '管理咨询', '决策模拟', '商业谈判', '管理沟通']
                },
                {
                    name: '创新创业模块',
                    list: ['创业融资', '新创企业成长战略', '商业模式与企业设计', '商业诊断实践', '创业团队管理']
                },
                {
                    name: '资本运营模块',
                    list: ['股权激励与设计', '中国金融市场与投资策略', '风险投资管理', '公司兼并收购与重组']
                },
                {
                    name: '营销管理模块',
                    list: ['电子商务与零售策略', '战略品牌管理', '市场研究', '服务营销', '营销模拟与诊断']
                },
                {
                    name: '运营管理模块',
                    list: ['国际贸易与全球供应链管理', '项目管理', '质量管理', '采购管理', '收益管理']
                },
                {
                    name: '整合实践模块',
                    list: ['产业升级与创新', '人工智能商业应用', '科技金融', '大数据分析与预测决策']
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
@import url('./index.css');

.module-card-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
}

.item-footer {
    font-weight: 300;
    font-size: 16px;
    color: #172C47;
}

.module-card {
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 27px 0 20px 30px;
}

.card-name {
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    color: #172C47;
    margin-bottom: 15px;
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
</style>