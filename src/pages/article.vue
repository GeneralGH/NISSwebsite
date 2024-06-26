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
                    {{ data.title }}
                </div>
                <div class="article-author">
                    作者：{{ data.author }}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{{ dateChange(data.createTime)
                    }}
                </div>
            </div>

            <div class="article-area">
                <div class="article-content">
                    <div v-html="data.content"></div>
                    <div class="more-article">
                        <div class="more-article-itme" v-for="item in list" :key="item.id" @click="toDetail(item)">
                            <img class="more-article-itmeImg" :src="item.url" alt="">
                            <div>{{ item.title }}</div>
                        </div>
                    </div>
                </div>
                <div class="other-article-list">
                    <div class="other-article-list-title">其他新闻</div>
                    <div class="other-article-item" v-for="item in list" :key="item.id" @click="toDetail(item)">
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
            data: {
                title: '',
                content: ''
            },
            list: []
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    filter: {

    },
    //方法集合
    methods: {
        echoData(id) {
            this.$request.get(news.getNewsByIdUrl + id)
                .then(res => {
                    this.data = res.data.data
                })
        },

        initList() {
            this.$request.post(news.getNewsListPageUrl, this.listQuery)
                .then(res => {
                    res.data.data.list = res.data.data.list.map((item) => {
                        return {
                            ...item,
                            url: JSON.parse(item.annex).url
                        }
                    })
                    this.list = res.data.data.list
                })
        },

        toDetail(item) {
            window.scrollTo({
                top: 0,
                behavior: 'instant' // 可选，使用平滑滚动效果
            });
            this.echoData(item.id)
        },

        dateChange(val) {
            const date = new Date(val);

            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");

            return `${year}年${month}月${day}日`
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (!id) {
            this.$router.push({ name: 'home' });
        } else {
            this.echoData(id);
            this.initList();
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