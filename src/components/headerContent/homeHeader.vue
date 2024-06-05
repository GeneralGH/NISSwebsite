<!--  -->
<template>
    <div class="content-area">
        <div class="title">
            暨南大学<br>新加坡<br>中文MBA项目
        </div>
        <div class="sub-title">
            2024年秋季申请开放中
        </div>
        <div class="btn">
            <div>了解更多</div>
            <img class="rightArrow" src="../../../assets/header/rightArrow.png" alt="">
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
.content-area {
    margin-left: 360px;
    margin-top: 110px;
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
</style>