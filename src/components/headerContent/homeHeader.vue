<!--  -->
<template>
    <div class="content-area">
        <t-swiper :duration="300" :interval="2000" :navigation="{ size: 'large' }">
            <t-swiper-item v-for="item in list" :key="item.id">
                <div class="swiper-item" @click="jump(item)">
                    <t-image class="swiper-img" :src="item.previewImgUrl" fit="cover" position="center" :lazy="true" />
                </div>
            </t-swiper-item>
        </t-swiper>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import banner from '../../api/banner'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            list: [],
            listQuery: {
                current: 1,
                size: 50,
                isShow: 1
            }
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        initList() {
            this.$request.post(banner.getBannerListPageUrl, this.listQuery)
                .then(res => {
                    this.list = res.data.data.list.map((item) => { return { ...item, delShow: false, imgViewShow: false, previewImgUrl: JSON.parse(item.imageUrl).url } })
                    // console.log(this.list)
                })
        },

        jump(item) {
            let targetUrl = JSON.parse(item.targetUrl)
            if (targetUrl.type == 1) {
                this.$router.push(targetUrl.value)
            }
            if (targetUrl.type == 2) {
                this.$router.push({ name: 'courseProjects', params: { anchor: targetUrl.value } })
            }
            if (targetUrl.type == 3) {
                this.$router.push({ path: `/article?id=${targetUrl.value}` });
            }
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        if (this.$route.path == '/') {
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

<style scoped>
.content-area {
    height: 900px;
    margin: 0 auto;
}

.swiper-img {
    height: 900px;
}

.title {
    font-size: 78px;
    font-weight: bold;
    color: white;
}

.sub-title {
    font-size: 29px;
    color: #FF9C00;
    margin-top: 30px;
}

.btn {
    margin-top: 100px;
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

.swiper-item {
    cursor: pointer;
}
</style>