<!--  -->
<template>
    <div>
        <pageHeader />
        <t-image class="timgae" :src="One" :lazy="true">
            <template #loading>
                加载中
            </template>
        </t-image>
        <t-image class="timgae" :src="Two" :lazy="true">
            <template #loading>
                加载中
            </template>
        </t-image>
        <t-image class="timgae" :src="Three" :lazy="true">
            <template #loading>
                加载中
            </template>
        </t-image>
        <t-image class="timgae" :src="Four" :lazy="true">
            <template #loading>
                加载中
            </template>
        </t-image>
        <t-image class="timgae" :src="Five" :lazy="true">
            <template #loading>
                加载中
            </template>
        </t-image>
        <t-image class="timgae" :src="Six" :lazy="true">
            <template #loading>
                加载中
            </template>
        </t-image>
        <PageFooter />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import One from '../../assets/student-code-of-conduct/0.png'
import Two from '../../assets/student-code-of-conduct/1.png'
import Three from '../../assets/student-code-of-conduct/2.png'
import Four from '../../assets/student-code-of-conduct/3.png'
import Five from '../../assets/student-code-of-conduct/4.png'
import Six from '../../assets/student-code-of-conduct/5.png'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            One: One,
            Two: Two,
            Three: Three,
            Four: Four,
            Five: Five,
            Six: Six
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

<style scoped>
@media(max-width:720px) {
    .timgae {
        width: 100% !important;
    }
}

.timgae {
    width: 1400px;
    margin: 0 auto;
}
</style>