<!--  -->
<template>
    <div class="news-area">
        <div v-for="(item, index) in list" :key="item.id" class="news-box">
            <div class="news-item" @click="toDetail(item)">
                <div>
                    <t-image class="new-cover" :src="userLanguage == '1' ? item.url : item.urlEn" fit="cover" position="center" :lazy="true" />
                    <!-- <img class="new-cover" :src="userLanguage == '1' ? item.url : item.urlEn" alt=""> -->
                </div>
                <div class="news-info">
                    <div class="news-title">{{ userLanguage == '1' ? item.title : item.titleEn }}</div>
                    <div class="news-content">
                        <div>
                            {{ contentToStr(userLanguage == '1' ? item.content : item.contentEn) }}
                        </div>
                    </div>
                    <div class="btn">
                        <div>{{ userLanguage == '1' ? '了解更多' : 'Read more' }}</div>
                        <img class="rightArrow" src="../../../assets/header/rightArrow.png" alt="">
                    </div>
                </div>
            </div>
            <!-- <div class="party-line"></div> -->
        </div>

        <!-- <div class="news-mobile-box">
            <div v-for="(item, index) in list" :key="item.id" class="mobile-item">
                <div class="" :style="index % 2 !== 0 ? 'flex-direction: row-reverse;' : ''" @click="toDetail(item)">
                    <div class="news-info">
                        <div>
                            <img class="mobile-cover" :src="userLanguage == '1' ? item.url : item.urlEn" alt="">
                        </div>
                        <div class="mobile-title">{{ userLanguage == '1' ? item.title : item.titleEn }}</div>
                        <div class="mobile-content">
                            <div>
                                {{ contentToStr(userLanguage == '1' ? item.content : item.contentEn) }}
                            </div>
                        </div>

                    </div>
                    <div class="btn mobile-btn">
                        <div>{{ userLanguage == '1' ? '了解详情' : 'Learn More' }}</div>
                        <img class="rightArrow" src="../../../assets/header/rightArrow.png" alt="">
                    </div>
                </div>
                <div class="party-line"></div>
            </div>
        </div> -->
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
        list: { type: Array, default: () => [] },
    },
    filter: {

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
        contentToStr(html) {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent || div.innerText || '';
        },

        toDetail(item) {
            this.$router.push({ path: `/article?id=${item.id}` })
            window.scrollTo({
                top: 0,
                behavior: 'instant' // 可选，使用平滑滚动效果
            });
        },
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
@media (max-width: 720px) {
    .news-area {
        display: block !important;
    }

    .news-info {
        width: 100% !important;
    }

    .new-cover {
        width: 100% !important;
        height: 300px !important;
    }

    .news-item {
        margin-bottom: 60px;
    }

    .news-mobile-box {
        display: block !important;

        .mobile-title {
            width: 100%;
            font-size: 36px;
            color: #172C47;
            line-height: 56px;
            font-weight: bold;
        }

        .mobile-item {
            margin-bottom: 100px;
        }

        .party-line {
            display: none;
        }

        .mobile-btn {
            margin-top: 20px;
        }

        .mobile-content {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            height: 3em;
            line-height: 1.5em;
            color: #172C47;
            font-weight: 500;
            margin-top: 20px;

        }

    }

    .news-box {
        width: 100% !important;
    }

    .mobile-cover {
        width: 100%;
        height: 400px;
        border-radius: 10px;
    }

}

.news-box {
        width: 726px;
        // width: 100%;
    }

.news-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 100px;
}

.news-mobile-box {
    display: none;
}

.party-line {
    margin: 80px 0;
}

.news-item {
    cursor: pointer;

    .new-cover {
        width: 100%;
        height: 270px;
        border-radius: 20px;
        display: block;
    }

    .news-info {
        width: 726px;
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 50px;

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
    width: fit-content;
    height: 52px;
    background: #FF9C00;
    border-radius: 26px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    padding: 0 20px 0 40px;
    box-sizing: border-box;
}

.rightArrow {
    width: 21px;
    height: 21px;
    margin-left: 15px;
}
</style>