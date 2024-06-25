<!--  -->
<template>
    <div class="teacher-list-area">
        <div v-if="isNomral" v-for="(item, index) in list">
            <div class="firstName">{{ item.first }}</div>
            <div class="teacher-list">
                <div class="teacher-item" v-for="(teacher, teacherIndex) in item.teachers">
                    <div class="teacher-img-area">
                        <t-image class="teacher-img" :src="teacher.teacherImg" fit="cover" position="center"
                            :lazy="true" />
                    </div>
                    <div class="teacher-info">
                        <div class="teacher-name">{{ teacher.name }}</div>
                        <div class="teacher-position">{{ teacher.professional }}</div>
                        <div class="teacher-project">{{ teacher.project }}</div>
                        <div class="teacher-line"></div>
                        <div class="teacher-class">{{ teacher.major }}</div>
                        <div class="teacher-class">{{ teacher.speciality }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="teacher-list" v-if="!isNomral">
            <div class="teacher-item" v-for="(item, index) in list">
                <div class="teacher-img-area">
                    <t-image class="teacher-img" :src="item.teacherImg" fit="cover" position="center" :lazy="true" />
                </div>
                <div class="teacher-info">
                    <div class="teacher-name">{{ item.name }}</div>
                    <div class="teacher-position">{{ item.professional }}</div>
                    <div class="teacher-project">{{ item.project }}</div>
                    <div class="teacher-line"></div>
                    <div class="teacher-class">{{ item.major }}</div>
                    <div class="teacher-class">{{ item.speciality }}</div>
                </div>
            </div>
        </div>

        <div class="noListTips" v-show="!list.length">暂无搜索结果</div>
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
        isNomral: { type: Boolean, default: false }
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
.noListTips {
    text-align: center;
    color: #999;
    font-size: 32px;
}
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
        margin: 60px 0 30px 0;
    }

    .teacher-item {
        width: 560px;
        height: 360px;
        display: flex;
        margin-bottom: 52px;

        .teacher-img-area .teacher-img {
            width: 260px;
            height: 100%;
            border-radius: 20px;
        }

        .teacher-info {
            padding: 0 0 0 25px;
            font-size: 24px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            /* height: 100%; */

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
                margin-top: 23px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                /* 设置文本超出部分省略 */
                text-overflow: ellipsis;
            }
        }
    }
}
</style>