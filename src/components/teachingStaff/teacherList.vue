<!--  -->
<template>
    <div class="teacher-list-area">
        <div class="firstName">A</div>
        <div class="teacher-list">
            <div class="teacher-item">
                <div class="teacher-img">
                    <img src="../../../assets/teachingStaff/teacherimg.png" alt="">
                </div>
                <div class="teacher-info">
                    <div class="teacher-name">潘定</div>
                    <div class="teacher-position">教授</div>
                    <div class="teacher-project">暨南大学新加坡MBA项目</div>
                    <div class="teacher-line"></div>
                    <div class="teacher-class">创业融资</div>
                    <div class="teacher-class">中国的法律与制度环境</div>
                </div>
            </div>
            <div class="teacher-item">
                <div class="teacher-img">
                    <img src="../../../assets/teachingStaff/teacherimg.png" alt="">
                </div>
                <div class="teacher-info">
                    <div class="teacher-name">潘定</div>
                    <div class="teacher-position">教授</div>
                    <div class="teacher-project">暨南大学新加坡MBA项目</div>
                    <div class="teacher-line"></div>
                    <div class="teacher-class">创业融资</div>
                    <div class="teacher-class">中国的法律与制度环境</div>
                </div>
            </div>
            <div class="teacher-item">
                <div class="teacher-img">
                    <img src="../../../assets/teachingStaff/teacherimg.png" alt="">
                </div>
                <div class="teacher-info">
                    <div class="teacher-name">潘定</div>
                    <div class="teacher-position">教授</div>
                    <div class="teacher-project">暨南大学新加坡MBA项目</div>
                    <div class="teacher-line"></div>
                    <div class="teacher-class">创业融资</div>
                    <div class="teacher-class">中国的法律与制度环境</div>
                </div>
            </div>
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
.teacher-list-area {

    .teacher-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }


    .firstName {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 30px;
    }

    .teacher-item {
        width: 560px;
        display: flex;
        margin-bottom: 40px;

        .teacher-img img {
            width: 260px;
            height: 360px;
        }

        .teacher-info {
            padding: 45px 0 0 20px;
            font-size: 24px;

            .teacher-name {
                font-weight: bold;
                font-size: 32px;
            }

            .teacher-line {
                width: 44px;
                height: 2px;
                background-color: #FF9C00;
            }

            div {
                margin-bottom: 30px;
            }
        }
    }
}
</style>