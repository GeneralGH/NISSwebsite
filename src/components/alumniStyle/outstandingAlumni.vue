<!--  -->
<template>
    <div class="alumni-list">
        <div class="alumni-item">
            <div class="alumni-img" style="background-image: url('../../../assets/teachingStaff/teacherimg.png');">
                <div class="alumni-title">暨南大学校友会成员</div>
            </div>
            <div class="alumni-name">苏炳添</div>
            <div class="alumni-position">中国男子短跑运动员</div>
        </div>
        <div class="alumni-item">
            <div class="alumni-img" style="background-image: url('../../../assets/teachingStaff/teacherimg.png');">
                <div class="alumni-title">暨南大学校友会成员</div>
            </div>
            <div class="alumni-name">苏炳添</div>
            <div class="alumni-position">中国男子短跑运动员</div>
        </div>
        <div class="alumni-item">
            <div class="alumni-img" style="background-image: url('../../../assets/teachingStaff/teacherimg.png');">
                <div class="alumni-title">暨南大学校友会成员</div>
            </div>
            <div class="alumni-name">苏炳添</div>
            <div class="alumni-position">中国男子短跑运动员</div>
        </div>
        <div class="alumni-item">
            <div class="alumni-img" style="background-image: url('../../../assets/teachingStaff/teacherimg.png');">
                <div class="alumni-title">暨南大学校友会成员</div>
            </div>
            <div class="alumni-name">苏炳添</div>
            <div class="alumni-position">中国男子短跑运动员</div>
        </div>
        <div class="alumni-item">
            <div class="alumni-img" style="background-image: url('../../../assets/teachingStaff/teacherimg.png');">
                <div class="alumni-title">暨南大学校友会成员</div>
            </div>
            <div class="alumni-name">苏炳添</div>
            <div class="alumni-position">中国男子短跑运动员</div>
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

<style scoped lang="less">
.alumni-list {
    display: flex;
    gap: 29px;
    flex-wrap: wrap;

    .alumni-item {
        width: 354px;
        margin-bottom: 40px;

        .alumni-img {
            width: 100%;
            height: 472px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;

            .alumni-title {
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                height: 60px;
                background: rgba(23, 44, 71, 0.86);
                border-radius: 0px 0px 24px 24px;
                font-weight: 500;
                font-size: 24px;
                color: #FFFFFF;
                line-height: 60px;
            }
        }

        .alumni-name {
            font-weight: 500;
            font-size: 32px;
            line-height: 42px;
            margin: 20px 0 10px 0;
        }

        .alumni-position {
            font-weight: 500;
            font-size: 24px;
            line-height: 42px;
        }
    }
}
</style>