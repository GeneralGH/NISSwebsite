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
                    暨南大学新加坡中文MBA项目2022级新生专访孙声旭：保持好奇心，不想停下来
                </div>
                <div class="article-author">
                    作者：常春&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;2024年06月29日
                </div>
            </div>

            <div class="article-area">
                <div class="article-content">
                    <div></div>
                    <div class="more-article">
                        <div class="more-article-itme">
                            <img class="more-article-itmeImg" src="../../assets/home/contentOne.png" alt="">
                            <div>暨南大学管理学院黎文靖院长一行到访南洋社会科学学院</div>
                        </div>
                        <div class="more-article-itme">
                            <img class="more-article-itmeImg" src="../../assets/home/contentOne.png" alt="">
                            <div>暨南大学管理学院黎文靖院长一行到访南洋社会科学学院</div>
                        </div>
                    </div>
                </div>
                <div class="other-article-list">
                    <div class="other-article-list-title">其他新闻</div>
                    <div class="other-article-item">
                        <div class="other-article-item-content">暨南大学新加坡中文MBA项目学生专访 | 张亚男：人到中年，带着焦虑，向上生长</div>
                    </div>
                    <div class="other-article-item">
                        <div class="other-article-item-content">暨南大学新加坡中文MBA项目学生专访 | 张亚男：人到中年，带着焦虑，向上生长</div>
                    </div>
                    <div class="other-article-item">
                        <div class="other-article-item-content">暨南大学新加坡中文MBA项目学生专访 | 张亚男：人到中年，带着焦虑，向上生长</div>
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

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {

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
        console.log(this.$route.params)
        if (!this.$route.params.id) {
            this.$router.push({ name: 'home' })
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
    margin-top: 60px;
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