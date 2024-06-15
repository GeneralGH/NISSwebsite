<!--  -->
<template>
    <div>
        <pageHeader />
        <div class="page-area">
            <div class="path-list">
                <span class="upPath">校友风采 / </span>
                <span>校友动态</span>
            </div>

            <div class="article-info">
                <div class="article-title">
                    <!-- {{ data.title }} -->
                </div>
                <div class="article-author">
                    作者：常春&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2024年06月29日
                </div>
            </div>

            <div class="article-area">
                <div class="article-content">
                    <div v-html="content"></div>
                    <div class="more-article">
                        <div class="more-article-itme" v-for="item in list" :key="item.id">
                            <img class="more-article-itmeImg" :src="item.url" alt="">
                            <div>{{ item.title }}</div>
                        </div>
                    </div>
                </div>
                <div class="other-article-list">
                    <div class="other-article-list-title">其他新闻</div>
                    <div class="other-article-item" v-for="item in list" :key="item.id">
                        <div class="other-article-item-content">{{ item.title }}</div>
                    </div>
                </div>
            </div>
        </div>
        <PageFooter />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import news from '../api/news';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            listQuery: {
                current: 1,
                size: 2,
                type: 1
            },
            data: {},
            list: [],
            content: '<h4></h4><p><img src="http://123.60.184.219:8060/profile/upload/2024/06/15/contentOne_20240615180810A011.png" alt="contentOne.png" data-href="" style="width: 100%;"/></p><h4><span style="color: rgb(0, 0, 0); font-size: 16px;">01 / 大学毕业，走上技术发展的职业路径</span></h4><p><span style="color: rgb(0, 0, 0); font-size: 16px;"><em><strong>我大学的专业是计算机科学与技术，2009年开始工作，第一份工作是做销售，干了几个月没有业绩，无奈只好放弃。然后在老家烟台富士康找了一份工程师的工作，由此开始了我一直以来偏向技术方向的职业之路。</strong></em></span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;"><em><strong>在富士康前两年做的是负责电脑产品的检测工程师和产品工程师，后半段时间2011年到2013年初，调换部门去了负责某日本游戏机产品的事业群，带领团队负责一个返品维修的项目。从零开始讨论需求、规划产线、指定SOP、人员教育训练等，最终完成项目，成本和产能方面击败国内另外两个代工厂的团队，为公司赢得了订单。</strong></em></span></p><h4><span style="color: rgb(0, 0, 0); font-size: 16px;">02 / 三十岁转行，由传统IT转向云服务</span></h4><p><span style="color: rgb(0, 0, 0); font-size: 16px;">2013年我来到新加坡发展，开始从事IT方面的工作。一直到2017年，我做的都是传统的IT支持、服务交付方面。2017年我正好30岁，开始思考未来生活和职业的规划。我所从事的传统IT支持服务的工作，发展已经看到了天花板。如果继续待在这条路上，真正技术上的提升肉眼可见，剩下能做的只有熬资历了。我必须要转换方向。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">经过大半年的思考，我决定转行云服务这个方向。为此我分析了自己的实际情况、拥有的可支配时间和新赛道的切入口，制定了相对详细的计划，包含具体要自学的课程和阶段性要达成的目标。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">目前，我已经完成了当初设定的目标。2018年3月，我进入一家互联网公司，开始从最基本的运维工程师做起，2020年我拿到云原生技术方面的一个中级认证(CKA)，同年12月换工作到现在的这间AR相关的创业公司，做高级运维开发工程师。2021年我又拿到领域内最高级的安全方面的认证（CKS），进一步提升了自己的技术能力。现在我负责公司的云架构设计、网络、容器安全和DevOps环境等方面。</span></p><h4><span style="color: rgb(0, 0, 0); font-size: 16px;">03 / 保持好奇心，不想停下来</span></h4><p><span style="color: rgb(0, 0, 0); font-size: 16px;">多年来我经常问自己，当初第一份销售的工作为什么会失败，为什么几个月的时间里从未搞定一笔订单？为什么同为毕业生初入职场，我和其他年轻人在那一方面的差距那么大？我出生成长于中国北方沿海二线城市，老家的村子处于城乡结合部。如果简单思考第一份工作失败的原因，应该是从小身边的亲戚朋友，都没有做生意的或在成体系大公司工作的经验，我自身的生活学习经历也没有学到有关商业、经济、金融的知识。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">近年来的工作生活里，我的专业技能方面不断提升，也有了一些管理方面的体会，但是我心底越来越清晰地认识到一个事实：我的整个知识技能体系中，有一个方向基本是一片空白，那就是有关商业、经济、金融方面。除了从功利实用的角度之外，我本身对那片不了解的风景也充满了好奇心。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">日常生活中新币对人民币汇率的变化，受多少因素的影响？俄乌战争带来众多不确定性，在多长时间后会在多少领域影响中国产业链的多少方面呢？中国各互联网大厂今年裁员热，是由于公司本身运营方面的原因，还是只是在借势优化……我非常渴望透过各种浮光掠影，去看清背后本质的脉络。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">我希望自己可以获得成长，至少可以看得懂、看得清一些公司或其他主体某个行为背后的逻辑。立足于眼前的话，对当前服务的公司，我希望自己在负责的领域，可以更有能力帮助公司做出正确的决策。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">另外，和很多底层出身的人一样，压力与挣扎，是我过去三十多年的主旋律。最近一年，是难得的我跑赢了生活，感觉可以稍微松一口气的一段时间。可是学习如逆水行舟，生活也是。躺会儿安稳地生活，这没什么不好，但这暂时还不是我度过我的时间的方式。</span></p><h4><span style="color: rgb(0, 0, 0); font-size: 16px;">04 / 攻读MBA，路漫漫其修远</span></h4><p><span style="color: rgb(0, 0, 0); font-size: 16px;">偶然的机会，我了解到暨南大学新加坡MBA项目。咨询过项目负责的老师后，暨南大学系统的MBA课程设计和专业的师资力量给我留下了深刻印象。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">从职业发展的角度，学习MBA的课程，对我增加管理经验、了解商业运作的规律等方面，是十分必要的。我也希望通过学习，可以解答一些心中的疑惑，并将我的一些“土法炼钢”总结出的经验，系统地提升至专业的水准。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">有时候一个人越擅长什么，他就会越依赖什么，久而久之思维模式逐渐固化，一叶障目不见泰山。我希望通过暨南大学MBA的学习，可以打破我技术向思维的惯性，拓宽我思维的宽度，让我有机会看到人生不一样的风景。</span></p><p><span style="color: rgb(0, 0, 0); font-size: 16px;">对于接下来的两年，我充满了兴奋和期待。相信这两年的时间，将会是我生命中极其重要的两年。</span></p>'
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        echoData(id) {
            console.log(id)
            this.$request.get(news.getNewsByIdUrl + id)
            .then(res => {
                this.data = res.data.data
            })
        },

        initList() {
            this.$request.post(news.getNewsListPageUrl, this.listQuery)
            .then(res => {
                res.data.data.list = res.data.data.list.map((item) => { return {
                    ...item,
                    url: JSON.parse(item.annex).url
                } })
                console.log(res.data.data.list)
                this.list = res.data.data.list
                // console.log(this.list)
            })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        if (!this.$route.params.id) {
            this.$router.push({ name: 'home' })
        } else {
            this.echoData(this.$route.params.id)
            this.initList()
        }

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
    padding: 30px 0 160px 0;
}

.path-list {
    font-size: 20px;
    color: #172C47;
    height: 43px;
    line-height: 43px;
    margin-bottom: 38px;
}

.upPath {
    font-weight: bold;
}

.article-info {
    margin-bottom: 36px;
}

.article-title {
    font-weight: 600;
    font-size: 54px;
    color: #172C47;
    line-height: 76px;
}

.article-author {
    height: 97px;
    line-height: 97px;
    font-size: 20px;
    color: #172C47;
    font-weight: bold;
    border-bottom: 2px solid rgba(3, 73, 158, 0.11);
}

.article-area {
    display: flex;
    justify-content: space-between;
}

.article-content {
    width: 814px;
}

.more-article {
    display: flex;
    justify-content: space-between;
    margin-top: 160px;
    margin-bottom: 160px;
}

.more-article-itme {
    width: 390px;
    font-weight: bold;
    font-size: 24px;
    color: #172C47;
    line-height: 38px;
    cursor: pointer;
}

.more-article-itme:hover {
    color: #03499E;
}

.more-article-itmeImg {
    width: 100%;
    height: 270px;
    border-radius: 24px;
    margin-bottom: 30px;
}

.other-article-list {
    width: 350px;
    font-weight: bold;
    font-size: 24px;
    color: #172C47;
    line-height: 40px;
}

.other-article-list-title {
    margin-bottom: 8px;
}

.other-article-item {
    width: 100%;
    height: 125px;
    border-radius: 8px;
    border: 1px solid rgba(23, 44, 71, 0.2);
    font-weight: bold;
    font-size: 18px;
    color: #172C47;
    line-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 15px 18px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #fff;
    position: relative;
}

.other-article-item:hover::before {
    content: '';
    position: absolute;
    top: -3.5px;
    left: -3px;
    right: -3px;
    bottom: -3.5px;
    z-index: -1;
    background-image: repeating-linear-gradient(125deg, #FF9C00, #FFCC9E, #74B6EB 80%, #68AAEC, #04499F);
    border-radius: 8px;
    outline: 2px solid transparent;
    outline-offset: -2px;
}

.other-article-item-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /*省略几行写几*/
    -webkit-box-orient: vertical;
}
</style>