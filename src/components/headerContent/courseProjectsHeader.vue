<!--  -->
<template>
    <div class="content-area">
        <t-image class="content-img" :src="imgUrl.url" fit="cover" position="center" :lazy="true" @click="jump" />
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
        imgUrl: { type: Object, default: ()=> {} }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        'imgUrl' (val) {
            val.url = JSON.parse(val.url).url
            val.targetUrl = JSON.parse(val.targetUrl)
        }
    },
    //方法集合
    methods: {
        jump() {
            let targetUrl = this.imgUrl.targetUrl
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
    height: 620px;
    margin: 0 auto;
}

.content-img {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>