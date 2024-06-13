<!--  -->
<template>
    <div class="party">
        <div class="party-title">更多师资力量</div>
        <div class="party-line"></div>

        <div class="search-area">
            <div class="search-title">姓名搜索</div>
            <div class="search-bg" style="background-image: url('/assets/teachingStaff/searchBg.png');">
                <!-- <input type="text"> -->
            </div>
            <div class="initial-area">
                <div class="initial" v-for="item in alphabet" @click="currentInitial = item"
                :style="currentInitial == item ? `color: #FF9C00; background: rgba(23, 44, 71);` : ''">
                    {{ item }}
                </div>
            </div>
        </div>

        <TeacherList :isNomral="true" />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TeacherList from './teacherList.vue'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: { TeacherList },
    data() {
        //这里存放数据
        return {
            alphabet: [],
            currentInitial: ''
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
        var start = 'A'.charCodeAt(0); // 获取字母 A 的 Unicode 编码

        for (var i = 0; i < 26; i++) {
            this.alphabet.push(String.fromCharCode(start + i));
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

<style scoped lang="less">
.search-area {
    text-align: center;
    margin-bottom: 50px;
}

.search-title {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 50px;
}

.search-bg {
    width: 980px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    margin-bottom: 50px;
}

.initial-area {
    width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.initial {
    width: 60px;
    height: 60px;
    background: rgba(23, 44, 71, 0.12);
    font-weight: bold;
    font-size: 28px;
    border-radius: 50%;
    margin-bottom: 30px;
    text-align: center;
    line-height: 60px;
    margin-left: 20px;
    cursor: pointer;
}

.initial:first-child {
    margin-left: 0;
}
</style>