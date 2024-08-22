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
                        <div class="teacher-name">{{ userLanguage == '1' ? teacher.name : teacher.nameEn }}</div>
                        <div class="teacher-position">{{ userLanguage == '1' ? teacher.professional : teacher.professionalEn }}</div>
                        <div class="teacher-project">{{ userLanguage == '1' ? teacher.project : teacher.projectEn }}</div>
                        <div class="teacher-line"></div>
                        <div class="teacher-class">{{ userLanguage == '1' ? teacher.major : teacher.majorEn }}</div>
                        <div class="teacher-class">{{ userLanguage == '1' ? teacher.speciality : teacher.specialityEn }}</div>
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
                    <div class="teacher-name">{{ userLanguage == '1' ? item.name : item.nameEn }}</div>
                    <div class="teacher-position">{{ userLanguage == '1' ? item.professional : item.professionalEn }}</div>
                    <div class="teacher-project">{{ userLanguage == '1' ? item.project : item.projectEn }}</div>
                    <div class="teacher-line"></div>
                    <div class="teacher-class">{{ userLanguage == '1' ? item.major : item.majorEn }}</div>
                    <div class="teacher-class">{{ userLanguage == '1' ? item.speciality : item.specialityEn }}</div>
                </div>
            </div>
        </div>

        <div class="noListTips" v-show="!list.length">{{ userLanguage == '1' ? '暂无搜索结果' : 'There are currently no search results available' }}</div>
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
    .teacher-list {
        display: block !important;
        width: 100% !important;
    }
}
.noListTips {
    text-align: center;
    color: #999;
    font-size: 32px;
}
.teacher-list-area {

    .teacher-list {
        display: flex;
        /* align-items: center; */
        /* justify-content: space-between; */
        flex-wrap: wrap;
        width: 120%;
        /* gap: 120px; */
    }


    .firstName {
        font-weight: bold;
        font-size: 28px;
        margin: 60px 0 30px 0;
    }

    .teacher-item {
        /* width: 560px; */
        /* flex: 1; */
        flex-basis: calc(33% - 9px);
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
            width: 240px;

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
                /* display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden; */
                /* 设置文本超出部分省略 */
                /* text-overflow: ellipsis; */
                width: 130%;
            }
        }
    }
}
</style>