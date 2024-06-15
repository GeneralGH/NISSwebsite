<!--  -->
<template>
    <div>
        <div v-for="(item, index) in list" :key="item.id">
            <div class="news-item" :style="index % 2 !== 0 ? 'flex-direction: row-reverse;' : ''" @click="toDetail(item)">
                <div class="news-info">
                    <div class="news-title">{{ item.title }}</div>
                    <div class="news-content">
                        <div>
                            {{ contentToStr(item.content) }}
                        </div>
                    </div>
                    <div class="btn">
                        <div>了解更多</div>
                        <img class="rightArrow" src="../../../assets/header/rightArrow.png" alt="">
                    </div>
                </div>
                <div>
                    <img class="new-cover" :src="item.url" alt="">
                </div>
            </div>
            <div class="party-line"></div>
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

        };
    },
    props: {
        list: { type: Array, default: () => [] }
    },
    filter: {

    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        contentToStr(html) {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent || div.innerText || '';
        },

        toDetail(item) {
            this.$router.push({ name: 'article', params: { id: item.id } })
        }
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
.party-line {
    margin: 80px 0;
}

.news-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .new-cover {
        width: 354px;
        height: 270px;
        border-radius: 20px;
        display: block;
    }

    .news-info {
        width: 726px;
        height: 272px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .news-title {
            font-weight: bold;
            font-size: 28px;
            line-height: 38px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .news-content {
            font-weight: 500;
            font-size: 24px;
            line-height: 43px;
            height: 112px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            div {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
            }
        }
    }
}

.btn {
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
}
</style>